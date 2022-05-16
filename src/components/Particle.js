import React from "react";
import Particles from "react-tsparticles";

// presets from https://github.com/matteobruni/tsparticles/tree/main/website/presets
function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={
        {
          "fullScreen": {
            "enable": true
          },
          "fpsLimit": 120,
          "particles": {
            "groups": {
              "z5000": {
                "number": {
                  "value": 70
                },
                "zIndex": {
                  "value": 50
                }
              },
              "z7500": {
                "number": {
                  "value": 30
                },
                "zIndex": {
                  "value": 75
                }
              },
              "z2500": {
                "number": {
                  "value": 50
                },
                "zIndex": {
                  "value": 25
                }
              },
              "z1000": {
                "number": {
                  "value": 40
                },
                "zIndex": {
                  "value": 10
                }
              }
            },
            "number": {
              "value": 200,
              "density": {
                "enable": false,
                "value_area": 800
              }
            },
            "color": {
              "value": "#fff",
              "animation": {
                "enable": false,
                "speed": 10,
                "sync": true
              }
            },
            "shape": {
              "type": "circle"
            },
            "opacity": {
              "value": 1,
              "random": false,
              "animation": {
                "enable": false,
                "speed": 3,
                "minimumValue": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 2
            },
            "links": {
              "enable": false,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.5,
              "width": 1
            },
            "move": {
              "angle": {
                "value": 10,
                "offset": 0
              },
              "enable": true,
              "speed": 1,
              "direction": "right",
              "random": true,
              "straight": false,
              "outModes": {
                "default": "out"
              },
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            },
            "zIndex": {
              "value": 5,
              "opacityRate": 0.5
            }
          },
          "interactivity": {
            "events": {
              "onHover": {
                "enable": false,
                "mode": "repulse"
              },
              "onClick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "links": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 0.8
              },
              "repulse": {
                "distance": 200
              },
              "push": {
                "quantity": 4,
                "groups": [
                  "z5000",
                  "z7500",
                  "z2500",
                  "z1000"
                ]
              },
              "remove": {
                "quantity": 1
              }
            }
          },
          "detectRetina": true,
          "background": {
            "color": "#000000",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          },
          "emitters": {
            "position": {
              "y": 55,
              "x": -5
            },
            "rate": {
              "delay": 5,
              "quantity": 1
            },
            "size": {
              "width": 0,
              "height": 0
            },
            "particles": {
              "shape": {
                  // images from https://imgur.com/a/ijzcQ7H
                  "type": "images",
                  // "options": {
                  //   "images": [
                  //     // red
                  //     {
                  //       "src": "https://i.imgur.com/EkFrVAA.png",
                  //     },

                  //     // // cyan
                  //     {
                  //       "src": "https://i.imgur.com/M9571Z7.png",
                  //     },

                  //     // green
                  //     {
                  //       "src": "https://i.imgur.com/OcGnvGG.png",
                  //     },
                  //   ]
                  // }
              },

              "size": {
                "value": {min:20, max:40},
              },

              "move": {
                "bounce": true,
                "enable": true,
                "speed": 5,
                "direction": "right",
                "random": false,
                "straight": false,
                // "out_mode": "bounce",
                "outModes": {
                  "default": "out"
                },
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              },
              "zIndex": {
                "value": 0
              },
              "rotate": {
                "value": {
                  "min": 0,
                  "max": 360
                },
                "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": true
                }
              }
            }
          }
        }
      }
    />
  );
}

export default Particle;
