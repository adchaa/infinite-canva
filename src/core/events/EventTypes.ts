export enum EventType {
  KEY_DOWN = "input:key-down",
  KEY_UP = "input:key-up",
}

export interface EventPayloadMap {
  [EventType.KEY_DOWN]: { key: string; modifiers: string[] };
  [EventType.KEY_UP]: { key: string; modifiers: string[] };
}

export type CallBackEvent<T extends EventType> = (
  payload: EventPayloadMap[T],
) => void;
