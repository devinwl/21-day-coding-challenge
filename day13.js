const lightsOn = function(lights) {
  return toggleLights(lights, false);
}

const lightsOff = function(lights) {
  return toggleLights(lights, true);
}

const toggleLights = function(lights, lightsAreOn) {
  return lights.map(light => ({ ...light, on: !lightsAreOn }));
}
