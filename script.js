TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_t.jpg",
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_t.jpg",
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_0_HS_1_0_map.gif",
           "height": 16,
           "width": 32
          }
         ]
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -13.5,
        "yaw": -27.09,
        "width": 60
       }
      ],
      "id": "overlay_D2135136_DEBE_2EC3_41CA_07447A1622FC",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D3DF9CD6_DEBE_7743_41E4_11C6191C0D5B, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D3DFFCD6_DEBE_7743_41C3_ACB907409F17, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_0_HS_1_0.gif",
           "height": 30,
           "width": 60
          }
         ]
        },
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -13.5,
        "yaw": -27.09
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_0_HS_0_1_0_map.gif",
           "height": 47,
           "width": 81
          }
         ]
        },
        "pitch": -14.32,
        "yaw": -27.18,
        "hfov": 9.72
       }
      ],
      "id": "overlay_D32B527D_DEBE_3341_41E6_7427A5A644F1",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218, this.camera_D100E8A8_DE92_7FCF_41E3_4386E130D0EB); this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D3255702_DEBE_D2C3_41E7_67C2DE816F8F, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D3254702_DEBE_D2C3_41D3_DE449F5AF43C, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_0_HS_0_0.png",
           "height": 94,
           "width": 162
          }
         ]
        },
        "yaw": -27.18,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": -14.32,
        "hfov": 9.72
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "hfovMin": 60,
  "class": "Panorama",
  "id": "panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40",
  "partial": false,
  "mapLocations": [
   {
    "y": 352.22,
    "angle": 146.93,
    "class": "PanoramaMapLocation",
    "map": {
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "url": "media/map_D042049D_DE8E_D7C1_41C3_0AB6D420C364.jpeg",
        "height": 1600,
        "width": 1454
       },
       {
        "class": "ImageResourceLevel",
        "url": "media/map_D042049D_DE8E_D7C1_41C3_0AB6D420C364_lq.jpeg",
        "height": 800,
        "grayscale": true,
        "width": 727
       }
      ]
     },
     "label": "Shore Temple map",
     "thumbnailUrl": "media/map_D042049D_DE8E_D7C1_41C3_0AB6D420C364_t.jpg",
     "class": "Map",
     "overlays": [
      {
       "useHandCursor": true,
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_D042049D_DE8E_D7C1_41C3_0AB6D420C364_HS_0.png",
           "height": 54,
           "width": 54
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 167.7,
        "x": 1548.46,
        "height": 167.72,
        "y": 4092.43
       },
       "id": "overlay_D0ED18F2_DE8E_5F43_41EB_6A2B955E4BEB",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "map": {
        "height": 167.72,
        "y": 4092.43,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_D042049D_DE8E_D7C1_41C3_0AB6D420C364_HS_0_map.gif",
           "height": 27,
           "width": 27
          }
         ]
        },
        "width": 167.7,
        "x": 1548.46
       },
       "rollOverDisplay": false
      },
      {
       "useHandCursor": true,
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_D042049D_DE8E_D7C1_41C3_0AB6D420C364_HS_1.png",
           "height": 54,
           "width": 54
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 167.7,
        "x": 1112.43,
        "height": 167.72,
        "y": 268.36
       },
       "id": "overlay_D02D810A_DE8D_EEC3_41DD_0D5D1ECC431A",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "map": {
        "height": 167.72,
        "y": 268.36,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_D042049D_DE8E_D7C1_41C3_0AB6D420C364_HS_1_map.gif",
           "height": 27,
           "width": 27
          }
         ]
        },
        "width": 167.7,
        "x": 1112.43
       },
       "rollOverDisplay": false
      },
      {
       "useHandCursor": true,
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_D042049D_DE8E_D7C1_41C3_0AB6D420C364_HS_2.png",
           "height": 54,
           "width": 54
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 167.7,
        "x": 2727.98,
        "height": 167.72,
        "y": 749.16
       },
       "id": "overlay_D07A6F1A_DE92_52C3_41C9_10DD5B29DCC9",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "map": {
        "height": 167.72,
        "y": 749.16,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_D042049D_DE8E_D7C1_41C3_0AB6D420C364_HS_2_map.gif",
           "height": 27,
           "width": 27
          }
         ]
        },
        "width": 167.7,
        "x": 2727.98
       },
       "rollOverDisplay": false
      },
      {
       "useHandCursor": true,
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_D042049D_DE8E_D7C1_41C3_0AB6D420C364_HS_3.png",
           "height": 54,
           "width": 54
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 167.7,
        "x": 1766.48,
        "height": 167.72,
        "y": 1213.19
       },
       "id": "overlay_D021C5DA_DE92_F143_41DD_783760FE4263",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "map": {
        "height": 167.72,
        "y": 1213.19,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_D042049D_DE8E_D7C1_41C3_0AB6D420C364_HS_3_map.gif",
           "height": 27,
           "width": 27
          }
         ]
        },
        "width": 167.7,
        "x": 1766.48
       },
       "rollOverDisplay": false
      },
      {
       "useHandCursor": true,
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_D042049D_DE8E_D7C1_41C3_0AB6D420C364_HS_4.png",
           "height": 54,
           "width": 54
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 167.7,
        "x": 3286.99,
        "height": 167.72,
        "y": 1934.4
       },
       "id": "overlay_D054AA32_DE92_72C3_41E0_BAE9ED1A14EA",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "map": {
        "height": 167.72,
        "y": 1934.4,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/map_D042049D_DE8E_D7C1_41C3_0AB6D420C364_HS_4_map.gif",
           "height": 27,
           "width": 27
          }
         ]
        },
        "width": 167.7,
        "x": 3286.99
       },
       "rollOverDisplay": false
      }
     ],
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "initialZoomFactor": 1,
     "minimumZoomFactor": 0.5,
     "maximumZoomFactor": 1.2,
     "width": 4509,
     "height": 4959,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "fieldOfViewOverlayRadiusScale": 0.3,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "id": "map_D042049D_DE8E_D7C1_41C3_0AB6D420C364"
    },
    "x": 1196.29
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360
 },
 {
  "touchControlMode": "drag_rotation",
  "buttonPlay": [
   "this.IconButton_2F49082C_25A1_A80A_4197_ED249D67C846",
   "this.IconButton_2F449E6D_25A3_A80A_41B8_DE07AD9987DF"
  ],
  "buttonStop": [
   "this.IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160",
   "this.IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19"
  ],
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "viewerArea": "this.MapViewer",
  "movementMode": "constrained"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_D210678E_DEBE_51C3_4199_15220FA52F53"
  },
  "idleSequence": "this.sequence_D210678E_DEBE_51C3_4199_15220FA52F53",
  "automaticZoomSpeed": 10,
  "id": "panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_camera",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_t.jpg",
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_t.jpg",
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_0_HS_3_0_map.gif",
           "height": 16,
           "width": 32
          }
         ]
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -6.76,
        "yaw": 38.5,
        "width": 60
       }
      ],
      "id": "overlay_D32DD95E_DEB2_5142_41B1_7722E6F4C7B3",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D0E2687E_DEB2_3F43_41D7_743EEE9CE4C1, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D0E2787E_DEB2_3F43_41EB_B4CDA5ABAACB, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_0_HS_3_0.gif",
           "height": 30,
           "width": 60
          }
         ]
        },
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -6.76,
        "yaw": 38.5
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_0_HS_2_1_0_map.gif",
           "height": 47,
           "width": 94
          }
         ]
        },
        "pitch": -7.55,
        "yaw": 38.66,
        "hfov": 11.25
       }
      ],
      "id": "overlay_D0CCAD36_DEB2_D6C2_41B3_D0AC90DCB83F",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB, this.camera_CF268852_DE92_7F43_41DB_CF98EB7A9A13); this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D35B8496_DEB2_57C3_419E_02D758107C70, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D35BB496_DEB2_57C3_41E0_4398265D0C49, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_0_HS_2_0.png",
           "height": 94,
           "width": 188
          }
         ]
        },
        "yaw": 38.66,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": -7.55,
        "hfov": 11.25
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_0_HS_1_0_map.gif",
           "height": 16,
           "width": 32
          }
         ]
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -8.34,
        "yaw": -43.61,
        "width": 60
       }
      ],
      "id": "overlay_D0E6D68E_DEB3_F3C2_41BA_E5E0D52C472B",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D363E2D2_DEB2_5343_41D1_474E79EBA038, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D36212D2_DEB2_5343_41E1_E7425FD02BD2, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_0_HS_1_0.gif",
           "height": 30,
           "width": 60
          }
         ]
        },
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -8.34,
        "yaw": -43.61
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_0_HS_0_1_0_map.gif",
           "height": 46,
           "width": 92
          }
         ]
        },
        "pitch": -8.44,
        "yaw": -44.08,
        "hfov": 11.02
       }
      ],
      "id": "overlay_D35BE845_DEB2_7F41_41E2_3CAD72745B5C",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6, this.camera_CF3E4848_DE92_7F4F_41EA_6CD868E83F8C); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D0C01FB0_DEB2_F1DE_41D3_ABAFD97A976C, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D0C0EFB0_DEB2_F1DE_41CF_B04545E5F33E, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_0_HS_0_0.png",
           "height": 92,
           "width": 184
          }
         ]
        },
        "yaw": -44.08,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": -8.44,
        "hfov": 11.02
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "hfovMin": 60,
  "class": "Panorama",
  "id": "panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08",
  "partial": false,
  "mapLocations": [
   {
    "y": 4176.29,
    "angle": 0,
    "class": "PanoramaMapLocation",
    "map": "this.map_D042049D_DE8E_D7C1_41C3_0AB6D420C364",
    "x": 1632.32
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_D3BD02AF_DEB2_73C1_41E9_D549ECC63AAF"
  },
  "idleSequence": "this.sequence_D3BD02AF_DEB2_73C1_41E9_D549ECC63AAF",
  "automaticZoomSpeed": 10,
  "id": "panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_camera",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_t.jpg",
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_t.jpg",
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_0_HS_3_0_map.gif",
           "height": 16,
           "width": 32
          }
         ]
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -17.11,
        "yaw": -166.14,
        "width": 60
       }
      ],
      "id": "overlay_D34B3AE5_DEB5_D341_41C5_ED9D6473221B",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D0D534F6_DEB6_5743_41DC_3DC8C256D1B8, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D0D554F6_DEB6_5743_41E3_9330F5D07357, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_0_HS_3_0.gif",
           "height": 30,
           "width": 60
          }
         ]
        },
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -17.11,
        "yaw": -166.14
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_0_HS_2_1_0_map.gif",
           "height": 71,
           "width": 142
          }
         ]
        },
        "pitch": -17.72,
        "yaw": -165.47,
        "hfov": 16.92
       }
      ],
      "id": "overlay_D03F4734_DEB6_72C7_41D1_4358E1141BC5",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218, this.camera_CFD7C81A_DE92_7EC3_41A2_3FE0B5923C75); this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D1FD9A47_DEB6_D341_41D7_A4F8EB071AEA, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D1FD8A47_DEB6_D341_41E9_2A7016FE6A2A, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_0_HS_2_0.png",
           "height": 142,
           "width": 284
          }
         ]
        },
        "yaw": -165.47,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": -17.72,
        "hfov": 16.92
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_0_HS_1_0_map.gif",
           "height": 16,
           "width": 32
          }
         ]
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -8.97,
        "yaw": 103.89,
        "width": 60
       }
      ],
      "id": "overlay_D095F53C_DEB6_D6C7_41B8_E33458B2E4CE",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D0117F32_DEB6_32C3_41C3_0F680BDE9D64, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D0110F32_DEB6_32C3_41A3_579142EE7C82, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_0_HS_1_0.gif",
           "height": 30,
           "width": 60
          }
         ]
        },
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -8.97,
        "yaw": 103.89
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_0_HS_0_1_0_map.gif",
           "height": 68,
           "width": 122
          }
         ]
        },
        "pitch": -9.57,
        "yaw": 102.86,
        "hfov": 14.66
       }
      ],
      "id": "overlay_D06D1324_DEB7_F2C7_41EB_30F207A5D975",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08, this.camera_CFDFC824_DE92_7EC7_4197_253EE74390AF); this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D0993CE2_DEB6_5743_41CE_E8C1C8DFE848, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D0992CE2_DEB6_5743_41EA_44CAEBEDACE4, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_0_HS_0_0.png",
           "height": 137,
           "width": 245
          }
         ]
        },
        "yaw": 102.86,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": -9.57,
        "hfov": 14.66
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "hfovMin": 60,
  "class": "Panorama",
  "id": "panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6",
  "partial": false,
  "mapLocations": [
   {
    "y": 1297.06,
    "angle": 184.68,
    "class": "PanoramaMapLocation",
    "map": "this.map_D042049D_DE8E_D7C1_41C3_0AB6D420C364",
    "x": 1850.33
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_D39000AF_DEB2_2FC1_41E9_B49342CF363F"
  },
  "idleSequence": "this.sequence_D39000AF_DEB2_2FC1_41E9_B49342CF363F",
  "automaticZoomSpeed": 10,
  "id": "panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_camera",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_t.jpg",
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_t.jpg",
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_0_HS_3_0_map.gif",
           "height": 16,
           "width": 32
          }
         ]
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -2.66,
        "yaw": -13.31,
        "width": 60
       }
      ],
      "id": "overlay_D0995F8C_DEB6_31C6_41CF_5B4F8D2738B5",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D01DADEA_DEB6_5143_41E5_AD6E0001881C, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D01D9DEA_DEB6_5143_41BE_5E8439E7A36F, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_0_HS_3_0.gif",
           "height": 30,
           "width": 60
          }
         ]
        },
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -2.66,
        "yaw": -13.31
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_0_HS_2_1_0_map.gif",
           "height": 34,
           "width": 76
          }
         ]
        },
        "pitch": -3.27,
        "yaw": -13.31,
        "hfov": 9.11
       }
      ],
      "id": "overlay_D06633AC_DEB5_D1C6_419D_C60B70B59908",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08, this.camera_CFEFE811_DE92_7EC1_41E9_10362AA26B33); this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D0C249E9_DEB2_3141_41E9_D52B0FA8B764, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D0C259E9_DEB2_3141_41E4_8E13A68136A7, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_0_HS_2_0.png",
           "height": 69,
           "width": 152
          }
         ]
        },
        "yaw": -13.31,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": -3.27,
        "hfov": 9.11
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_0_HS_1_0_map.gif",
           "height": 16,
           "width": 32
          }
         ]
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -5.67,
        "yaw": 145.66,
        "width": 60
       }
      ],
      "id": "overlay_D06AA6EC_DEB2_3347_41B3_1F4222C45817",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D1989436_DEB2_D6C3_41DD_8D7FFAFEA599, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D1988436_DEB2_D6C3_41DC_92D0EBC354EA, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_0_HS_1_0.gif",
           "height": 30,
           "width": 60
          }
         ]
        },
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -5.67,
        "yaw": 145.66
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_0_HS_0_1_0_map.gif",
           "height": 39,
           "width": 78
          }
         ]
        },
        "pitch": -5.97,
        "yaw": 145.74,
        "hfov": 9.43
       }
      ],
      "id": "overlay_D1EBA84B_DEB2_3F41_41E9_CB7FF5EEAA6B",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218, this.camera_CFE68807_DE92_7EC1_41C3_2C03BC467E5F); this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D0005B28_DEB2_52CF_41D7_E8F46C58C214, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D0004B28_DEB2_52CF_41E0_CCF7BE07A1A1, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_0_HS_0_0.png",
           "height": 79,
           "width": 157
          }
         ]
        },
        "yaw": 145.74,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": -5.97,
        "hfov": 9.43
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "hfovMin": 60,
  "class": "Panorama",
  "id": "panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB",
  "partial": false,
  "mapLocations": [
   {
    "y": 2018.26,
    "angle": 261.67,
    "class": "PanoramaMapLocation",
    "map": "this.map_D042049D_DE8E_D7C1_41C3_0AB6D420C364",
    "x": 3370.84
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_D2DF323E_DEBD_F2C3_41DF_2E165D1AA7AE"
  },
  "idleSequence": "this.sequence_D2DF323E_DEBD_F2C3_41DF_2E165D1AA7AE",
  "automaticZoomSpeed": 10,
  "id": "panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_camera",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_t.jpg",
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_t.jpg",
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_0_HS_5_0_map.gif",
           "height": 16,
           "width": 32
          }
         ]
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -6.42,
        "yaw": 31.56,
        "width": 60
       }
      ],
      "id": "overlay_D0CB2BBA_DEB2_51C3_41C3_3C2B39071A39",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D07F0EF3_DEB2_3341_41EA_913A3F39106D, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D07F1EF4_DEB2_3347_41D0_BC963ED761BA, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_0_HS_5_0.gif",
           "height": 30,
           "width": 60
          }
         ]
        },
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -6.42,
        "yaw": 31.56
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_0_HS_4_1_0_map.gif",
           "height": 46,
           "width": 96
          }
         ]
        },
        "pitch": -6.33,
        "yaw": 32.04,
        "hfov": 11.58
       }
      ],
      "id": "overlay_D04D03DA_DEB2_F143_41E1_102D21B1C5AA",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6, this.camera_CFCE5836_DE92_7EC3_41D0_8ADDE0C36415); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D1B9F31E_DEB2_52C2_41DC_662BACF8DA1D, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D1B9E31E_DEB2_52C2_41E0_9A284AC08EF4, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_0_HS_4_0.png",
           "height": 93,
           "width": 193
          }
         ]
        },
        "yaw": 32.04,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": -6.33,
        "hfov": 11.58
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_0_HS_3_0_map.gif",
           "height": 16,
           "width": 32
          }
         ]
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -3.86,
        "yaw": -106.19,
        "width": 60
       }
      ],
      "id": "overlay_D02A8F2A_DE8D_F2C3_41C4_BFBE9907BB5B",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D1BBB310_DE8E_72DF_41EA_DA646D75C27A, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D1BB8311_DE8E_72C1_41CE_77B1BFC31C7F, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_0_HS_3_0.gif",
           "height": 30,
           "width": 60
          }
         ]
        },
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -3.86,
        "yaw": -106.19
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_0_HS_2_1_0_map.gif",
           "height": 57,
           "width": 108
          }
         ]
        },
        "pitch": -4,
        "yaw": -106.47,
        "hfov": 12.94
       }
      ],
      "id": "overlay_D18FF6F2_DE8E_5343_41E8_03247416BAAD",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB, this.camera_CFC6382D_DE92_7EC1_41E7_F24443DC1BE4); this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D0024997_DE8E_F1C1_41C5_BB927AADB5F1, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D0025997_DE8E_F1C1_41C2_4B0CAFB65FF2, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_0_HS_2_0.png",
           "height": 114,
           "width": 216
          }
         ]
        },
        "yaw": -106.47,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": -4,
        "hfov": 12.94
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "height": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_0_HS_1_0_map.gif",
           "height": 16,
           "width": 32
          }
         ]
        },
        "offsetX": 30,
        "offsetY": 15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "pitch": -10.22,
        "yaw": 107.09,
        "width": 60
       }
      ],
      "id": "overlay_D1A42F42_DE8E_7143_41BE_74FB734F3418",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D077AC57_DE8F_F741_41E0_8540036BA72F, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D077BC57_DE8F_F741_41E1_74A82B2CFFF7, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_0_HS_1_0.gif",
           "height": 30,
           "width": 60
          }
         ]
        },
        "class": "FlatHotspotPanoramaOverlayImage",
        "width": 60,
        "height": 30,
        "offsetX": 30,
        "offsetY": 15,
        "pitch": -10.22,
        "yaw": 107.09
       }
      ],
      "rollOverDisplay": false
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_0_HS_0_1_0_map.gif",
           "height": 50,
           "width": 91
          }
         ]
        },
        "pitch": -10.51,
        "yaw": 107.56,
        "hfov": 10.94
       }
      ],
      "id": "overlay_D04270B2_DE8E_2FC3_41D4_6628971FA0C3",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40, this.camera_CF36183F_DE92_7EC1_41D8_84A78F61A42C); this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, true, 0, this.effect_D1FA154A_DE8E_5143_41CF_B5FC60C767C4, 'showEffect', false); this.setComponentVisibility(this.Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE, false, 1000, this.effect_D1FA754A_DE8E_5143_41EA_77F397226C70, 'hideEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_0_HS_0_0.png",
           "height": 100,
           "width": 182
          }
         ]
        },
        "yaw": 107.56,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": -10.51,
        "hfov": 10.94
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "hfovMin": 60,
  "class": "Panorama",
  "id": "panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218",
  "partial": false,
  "mapLocations": [
   {
    "y": 833.02,
    "angle": 239.22,
    "class": "PanoramaMapLocation",
    "map": "this.map_D042049D_DE8E_D7C1_41C3_0AB6D420C364",
    "x": 2811.83
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_D20E419E_DEBE_31C3_4162_0FCC114E24A2"
  },
  "idleSequence": "this.sequence_D20E419E_DEBE_31C3_4162_0FCC114E24A2",
  "automaticZoomSpeed": 10,
  "id": "panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_camera",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CFF5E7F3_DE92_7141_41D3_BE96916589A3, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_CFF5E7F3_DE92_7141_41D3_BE96916589A3",
    "camera": "this.panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CFF477F3_DE92_7141_41AC_A60BE696F958, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_CFF477F3_DE92_7141_41AC_A60BE696F958",
    "camera": "this.panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CFF497F4_DE92_7147_41C2_269943FC1E35, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_CFF497F4_DE92_7147_41C2_269943FC1E35",
    "camera": "this.panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CFF767F4_DE92_7147_41B5_A31DBC646A08, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_CFF767F4_DE92_7147_41B5_A31DBC646A08",
    "camera": "this.panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CFF797F4_DE92_7147_41D1_17207A300067, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_CFF797F4_DE92_7147_41D1_17207A300067",
    "camera": "this.panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D5765F0B_DEB2_D2C1_41E8_DF446496CD40_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist, 0, 1)"
   },
   {
    "media": "this.panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D21E7E87_DEB2_D3C2_41DE_9035F9889B08_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist, 1, 2)"
   },
   {
    "media": "this.panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D57716B6_DEB2_F3C3_41E8_0DD8F1F8A9A6_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist, 2, 3)"
   },
   {
    "media": "this.panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D575EEB4_DEB2_F3C7_41C3_30229A6663CB_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist, 3, 4)"
   },
   {
    "media": "this.panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D57656E3_DEB2_D341_41DF_26A60DDC4218_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist, 4, 0)"
   }
  ],
  "id": "ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist"
 },
 "this.map_D042049D_DE8E_D7C1_41C3_0AB6D420C364",
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_D042049D_DE8E_D7C1_41C3_0AB6D420C364",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_CFF537F3_DE92_7141_41CB_CAACDC4E6B5C"
 },
 {
  "class": "SlideOutEffect",
  "to": "bottom",
  "easing": "linear",
  "id": "effect_29A8E965_25A0_A83A_41C1_00C87B03BABF",
  "duration": 200
 },
 {
  "class": "SlideInEffect",
  "easing": "linear",
  "id": "effect_2EA4AA54_25A0_A81A_41BD_8E5E1E6F3D96",
  "duration": 200,
  "from": "bottom"
 },
 {
  "class": "SlideInEffect",
  "easing": "linear",
  "id": "effect_29F36C46_2501_FD29_41B0_70F27BED7C8B",
  "duration": 200,
  "from": "left"
 },
 {
  "class": "SlideOutEffect",
  "to": "left",
  "easing": "linear",
  "id": "effect_283F6B08_2501_3B39_4196_62FBD00D9F58",
  "duration": 200
 },
 {
  "class": "SlideInEffect",
  "easing": "linear",
  "id": "effect_29F36EC6_25A3_6803_4185_623A1E7D4585",
  "duration": 200,
  "from": "left"
 },
 {
  "class": "SlideOutEffect",
  "to": "left",
  "easing": "linear",
  "id": "effect_2E678A25_25A0_A83A_41AD_2F6489060D7A",
  "duration": 200
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D3DF9CD6_DEBE_7743_41E4_11C6191C0D5B",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D3DFFCD6_DEBE_7743_41C3_ACB907409F17",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D3255702_DEBE_D2C3_41E7_67C2DE816F8F",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D3254702_DEBE_D2C3_41D3_DE449F5AF43C",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D0E2687E_DEB2_3F43_41D7_743EEE9CE4C1",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D0E2787E_DEB2_3F43_41EB_B4CDA5ABAACB",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D35B8496_DEB2_57C3_419E_02D758107C70",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D35BB496_DEB2_57C3_41E0_4398265D0C49",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D363E2D2_DEB2_5343_41D1_474E79EBA038",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D36212D2_DEB2_5343_41E1_E7425FD02BD2",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D0C01FB0_DEB2_F1DE_41D3_ABAFD97A976C",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D0C0EFB0_DEB2_F1DE_41CF_B04545E5F33E",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D0D534F6_DEB6_5743_41DC_3DC8C256D1B8",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D0D554F6_DEB6_5743_41E3_9330F5D07357",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D1FD9A47_DEB6_D341_41D7_A4F8EB071AEA",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D1FD8A47_DEB6_D341_41E9_2A7016FE6A2A",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D0117F32_DEB6_32C3_41C3_0F680BDE9D64",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D0110F32_DEB6_32C3_41A3_579142EE7C82",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D0993CE2_DEB6_5743_41CE_E8C1C8DFE848",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D0992CE2_DEB6_5743_41EA_44CAEBEDACE4",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D01DADEA_DEB6_5143_41E5_AD6E0001881C",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D01D9DEA_DEB6_5143_41BE_5E8439E7A36F",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D0C249E9_DEB2_3141_41E9_D52B0FA8B764",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D0C259E9_DEB2_3141_41E4_8E13A68136A7",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D1989436_DEB2_D6C3_41DD_8D7FFAFEA599",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D1988436_DEB2_D6C3_41DC_92D0EBC354EA",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D0005B28_DEB2_52CF_41D7_E8F46C58C214",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D0004B28_DEB2_52CF_41E0_CCF7BE07A1A1",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D07F0EF3_DEB2_3341_41EA_913A3F39106D",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D07F1EF4_DEB2_3347_41D0_BC963ED761BA",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D1B9F31E_DEB2_52C2_41DC_662BACF8DA1D",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D1B9E31E_DEB2_52C2_41E0_9A284AC08EF4",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D1BBB310_DE8E_72DF_41EA_DA646D75C27A",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D1BB8311_DE8E_72C1_41CE_77B1BFC31C7F",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D0024997_DE8E_F1C1_41C5_BB927AADB5F1",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D0025997_DE8E_F1C1_41C2_4B0CAFB65FF2",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D077AC57_DE8F_F741_41E0_8540036BA72F",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D077BC57_DE8F_F741_41E1_74A82B2CFFF7",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_D1FA154A_DE8E_5143_41CF_B5FC60C767C4",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_D1FA754A_DE8E_5143_41EA_77F397226C70",
  "duration": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_CFE69807_DE92_7EC1_41E9_632FB3848BA1"
  },
  "idleSequence": "this.sequence_CFE69807_DE92_7EC1_41E9_632FB3848BA1",
  "automaticZoomSpeed": 10,
  "id": "camera_CFE68807_DE92_7EC1_41C3_2C03BC467E5F",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 73.53
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_CFEFF811_DE92_7EC1_41E2_A02194C0C611"
  },
  "idleSequence": "this.sequence_CFEFF811_DE92_7EC1_41E2_A02194C0C611",
  "automaticZoomSpeed": 10,
  "id": "camera_CFEFE811_DE92_7EC1_41E9_10362AA26B33",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -141.34
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_CFD6381A_DE92_7EC3_41D2_57EA554E05CD"
  },
  "idleSequence": "this.sequence_CFD6381A_DE92_7EC3_41D2_57EA554E05CD",
  "automaticZoomSpeed": 10,
  "id": "camera_CFD7C81A_DE92_7EC3_41A2_3FE0B5923C75",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -147.96
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_CFDE2824_DE92_7EC7_41AB_040EFA864D9C"
  },
  "idleSequence": "this.sequence_CFDE2824_DE92_7EC7_41AB_040EFA864D9C",
  "automaticZoomSpeed": 10,
  "id": "camera_CFDFC824_DE92_7EC7_4197_253EE74390AF",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 135.92
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_CFC6082D_DE92_7EC1_41D2_52A6A9691407"
  },
  "idleSequence": "this.sequence_CFC6082D_DE92_7EC1_41D2_52A6A9691407",
  "automaticZoomSpeed": 10,
  "id": "camera_CFC6382D_DE92_7EC1_41E7_F24443DC1BE4",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -34.26
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_CFCEB836_DE92_7EC3_41B9_09830E8B5B59"
  },
  "idleSequence": "this.sequence_CFCEB836_DE92_7EC3_41B9_09830E8B5B59",
  "automaticZoomSpeed": 10,
  "id": "camera_CFCE5836_DE92_7EC3_41D0_8ADDE0C36415",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 14.53
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_CF36683F_DE92_7EC1_41E2_1DFD63D048C3"
  },
  "idleSequence": "this.sequence_CF36683F_DE92_7EC1_41E2_1DFD63D048C3",
  "automaticZoomSpeed": 10,
  "id": "camera_CF36183F_DE92_7EC1_41D8_84A78F61A42C",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 152.82
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_CF3EA848_DE92_7F4F_41C6_7D25CB1AD94F"
  },
  "idleSequence": "this.sequence_CF3EA848_DE92_7F4F_41C6_7D25CB1AD94F",
  "automaticZoomSpeed": 10,
  "id": "camera_CF3E4848_DE92_7F4F_41EA_6CD868E83F8C",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -77.14
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_CF269852_DE92_7F43_41EA_2508B2DBF273"
  },
  "idleSequence": "this.sequence_CF269852_DE92_7F43_41EA_2508B2DBF273",
  "automaticZoomSpeed": 10,
  "id": "camera_CF268852_DE92_7F43_41DB_CF98EB7A9A13",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 166.69
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_D100F8A8_DE92_7FCF_41E5_1A1979FD7F1E"
  },
  "idleSequence": "this.sequence_D100F8A8_DE92_7FCF_41E5_1A1979FD7F1E",
  "automaticZoomSpeed": 10,
  "id": "camera_D100E8A8_DE92_7FCF_41E3_4386E130D0EB",
  "class": "PanoramaCamera",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -72.44
  }
 }
], "children": [
 {
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "class": "ViewerArea",
  "toolTipShadowHorizontalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "progressBarBorderRadius": 0,
  "top": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderSize": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarBorderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "shadow": false,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "toolTipPaddingBottom": 4,
  "paddingTop": 0,
  "toolTipPaddingRight": 6,
  "playbackBarHeadShadow": true,
  "transitionMode": "blending",
  "toolTipShadowSpread": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipFontColor": "#606060",
  "playbackBarHeight": 10,
  "toolTipOpacity": 1,
  "progressBackgroundOpacity": 1,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadOpacity": 1,
  "toolTipFontStyle": "normal",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "height": "100%",
  "toolTipShadowOpacity": 1,
  "id": "MainViewer",
  "playbackBarLeft": 0,
  "paddingLeft": 0,
  "progressBorderSize": 0,
  "playbackBarBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBottom": 5,
  "toolTipFontWeight": "normal",
  "toolTipTextShadowBlurRadius": 3,
  "minWidth": 100,
  "toolTipBorderRadius": 3,
  "playbackBarProgressBorderColor": "#000000",
  "progressBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBorderRadius": 0,
  "minHeight": 50,
  "paddingBottom": 0,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadBorderSize": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "progressLeft": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressHeight": 10,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderSize": 0,
  "progressRight": 0,
  "left": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "right": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "progressOpacity": 1,
  "progressBorderRadius": 0,
  "paddingRight": 0,
  "playbackBarHeadWidth": 6,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBottom": 0,
  "playbackBarProgressOpacity": 1,
  "progressBarOpacity": 1,
  "toolTipFontSize": 12,
  "playbackBarHeadShadowVerticalLength": 0
 },
 {
  "class": "Container",
  "paddingLeft": 0,
  "top": "0%",
  "minWidth": 1,
  "borderRadius": 0,
  "overflow": "scroll",
  "borderSize": 0,
  "backgroundColorRatios": [
   0
  ],
  "layout": "absolute",
  "shadow": false,
  "paddingTop": 0,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "minHeight": 1,
  "verticalAlign": "top",
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#000000"
  ],
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "paddingRight": 0,
  "width": "100%",
  "id": "Container_2FD666EC_2497_22F8_41B6_DFA9C76C95BE",
  "gap": 10,
  "backgroundOpacity": 0.25,
  "height": "100%",
  "visible": false
 },
 {
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderSize": 0,
  "bottom": "7.46%",
  "toolTipShadowColor": "#333333",
  "playbackBarBorderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "shadow": false,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "toolTipPaddingBottom": 4,
  "paddingTop": 0,
  "toolTipPaddingRight": 6,
  "playbackBarHeadShadow": true,
  "transitionMode": "blending",
  "toolTipShadowSpread": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipFontColor": "#606060",
  "playbackBarHeight": 10,
  "toolTipOpacity": 1,
  "progressBackgroundOpacity": 1,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadOpacity": 1,
  "toolTipFontStyle": "normal",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "width": "19.636%",
  "height": "42.434%",
  "toolTipShadowOpacity": 1,
  "id": "MapViewer",
  "visible": false,
  "playbackBarBorderRadius": 0,
  "paddingLeft": 0,
  "progressBorderSize": 0,
  "playbackBarLeft": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBottom": 0,
  "toolTipFontWeight": "normal",
  "toolTipTextShadowBlurRadius": 3,
  "minWidth": 1,
  "toolTipBorderRadius": 3,
  "playbackBarProgressBorderColor": "#000000",
  "progressBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBorderRadius": 0,
  "minHeight": 1,
  "paddingBottom": 0,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadBorderSize": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "progressLeft": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressHeight": 10,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderSize": 0,
  "progressRight": 0,
  "left": "0%",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressOpacity": 1,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "progressBorderRadius": 0,
  "paddingRight": 0,
  "playbackBarHeadWidth": 6,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBottom": 2,
  "playbackBarProgressOpacity": 1,
  "progressBarOpacity": 1,
  "toolTipFontSize": 12,
  "playbackBarHeadShadowVerticalLength": 0
 },
 {
  "class": "HTMLText",
  "paddingLeft": 0,
  "top": "10.19%",
  "minWidth": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "paddingBottom": 0,
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:25px;\">The Shore Temple</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:16px;\">Mahabalipuram, Tamilnadu</SPAN></SPAN></DIV></div>",
  "scrollBarMargin": 2,
  "left": "4%",
  "scrollBarWidth": 10,
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "scrollBarVisible": "rollOver",
  "width": 374,
  "height": 61,
  "id": "HTMLText_2E9140AE_2596_056D_41A5_466399BA640C",
  "backgroundOpacity": 0
 },
 {
  "itemBackgroundColor": [],
  "class": "ThumbnailList",
  "paddingLeft": 20,
  "itemLabelHorizontalAlign": "center",
  "itemThumbnailShadowColor": "#000000",
  "itemLabelFontWeight": "normal",
  "itemThumbnailShadowSpread": 1,
  "itemLabelFontStyle": "normal",
  "bottom": "0%",
  "borderSize": 0,
  "itemVerticalAlign": "middle",
  "minWidth": 1,
  "itemThumbnailOpacity": 1,
  "borderRadius": 5,
  "itemLabelFontColor": "#FFFFFF",
  "layout": "horizontal",
  "itemLabelFontFamily": "Arial",
  "backgroundColorRatios": [],
  "scrollBarColor": "#FFFFFF",
  "itemThumbnailShadowBlurRadius": 4,
  "paddingTop": 10,
  "shadow": false,
  "itemLabelTextDecoration": "none",
  "itemLabelFontSize": 14,
  "paddingBottom": 10,
  "minHeight": 1,
  "scrollBarMargin": 2,
  "verticalAlign": "top",
  "playList": "this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist",
  "itemThumbnailShadowOpacity": 0.8,
  "selectedItemLabelFontWeight": "bold",
  "itemBackgroundOpacity": 0,
  "itemThumbnailShadowVerticalLength": 3,
  "itemHorizontalAlign": "center",
  "itemOpacity": 1,
  "itemLabelGap": 9,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemPaddingTop": 3,
  "itemThumbnailShadow": true,
  "itemThumbnailScaleMode": "fit_outside",
  "itemPaddingBottom": 3,
  "backgroundColorDirection": "vertical",
  "left": "0%",
  "itemLabelPosition": "bottom",
  "itemPaddingRight": 3,
  "itemBorderRadius": 0,
  "itemPaddingLeft": 3,
  "horizontalAlign": "left",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "backgroundColor": [],
  "scrollBarWidth": 10,
  "paddingRight": 20,
  "itemBackgroundColorDirection": "vertical",
  "itemBackgroundColorRatios": [],
  "height": 145,
  "scrollBarVisible": "rollOver",
  "id": "ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1",
  "width": "100%",
  "itemMode": "normal",
  "backgroundOpacity": 0.2,
  "visible": false,
  "itemThumbnailBorderRadius": 5
 },
 {
  "transparencyActive": false,
  "class": "IconButton",
  "paddingLeft": 0,
  "bottom": "20%",
  "minWidth": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "mode": "push",
  "maxWidth": 50,
  "click": "this.setComponentVisibility(this.IconButton_2FA3A1A0_25A0_B83A_41A0_C0A709C85806, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1, false, 0, this.effect_29A8E965_25A0_A83A_41C1_00C87B03BABF, 'hideEffect', false); this.setComponentVisibility(this.IconButton_2C56A7B1_25A1_B81A_41A2_BBB4ABFBE7ED, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2EC03B6E_25BF_A806_4180_FFE3E20BC39B, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F7D8F06_25A0_E806_4196_B77177ECF11E, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F449E6D_25A3_A80A_41B8_DE07AD9987DF, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19, false, 0, null, null, false); this.setComponentVisibility(this.Image_2BD6D83C_248B_ED58_4170_5B8DBD5C72EC, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160, true, 0, null, null, false)",
  "maxHeight": 50,
  "cursor": "hand",
  "paddingRight": 0,
  "right": "32.24%",
  "iconURL": "skin/IconButton_2C56A7B1_25A1_B81A_41A2_BBB4ABFBE7ED.png",
  "horizontalAlign": "center",
  "width": 55,
  "height": 55,
  "id": "IconButton_2C56A7B1_25A1_B81A_41A2_BBB4ABFBE7ED",
  "backgroundOpacity": 0,
  "visible": false
 },
 {
  "transparencyActive": false,
  "class": "IconButton",
  "paddingLeft": 0,
  "bottom": "4%",
  "minWidth": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "mode": "push",
  "maxWidth": 50,
  "click": "this.setComponentVisibility(this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1, true, 0, this.effect_2EA4AA54_25A0_A81A_41BD_8E5E1E6F3D96, 'showEffect', false); this.setComponentVisibility(this.IconButton_2FA3A1A0_25A0_B83A_41A0_C0A709C85806, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2C56A7B1_25A1_B81A_41A2_BBB4ABFBE7ED, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2EC03B6E_25BF_A806_4180_FFE3E20BC39B, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19, true, 0, null, null, false); this.setComponentVisibility(this.Image_2BD6D83C_248B_ED58_4170_5B8DBD5C72EC, false, 0, null, null, false); this.setComponentVisibility(this.Image_2B343840_24F4_ED28_4196_61F9606F6D0E, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F49082C_25A1_A80A_4197_ED249D67C846, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160, false, 0, null, null, false)",
  "maxHeight": 50,
  "cursor": "hand",
  "paddingRight": 0,
  "right": "32.24%",
  "iconURL": "skin/IconButton_2FA3A1A0_25A0_B83A_41A0_C0A709C85806.png",
  "horizontalAlign": "center",
  "width": 55,
  "height": 55,
  "id": "IconButton_2FA3A1A0_25A0_B83A_41A0_C0A709C85806",
  "backgroundOpacity": 0
 },
 {
  "class": "Image",
  "paddingLeft": 0,
  "bottom": "4%",
  "minWidth": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "maxWidth": 115,
  "click": "this.setComponentVisibility(this.Image_2BD6D83C_248B_ED58_4170_5B8DBD5C72EC, false, 0, null, null, false); this.setComponentVisibility(this.Image_2B343840_24F4_ED28_4196_61F9606F6D0E, true, 0, null, null, false); this.setComponentVisibility(this.MapViewer, true, 0, this.effect_29F36C46_2501_FD29_41B0_70F27BED7C8B, 'showEffect', false)",
  "left": "36%",
  "maxHeight": 115,
  "paddingRight": 0,
  "horizontalAlign": "center",
  "width": 50,
  "height": 50,
  "id": "Image_2BD6D83C_248B_ED58_4170_5B8DBD5C72EC",
  "backgroundOpacity": 0,
  "url": "skin/Image_2BD6D83C_248B_ED58_4170_5B8DBD5C72EC.png"
 },
 {
  "class": "Image",
  "paddingLeft": 0,
  "bottom": "4%",
  "minWidth": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "maxWidth": 115,
  "click": "this.setComponentVisibility(this.Image_2BD6D83C_248B_ED58_4170_5B8DBD5C72EC, true, 0, null, null, false); this.setComponentVisibility(this.Image_2B343840_24F4_ED28_4196_61F9606F6D0E, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, this.effect_283F6B08_2501_3B39_4196_62FBD00D9F58, 'hideEffect', false)",
  "left": "36%",
  "maxHeight": 115,
  "paddingRight": 0,
  "horizontalAlign": "center",
  "width": 50,
  "height": 50,
  "id": "Image_2B343840_24F4_ED28_4196_61F9606F6D0E",
  "backgroundOpacity": 0,
  "url": "skin/Image_2B343840_24F4_ED28_4196_61F9606F6D0E.png",
  "visible": false
 },
 {
  "transparencyActive": false,
  "class": "IconButton",
  "paddingLeft": 0,
  "bottom": "20%",
  "minWidth": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "mode": "push",
  "maxWidth": 50,
  "click": "this.setComponentVisibility(this.MapViewer, true, 0, this.effect_29F36EC6_25A3_6803_4185_623A1E7D4585, 'showEffect', false); this.setComponentVisibility(this.IconButton_2EC03B6E_25BF_A806_4180_FFE3E20BC39B, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F7D8F06_25A0_E806_4196_B77177ECF11E, true, 0, null, null, false)",
  "left": "36%",
  "maxHeight": 50,
  "paddingRight": 0,
  "iconURL": "skin/IconButton_2EC03B6E_25BF_A806_4180_FFE3E20BC39B.png",
  "horizontalAlign": "center",
  "cursor": "hand",
  "width": 115,
  "height": 115,
  "id": "IconButton_2EC03B6E_25BF_A806_4180_FFE3E20BC39B",
  "backgroundOpacity": 0,
  "visible": false
 },
 {
  "transparencyActive": false,
  "class": "IconButton",
  "paddingLeft": 0,
  "bottom": "20%",
  "minWidth": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "mode": "push",
  "maxWidth": 50,
  "click": "this.setComponentVisibility(this.MapViewer, false, 0, this.effect_2E678A25_25A0_A83A_41AD_2F6489060D7A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_2EC03B6E_25BF_A806_4180_FFE3E20BC39B, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F7D8F06_25A0_E806_4196_B77177ECF11E, false, 0, null, null, false)",
  "left": "36%",
  "maxHeight": 50,
  "paddingRight": 0,
  "iconURL": "skin/IconButton_2F7D8F06_25A0_E806_4196_B77177ECF11E.png",
  "horizontalAlign": "center",
  "cursor": "hand",
  "width": 115,
  "height": 115,
  "id": "IconButton_2F7D8F06_25A0_E806_4196_B77177ECF11E",
  "backgroundOpacity": 0,
  "visible": false
 },
 {
  "transparencyActive": false,
  "class": "IconButton",
  "paddingLeft": 0,
  "bottom": "4%",
  "minWidth": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "mode": "push",
  "maxWidth": 115,
  "click": "this.setComponentVisibility(this.IconButton_2F49082C_25A1_A80A_4197_ED249D67C846, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160, true, 0, null, null, false)",
  "maxHeight": 115,
  "cursor": "hand",
  "paddingRight": 0,
  "right": "46%",
  "iconURL": "skin/IconButton_2F49082C_25A1_A80A_4197_ED249D67C846.png",
  "horizontalAlign": "center",
  "width": 50,
  "height": 50,
  "id": "IconButton_2F49082C_25A1_A80A_4197_ED249D67C846",
  "backgroundOpacity": 0,
  "visible": false
 },
 {
  "transparencyActive": false,
  "class": "IconButton",
  "paddingLeft": 0,
  "bottom": "4%",
  "minWidth": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "mode": "push",
  "maxWidth": 115,
  "click": "this.setComponentVisibility(this.IconButton_2F49082C_25A1_A80A_4197_ED249D67C846, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160, false, 0, null, null, false)",
  "maxHeight": 115,
  "cursor": "hand",
  "paddingRight": 0,
  "right": "46%",
  "iconURL": "skin/IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160.png",
  "horizontalAlign": "center",
  "width": 50,
  "height": 50,
  "id": "IconButton_2E835B70_25A0_E81A_41B2_EE1ED4F29160",
  "backgroundOpacity": 0
 },
 {
  "transparencyActive": false,
  "class": "IconButton",
  "paddingLeft": 0,
  "bottom": "20%",
  "minWidth": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "mode": "push",
  "maxWidth": 115,
  "click": "this.setComponentVisibility(this.IconButton_2F449E6D_25A3_A80A_41B8_DE07AD9987DF, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19, true, 0, null, null, false)",
  "maxHeight": 115,
  "cursor": "hand",
  "paddingRight": 0,
  "right": "46%",
  "iconURL": "skin/IconButton_2F449E6D_25A3_A80A_41B8_DE07AD9987DF.png",
  "horizontalAlign": "center",
  "width": 50,
  "height": 50,
  "id": "IconButton_2F449E6D_25A3_A80A_41B8_DE07AD9987DF",
  "backgroundOpacity": 0,
  "visible": false
 },
 {
  "transparencyActive": false,
  "class": "IconButton",
  "paddingLeft": 0,
  "bottom": "20%",
  "minWidth": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "mode": "push",
  "maxWidth": 115,
  "click": "this.setComponentVisibility(this.IconButton_2F449E6D_25A3_A80A_41B8_DE07AD9987DF, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19, false, 0, null, null, false)",
  "maxHeight": 115,
  "cursor": "hand",
  "paddingRight": 0,
  "right": "46%",
  "iconURL": "skin/IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19.png",
  "horizontalAlign": "center",
  "width": 50,
  "height": 50,
  "id": "IconButton_2F754881_25A0_A8FA_41B6_17A127A62C19",
  "backgroundOpacity": 0,
  "visible": false
 },
 {
  "class": "Image",
  "paddingLeft": 0,
  "top": "2.82%",
  "minWidth": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "maxWidth": 722,
  "click": "var newWindow = window.open(\"http://www.inrootz.in\", \"_blank\"); newWindow.focus()",
  "maxHeight": 179,
  "left": "3.68%",
  "paddingRight": 0,
  "horizontalAlign": "center",
  "cursor": "hand",
  "width": "9.394%",
  "height": "3.728%",
  "id": "Image_2BBB3D75_2501_FFEB_4192_0014355190F6",
  "backgroundOpacity": 0,
  "url": "skin/Image_2BBB3D75_2501_FFEB_4192_0014355190F6.png"
 },
 {
  "transparencyActive": false,
  "class": "IconButton",
  "paddingLeft": 0,
  "top": "7.24%",
  "borderSize": 0,
  "minWidth": 1,
  "borderRadius": 0,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "mode": "push",
  "maxWidth": 55,
  "click": "this.setComponentVisibility(this.IconButton_45C47D0F_4874_CC7C_41A8_359C39064A07, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_4524FE23_4875_4CA4_41C4_9195914B8F2F, false, 0, null, null, false)",
  "cursor": "hand",
  "maxHeight": 55,
  "paddingRight": 0,
  "right": "2.18%",
  "iconURL": "skin/IconButton_4524FE23_4875_4CA4_41C4_9195914B8F2F.png",
  "horizontalAlign": "center",
  "width": 55,
  "height": 55,
  "id": "IconButton_4524FE23_4875_4CA4_41C4_9195914B8F2F",
  "backgroundOpacity": 0,
  "visible": false
 },
 {
  "transparencyActive": false,
  "class": "IconButton",
  "paddingLeft": 0,
  "top": "7.24%",
  "borderSize": 0,
  "minWidth": 1,
  "borderRadius": 0,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "mode": "push",
  "maxWidth": 55,
  "click": "this.setComponentVisibility(this.IconButton_45C47D0F_4874_CC7C_41A8_359C39064A07, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_4524FE23_4875_4CA4_41C4_9195914B8F2F, true, 0, null, null, false)",
  "cursor": "hand",
  "maxHeight": 55,
  "paddingRight": 0,
  "right": "2.18%",
  "iconURL": "skin/IconButton_45C47D0F_4874_CC7C_41A8_359C39064A07.png",
  "horizontalAlign": "center",
  "width": 55,
  "height": 55,
  "id": "IconButton_45C47D0F_4874_CC7C_41A8_359C39064A07",
  "backgroundOpacity": 0
 }
], 
 "height": "100%",
 "class": "Player",
 "paddingLeft": 0,
 "start": "this.syncPlaylists([this.ThumbnailList_2C36D197_25A7_5806_419B_D8BE7F3905E1_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_CFF537F3_DE92_7141_41CB_CAACDC4E6B5C.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_4524FE23_4875_4CA4_41C4_9195914B8F2F,this.IconButton_45C47D0F_4874_CC7C_41A8_359C39064A07].forEach(function(component) { component.set('visible', false); }) }",
 "minWidth": 20,
 "borderRadius": 0,
 "overflow": "visible",
 "borderSize": 0,
 "layout": "absolute",
 "shadow": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "minHeight": 20,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "buttonEnterFullscreen": "this.IconButton_45C47D0F_4874_CC7C_41A8_359C39064A07",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "buttonExitFullscreen": "this.IconButton_4524FE23_4875_4CA4_41C4_9195914B8F2F",
 "paddingRight": 0,
 "width": "100%",
 "id": "rootPlayer",
 "gap": 10,
 "vrPolyfillScale": 0.5,
 "scripts": {
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); else htmlText.set('html', ''); }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "existsKey": function(key){  return key in window; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); if(!endObject) return; } else{ endObject = playListItem.get('media'); } endObject.bind('end', endFunction, this); } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ components[i].set('visible', visible); } }; if (this.rootPlayer.touchEnabled){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if(media.get('class') == 'Video360' && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama'); else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); }
 }
})