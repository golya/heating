import _ from 'lodash';

function Sensors(broker) {

  const sensors = {};
  const rooms = {};
  const valves = {'room-1': 50}
  broker.subscribe('/actuators/room-1', setValve);

  function setValve(message) {
    const alignValve = getAlignment(message);
    const sensorId = rooms['room-1'];
    const sensor = sensors[sensorId];
    _.set(sensors, sensorId, {...sensor, value: sensor.value + alignValve});
  }

  function getAlignment(message) {
    const value = message.level;
    if (valves['room-1'] > value) {
      return -1;
    }
    if (valves['room-1'] < value) {
      return 1;
    }
    return 0;
  }

  function create({type, id, room, value}) {
    _.set(sensors, id, {sensorID: id, type, value});
    _.set(rooms, room, id);
  }

  function triggerMessage(id) {
    broker.publish('/readings/temperature', getSensorById(id))
  }

  function getSensorById(id) {
    return _.get(sensors, id);
  }

  function getValue(id) {
    return getSensorById(id).value;
  }

  return Object.freeze({
    create,
    triggerMessage,
    getValue
  });
}

Sensors.deps = ['broker'];

module.exports = Sensors;
