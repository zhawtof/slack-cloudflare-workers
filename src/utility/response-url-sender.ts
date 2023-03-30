import { MessageAttachment, MessageMetadata } from "@slack/types";
import { ResponseUrlError } from "../errors";
import { TypesafeBlock } from "./typesafe-blocks";

export class ResponseUrlSender {
  #responseUrl: string;

  constructor(responseUrl: string) {
    this.#responseUrl = responseUrl;
  }

  async call(params: ResponseUrlParams): Promise<Response> {
    const response = await fetch(this.#responseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(params),
    });
    const responseBody = await response.text();
    if (response.status != 200 || responseBody.toLowerCase() !== "ok") {
      throw new ResponseUrlError(response.status, responseBody);
    }
    return response;
  }
}

export interface ResponseUrlParams {
  response_type?: "ephemeral" | "in_channel";
  text: string;
  blocks?: TypesafeBlock[];
  attachments?: MessageAttachment[];
  metadata?: MessageMetadata;
}
