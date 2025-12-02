var APP_DATA = {
  "scenes": [
    {
      "id": "0-artos-tour-start",
      "name": "ARTOS Tour Start",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 2.7441805516456075,
        "pitch": 0.20384237049059983,
        "fov": 1.303246018441174
      },
      "linkHotspots": [
        {
          "yaw": 2.433496853267192,
          "pitch": 0.2061485259584277,
          "rotation": 0,
          "target": "1-towards-artos-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-towards-artos-",
      "name": "Towards ARTOS ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.201783499689993,
          "pitch": 0.25258714224363743,
          "rotation": 0,
          "target": "2-towards-artos---2nd-stop"
        },
        {
          "yaw": -1.0360406564986455,
          "pitch": 0.3583020169586444,
          "rotation": 0,
          "target": "0-artos-tour-start"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-towards-artos---2nd-stop",
      "name": "Towards ARTOS - 2nd stop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3572605842152434,
          "pitch": 0.41543422311116096,
          "rotation": 0,
          "target": "3-artos-house-entrance"
        },
        {
          "yaw": -2.3289026196792086,
          "pitch": 0.2676640742607539,
          "rotation": 0,
          "target": "1-towards-artos-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-artos-house-entrance",
      "name": "ARTOS House Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8775858638064964,
          "pitch": 0.5310844071169178,
          "rotation": 0,
          "target": "2-towards-artos---2nd-stop"
        },
        {
          "yaw": 2.3330008948134164,
          "pitch": 0.4482059853256679,
          "rotation": 0,
          "target": "4-to-the-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-to-the-courtyard",
      "name": "To the courtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8314313705391925,
          "pitch": 0.3827559891771344,
          "rotation": 0,
          "target": "3-artos-house-entrance"
        },
        {
          "yaw": 1.758181328109818,
          "pitch": 0.30880545765251277,
          "rotation": 0,
          "target": "5-to-the-multipurpose-room--makrynari"
        },
        {
          "yaw": -2.9048617318899286,
          "pitch": 0.287531790856848,
          "rotation": 0,
          "target": "6-to-the-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-to-the-multipurpose-room--makrynari",
      "name": "To the Multipurpose room / Makrynari",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3753340083825787,
          "pitch": 0.25387739883850813,
          "rotation": 0,
          "target": "6-to-the-terrace"
        },
        {
          "yaw": -0.6125284639935984,
          "pitch": 0.7421047743767435,
          "rotation": 0,
          "target": "4-to-the-courtyard"
        },
        {
          "yaw": -0.6765402322391925,
          "pitch": 0.17898975232985492,
          "rotation": 0,
          "target": "3-artos-house-entrance"
        },
        {
          "yaw": 0.830214368422153,
          "pitch": 0.2193499852561942,
          "rotation": 0,
          "target": "14-multipurpose-room--makrynari"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-to-the-terrace",
      "name": "To The Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.874245291813759,
          "pitch": 0.5377766907367949,
          "rotation": 0,
          "target": "10-the-astro-club-canteen"
        },
        {
          "yaw": -2.431705147180544,
          "pitch": -0.23838182951470976,
          "rotation": 0,
          "target": "7-terrace-entrance"
        },
        {
          "yaw": 2.276404896994073,
          "pitch": 0.31391397831975887,
          "rotation": 0,
          "target": "5-to-the-multipurpose-room--makrynari"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-terrace-entrance",
      "name": "Terrace Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5068549817143584,
          "pitch": 0.6066332505059222,
          "rotation": 0,
          "target": "6-to-the-terrace"
        },
        {
          "yaw": -2.901945834611496,
          "pitch": 0.05033897403187737,
          "rotation": 0,
          "target": "8-artos-courtyard-from-atop"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-artos-courtyard-from-atop",
      "name": "ARTOS courtyard from atop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8296031320759187,
          "pitch": 0.17583484400735472,
          "rotation": 0,
          "target": "9-screenings-area"
        },
        {
          "yaw": 1.6867954939792007,
          "pitch": 0.34360696842808913,
          "rotation": 0,
          "target": "7-terrace-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-screenings-area",
      "name": "Screenings area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9194572917123454,
          "pitch": 0.42312691205678554,
          "rotation": 0,
          "target": "8-artos-courtyard-from-atop"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-the-astro-club-canteen",
      "name": "The Astro Club canteen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9068567084604311,
          "pitch": 0.21221785817181527,
          "rotation": 0,
          "target": "6-to-the-terrace"
        },
        {
          "yaw": 1.4560984487847328,
          "pitch": 0.538395763776025,
          "rotation": 0,
          "target": "21-to-the-courtyard"
        },
        {
          "yaw": 0.45500443118967837,
          "pitch": 0.09495585451283262,
          "rotation": 0,
          "target": "4-to-the-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-artos-entrance-corridor",
      "name": "ARTOS entrance corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7030553302568538,
          "pitch": 0.3040120981578607,
          "rotation": 0,
          "target": "15-second-entrance-to-multipurpose-room--makrynari"
        },
        {
          "yaw": 2.0000915898121168,
          "pitch": 0.20375340195674596,
          "rotation": 0,
          "target": "12-courtyard"
        },
        {
          "yaw": 2.4158888525849616,
          "pitch": 0.3070333761988504,
          "rotation": 0,
          "target": "16--auditorium-foyer--mikrofournos-entrance"
        },
        {
          "yaw": -0.8743942022518478,
          "pitch": 0.29159370594345724,
          "rotation": 0,
          "target": "14-multipurpose-room--makrynari"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-courtyard",
      "name": "Courtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14756572635053722,
          "pitch": 0.41122762763926346,
          "rotation": 0,
          "target": "15-second-entrance-to-multipurpose-room--makrynari"
        },
        {
          "yaw": -2.6367821973423275,
          "pitch": 0.4982043554580198,
          "rotation": 0,
          "target": "16--auditorium-foyer--mikrofournos-entrance"
        },
        {
          "yaw": 2.1708916800873572,
          "pitch": 0.262744793460989,
          "rotation": 0,
          "target": "13-auditorium--fournos-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-auditorium--fournos-entrance",
      "name": "Auditorium / Fournos entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1537447167498964,
          "pitch": 0.27908049935216184,
          "rotation": 0,
          "target": "16--auditorium-foyer--mikrofournos-entrance"
        },
        {
          "yaw": -0.634363348653606,
          "pitch": 0.24891438546142552,
          "rotation": 0,
          "target": "15-second-entrance-to-multipurpose-room--makrynari"
        },
        {
          "yaw": -0.8492269448739656,
          "pitch": 0.6447565678886811,
          "rotation": 0,
          "target": "12-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-multipurpose-room--makrynari",
      "name": "Multipurpose room / Makrynari",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.372309947829363,
          "pitch": 0.2579911568158817,
          "rotation": 0,
          "target": "21-to-the-courtyard"
        },
        {
          "yaw": 1.376169500014278,
          "pitch": 0.24535418990473268,
          "rotation": 0,
          "target": "15-second-entrance-to-multipurpose-room--makrynari"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-second-entrance-to-multipurpose-room--makrynari",
      "name": "Second entrance to Multipurpose room / Makrynari",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.014453737933584,
          "pitch": 0.474993801095124,
          "rotation": 0,
          "target": "14-multipurpose-room--makrynari"
        },
        {
          "yaw": 2.0399231520636736,
          "pitch": 0.37343881120746936,
          "rotation": 0,
          "target": "12-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16--auditorium-foyer--mikrofournos-entrance",
      "name": " Auditorium Foyer / Mikrofournos entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6134564613919693,
          "pitch": 0.7178327553858228,
          "rotation": 0,
          "target": "12-courtyard"
        },
        {
          "yaw": 1.1951194618729737,
          "pitch": 0.5500371673593563,
          "rotation": 0,
          "target": "17-to-the-foyer--mikrofournos-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-to-the-foyer--mikrofournos-",
      "name": "To the Foyer / Mikrofournos ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.00364121942032,
          "pitch": 0.33702519616055326,
          "rotation": 0,
          "target": "16--auditorium-foyer--mikrofournos-entrance"
        },
        {
          "yaw": -1.246004466015851,
          "pitch": 0.3005748662547649,
          "rotation": 0,
          "target": "18-to-the-auditorium--fournos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-to-the-auditorium--fournos",
      "name": "To the Auditorium / Fournos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.150726078317911,
          "pitch": 0.33432096402602696,
          "rotation": 0,
          "target": "19-auditorium--fournos-stage"
        },
        {
          "yaw": 2.5781639658938555,
          "pitch": 0.6024303502934103,
          "rotation": 0,
          "target": "17-to-the-foyer--mikrofournos-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-auditorium--fournos-stage",
      "name": "Auditorium / Fournos Stage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5067015699846387,
          "pitch": 0.23231456493500424,
          "rotation": 0,
          "target": "20-view-from-the-auditorium-seated-area"
        },
        {
          "yaw": -1.4208360581900266,
          "pitch": 0.2979886925284312,
          "rotation": 0,
          "target": "18-to-the-auditorium--fournos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-view-from-the-auditorium-seated-area",
      "name": "View from the Auditorium seated area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.666287945844431,
          "pitch": 0.06950764953495892,
          "rotation": 0,
          "target": "19-auditorium--fournos-stage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-to-the-courtyard",
      "name": "To the courtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9610904513938081,
          "pitch": 0.15230387895205943,
          "rotation": 0,
          "target": "4-to-the-courtyard"
        },
        {
          "yaw": -1.2221951886030258,
          "pitch": 0.6494122021022477,
          "rotation": 0,
          "target": "22-entering-the-tomb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-entering-the-tomb",
      "name": "Entering the Tomb",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1458178796879999,
          "pitch": -0.5975582180625345,
          "rotation": 0,
          "target": "21-to-the-courtyard"
        },
        {
          "yaw": 1.870523496187598,
          "pitch": 0.33197678781252726,
          "rotation": 0,
          "target": "23-first-tomb-chamber"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-first-tomb-chamber",
      "name": "First tomb chamber",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6728163901385855,
          "pitch": 0.5308416966277356,
          "rotation": 0,
          "target": "22-entering-the-tomb"
        },
        {
          "yaw": 2.489613537002164,
          "pitch": 0.6936283705259161,
          "rotation": 0,
          "target": "24-second-tomb-chamber"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-second-tomb-chamber",
      "name": "Second tomb chamber",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.952940183680008,
          "pitch": 0.42746653932115564,
          "rotation": 0,
          "target": "23-first-tomb-chamber"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
