import { sanitizeAuthObject } from '@clerk/backend';

import { invalidRootLoaderCallbackReturn } from '../errors';
import { authenticateRequest } from './authenticateRequest';
import type { LoaderFunctionArgs, LoaderFunctionReturn, RootAuthLoaderCallback, RootAuthLoaderOptions } from './types';
import {
  assertObject,
  injectAuthIntoRequest,
  injectRequestStateIntoResponse,
  interstitialJsonResponse,
  isRedirect,
  isResponse,
} from './utils';

interface RootAuthLoader {
  <Options extends RootAuthLoaderOptions>(
    args: LoaderFunctionArgs,
    callback: RootAuthLoaderCallback<Options>,
    options?: Options,
  ): Promise<LoaderFunctionReturn>;

  (args: LoaderFunctionArgs, options?: RootAuthLoaderOptions): Promise<LoaderFunctionReturn>;
}

export const rootAuthLoader: RootAuthLoader = async (
  args: LoaderFunctionArgs,
  handlerOrOptions: any,
  options?: any,
): Promise<LoaderFunctionReturn> => {
  const handler = typeof handlerOrOptions === 'function' ? handlerOrOptions : undefined;
  const opts: RootAuthLoaderOptions = options
    ? options
    : !!handlerOrOptions && typeof handlerOrOptions !== 'function'
    ? handlerOrOptions
    : {};

  const requestState = await authenticateRequest(args, opts);

  if (requestState.isInterstitial || requestState.isUnknown) {
    throw interstitialJsonResponse(requestState, { loader: 'root' });
  }

  if (!handler) {
    // if the user did not provide a handler, simply inject requestState into an empty response
    return injectRequestStateIntoResponse(new Response(JSON.stringify({})), requestState);
  }

  const handlerResult = await handler(injectAuthIntoRequest(args, sanitizeAuthObject(requestState.toAuth())));
  assertObject(handlerResult, invalidRootLoaderCallbackReturn);

  if (isResponse(handlerResult)) {
    try {
      // respect and pass-through any redirects without modifying them
      if (isRedirect(handlerResult)) {
        return handlerResult;
      }
      // clone and try to inject requestState into all json-like responses
      // if this fails, the user probably didn't return a json object or a valid json string
      return injectRequestStateIntoResponse(handlerResult, requestState);
    } catch (e) {
      throw new Error(invalidRootLoaderCallbackReturn);
    }
  }

  // if the user returned a plain object, simply inject requestState into an empty response
  return injectRequestStateIntoResponse(new Response(JSON.stringify({})), requestState);
};
