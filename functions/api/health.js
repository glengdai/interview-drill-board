import { json, getHealthInfo } from "./_utils.js";

export function onRequestGet(context) {
  return json(getHealthInfo(context.env));
}
