import control from './control';
import { expect } from 'chai';

describe('Control', () => {

  it('should decrease the valve level', () => {
    const message = {value: 23};
    control.setLevel(50);
    const result = control.getValveValue(message);
    expect(result.level).to.eql(45);
  });

  it('should not be less then zero', () => {
    const message = {value: 23};
    control.setLevel(0);
    const result = control.getValveValue(message);
    expect(result.level).to.eql(0);
  });

  it('should not be more then hunderd', () => {
    const message = {value: 21};
    control.setLevel(100);
    const result = control.getValveValue(message);
    expect(result.level).to.eql(100);
  });

});
