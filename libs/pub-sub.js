export const PubSub = {
    events: {}, // Object to hold event subscriptions

    subscribe(event, callback) {
        // Create a new event array if not exists, then push the callback
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },

    publish(event, data) {
        // Execute all callbacks subscribed to the event
        if (this.events[event]) {
            this.events[event].forEach(callback => {
                callback(data);
            });
        }
    }
};
