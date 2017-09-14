import _ from 'lodash';
import control from './control';

function Heating(broker) {
  broker.subscribe('/readings/temperature', getTemperature);

  async function getTemperature(message) {
    const valve = control.getValveValue(message);
    broker.publish('/actuators/room-1', valve);
   }
}

Heating.deps = ['broker'];

module.exports = Heating;
