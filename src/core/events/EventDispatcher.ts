import { CallBackEvent, EventPayloadMap, EventType } from "./EventTypes";

type ListenerMap = {
  [T in EventType]?: CallBackEvent<T>[];
};

export class EventDispatcher {
  private listeners: ListenerMap = {};

  on<T extends EventType>(eventType: T, callback: CallBackEvent<T>) {
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = [];
    }
    this.listeners[eventType]!.push(callback);
  }

  dispatch<T extends EventType>(eventType: T, payload: EventPayloadMap[T]) {
    this.listeners[eventType]?.forEach((fn) => fn(payload));
  }
}
