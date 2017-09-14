const diTools = require('lab-di/tools')();
const path = require('path');

const di = diTools.getDI();
di.registerModule(require('lab-config'), 'config');
di.registerModule(require('lab-config/implementations/memory'), 'config-memory');
di.registerModule(require('lab-config/implementations/file'), 'config-file');

diTools.registerDir(path.resolve(__dirname, 'services/internal'));
diTools.registerDir(path.resolve(__dirname, 'services/external'));

export default di;
