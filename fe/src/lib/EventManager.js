export default class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  on(event, listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(listener);
  }

  emit(event, payload) {
    if (!this.listeners.has(event)) {
      return;
    }

    this.listeners.get(event).forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(event, listennerToRemove) {
    const listenners = this.listeners.get(event);

    if (!listenners) {
      return;
    }

    const filteredListenners = listenners.filter(
      (listenner) => listenner !== listennerToRemove,
    );

    this.listeners.set(event, filteredListenners);
  }
}

const toastEventManager = new EventManager();

toastEventManager.on('addtoast', (payload) => {
  console.log('addToastListenner executou', payload);
});
