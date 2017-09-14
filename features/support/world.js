import container from '../../container';

export default function() {
  this.World = World;
};

function World() {
  this.context = {};
  this.container = container;
  setupConfig(this.container.get('config'));
}

function setupConfig(config) {
  config.update('broker', 'memory');
}
