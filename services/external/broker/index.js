function Broker(container) {
  const implementation = container.get('config').get(Broker.serviceName);
  return container.getImplementation(Broker.serviceName, implementation);
}

Broker.type = 'factory';
module.exports = Broker;
