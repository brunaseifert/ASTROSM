tsParticles.load("particles-js", {
  fullScreen: { enable: false },
  background: { color: "#000000" },
  particles: {
    number: { value: 80, density: { enable: true, area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 1.5,
      random: true
    },
    links: {
      enable: false
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      outModes: "out"
    }
  },
  interactivity: {
    events: {
      onHover: { enable: false },
      resize: true
    }
  }
});
