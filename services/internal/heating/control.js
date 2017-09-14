function Control() {
  let currentLevel = 50;
  let idealTemperature = 22;

  function getValveValue(message) {
    let level = currentLevel;
    if (message.value > idealTemperature) {
      level = currentLevel - 5;
    }
    if (message.value < idealTemperature) {
      level = currentLevel + 5;
    }
    if (level < 0 ) {
      level = 0;
    }
    if (level > 100) {
      level = 100;
    }
    return {level};
  }

  function setLevel(level) {
    currentLevel = level;
  }

  return Object.freeze({
    getValveValue,
    setLevel
  });
}

module.exports = Control();
