import React from "react";
import Particles from "react-particles";

import { loadFirePreset } from "tsparticles-preset-fire";

export default function BackgroundParticles() {
  // this customizes the component tsParticles installation
  const customInit = async (engine) => {
    // this adds the preset to tsParticles, you can safely use the
    await loadFirePreset(engine);
  };

  const options = {
    preset: "fire",
  };

  return <Particles options={options} init={customInit} />;
}
