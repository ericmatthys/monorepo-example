export type JSONPrimitive = boolean | number | string | null;

export type JSONValue = JSONArray | JSONObject | JSONPrimitive;

export type JSONArray = JSONValue[];

export interface JSONObject {
  [member: string]: JSONValue;
}
