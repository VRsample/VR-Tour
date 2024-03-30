TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "right": {
     "levels": [
      {
       "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_r_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_r.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "id": "overlay_558E4F71_5ED2_744B_41C5_F23B4989CDC0",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_0_HS_1_0_map.gif",
           "height": 16,
           "width": 32,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": 11.75,
        "yaw": -14.7,
        "width": 60
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_0_HS_1_0.gif",
           "height": 30,
           "width": 60,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -14.7,
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": 11.75
       }
      ],
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_52E925CD_5ED1_F45A_41D7_3F025E8DD9A7, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_52E8E5CE_5ED1_F456_41A7_5F93B3ADEE50, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "FlatHotspotPanoramaOverlay"
     },
     {
      "id": "overlay_52852CA8_5ED1_D4D9_41D7_681D49FCD424",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 10.92,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_0_HS_0_1_0_map.gif",
           "height": 50,
           "width": 91,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 10.98,
        "yaw": -14,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "roll": 0,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_0_HS_0_0.png",
           "height": 101,
           "width": 182,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 10.98,
        "hfov": 10.92,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -14
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567, this.camera_51361B3A_5EF6_5C39_41D1_ECF881117C7B); this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_52D24FBC_5EDE_5439_41D3_3380D47364A2, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_52D25FBC_5EDE_5439_41D1_B5533F9DE17D, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "back": {
     "levels": [
      {
       "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_b_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_b.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_u_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_u.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_t.jpg",
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_d_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_d.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_l_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_l.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_f_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_f.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_t.jpg",
  "id": "panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C",
  "mapLocations": [
   {
    "x": 1390.09,
    "y": 823.69,
    "angle": 273.25,
    "class": "PanoramaMapLocation",
    "map": {
     "scaleMode": "fit_inside",
     "image": {
      "levels": [
       {
        "url": "media/map_53553982_5ED3_FCC9_41B1_95A1176AE72F.jpeg",
        "height": 1600,
        "width": 1454,
        "class": "ImageResourceLevel"
       },
       {
        "url": "media/map_53553982_5ED3_FCC9_41B1_95A1176AE72F_lq.jpeg",
        "height": 800,
        "grayscale": true,
        "width": 727,
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "initialZoomFactor": 1,
     "label": "Map",
     "class": "Map",
     "thumbnailUrl": "media/map_53553982_5ED3_FCC9_41B1_95A1176AE72F_t.jpg",
     "minimumZoomFactor": 0.5,
     "overlays": [
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_53553982_5ED3_FCC9_41B1_95A1176AE72F_HS_0.png",
           "height": 59,
           "width": 60,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage",
        "width": 60,
        "height": 60,
        "y": 793.69,
        "x": 1360.09
       },
       "id": "overlay_5254C985_5ED2_5CCB_41D4_24F99756D5BC",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 60,
        "y": 793.69,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "url": "media/map_53553982_5ED3_FCC9_41B1_95A1176AE72F_HS_0_map.gif",
           "height": 29,
           "width": 30,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 60,
        "x": 1360.09
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay"
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_53553982_5ED3_FCC9_41B1_95A1176AE72F_HS_1.png",
           "height": 59,
           "width": 60,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage",
        "width": 60,
        "height": 60,
        "y": 813.53,
        "x": 1167.08
       },
       "id": "overlay_53D464AB_5ED2_D4DF_41D4_1DC65A602015",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 60,
        "y": 813.53,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "url": "media/map_53553982_5ED3_FCC9_41B1_95A1176AE72F_HS_1_map.gif",
           "height": 29,
           "width": 30,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 60,
        "x": 1167.08
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay"
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_53553982_5ED3_FCC9_41B1_95A1176AE72F_HS_2.png",
           "height": 59,
           "width": 60,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage",
        "width": 60,
        "height": 60,
        "y": 593.46,
        "x": 880.27
       },
       "id": "overlay_5381E994_5ED2_DCC9_41D5_F849AA71B141",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 60,
        "y": 593.46,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "url": "media/map_53553982_5ED3_FCC9_41B1_95A1176AE72F_HS_2_map.gif",
           "height": 29,
           "width": 30,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 60,
        "x": 880.27
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay"
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_53553982_5ED3_FCC9_41B1_95A1176AE72F_HS_3.png",
           "height": 59,
           "width": 60,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage",
        "width": 60,
        "height": 60,
        "y": 739.57,
        "x": 636.75
       },
       "id": "overlay_53E292C3_5ED2_4C4E_41D2_3A72163372F9",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 60,
        "y": 739.57,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "url": "media/map_53553982_5ED3_FCC9_41B1_95A1176AE72F_HS_3_map.gif",
           "height": 29,
           "width": 30,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 60,
        "x": 636.75
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay"
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_53553982_5ED3_FCC9_41B1_95A1176AE72F_HS_4.png",
           "height": 59,
           "width": 60,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage",
        "width": 60,
        "height": 60,
        "y": 1089.52,
        "x": 883.88
       },
       "id": "overlay_53A32FE3_5ED1_B44F_41C2_8F269773467A",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 60,
        "y": 1089.52,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "url": "media/map_53553982_5ED3_FCC9_41B1_95A1176AE72F_HS_4_map.gif",
           "height": 29,
           "width": 30,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 60,
        "x": 883.88
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay"
      }
     ],
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "width": 1454,
     "height": 1600,
     "id": "map_53553982_5ED3_FCC9_41B1_95A1176AE72F",
     "fieldOfViewOverlayRadiusScale": 0.3,
     "fieldOfViewOverlayOutsideOpacity": 0
    }
   }
  ],
  "pitch": 0,
  "hfovMin": 60
 },
 {
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "buttonPlay": [
   "this.IconButton_2F49082C_25A1_A80A_4197_ED249D67C846",
   "this.IconButton_2F449E6D_25A3_A80A_41B8_DE07AD9987DF"
  ],
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "buttonStop": [
   "this.IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160",
   "this.IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19"
  ],
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_rotation"
 },
 {
  "movementMode": "constrained",
  "viewerArea": "this.MapViewer",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer"
 },
 {
  "initialPosition": {
   "pitch": 29.57,
   "yaw": -3.25,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 360,
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_54F89CA8_5EB3_D4D9_41D6_900DD60B9919",
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_54F89CA8_5EB3_D4D9_41D6_900DD60B9919",
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "right": {
     "levels": [
      {
       "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_r_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_r.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "id": "overlay_52702D07_5EDE_B5D7_41D4_91E52CFE24E0",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_0_HS_3_0_map.gif",
           "height": 16,
           "width": 32,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -23.93,
        "yaw": 172.12,
        "width": 60
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_0_HS_3_0.gif",
           "height": 30,
           "width": 60,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 172.12,
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -23.93
       }
      ],
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_528FB63B_5EDE_543F_41D2_52D1A9E67BED, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_528F863B_5EDE_543F_41D1_3459BEF2B293, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "FlatHotspotPanoramaOverlay"
     },
     {
      "id": "overlay_52A02856_5ED1_BC76_41C4_2A363FA8FBDF",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 16.87,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_0_HS_2_1_0_map.gif",
           "height": 76,
           "width": 141,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.09,
        "yaw": 170.4,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "roll": 0,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_0_HS_2_0.png",
           "height": 152,
           "width": 283,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.09,
        "hfov": 16.87,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 170.4
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C, this.camera_51057B17_5EF6_5DF7_41D5_2447A8FE4024); this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_521EE34A_5ED1_CC59_41D0_0EAB7F72537B, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_521ED34B_5ED1_CC5F_41C7_4FB6671D10E0, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "id": "overlay_53F9291F_5ED2_5DF7_41D2_F43379F10BAB",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_0_HS_1_0_map.gif",
           "height": 16,
           "width": 32,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -1.6,
        "yaw": 10.1,
        "width": 60
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_0_HS_1_0.gif",
           "height": 30,
           "width": 60,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 10.1,
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -1.6
       }
      ],
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_5277170A_5ED2_B5DE_41CB_2B442594DF66, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_5277070B_5ED2_B5DF_41C0_835760E3D137, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "FlatHotspotPanoramaOverlay"
     },
     {
      "id": "overlay_521B8046_5ED2_CC49_41B8_6DD24B50B9F9",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 15.06,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_0_HS_0_1_0_map.gif",
           "height": 63,
           "width": 126,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.09,
        "yaw": 10.42,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "roll": 0,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_0_HS_0_0.png",
           "height": 127,
           "width": 252,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.09,
        "hfov": 15.06,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 10.42
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02, this.camera_511D4B08_5EF6_5DD9_41CE_6BEC9A74AC75); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_5384E182_5ED2_4CCE_41CE_1F1343BA28E6, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_53840182_5ED2_4CCE_41D6_FE7BB97947F1, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "back": {
     "levels": [
      {
       "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_b_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_b.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_u_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_u.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_t.jpg",
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_d_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_d.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_l_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_l.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_f_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_f.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_t.jpg",
  "id": "panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567",
  "mapLocations": [
   {
    "x": 1197.08,
    "y": 843.53,
    "angle": -91.48,
    "class": "PanoramaMapLocation",
    "map": "this.map_53553982_5ED3_FCC9_41B1_95A1176AE72F"
   }
  ],
  "pitch": 0,
  "hfovMin": 60
 },
 {
  "initialPosition": {
   "pitch": 27.15,
   "yaw": 2.67,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 360,
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_54E88B8F_5EB2_5CD6_41D4_5E32BFC79770",
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_54E88B8F_5EB2_5CD6_41D4_5E32BFC79770",
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "right": {
     "levels": [
      {
       "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_r_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_r.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "id": "overlay_52AA2C66_5ED3_D449_41D4_11A27C6FAF4F",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_0_HS_5_0_map.gif",
           "height": 16,
           "width": 32,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -5.33,
        "yaw": -73.18,
        "width": 60
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_0_HS_5_0.gif",
           "height": 30,
           "width": 60,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -73.18,
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -5.33
       }
      ],
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_52BAC0C3_5ED2_4C4F_41C6_6AF57BF3F0A9, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_52BAD0C3_5ED2_4C4F_41D2_1E652952653C, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "FlatHotspotPanoramaOverlay"
     },
     {
      "id": "overlay_525C58D6_5ED2_BC49_41D6_3F8CA8131B42",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.48,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_0_HS_4_1_0_map.gif",
           "height": 45,
           "width": 79,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6,
        "yaw": -73.45,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "roll": 0,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_0_HS_4_0.png",
           "height": 90,
           "width": 158,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6,
        "hfov": 9.48,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -73.45
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567, this.camera_51647AD5_5EF6_5C4B_41CE_5EE4BE85554C); this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_53D3C562_5ED2_B449_41D6_EF90A5E7751D, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_53D3B562_5ED2_B449_41D7_401C0075CF0A, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "id": "overlay_520B257E_5ED1_D439_41BD_6294D02C9570",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_0_HS_3_0_map.gif",
           "height": 16,
           "width": 32,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -0.97,
        "yaw": -45.27,
        "width": 60
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_0_HS_3_0.gif",
           "height": 30,
           "width": 60,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -45.27,
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -0.97
       }
      ],
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_5247D282_5ED1_CCC9_41BA_93F24AAC3A58, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_5247C282_5ED1_CCC9_41CD_857E516DC8C4, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "FlatHotspotPanoramaOverlay"
     },
     {
      "id": "overlay_52634375_5ED6_4C4B_419A_BA84D32D43E0",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 10.5,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_0_HS_2_1_0_map.gif",
           "height": 46,
           "width": 87,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.98,
        "yaw": -45.16,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "roll": 0,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_0_HS_2_0.png",
           "height": 93,
           "width": 175,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.98,
        "hfov": 10.5,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -45.16
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5707955F_5EB3_B477_41CF_897EEA25CB65, this.camera_517CCAC0_5EF6_5C49_41C7_B3C7A722156B); this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_53D20762_5ED6_B449_41D2_1EB8C81BAB5E, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_53D27762_5ED6_B449_41D2_47F141B3FD6D, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "id": "overlay_5277EB65_5ED6_DC4B_41D0_FB04D2E6F9C3",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_0_HS_1_0_map.gif",
           "height": 16,
           "width": 32,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": 1.04,
        "yaw": -7.99,
        "width": 60
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_0_HS_1_0.gif",
           "height": 30,
           "width": 60,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -7.99,
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": 1.04
       }
      ],
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_526F3C9A_5ED6_B4F9_419E_81FEE413F85C, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_526F2C9A_5ED6_B4F9_41C6_45C1EAAA9B32, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "FlatHotspotPanoramaOverlay"
     },
     {
      "id": "overlay_5205B32D_5ED6_4DDB_41B2_9F2C7A4DD25A",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.83,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_0_HS_0_1_0_map.gif",
           "height": 45,
           "width": 82,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.65,
        "yaw": -7.88,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "roll": 0,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_0_HS_0_0.png",
           "height": 91,
           "width": 164,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.65,
        "hfov": 9.83,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -7.88
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA, this.camera_516CAAE4_5EF6_5C49_41D2_E3FF556EA098); this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_53F83A5A_5ED7_DC79_41D3_9A7E5F1209E8, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_53F9CA5A_5ED7_DC79_41C1_9608C75FC5FA, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "back": {
     "levels": [
      {
       "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_b_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_b.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_u_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_u.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_t.jpg",
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_d_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_d.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_l_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_l.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_f_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_f.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_t.jpg",
  "id": "panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02",
  "mapLocations": [
   {
    "x": 910.27,
    "y": 623.46,
    "angle": 212.51,
    "class": "PanoramaMapLocation",
    "map": "this.map_53553982_5ED3_FCC9_41B1_95A1176AE72F"
   }
  ],
  "pitch": 0,
  "hfovMin": 60
 },
 {
  "initialPosition": {
   "pitch": 20.68,
   "yaw": -8.16,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 360,
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_54C26AFF_5EB2_5C37_41CB_7F0D9B86D85D",
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_54C26AFF_5EB2_5C37_41CB_7F0D9B86D85D",
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "right": {
     "levels": [
      {
       "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_r_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_r.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "id": "overlay_527F5175_5ED6_4C4B_41A1_B4BADCE3EE7C",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_0_HS_1_0_map.gif",
           "height": 16,
           "width": 32,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -8.56,
        "yaw": 54.7,
        "width": 60
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_0_HS_1_0.gif",
           "height": 30,
           "width": 60,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 54.7,
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -8.56
       }
      ],
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_53951521_5ED6_F5CB_41B8_537688CB6A9B, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_53950521_5ED6_F5CB_41C8_A5EE0F1B5F23, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "FlatHotspotPanoramaOverlay"
     },
     {
      "id": "overlay_53BCECB4_5ED6_D4C9_41D2_0D69996074BD",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 11.88,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_0_HS_0_1_0_map.gif",
           "height": 49,
           "width": 99,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.28,
        "yaw": 54.45,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "roll": 0,
        "image": {
         "levels": [
          {
           "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_0_HS_0_0.png",
           "height": 99,
           "width": 198,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.28,
        "hfov": 11.88,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 54.45
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02, this.camera_5114BAF9_5EF6_5C3B_41C8_343A061456B9); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_50F27AE9_5ED6_5C5B_41C6_5F7B9ECF148B, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_508DAAE9_5ED6_5C5B_41D1_6E2AE3A4DF4E, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "back": {
     "levels": [
      {
       "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_b_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_b.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_u_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_u.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_t.jpg",
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_d_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_d.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_l_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_l.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_f_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_f.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_t.jpg",
  "id": "panorama_5707955F_5EB3_B477_41CF_897EEA25CB65",
  "mapLocations": [
   {
    "x": 913.88,
    "y": 1119.52,
    "angle": -21.7,
    "class": "PanoramaMapLocation",
    "map": "this.map_53553982_5ED3_FCC9_41B1_95A1176AE72F"
   }
  ],
  "pitch": 0,
  "hfovMin": 60
 },
 {
  "initialPosition": {
   "pitch": 22.02,
   "yaw": 46.3,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 360,
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_542323EF_5EB2_CC57_41CA_535B0A08A0DB",
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_542323EF_5EB2_CC57_41CA_535B0A08A0DB",
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "right": {
     "levels": [
      {
       "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_r_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_r.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "id": "overlay_53962E84_5ED1_F4C9_41C7_8BD0CBC86F93",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "levels": [
          {
           "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_0_HS_1_0_map.gif",
           "height": 16,
           "width": 32,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -11.06,
        "yaw": -177.87,
        "width": 60
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_0_HS_1_0.gif",
           "height": 30,
           "width": 60,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -177.87,
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -11.06
       }
      ],
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_53EDBB31_5ED2_5DCB_41B1_6EB8680AC6A8, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_53EDCB31_5ED2_5DCB_41C1_873355C6590E, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "FlatHotspotPanoramaOverlay"
     },
     {
      "id": "overlay_53F87EA4_5ED2_74C9_41B7_99445E97C798",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 11.66,
        "image": {
         "levels": [
          {
           "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_0_HS_0_1_0_map.gif",
           "height": 48,
           "width": 97,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.56,
        "yaw": -180,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "items": [
       {
        "roll": 0,
        "image": {
         "levels": [
          {
           "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_0_HS_0_0.png",
           "height": 97,
           "width": 194,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.56,
        "hfov": 11.66,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -180
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02, this.camera_510D5B2B_5EF6_5DDF_41D6_D8C6D5E8C3C8); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_53C159E1_5ED2_DC4B_41D1_AB2686C7E03B, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_53C129E1_5ED2_DC4B_41D5_95CA702FDBF6, 'hideEffect', false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "back": {
     "levels": [
      {
       "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_b_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_b.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_u_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_u.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_t.jpg",
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_d_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_d.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_l_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_l.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_f_hq.jpeg",
       "height": 1904,
       "width": 1904,
       "class": "ImageResourceLevel"
      },
      {
       "url": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_f.jpeg",
       "height": 1024,
       "width": 1024,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_t.jpg",
  "id": "panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA",
  "mapLocations": [
   {
    "x": 666.75,
    "y": 769.57,
    "angle": -85.85,
    "class": "PanoramaMapLocation",
    "map": "this.map_53553982_5ED3_FCC9_41B1_95A1176AE72F"
   }
  ],
  "pitch": 0,
  "hfovMin": 60
 },
 {
  "initialPosition": {
   "pitch": 11.27,
   "yaw": 2.38,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 360,
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_54930367_5EB2_CC57_41D4_EAC52B18D260",
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_54930367_5EB2_CC57_41D4_EAC52B18D260",
  "class": "PanoramaCamera"
 },
 {
  "items": [
   {
    "media": "this.panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_51422A9D_5EF6_5CFB_41B4_7F3010C31808, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_51422A9D_5EF6_5CFB_41B4_7F3010C31808",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_51429A9D_5EF6_5CFB_41BF_D4E03225E4F4, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_51429A9D_5EF6_5CFB_41BF_D4E03225E4F4",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_51432A9D_5EF6_5CFB_41D1_AFAA5C6B7067, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_51432A9D_5EF6_5CFB_41D1_AFAA5C6B7067",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_5707955F_5EB3_B477_41CF_897EEA25CB65",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_51439A9E_5EF6_5CF9_41CE_3B31385BAF90, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_51439A9E_5EF6_5CF9_41CE_3B31385BAF90",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_514C0A9E_5EF6_5CF9_41C0_F2E9655EBDB8, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_514C0A9E_5EF6_5CF9_41C0_F2E9655EBDB8",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
    "camera": "this.panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5497ADCA_5EB2_7459_41D1_73A524498A8C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist, 0, 1)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5704E616_5EB2_57C9_41C2_C74AAD9B9567_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5707BDD4_5EB2_5449_41D6_368FDA75CD02_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_5707955F_5EB3_B477_41CF_897EEA25CB65",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5707955F_5EB3_B477_41CF_897EEA25CB65_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_57064D00_5EB3_B5C9_41BB_7FBC41F150CA_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist, 4, 0)",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist",
  "class": "PlayList"
 },
 "this.map_53553982_5ED3_FCC9_41B1_95A1176AE72F",
 {
  "items": [
   {
    "media": "this.map_53553982_5ED3_FCC9_41B1_95A1176AE72F",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_51417A9C_5EF6_5CF9_41D1_647619B4CACA",
  "class": "PlayList"
 },
 {
  "duration": 200,
  "id": "effect_29A8E965_25A0_A83A_41C1_00C87B03BABF",
  "easing": "linear",
  "to": "bottom",
  "class": "SlideOutEffect"
 },
 {
  "duration": 200,
  "id": "effect_2EA4AA54_25A0_A81A_41BD_8E5E1E6F3D96",
  "easing": "linear",
  "from": "bottom",
  "class": "SlideInEffect"
 },
 {
  "duration": 200,
  "id": "effect_29F36C46_2501_FD29_41B0_70F27BED7C8B",
  "easing": "linear",
  "from": "left",
  "class": "SlideInEffect"
 },
 {
  "duration": 200,
  "id": "effect_283F6B08_2501_3B39_4196_62FBD00D9F58",
  "easing": "linear",
  "to": "left",
  "class": "SlideOutEffect"
 },
 {
  "duration": 200,
  "id": "effect_29F36EC6_25A3_6803_4185_623A1E7D4585",
  "easing": "linear",
  "from": "left",
  "class": "SlideInEffect"
 },
 {
  "duration": 200,
  "id": "effect_2E678A25_25A0_A83A_41AD_2F6489060D7A",
  "easing": "linear",
  "to": "left",
  "class": "SlideOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_52E925CD_5ED1_F45A_41D7_3F025E8DD9A7",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_52E8E5CE_5ED1_F456_41A7_5F93B3ADEE50",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_52D24FBC_5EDE_5439_41D3_3380D47364A2",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_52D25FBC_5EDE_5439_41D1_B5533F9DE17D",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_528FB63B_5EDE_543F_41D2_52D1A9E67BED",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_528F863B_5EDE_543F_41D1_3459BEF2B293",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_521EE34A_5ED1_CC59_41D0_0EAB7F72537B",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_521ED34B_5ED1_CC5F_41C7_4FB6671D10E0",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_5277170A_5ED2_B5DE_41CB_2B442594DF66",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_5277070B_5ED2_B5DF_41C0_835760E3D137",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_5384E182_5ED2_4CCE_41CE_1F1343BA28E6",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_53840182_5ED2_4CCE_41D6_FE7BB97947F1",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_52BAC0C3_5ED2_4C4F_41C6_6AF57BF3F0A9",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_52BAD0C3_5ED2_4C4F_41D2_1E652952653C",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_53D3C562_5ED2_B449_41D6_EF90A5E7751D",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_53D3B562_5ED2_B449_41D7_401C0075CF0A",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_5247D282_5ED1_CCC9_41BA_93F24AAC3A58",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_5247C282_5ED1_CCC9_41CD_857E516DC8C4",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_53D20762_5ED6_B449_41D2_1EB8C81BAB5E",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_53D27762_5ED6_B449_41D2_47F141B3FD6D",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_526F3C9A_5ED6_B4F9_419E_81FEE413F85C",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_526F2C9A_5ED6_B4F9_41C6_45C1EAAA9B32",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_53F83A5A_5ED7_DC79_41D3_9A7E5F1209E8",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_53F9CA5A_5ED7_DC79_41C1_9608C75FC5FA",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_53951521_5ED6_F5CB_41B8_537688CB6A9B",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_53950521_5ED6_F5CB_41C8_A5EE0F1B5F23",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_50F27AE9_5ED6_5C5B_41C6_5F7B9ECF148B",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_508DAAE9_5ED6_5C5B_41D1_6E2AE3A4DF4E",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_53EDBB31_5ED2_5DCB_41B1_6EB8680AC6A8",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_53EDCB31_5ED2_5DCB_41C1_873355C6590E",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "duration": 0,
  "id": "effect_53C159E1_5ED2_DC4B_41D1_AB2686C7E03B",
  "easing": "linear",
  "class": "FadeInEffect"
 },
 {
  "duration": 0,
  "id": "effect_53C129E1_5ED2_DC4B_41D5_95CA702FDBF6",
  "easing": "linear",
  "class": "FadeOutEffect"
 },
 {
  "initialPosition": {
   "pitch": 0,
   "yaw": -125.55,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_517CCAC0_5EF6_5C49_41C7_B3C7A722156B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 360,
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_517CDAC5_5EF6_5C4B_41D5_35C7E834C6B1",
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_517CDAC5_5EF6_5C4B_41D5_35C7E834C6B1",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "pitch": 0,
   "yaw": -169.58,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_51647AD5_5EF6_5C4B_41CE_5EE4BE85554C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 360,
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_51649AD5_5EF6_5C4B_41AE_15DFE65A6F01",
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_51649AD5_5EF6_5C4B_41AE_15DFE65A6F01",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "pitch": 0,
   "yaw": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_516CAAE4_5EF6_5C49_41D2_E3FF556EA098",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 360,
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_516CBAE4_5EF6_5C49_41D5_CDE4C7A97573",
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_516CBAE4_5EF6_5C49_41D5_CDE4C7A97573",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "pitch": 0,
   "yaw": 134.84,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_5114BAF9_5EF6_5C3B_41C8_343A061456B9",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 360,
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_5114CAF9_5EF6_5C3B_41D1_AB56D32AF558",
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_5114CAF9_5EF6_5C3B_41D1_AB56D32AF558",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "pitch": 0,
   "yaw": 106.55,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_511D4B08_5EF6_5DD9_41CE_6BEC9A74AC75",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 360,
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_511D6B08_5EF6_5DD9_41CD_76A84A160F94",
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_511D6B08_5EF6_5DD9_41CD_76A84A160F94",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "pitch": 0,
   "yaw": 166,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_51057B17_5EF6_5DF7_41D5_2447A8FE4024",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 360,
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_51059B17_5EF6_5DF7_41D5_47DDD2813B1B",
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_51059B17_5EF6_5DF7_41D5_47DDD2813B1B",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "pitch": 0,
   "yaw": 172.12,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_510D5B2B_5EF6_5DDF_41D6_D8C6D5E8C3C8",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 360,
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_510D6B2B_5EF6_5DDF_41D4_C4303670A2CF",
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_510D6B2B_5EF6_5DDF_41D4_C4303670A2CF",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "pitch": 0,
   "yaw": -9.6,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_51361B3A_5EF6_5C39_41D1_ECF881117C7B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 360,
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_51362B3A_5EF6_5C39_41D2_015DA8D50A2C",
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 5000,
  "idleSequence": "this.sequence_51362B3A_5EF6_5C39_41D2_015DA8D50A2C",
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "playbackBarBackgroundOpacity": 1,
  "class": "ViewerArea",
  "playbackBarLeft": 0,
  "toolTipBorderColor": "#767676",
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "top": 0,
  "minHeight": 50,
  "toolTipBorderRadius": 3,
  "progressBorderRadius": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowHorizontalLength": 0,
  "minWidth": 100,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "paddingBottom": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "shadow": false,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBorderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "progressBorderSize": 0,
  "id": "MainViewer",
  "toolTipTextShadowColor": "#000000",
  "paddingRight": 0,
  "transitionMode": "blending",
  "toolTipBorderSize": 1,
  "progressBarBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "progressHeight": 10,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "height": "100%",
  "borderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressLeft": 0,
  "progressBottom": 0,
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "borderSize": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontSize": 12,
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarOpacity": 1,
  "paddingTop": 0,
  "toolTipShadowOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontColor": "#606060",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 5,
  "progressBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "progressBorderColor": "#000000",
  "playbackBarHeadShadow": true,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "left": 0,
  "toolTipFontStyle": "normal",
  "right": 0,
  "playbackBarBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "progressOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "progressRight": 0
 },
 {
  "overflow": "scroll",
  "class": "Container",
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "borderRadius": 0,
  "backgroundColorRatios": [
   0
  ],
  "minHeight": 1,
  "top": "0%",
  "paddingLeft": 0,
  "borderSize": 0,
  "visible": false,
  "scrollBarVisible": "rollOver",
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "top",
  "paddingBottom": 0,
  "shadow": false,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "layout": "absolute",
  "left": "0%",
  "gap": 10,
  "backgroundColor": [
   "#000000"
  ],
  "width": "100%",
  "horizontalAlign": "left",
  "backgroundOpacity": 0.25,
  "id": "Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE",
  "height": "100%",
  "backgroundColorDirection": "vertical",
  "paddingRight": 0
 },
 {
  "class": "ViewerArea",
  "playbackBarLeft": 0,
  "toolTipBorderColor": "#767676",
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "minHeight": 1,
  "toolTipBorderRadius": 3,
  "progressBorderRadius": 0,
  "bottom": "7.46%",
  "paddingLeft": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "minWidth": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "paddingBottom": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "shadow": false,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBorderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "progressBorderSize": 0,
  "id": "MapViewer",
  "width": "19.636%",
  "visible": false,
  "toolTipTextShadowColor": "#000000",
  "paddingRight": 0,
  "transitionMode": "blending",
  "toolTipBorderSize": 1,
  "progressBarBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "progressHeight": 10,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "height": "42.434%",
  "borderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressLeft": 0,
  "progressBottom": 2,
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "borderSize": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontSize": 12,
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarOpacity": 1,
  "paddingTop": 0,
  "toolTipShadowOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontColor": "#606060",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "progressBorderColor": "#000000",
  "playbackBarHeadShadow": true,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "left": "0%",
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "progressOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "progressRight": 0
 },
 {
  "class": "HTMLText",
  "paddingRight": 0,
  "borderRadius": 0,
  "top": "9.64%",
  "minHeight": 1,
  "paddingLeft": 0,
  "borderSize": 0,
  "scrollBarVisible": "rollOver",
  "minWidth": 1,
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:25px;\">Sivakesava Temple</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:16px;\">Pushpagiri, Andhra Pradesh</SPAN></SPAN></DIV></div>",
  "paddingTop": 0,
  "paddingBottom": 0,
  "shadow": false,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "left": "4.24%",
  "width": 384,
  "height": 61,
  "id": "HTMLText_2E9140AE_2596_056D_41A5_466399BA640C",
  "backgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "scrollBarWidth": 10
 },
 {
  "itemLabelFontSize": 14,
  "gap": 10,
  "class": "ThumbnailList",
  "itemBackgroundOpacity": 0,
  "selectedItemLabelFontWeight": "bold",
  "visible": false,
  "itemThumbnailShadowBlurRadius": 4,
  "itemThumbnailShadowOpacity": 0.8,
  "scrollBarWidth": 10,
  "borderRadius": 5,
  "itemOpacity": 1,
  "itemVerticalAlign": "middle",
  "backgroundColorRatios": [],
  "minHeight": 1,
  "itemLabelTextDecoration": "none",
  "bottom": "0%",
  "itemThumbnailShadowVerticalLength": 3,
  "borderSize": 0,
  "itemThumbnailShadow": true,
  "paddingLeft": 20,
  "itemThumbnailShadowHorizontalLength": 3,
  "scrollBarVisible": "rollOver",
  "itemPaddingRight": 3,
  "itemPaddingTop": 3,
  "minWidth": 1,
  "itemThumbnailScaleMode": "fit_outside",
  "itemPaddingLeft": 3,
  "itemBackgroundColorDirection": "vertical",
  "paddingTop": 10,
  "verticalAlign": "top",
  "itemBackgroundColor": [],
  "itemHorizontalAlign": "center",
  "itemLabelGap": 9,
  "itemMode": "normal",
  "paddingBottom": 10,
  "playList": "this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist",
  "shadow": false,
  "scrollBarMargin": 2,
  "itemThumbnailShadowSpread": 1,
  "scrollBarOpacity": 0.5,
  "itemThumbnailShadowColor": "#000000",
  "layout": "horizontal",
  "itemBackgroundColorRatios": [],
  "itemLabelFontColor": "#FFFFFF",
  "left": "0%",
  "itemLabelFontWeight": "normal",
  "itemPaddingBottom": 3,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontFamily": "Arial",
  "backgroundColor": [],
  "width": "100%",
  "horizontalAlign": "left",
  "itemBorderRadius": 0,
  "height": 145,
  "itemThumbnailOpacity": 1,
  "itemLabelPosition": "bottom",
  "id": "ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1",
  "itemLabelFontStyle": "normal",
  "backgroundOpacity": 0.2,
  "scrollBarColor": "#FFFFFF",
  "backgroundColorDirection": "vertical",
  "itemThumbnailBorderRadius": 5,
  "paddingRight": 20
 },
 {
  "class": "IconButton",
  "borderRadius": 0,
  "minHeight": 1,
  "visible": false,
  "bottom": "20%",
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "maxHeight": 50,
  "paddingBottom": 0,
  "shadow": false,
  "transparencyActive": false,
  "click": "this.setComponentVisibility(this.IconButton_2FA3A1A0_25A0_B83A_41A0_C0A709C85806, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1, false, 0, this.effect_29A8E965_25A0_A83A_41C1_00C87B03BABF, 'hideEffect', false); this.setComponentVisibility(this.IconButton_2C56A7B1_25A1_B81A_41A2_BBB4ABFBE7ED, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2EC03B6E_25BF_A806_4180_FFE3E20BC39B, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F7D8F06_25A0_E806_4196_B77177ECF11E, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F449E6D_25A3_A80A_41B8_DE07AD9987DF, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19, false, 0, null, null, false); this.setComponentVisibility(this.Image_2BD6D83C_248B_ED58_4170_5B8DBD5C72EC, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160, true, 0, null, null, false)",
  "cursor": "hand",
  "right": "32.24%",
  "iconURL": "skin/IconButton_2C56A7B1_25A1_B81A_41A2_BBB4ABFBE7ED.png",
  "maxWidth": 50,
  "width": 55,
  "horizontalAlign": "center",
  "height": 55,
  "id": "IconButton_2C56A7B1_25A1_B81A_41A2_BBB4ABFBE7ED",
  "backgroundOpacity": 0,
  "paddingRight": 0
 },
 {
  "class": "IconButton",
  "borderRadius": 0,
  "minHeight": 1,
  "bottom": "4%",
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "maxHeight": 50,
  "paddingBottom": 0,
  "shadow": false,
  "transparencyActive": false,
  "click": "this.setComponentVisibility(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1, true, 0, this.effect_2EA4AA54_25A0_A81A_41BD_8E5E1E6F3D96, 'showEffect', false); this.setComponentVisibility(this.IconButton_2FA3A1A0_25A0_B83A_41A0_C0A709C85806, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2C56A7B1_25A1_B81A_41A2_BBB4ABFBE7ED, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2EC03B6E_25BF_A806_4180_FFE3E20BC39B, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19, true, 0, null, null, false); this.setComponentVisibility(this.Image_2BD6D83C_248B_ED58_4170_5B8DBD5C72EC, false, 0, null, null, false); this.setComponentVisibility(this.Image_2B343840_24F4_ED28_4196_61F9606F6D0E, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F49082C_25A1_A80A_4197_ED249D67C846, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160, false, 0, null, null, false)",
  "cursor": "hand",
  "right": "32.24%",
  "iconURL": "skin/IconButton_2FA3A1A0_25A0_B83A_41A0_C0A709C85806.png",
  "maxWidth": 50,
  "width": 55,
  "horizontalAlign": "center",
  "height": 55,
  "id": "IconButton_2FA3A1A0_25A0_B83A_41A0_C0A709C85806",
  "backgroundOpacity": 0,
  "paddingRight": 0
 },
 {
  "url": "skin/Image_2BD6D83C_248B_ED58_4170_5B8DBD5C72EC.png",
  "class": "Image",
  "borderRadius": 0,
  "minHeight": 1,
  "bottom": "4%",
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "maxHeight": 115,
  "scaleMode": "fit_inside",
  "paddingBottom": 0,
  "shadow": false,
  "click": "this.setComponentVisibility(this.Image_2BD6D83C_248B_ED58_4170_5B8DBD5C72EC, false, 0, null, null, false); this.setComponentVisibility(this.Image_2B343840_24F4_ED28_4196_61F9606F6D0E, true, 0, null, null, false); this.setComponentVisibility(this.MapViewer, true, 0, this.effect_29F36C46_2501_FD29_41B0_70F27BED7C8B, 'showEffect', false)",
  "left": "36%",
  "maxWidth": 115,
  "width": 50,
  "horizontalAlign": "center",
  "height": 50,
  "id": "Image_2BD6D83C_248B_ED58_4170_5B8DBD5C72EC",
  "backgroundOpacity": 0,
  "paddingRight": 0
 },
 {
  "url": "skin/Image_2B343840_24F4_ED28_4196_61F9606F6D0E.png",
  "class": "Image",
  "borderRadius": 0,
  "minHeight": 1,
  "visible": false,
  "bottom": "4%",
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "maxHeight": 115,
  "scaleMode": "fit_inside",
  "paddingBottom": 0,
  "shadow": false,
  "click": "this.setComponentVisibility(this.Image_2BD6D83C_248B_ED58_4170_5B8DBD5C72EC, true, 0, null, null, false); this.setComponentVisibility(this.Image_2B343840_24F4_ED28_4196_61F9606F6D0E, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, this.effect_283F6B08_2501_3B39_4196_62FBD00D9F58, 'hideEffect', false)",
  "left": "36%",
  "maxWidth": 115,
  "width": 50,
  "horizontalAlign": "center",
  "height": 50,
  "id": "Image_2B343840_24F4_ED28_4196_61F9606F6D0E",
  "backgroundOpacity": 0,
  "paddingRight": 0
 },
 {
  "class": "IconButton",
  "borderRadius": 0,
  "minHeight": 1,
  "visible": false,
  "bottom": "20%",
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "maxHeight": 50,
  "paddingBottom": 0,
  "shadow": false,
  "transparencyActive": false,
  "click": "this.setComponentVisibility(this.MapViewer, true, 0, this.effect_29F36EC6_25A3_6803_4185_623A1E7D4585, 'showEffect', false); this.setComponentVisibility(this.IconButton_2EC03B6E_25BF_A806_4180_FFE3E20BC39B, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F7D8F06_25A0_E806_4196_B77177ECF11E, true, 0, null, null, false)",
  "left": "36%",
  "cursor": "hand",
  "maxWidth": 50,
  "iconURL": "skin/IconButton_2EC03B6E_25BF_A806_4180_FFE3E20BC39B.png",
  "width": 115,
  "horizontalAlign": "center",
  "height": 115,
  "id": "IconButton_2EC03B6E_25BF_A806_4180_FFE3E20BC39B",
  "backgroundOpacity": 0,
  "paddingRight": 0
 },
 {
  "class": "IconButton",
  "borderRadius": 0,
  "minHeight": 1,
  "visible": false,
  "bottom": "20%",
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "maxHeight": 50,
  "paddingBottom": 0,
  "shadow": false,
  "transparencyActive": false,
  "click": "this.setComponentVisibility(this.MapViewer, false, 0, this.effect_2E678A25_25A0_A83A_41AD_2F6489060D7A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_2EC03B6E_25BF_A806_4180_FFE3E20BC39B, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F7D8F06_25A0_E806_4196_B77177ECF11E, false, 0, null, null, false)",
  "left": "36%",
  "cursor": "hand",
  "maxWidth": 50,
  "iconURL": "skin/IconButton_2F7D8F06_25A0_E806_4196_B77177ECF11E.png",
  "width": 115,
  "horizontalAlign": "center",
  "height": 115,
  "id": "IconButton_2F7D8F06_25A0_E806_4196_B77177ECF11E",
  "backgroundOpacity": 0,
  "paddingRight": 0
 },
 {
  "class": "IconButton",
  "borderRadius": 0,
  "minHeight": 1,
  "visible": false,
  "bottom": "4%",
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "maxHeight": 115,
  "paddingBottom": 0,
  "shadow": false,
  "transparencyActive": false,
  "click": "this.setComponentVisibility(this.IconButton_2F49082C_25A1_A80A_4197_ED249D67C846, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160, true, 0, null, null, false)",
  "cursor": "hand",
  "right": "46%",
  "iconURL": "skin/IconButton_2F49082C_25A1_A80A_4197_ED249D67C846.png",
  "maxWidth": 115,
  "width": 50,
  "horizontalAlign": "center",
  "height": 50,
  "id": "IconButton_2F49082C_25A1_A80A_4197_ED249D67C846",
  "backgroundOpacity": 0,
  "paddingRight": 0
 },
 {
  "class": "IconButton",
  "borderRadius": 0,
  "minHeight": 1,
  "bottom": "4%",
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "maxHeight": 115,
  "paddingBottom": 0,
  "shadow": false,
  "transparencyActive": false,
  "click": "this.setComponentVisibility(this.IconButton_2F49082C_25A1_A80A_4197_ED249D67C846, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160, false, 0, null, null, false)",
  "cursor": "hand",
  "right": "46%",
  "iconURL": "skin/IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160.png",
  "maxWidth": 115,
  "width": 50,
  "horizontalAlign": "center",
  "height": 50,
  "id": "IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160",
  "backgroundOpacity": 0,
  "paddingRight": 0
 },
 {
  "class": "IconButton",
  "borderRadius": 0,
  "minHeight": 1,
  "visible": false,
  "bottom": "20%",
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "maxHeight": 115,
  "paddingBottom": 0,
  "shadow": false,
  "transparencyActive": false,
  "click": "this.setComponentVisibility(this.IconButton_2F449E6D_25A3_A80A_41B8_DE07AD9987DF, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19, true, 0, null, null, false)",
  "cursor": "hand",
  "right": "46%",
  "iconURL": "skin/IconButton_2F449E6D_25A3_A80A_41B8_DE07AD9987DF.png",
  "maxWidth": 115,
  "width": 50,
  "horizontalAlign": "center",
  "height": 50,
  "id": "IconButton_2F449E6D_25A3_A80A_41B8_DE07AD9987DF",
  "backgroundOpacity": 0,
  "paddingRight": 0
 },
 {
  "class": "IconButton",
  "borderRadius": 0,
  "minHeight": 1,
  "visible": false,
  "bottom": "20%",
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "maxHeight": 115,
  "paddingBottom": 0,
  "shadow": false,
  "transparencyActive": false,
  "click": "this.setComponentVisibility(this.IconButton_2F449E6D_25A3_A80A_41B8_DE07AD9987DF, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19, false, 0, null, null, false)",
  "cursor": "hand",
  "right": "46%",
  "iconURL": "skin/IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19.png",
  "maxWidth": 115,
  "width": 50,
  "horizontalAlign": "center",
  "height": 50,
  "id": "IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19",
  "backgroundOpacity": 0,
  "paddingRight": 0
 },
 {
  "class": "Image",
  "height": "3.728%",
  "borderRadius": 0,
  "top": "2.82%",
  "minHeight": 1,
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "maxHeight": 179,
  "scaleMode": "fit_inside",
  "paddingBottom": 0,
  "shadow": false,
  "click": "var newWindow = window.open(\"http://www.inrootz.in\", \"_blank\"); newWindow.focus()",
  "left": "3.68%",
  "cursor": "hand",
  "maxWidth": 722,
  "width": "9.394%",
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "id": "Image_2BBB3D75_2501_FFEB_4192_0014355190F6",
  "url": "skin/Image_2BBB3D75_2501_FFEB_4192_0014355190F6.png",
  "paddingRight": 0
 },
 {
  "class": "IconButton",
  "borderRadius": 0,
  "top": "7.24%",
  "minHeight": 1,
  "visible": false,
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "maxHeight": 55,
  "paddingBottom": 0,
  "shadow": false,
  "transparencyActive": false,
  "click": "this.setComponentVisibility(this.IconButton_45C47D0F_4874_CC7C_41A8_359C39064A07, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_4524FE23_4875_4CA4_41C4_9195914B8F2F, false, 0, null, null, false)",
  "cursor": "hand",
  "right": "2.18%",
  "iconURL": "skin/IconButton_4524FE23_4875_4CA4_41C4_9195914B8F2F.png",
  "maxWidth": 55,
  "width": 55,
  "horizontalAlign": "center",
  "height": 55,
  "id": "IconButton_4524FE23_4875_4CA4_41C4_9195914B8F2F",
  "backgroundOpacity": 0,
  "paddingRight": 0
 },
 {
  "class": "IconButton",
  "borderRadius": 0,
  "top": "7.24%",
  "minHeight": 1,
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "maxHeight": 55,
  "paddingBottom": 0,
  "shadow": false,
  "transparencyActive": false,
  "click": "this.setComponentVisibility(this.IconButton_45C47D0F_4874_CC7C_41A8_359C39064A07, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_4524FE23_4875_4CA4_41C4_9195914B8F2F, true, 0, null, null, false)",
  "cursor": "hand",
  "right": "2.18%",
  "iconURL": "skin/IconButton_45C47D0F_4874_CC7C_41A8_359C39064A07.png",
  "maxWidth": 55,
  "width": 55,
  "horizontalAlign": "center",
  "height": 55,
  "id": "IconButton_45C47D0F_4874_CC7C_41A8_359C39064A07",
  "backgroundOpacity": 0,
  "paddingRight": 0
 }
], 
 "overflow": "visible",
 "class": "Player",
 "contentOpaque": false,
 "height": "100%",
 "scripts": {
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); else htmlText.set('html', ''); }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ components[i].set('visible', visible); } }; if (this.rootPlayer.touchEnabled){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if(media.get('class') == 'Video360' && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama'); else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "registerKey": function(key, value){  window[key] = value; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getKey": function(key){  return window[key]; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); if(!endObject) return; } else{ endObject = playListItem.get('media'); } endObject.bind('end', endFunction, this); } playList.bind('change', changePlayListFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "borderRadius": 0,
 "start": "this.syncPlaylists([this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_51417A9C_5EF6_5CF9_41D1_647619B4CACA.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_4524FE23_4875_4CA4_41C4_9195914B8F2F,this.IconButton_45C47D0F_4874_CC7C_41A8_359C39064A07].forEach(function(component) { component.set('visible', false); }) }",
 "minHeight": 20,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 20,
 "paddingTop": 0,
 "verticalAlign": "top",
 "buttonEnterFullscreen": "this.IconButton_45C47D0F_4874_CC7C_41A8_359C39064A07",
 "buttonExitFullscreen": "this.IconButton_4524FE23_4875_4CA4_41C4_9195914B8F2F",
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "mouseWheelEnabled": true,
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "width": "100%",
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "paddingRight": 0
})