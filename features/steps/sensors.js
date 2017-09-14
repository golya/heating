'use strict';

import { expect } from 'chai';

export default function () {
  this.Given(
    'a "$type" sensor "$id" in the room "$room" with value "$value"',
    async function (type, id, room, value) {
      const sensors = this.container.get('sensors');
      sensors.create({type, id, room, value: parseInt(value)});
  });

  this.Given('the heating control service is started', async function() {
    this.container.get('heating');
  });

  this.When('the "$id" triggered a message', async function(id) {
    const sensors = this.container.get('sensors');
    await sensors.triggerMessage(id);
  });

  this.Then('the "$id" value is "$value"', async function(id, value) {
    const sensors = this.container.get('sensors');
    const result = await sensors.getValue(id);
    expect(result).to.eql(parseInt(value));
  });
}
