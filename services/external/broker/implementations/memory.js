import _ from 'lodash';

function MemoryBroker() {
  const routes = {};
  async function publish(topic, message) {
    const subscribers = _.get(routes, topic, []);
    _.map(subscribers, (subscriber) => {
      try {
        subscriber(message);
      } catch (e) {
        console.log(e);
      }
    });
  }

  async function subscribe(topic, method) {
    _.set(routes, topic, [..._.get(routes, topic, []), method]);
  }

  return Object.freeze({
    publish,
    subscribe
  });
}

MemoryBroker.deps = [];

module.exports = MemoryBroker;
