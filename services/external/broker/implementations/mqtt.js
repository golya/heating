import MQTT from "async-mqtt";

function MQTTBroker(config) {

  const client = MQTT.connect(config.get('mqtt').url);

  async function publish (topic, message) {
    client.publish(topic, message);
    client.end();
  }

  return Object.freeze({
    publish,
    subscribe: client.subscribe
  });
}

MQTTBroker.deps = ['config'];

module.exports = MQTTBroker;
