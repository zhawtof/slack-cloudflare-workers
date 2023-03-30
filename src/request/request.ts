import {
  SlackAppContext,
  BeforeAuthorizeSlackAppContext,
  SlackAppContextWithRespond,
  SlackAppContextWithOptionalRespond,
} from "../context/context";
import { SlackAppEnv } from "../app-env";

export interface SlackMiddlewareRequestBase<E extends SlackAppEnv> {
  env: E;
  context: BeforeAuthorizeSlackAppContext;
  body: Record<string, any>;
  retryNum?: number;
  retryReason?: string;
  rawBody: string;
  headers: Headers;
}

export type BeforeAuthorizeSlackMiddlwareRequest<E extends SlackAppEnv> =
  SlackMiddlewareRequestBase<E> & {
    context: BeforeAuthorizeSlackAppContext;
  };

export type SlackMiddlwareRequest<E extends SlackAppEnv> =
  SlackMiddlewareRequestBase<E> & {
    context: SlackAppContext;
  };

export type SlackRequest<
  E extends SlackAppEnv,
  Payload
> = SlackMiddlwareRequest<E> & {
  payload: Payload;
};

export type SlackRequestWithRespond<
  E extends SlackAppEnv,
  Payload
> = SlackMiddlwareRequest<E> & {
  context: SlackAppContextWithRespond;
  payload: Payload;
};

export type SlackRequestWithOptionalRespond<
  E extends SlackAppEnv,
  Payload
> = SlackMiddlwareRequest<E> & {
  context: SlackAppContextWithOptionalRespond;
  payload: Payload;
};
