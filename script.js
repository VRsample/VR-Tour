TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 66,
           "width": 88
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.42,
        "hfov": 15.42,
        "yaw": -2.17
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E9920096_FC14_300C_41E6_967FB15719EF",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E989C6CB_FC14_3004_41CC_1FC7E25A4A41, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 132,
           "width": 176
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 15.42,
        "pitch": 0.42,
        "yaw": -2.17
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 53,
           "width": 94
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.18,
        "hfov": 16.51,
        "yaw": -83.94
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EA5E1570_FC14_D004_41C0_54E7B022F2E3",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_EA619EA9_FC14_5004_41CE_C3DBD7D84AED, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 106,
           "width": 189
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 16.51,
        "pitch": -19.18,
        "yaw": -83.94
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 40.77,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 20.39,
        "offsetY": 20.39,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_0_HS_9_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.36,
        "yaw": -2.74,
        "width": 40.77
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0BDF046A_23E8_E9C7_417A_F50636CFABCE",
      "useHandCursor": true,
      "areas": [
       {
        "toolTip": "Lobby",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_436C1B42_4F77_54CB_41C4_A68387BA7516, this.camera_1364AB83_1CD5_7D80_41AA_30BAB11970FF); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_06BAB0A8_23E9_2943_41AB_E40CBAD75C2B, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_0_HS_9_0.gif",
           "class": "ImageResourceLevel",
           "height": 40,
           "width": 40
          }
         ],
         "class": "ImageResource"
        },
        "width": 62.86,
        "height": 62.86,
        "offsetX": 20.39,
        "offsetY": 20.39,
        "pitch": 0.36,
        "yaw": -2.74
       }
      ]
     },
     {
      "maps": [
       {
        "height": 17.56,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 17.56,
        "offsetY": 8.78,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_0_HS_10_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.03,
        "yaw": -83.17,
        "width": 35.12
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_297CD129_22A2_9B19_41B5_2A53C4E5C493",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E1356_FC1C_300C_41C0_72C59E591498, this.camera_136AFBA9_1CD5_7D80_41B9_04B0D7033C48); this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_2FB83B3D_22A1_8F79_41B9_1671F9F9C163, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_0_HS_10_0.gif",
           "class": "ImageResourceLevel",
           "height": 17,
           "width": 35
          }
         ],
         "class": "ImageResource"
        },
        "width": 54.14,
        "height": 27.07,
        "offsetX": 17.56,
        "offsetY": 8.78,
        "pitch": -19.03,
        "yaw": -83.17
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "Lobby Entrance",
  "id": "panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE",
  "cardboardMenu": {
   "class": "Menu",
   "label": "Media",
   "rollOverOpacity": 0.8,
   "opacity": 0.4,
   "rollOverFontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000",
   "backgroundColor": "#404040",
   "id": "Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
   "fontColor": "#FFFFFF",
   "children": [
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "label": "Lobby Entrance"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "label": "SEASON LAWN"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "label": "BackSide2"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "label": "DELUXE ROOM"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "label": "Entrance"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "label": "JEFF'S"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "label": "JEFF'S"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "label": "JEFF'S"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "label": "COFFEE SHOP"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "label": "LIME LIGHT"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 10)",
     "label": "LUXURY ROOM"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 11)",
     "label": "ONE BED ROOM SUITE"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 12)",
     "label": "ONE BED ROOM SUITE"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 13)",
     "label": "ONE BED ROOM SUITE"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 14)",
     "label": "ORCHID SUITE"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 15)",
     "label": "AUTUMN-1"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 16)",
     "label": "pano_11"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 17)",
     "label": "AUTUMN-2"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 18)",
     "label": "SPRING HALL ENTRANCE"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 19)",
     "label": "ROYAL CLUB ROOM"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 20)",
     "label": "SEASONS"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 21)",
     "label": "SEASONS"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 22)",
     "label": "SeasonHallEntrance"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 23)",
     "label": "SPRING"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 24)",
     "label": "SPRING"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 25)",
     "label": "POOL SIDE"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 26)",
     "label": "POOL SIDE"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 27)",
     "label": "TIGER TRAIL"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 28)",
     "label": "TigerTrial Entrance"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 29)",
     "label": "Varanda"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 30)",
     "label": "Lime Light Varanda"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 31)",
     "label": "LIME LIGHT"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 32)",
     "label": "Geofferys Lawn"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 33)",
     "label": "MainGate"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 34)",
     "label": "ginseng dinning"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 35)",
     "label": "GINSENG "
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 36)",
     "label": "ginseng dinning2"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 37)",
     "label": "Lobby"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 38)",
     "label": "Royal Suite Room (1)"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 39)",
     "label": "ROYAL SUITE ROOM"
    }
   ],
   "selectedFontColor": "#FFFFFF",
   "fontFamily": "Arial",
   "selectedBackgroundColor": "#202020"
  },
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_t.jpg",
  "vfov": 180
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "buttonCardboardView": {
   "maxHeight": 54,
   "borderSize": 0,
   "iconURL": "skin/IconButton_3BB6470E_20A8_D75F_41BC_C391A4090A55.png",
   "bottom": "7.65%",
   "paddingLeft": 0,
   "transparencyActive": false,
   "verticalAlign": "middle",
   "minWidth": 1,
   "paddingBottom": 0,
   "mode": "push",
   "class": "IconButton",
   "minHeight": 1,
   "backgroundOpacity": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "shadow": false,
   "right": "1%",
   "cursor": "hand",
   "borderRadius": 0,
   "maxWidth": 55,
   "width": 55,
   "height": 54,
   "id": "IconButton_3BB6470E_20A8_D75F_41BC_C391A4090A55",
   "paddingRight": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F29C2B2C_FC14_701C_41E4_9A1D8EAD4F06"
  },
  "idleSequence": "this.sequence_F29C2B2C_FC14_701C_41E4_9A1D8EAD4F06",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 1,
   "yaw": -1.34
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 79,
           "width": 113
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.77,
        "hfov": 19.83,
        "yaw": 91.69
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_ECFA0B74_FC3C_500C_41D5_8864814CA69C",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_EC1DE477_FC3C_F00C_41DC_4FBB42ECC1C5, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 158,
           "width": 227
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 19.83,
        "pitch": -8.77,
        "yaw": 91.69
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 21.92,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 21.92,
        "offsetY": 10.96,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.65,
        "yaw": 91.62,
        "width": 43.84
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0B8552B2_13E1_2687_4190_B5FA01A12C16",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C, this.camera_13006DE1_1CD5_7583_418F_EFEE034414BB); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_08AFF3A8_13E0_E683_41A9_5F422224B9A9, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_0_HS_3_0.gif",
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 43
          }
         ],
         "class": "ImageResource"
        },
        "width": 43.84,
        "height": 21.92,
        "offsetX": 21.92,
        "offsetY": 10.96,
        "pitch": -7.65,
        "yaw": 91.62
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "SEASON LAWN",
  "id": "panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F362CD4B_FC1C_7004_41E3_6AFFA8D7A2D6"
  },
  "idleSequence": "this.sequence_F362CD4B_FC1C_7004_41E3_6AFFA8D7A2D6",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 84,
           "width": 115
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.39,
        "hfov": 20.02,
        "yaw": -93.25
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EC9DC76C_FC3C_301D_41BC_42A607A1BBD1",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_EC09041E_FC34_303C_41DC_9869EB6852BF, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 169,
           "width": 230
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 20.02,
        "pitch": -4.39,
        "yaw": -93.25
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 55,
           "width": 65
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.54,
        "hfov": 11.41,
        "yaw": 54.36
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D5A8A622_FC0C_7004_41C0_DC0B8B0928A3",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 28); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_D6B9F0FF_FC0D_D1FC_41DB_0A09E8203CC8, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 111,
           "width": 130
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 11.41,
        "pitch": -9.54,
        "yaw": 54.36
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 24.69,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.69,
        "offsetY": 12.34,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.7,
        "yaw": -93.29,
        "width": 49.37
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0B43E454_13E1_2183_418C_16668391B88A",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C, this.camera_13B19A46_1CD5_7E81_41B5_96D0F7DC96F9); this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0B8E4AA5_13EF_268D_4191_A8042CB9B69D, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_0_HS_6_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "width": 49.37,
        "height": 24.69,
        "offsetX": 24.69,
        "offsetY": 12.34,
        "pitch": -6.7,
        "yaw": -93.29
       }
      ]
     },
     {
      "maps": [
       {
        "height": 24.69,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.69,
        "offsetY": 12.34,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.26,
        "yaw": 54.56,
        "width": 49.37
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_09FD6B27_13E1_678D_41B1_B09293E9E25D",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3, this.camera_13B73A68_1CD5_7E81_41B7_90B85AB7A875); this.mainPlayList.set('selectedIndex', 28); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_082E460D_13E1_219D_4180_1FB13280F28A, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_0_HS_7_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "width": 49.37,
        "height": 24.69,
        "offsetX": 24.69,
        "offsetY": 12.34,
        "pitch": -9.26,
        "yaw": 54.56
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "BackSide2",
  "id": "panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F377FE04_FC1C_300C_41E6_670ADD2BBCB1"
  },
  "idleSequence": "this.sequence_F377FE04_FC1C_300C_41E6_670ADD2BBCB1",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 47.05,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 23.52,
        "offsetY": 23.52,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.21,
        "yaw": 62.31,
        "width": 47.05
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_F3FFC974_FC34_700C_41EA_8FA290E08D88",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_ECC0BDDF_FC34_F03C_41B6_202E93F362E3, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_0_HS_1_0.gif",
           "class": "ImageResourceLevel",
           "height": 47,
           "width": 47
          }
         ],
         "class": "ImageResource"
        },
        "width": 57.61,
        "height": 57.61,
        "offsetX": 23.52,
        "offsetY": 23.52,
        "pitch": -2.21,
        "yaw": 62.31
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 78,
           "width": 62
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.09,
        "hfov": 10.95,
        "yaw": 62.31
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_ECE6F514_FC34_300C_41EB_4616255CED56",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": "Lobby",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_ECA4D69F_FC35_F03C_41DC_22D461A4F1F8, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 156,
           "width": 124
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 10.95,
        "pitch": -2.09,
        "yaw": 62.31
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 47.05,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 23.52,
        "offsetY": 23.52,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.74,
        "yaw": -4.22,
        "width": 47.05
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EC89F6ED_FC34_301C_4197_4D3E97F1A054",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_630714BF_70C0_0419_41C4_BBE2D0697E56, true, 0, this.effect_D17CD16C_FC0F_D01C_41EB_89E9718C2A6C, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_0_HS_2_0.gif",
           "class": "ImageResourceLevel",
           "height": 47,
           "width": 47
          }
         ],
         "class": "ImageResource"
        },
        "width": 57.61,
        "height": 57.61,
        "offsetX": 23.52,
        "offsetY": 23.52,
        "pitch": 12.74,
        "yaw": -4.22
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "DELUXE ROOM",
  "id": "panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F32F3C93_FC1C_D004_41E4_E50CD52198E0"
  },
  "idleSequence": "this.sequence_F32F3C93_FC1C_D004_41E4_E50CD52198E0",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -23.97,
   "yaw": 10.65
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 65,
           "width": 97
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.77,
        "hfov": 17.01,
        "yaw": 13.7
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EE58E4CD_FC34_501C_41D8_B1BB2AD9063D",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_EDFE1F39_FC34_3004_41EA_B09D3C8E59A3, 'showEffect', false); this.mainPlayList.set('selectedIndex', 33)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 131,
           "width": 194
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 17.01,
        "pitch": -16.77,
        "yaw": 13.7
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 65,
           "width": 113
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.59,
        "hfov": 19.82,
        "yaw": -170.48
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EEE6D426_FC34_D00C_4194_0C5D3FE8A1C5",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_EDCD968C_FC34_501C_41E1_4DE5DC0D704D, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 131,
           "width": 227
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 19.82,
        "pitch": -12.59,
        "yaw": -170.48
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 21.91,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 21.91,
        "offsetY": 10.95,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.49,
        "yaw": -171.16,
        "width": 43.82
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_3D042E3D_2059_79BD_41B3_D72737BD632F",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE, this.camera_13EB576B_1CD5_7680_418E_1CD4893E0668); this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_3C083484_2059_E943_4193_65C8F2B59D9E, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_0_HS_6_0.gif",
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 43
          }
         ],
         "class": "ImageResource"
        },
        "width": 43.82,
        "height": 21.91,
        "offsetX": 21.91,
        "offsetY": 10.95,
        "pitch": -12.49,
        "yaw": -171.16
       }
      ]
     },
     {
      "maps": [
       {
        "height": 26.24,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 26.24,
        "offsetY": 13.12,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_0_HS_8_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.92,
        "yaw": 13.85,
        "width": 52.48
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_2EEFEBF7_22AE_8F08_41A5_831D4D9B67EB",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F, this.camera_13EE778C_1CD5_7580_419A_5F2285B30973); this.mainPlayList.set('selectedIndex', 33); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_2E799256_22AF_B908_4183_EA79FB5167C0, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_0_HS_8_0.gif",
           "class": "ImageResourceLevel",
           "height": 26,
           "width": 52
          }
         ],
         "class": "ImageResource"
        },
        "width": 52.48,
        "height": 26.24,
        "offsetX": 26.24,
        "offsetY": 13.12,
        "pitch": -15.92,
        "yaw": 13.85
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "Entrance",
  "id": "panorama_F23E1356_FC1C_300C_41C0_72C59E591498",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E1356_FC1C_300C_41C0_72C59E591498_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E1356_FC1C_300C_41C0_72C59E591498_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F2F3ABCC_FC1C_501C_41E9_09E6458B496A"
  },
  "idleSequence": "this.sequence_F2F3ABCC_FC1C_501C_41E9_09E6458B496A",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -4.84,
   "yaw": 179.48
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 67,
           "width": 91
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -30.02,
        "hfov": 15.93,
        "yaw": -59.18
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EE85626D_FC0C_501C_41E3_277A4D1C7724",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E843EF30_FC0C_F004_41C4_D1D017ACB984, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 135,
           "width": 182
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 15.93,
        "pitch": -30.02,
        "yaw": -59.18
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 65,
           "width": 83
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.15,
        "hfov": 14.68,
        "yaw": 164.43
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EFA8CE8D_FC0B_D01C_41CA_1140FDFD1EAE",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_EF3DC1C9_FC14_7004_4185_E33F6FF6721B, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 130,
           "width": 167
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 14.68,
        "pitch": -19.15,
        "yaw": 164.43
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 29.08,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 29.08,
        "offsetY": 14.54,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_0_HS_10_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.55,
        "yaw": 163.75,
        "width": 58.16
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_070F724A_23F9_29C6_41AB_292FC0F6782A",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918, this.camera_13C4E886_1CD5_7B81_41AB_230448AA9217); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_06F02B92_23E9_5F47_4190_A6EB79E9525A, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_0_HS_10_0.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 58
          }
         ],
         "class": "ImageResource"
        },
        "width": 58.16,
        "height": 29.08,
        "offsetX": 29.08,
        "offsetY": 14.54,
        "pitch": -19.55,
        "yaw": 163.75
       }
      ]
     },
     {
      "maps": [
       {
        "height": 29.08,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 29.08,
        "offsetY": 14.54,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_0_HS_12_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -30.29,
        "yaw": -59.13,
        "width": 58.16
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_2E1A5B32_22A2_8F0B_41C0_897D441BF7E7",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4, this.camera_13C798A8_1CD5_7B81_41B1_5CCD33190B86); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_0_HS_12_0.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 58
          }
         ],
         "class": "ImageResource"
        },
        "width": 58.16,
        "height": 29.08,
        "offsetX": 29.08,
        "offsetY": 14.54,
        "pitch": -30.29,
        "yaw": -59.13
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "JEFF'S",
  "id": "panorama_F23E6185_FC1C_500C_41CF_73E258EC3699",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F34DB223_FC1B_D004_41ED_F21DC96D10B4"
  },
  "idleSequence": "this.sequence_F34DB223_FC1B_D004_41ED_F21DC96D10B4",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 80,
           "width": 91
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.11,
        "hfov": 16.04,
        "yaw": 132.23
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EFD3E7BE_FC14_507D_41D6_E6354CAE88C5",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E8A998A3_FC15_D00B_41DC_D682EC85DEAE, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 160,
           "width": 183
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 16.04,
        "pitch": -21.11,
        "yaw": 132.23
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 28.74,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 28.74,
        "offsetY": 14.37,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.99,
        "yaw": 133.03,
        "width": 57.48
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_06A27D9E_23E8_FB7F_41A1_48D28F7ACD5A",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E6185_FC1C_500C_41CF_73E258EC3699, this.camera_0CC9E053_1CD5_6A80_41AF_FBF51E4B2796); this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_076B2FF1_23EB_76C5_41B8_DF21C4DA6582, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_0_HS_3_0.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 57
          }
         ],
         "class": "ImageResource"
        },
        "width": 57.48,
        "height": 28.74,
        "offsetX": 28.74,
        "offsetY": 14.37,
        "pitch": -22.99,
        "yaw": 133.03
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "JEFF'S",
  "id": "panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F35E9B53_FC14_300B_41B4_CD8FAA8BE165"
  },
  "idleSequence": "this.sequence_F35E9B53_FC14_300B_41B4_CD8FAA8BE165",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 88
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.69,
        "hfov": 15.39,
        "yaw": -51.69
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EF8C01D5_FC14_D00C_41E4_485D60CF774A",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E88EE7CB_FC14_3004_41E0_4C0EEFD38BDA, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 118,
           "width": 176
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 15.39,
        "pitch": -15.69,
        "yaw": -51.69
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 163,
           "width": 80
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.59,
        "hfov": 14.01,
        "yaw": -131.72
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E8C3297D_FC17_D0FC_41CE_4E7DB65E528A",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 29); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E91FC68C_FC14_501C_41E0_3BC73BE195F8, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 326,
           "width": 160
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 14.01,
        "pitch": -6.59,
        "yaw": -131.72
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 61.09,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 30.54,
        "offsetY": 30.54,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 7.06,
        "yaw": -19.91,
        "width": 61.09
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D7BE3D2C_FC0C_301C_41E8_23CC3C2F9A5E",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_658DB848_70C0_0C67_41C1_11D552CCF881, true, 0, this.effect_D724A6E5_FC0C_F00C_41BC_9F2B1BE0A2AA, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_0_HS_4_0.gif",
           "class": "ImageResourceLevel",
           "height": 61,
           "width": 61
          }
         ],
         "class": "ImageResource"
        },
        "width": 61.09,
        "height": 61.09,
        "offsetX": 30.54,
        "offsetY": 30.54,
        "pitch": 7.06,
        "yaw": -19.91
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 40,
           "width": 40
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.56,
        "hfov": 6.81,
        "yaw": -131.7
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_03098507_0C0C_703A_41A3_94BE3ADA4222",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": " Varanda",
        "click": "this.startPanoramaWithCamera(this.panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06, this.camera_1392CB15_1CD5_7E80_41A4_C7A940129A38); this.mainPlayList.set('selectedIndex', 29); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0170D961_0C0C_10F6_417F_D75826DD2787, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_0_HS_6_0.png",
           "class": "ImageResourceLevel",
           "height": 80,
           "width": 80
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.81,
        "pitch": -14.56,
        "yaw": -131.7
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 22.03,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 22.03,
        "offsetY": 11.01,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_0_HS_11_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.06,
        "yaw": -51.59,
        "width": 44.06
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_01615670_206B_29C3_41AC_A3ADF406BF1E",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E6185_FC1C_500C_41CF_73E258EC3699, this.camera_138D7AF9_1CD5_7F80_4196_C9F06439EC14); this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_00655010_206B_E943_419E_D798F387758A, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_0_HS_11_0.gif",
           "class": "ImageResourceLevel",
           "height": 22,
           "width": 44
          }
         ],
         "class": "ImageResource"
        },
        "width": 44.06,
        "height": 22.03,
        "offsetX": 22.03,
        "offsetY": 11.01,
        "pitch": -16.06,
        "yaw": -51.59
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "JEFF'S",
  "id": "panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F36916DC_FC14_703C_41DA_B5B2FBBA74E6"
  },
  "idleSequence": "this.sequence_F36916DC_FC14_703C_41DA_B5B2FBBA74E6",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_6_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 67,
           "width": 107
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.78,
        "hfov": 18.75,
        "yaw": -2.19
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E8AB3946_FC15_D00D_41E3_895A1CF4D753",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 28); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_EA533BC9_FC14_3004_41BC_6EC931A1901A, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_6_0.png",
           "class": "ImageResourceLevel",
           "height": 135,
           "width": 215
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 18.75,
        "pitch": -17.78,
        "yaw": -2.19
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_4_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 62,
           "width": 75
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.57,
        "hfov": 13.17,
        "yaw": -144.84
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EAC6AA25_FC1B_D00C_41ED_FADE97A3C387",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 29); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E969DDAC_FC1C_501C_41E7_860352ECBF81, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_4_0.png",
           "class": "ImageResourceLevel",
           "height": 125,
           "width": 150
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 13.17,
        "pitch": 0.57,
        "yaw": -144.84
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 46,
           "width": 66
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -24.07,
        "hfov": 11.69,
        "yaw": 137.79
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E95CF845_FC1C_700C_41D8_F38A4C96C8C4",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 30); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_EA0AD4D8_FC1C_D005_41DB_C46463AB04F3, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 93,
           "width": 133
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 11.69,
        "pitch": -24.07,
        "yaw": 137.79
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 60,
           "width": 54
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 2.77,
        "hfov": 9.52,
        "yaw": 165.93
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E9135D4E_FC14_501D_41BC_A83DB22E9ECE",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 31); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E91F5435_FC14_D00C_41EE_7F983276FAE8, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 121,
           "width": 108
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 9.52,
        "pitch": 2.77,
        "yaw": 165.93
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 20.29,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 20.29,
        "offsetY": 10.14,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_16_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.28,
        "yaw": -1.46,
        "width": 40.57
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_06DFD628_2069_6943_4193_54E3DEB8B8AF",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3, this.camera_13556CAA_1CD5_7B81_417C_7C6CBECA7184); this.mainPlayList.set('selectedIndex', 28); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_06A08192_2069_6B47_41B4_4567D8B004CA, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_16_0.gif",
           "class": "ImageResourceLevel",
           "height": 20,
           "width": 40
          }
         ],
         "class": "ImageResource"
        },
        "width": 40.57,
        "height": 20.29,
        "offsetX": 20.29,
        "offsetY": 10.14,
        "pitch": -19.28,
        "yaw": -1.46
       }
      ]
     },
     {
      "maps": [
       {
        "height": 18.15,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 18.15,
        "offsetY": 9.07,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_15_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.28,
        "yaw": -171.25,
        "width": 36.29
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_077AC020_2069_2943_41B8_47B44BA6B320",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 29); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0737EDB8_2067_5B43_41BB_CE049D02C47A, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_15_0.gif",
           "class": "ImageResourceLevel",
           "height": 18,
           "width": 36
          }
         ],
         "class": "ImageResource"
        },
        "width": 36.29,
        "height": 18.15,
        "offsetX": 18.15,
        "offsetY": 9.07,
        "pitch": -22.28,
        "yaw": -171.25
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_14_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 47,
           "width": 68
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.46,
        "hfov": 11.92,
        "yaw": -171.64
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_07FB0826_2067_594E_41B7_4F864AAEBE83",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06, this.camera_1321FD27_1CD5_7A8F_4189_9FDCA092A6E5); this.mainPlayList.set('selectedIndex', 29); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_04FCEFB8_2067_3743_41A8_EFBBA4AAA218, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_14_0.png",
           "class": "ImageResourceLevel",
           "height": 94,
           "width": 136
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 11.92,
        "pitch": -21.46,
        "yaw": -171.64
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 20.45,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 20.45,
        "offsetY": 10.23,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_12_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.08,
        "yaw": 138.08,
        "width": 40.9
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_04EF8893_2058_D946_41AE_D7B7E28E33B6",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301, this.camera_135A9D02_1CD5_7A80_41A5_B5D75C9ADF14); this.mainPlayList.set('selectedIndex', 30); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0461E46B_205B_69C5_41C0_91A3A9E33038, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_12_0.gif",
           "class": "ImageResourceLevel",
           "height": 20,
           "width": 40
          }
         ],
         "class": "ImageResource"
        },
        "width": 40.9,
        "height": 20.45,
        "offsetX": 20.45,
        "offsetY": 10.23,
        "pitch": -24.08,
        "yaw": 138.08
       }
      ]
     },
     {
      "maps": [
       {
        "height": 66.71,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 33.36,
        "offsetY": 33.36,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_20_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.87,
        "yaw": 166.12,
        "width": 66.71
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_AB1232A0_A68A_1FC6_41D7_428010D044DF",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2, this.camera_134E9C88_1CD5_7B81_41A8_F3BCFD82D395); this.mainPlayList.set('selectedIndex', 31); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_AB546A1A_A68A_0EC5_41DF_3F1860E838ED, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_0_HS_20_0.gif",
           "class": "ImageResourceLevel",
           "height": 66,
           "width": 66
          }
         ],
         "class": "ImageResource"
        },
        "width": 66.71,
        "height": 66.71,
        "offsetX": 33.36,
        "offsetY": 33.36,
        "pitch": 0.87,
        "yaw": 166.12
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "COFFEE SHOP",
  "id": "panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F31A6EC4_FC14_D00C_41DE_5631E0D60FC9"
  },
  "idleSequence": "this.sequence_F31A6EC4_FC14_D00C_41DE_5631E0D60FC9",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 72,
           "width": 87
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.1,
        "hfov": 15.2,
        "yaw": 56.04
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EA335856_FC17_D00C_41EE_3A60A8DD1758",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 31); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_EA3F7B24_FC14_500C_41E8_670734BF5601, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 145,
           "width": 174
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 15.2,
        "pitch": -17.1,
        "yaw": 56.04
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 30.02,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 30.02,
        "offsetY": 15.01,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.8,
        "yaw": 55.65,
        "width": 60.04
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_2F89A4E0_22A2_9907_41AD_D24DEB3D1A7A",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2, this.camera_139EBB5D_1CD5_7E83_41B1_999D465E273B); this.mainPlayList.set('selectedIndex', 31); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_2C93C355_22A2_9F09_41BC_948EAF1F5D2D, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_0_HS_4_0.gif",
           "class": "ImageResourceLevel",
           "height": 30,
           "width": 60
          }
         ],
         "class": "ImageResource"
        },
        "width": 60.04,
        "height": 30.02,
        "offsetX": 30.02,
        "offsetY": 15.01,
        "pitch": -16.8,
        "yaw": 55.65
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "LIME LIGHT",
  "id": "panorama_F23E7C1C_FC1C_703D_41C7_208D15482719",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F3DDF38B_FC14_501B_41D5_CC33E4F684CA"
  },
  "idleSequence": "this.sequence_F3DDF38B_FC14_501B_41D5_CC33E4F684CA",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 54.37,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 27.18,
        "offsetY": 27.18,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.21,
        "yaw": -48.62,
        "width": 54.37
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EAAEF81E_FC0C_503D_41E1_3215488A498F",
      "useHandCursor": true,
      "areas": [
       {
        "toolTip": "Lobby",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_EBBD0AD9_FC0D_D007_41EE_EA264ABC223C, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_0_HS_1_0.gif",
           "class": "ImageResourceLevel",
           "height": 54,
           "width": 54
          }
         ],
         "class": "ImageResource"
        },
        "width": 54.37,
        "height": 54.37,
        "offsetX": 27.18,
        "offsetY": 27.18,
        "pitch": -2.21,
        "yaw": -48.62
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 108,
           "width": 53
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.32,
        "hfov": 9.36,
        "yaw": -48.45
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E462D8C6_FC0C_700C_41CF_16C95CE8D2FF",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_EBE63DC9_FC0C_F004_41E6_566C03D7C400, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 217,
           "width": 106
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 9.36,
        "pitch": -4.32,
        "yaw": -48.45
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "LUXURY ROOM",
  "id": "panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F2B5BE1C_FC15_F03C_41CA_855BBD7B1EA5"
  },
  "idleSequence": "this.sequence_F2B5BE1C_FC15_F03C_41CA_855BBD7B1EA5",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 43.96,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 21.98,
        "offsetY": 21.98,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.37,
        "yaw": 31.96,
        "width": 43.96
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EB370CD7_FCF4_300C_41E0_4B9D725B2D43",
      "useHandCursor": true,
      "areas": [
       {
        "toolTip": "Lobby",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_EB3BEA79_FCF4_3004_41B2_B46F2FB926D1, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_0_HS_3_0.gif",
           "class": "ImageResourceLevel",
           "height": 43,
           "width": 43
          }
         ],
         "class": "ImageResource"
        },
        "width": 56.03,
        "height": 56.03,
        "offsetX": 21.98,
        "offsetY": 21.98,
        "pitch": 1.37,
        "yaw": 31.96
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 80,
           "width": 66
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 1.35,
        "hfov": 11.69,
        "yaw": 32.13
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EB0CE6AF_FCF4_701C_41EB_FD87406B2CEE",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E44AAA3C_FCF4_F07D_41E9_CA48774CB0C9, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 161,
           "width": 133
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 11.69,
        "pitch": 1.35,
        "yaw": 32.13
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 66,
           "width": 68
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -28.97,
        "hfov": 12.08,
        "yaw": 51.45
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E49AA77E_FCF7_F0FC_41CA_E2F9BC1D15FE",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E4177701_FCF4_7004_41E7_E1F3CFAA858A, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 133,
           "width": 137
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 12.08,
        "pitch": -28.97,
        "yaw": 51.45
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 43.96,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 21.98,
        "offsetY": 21.98,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 7.35,
        "yaw": -112.01,
        "width": 43.96
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D71D9031_FC74_F004_41E4_497AF8A3A38B",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_629CB49A_70C0_041B_41D6_A3E54851A12E, true, 0, this.effect_D2C03107_FC77_D00B_41DD_0EFE2A00DF08, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_0_HS_4_0.gif",
           "class": "ImageResourceLevel",
           "height": 43,
           "width": 43
          }
         ],
         "class": "ImageResource"
        },
        "width": 56.03,
        "height": 56.03,
        "offsetX": 21.98,
        "offsetY": 21.98,
        "pitch": 7.35,
        "yaw": -112.01
       }
      ]
     },
     {
      "maps": [
       {
        "height": 18.93,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 18.93,
        "offsetY": 9.47,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -29.71,
        "yaw": 51.73,
        "width": 37.86
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_2F829999_22A1_8B39_41B5_23EC97AA2B16",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D, this.camera_13434C3E_1CD5_7A81_41A3_473605D7888D); this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_2F22B488_22A1_B907_41BE_AF96350E72D5, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_0_HS_5_0.gif",
           "class": "ImageResourceLevel",
           "height": 18,
           "width": 37
          }
         ],
         "class": "ImageResource"
        },
        "width": 48.26,
        "height": 24.13,
        "offsetX": 18.93,
        "offsetY": 9.47,
        "pitch": -29.71,
        "yaw": 51.73
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "ONE BED ROOM SUITE",
  "id": "panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F3426A0B_FC14_501B_41E3_3B4987A1499C"
  },
  "idleSequence": "this.sequence_F3426A0B_FC14_501B_41E3_3B4987A1499C",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 72,
           "width": 95
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -24.69,
        "hfov": 16.73,
        "yaw": 117.76
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_EB8E61EE_FCF4_701C_41E5_417BFB9121EC",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 13); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_EBAEB0A9_FCF5_F004_41EE_4A583B638F0E, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 144,
           "width": 191
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 16.73,
        "pitch": -24.69,
        "yaw": 117.76
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 84,
           "width": 105
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -32.71,
        "hfov": 18.4,
        "yaw": -138.49
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_10558417_02E8_C1F2_40F0_4704526D3FC0",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 11); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_11F3D232_02E8_4633_4182_D41BE6F919F7, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "height": 168,
           "width": 211
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 18.4,
        "pitch": -32.71,
        "yaw": -138.49
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 24.76,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.76,
        "offsetY": 12.38,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.78,
        "yaw": 116.3,
        "width": 49.52
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_07C71F1F_2059_377E_41B7_E5761908D978",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD, this.camera_121C36BF_1CD5_7780_41BB_92A0FF75DD73); this.mainPlayList.set('selectedIndex', 13); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_07AA8E41_205B_59C2_41AA_5C540653744F, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_0_HS_7_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "width": 49.52,
        "height": 24.76,
        "offsetX": 24.76,
        "offsetY": 12.38,
        "pitch": -24.78,
        "yaw": 116.3
       }
      ]
     },
     {
      "maps": [
       {
        "height": 24.76,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.76,
        "offsetY": 12.38,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -33.05,
        "yaw": -139.95,
        "width": 49.52
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_042390E8_205B_EAC2_41AA_3633FC0F68DA",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4, this.camera_121F36E0_1CD5_7781_4188_537038165B9C); this.mainPlayList.set('selectedIndex', 11); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_05E94594_205B_6B42_41B4_E79C5A5009BD, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_0_HS_6_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "width": 49.52,
        "height": 24.76,
        "offsetX": 24.76,
        "offsetY": 12.38,
        "pitch": -33.05,
        "yaw": -139.95
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "ONE BED ROOM SUITE",
  "id": "panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F36836FC_FC14_51FC_41D5_5379BDBB39BD"
  },
  "idleSequence": "this.sequence_F36836FC_FC14_51FC_41D5_5379BDBB39BD",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 106,
           "width": 104
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -33.53,
        "hfov": 18.25,
        "yaw": -138.57
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E72D5507_FCFD_D00C_41C0_4E7BADCEE42E",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E5322BA5_FCFC_500F_41E4_1A364101F614, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 213,
           "width": 209
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 18.25,
        "pitch": -33.53,
        "yaw": -138.57
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 27,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 27,
        "offsetY": 13.5,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -34.79,
        "yaw": -139.95,
        "width": 54
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_078D3AA1_2058_D945_41B4_07E2F0D67592",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D, this.camera_13ADEA21_1CD5_7E83_41B9_9BAC68A1DADD); this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0492BD14_2059_5B43_41BF_5A1EDC2E76C8, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_0_HS_3_0.gif",
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 54
          }
         ],
         "class": "ImageResource"
        },
        "width": 54,
        "height": 27,
        "offsetX": 27,
        "offsetY": 13.5,
        "pitch": -34.79,
        "yaw": -139.95
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "ONE BED ROOM SUITE",
  "id": "panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F3CD49CC_FC14_D01C_41C3_29BD511764D3"
  },
  "idleSequence": "this.sequence_F3CD49CC_FC14_D01C_41C3_29BD511764D3",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 46.58,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 23.29,
        "offsetY": 23.29,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.66,
        "yaw": -71.04,
        "width": 46.58
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E4338A57_FCFC_500C_41E3_19DD216534D6",
      "useHandCursor": true,
      "areas": [
       {
        "toolTip": "Lobby",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E4B73B22_FCFC_3004_41D7_90D78A382EBB, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_0_HS_1_0.gif",
           "class": "ImageResourceLevel",
           "height": 46,
           "width": 46
          }
         ],
         "class": "ImageResource"
        },
        "width": 46.58,
        "height": 46.58,
        "offsetX": 23.29,
        "offsetY": 23.29,
        "pitch": -2.66,
        "yaw": -71.04
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 65,
           "width": 47
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.45,
        "hfov": 8.33,
        "yaw": -70.88
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E4DAAFA0_FCFC_3004_41E7_C1DE09899C2C",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E4D5D698_FCFC_5004_41BD_4B88E0C273FC, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 131,
           "width": 94
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 8.33,
        "pitch": -2.45,
        "yaw": -70.88
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 46.58,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 23.29,
        "offsetY": 23.29,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.14,
        "yaw": 47.96,
        "width": 46.58
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D58E0969_FC0C_F004_41EA_B60E91F8DB96",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_7C1D1074_6C6C_DFF7_41BD_23722DE3691D, true, 0, this.effect_D51FB170_FC0C_5004_4197_14D4F2F41506, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_0_HS_2_0.gif",
           "class": "ImageResourceLevel",
           "height": 46,
           "width": 46
          }
         ],
         "class": "ImageResource"
        },
        "width": 46.58,
        "height": 46.58,
        "offsetX": 23.29,
        "offsetY": 23.29,
        "pitch": 12.14,
        "yaw": 47.96
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "ORCHID SUITE",
  "id": "panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F283E4CB_FC14_701B_41D4_645273EF1001"
  },
  "idleSequence": "this.sequence_F283E4CB_FC14_701B_41D4_645273EF1001",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 44.02,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 22.01,
        "offsetY": 22.01,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.06,
        "yaw": -164.93,
        "width": 44.02
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E4CA0B57_FCFC_300C_41E6_81D4C51DE062",
      "useHandCursor": true,
      "areas": [
       {
        "toolTip": "Lobby",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E645A7FD_FCFD_DFFC_41D5_D3BE5F03FF8E, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_0_HS_1_0.gif",
           "class": "ImageResourceLevel",
           "height": 44,
           "width": 44
          }
         ],
         "class": "ImageResource"
        },
        "width": 44.02,
        "height": 44.02,
        "offsetX": 22.01,
        "offsetY": 22.01,
        "pitch": -2.06,
        "yaw": -164.93
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 65,
           "width": 77
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.78,
        "hfov": 13.64,
        "yaw": -163.64
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E6104099_FCFC_5004_41E4_9571C93B1361",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E6788600_FCFC_D004_41D2_B75E6A8F2BBC, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 130,
           "width": 155
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 13.64,
        "pitch": -1.78,
        "yaw": -163.64
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "AUTUMN-1",
  "id": "panorama_F23ED284_FC1C_F00C_41CC_28009879B164",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23ED284_FC1C_F00C_41CC_28009879B164_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23ED284_FC1C_F00C_41CC_28009879B164_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F2B6366B_FC17_D004_41E1_0096FD4D86E3"
  },
  "idleSequence": "this.sequence_F2B6366B_FC17_D004_41E1_0096FD4D86E3",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 50,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 25,
        "offsetY": 25,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.67,
        "yaw": 95.17,
        "width": 50
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E5AB68DF_FCFB_D03C_41E9_F7D7C22BCFE1",
      "useHandCursor": true,
      "areas": [
       {
        "toolTip": "EXIT",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E744CA0E_FCF4_501C_41BF_A09E2B3F7649, 'showEffect', false); this.mainPlayList.set('selectedIndex', 18)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_0_HS_1_0.gif",
           "class": "ImageResourceLevel",
           "height": 50,
           "width": 50
          }
         ],
         "class": "ImageResource"
        },
        "width": 50,
        "height": 50,
        "offsetX": 25,
        "offsetY": 25,
        "pitch": -2.67,
        "yaw": 95.17
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 67,
           "width": 69
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.09,
        "hfov": 12.15,
        "yaw": 94.51
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E716880E_FCF4_501C_41D3_30DB697B4AE7",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68, this.camera_13A399CE_1CD5_7D81_4166_3C31217FE892); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E6C2DFED_FCF4_501C_41E0_F3552C833239, 'showEffect', false); this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 138
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 12.15,
        "pitch": -2.09,
        "yaw": 94.51
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 74,
           "width": 93
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.07,
        "hfov": 16.28,
        "yaw": 6.46
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D20201DC_FC37_D03C_41E9_71908A2F9917",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_D241573F_FC34_507B_41EA_751BF48B72FD, 'showEffect', false); this.mainPlayList.set('selectedIndex', 35)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 149,
           "width": 186
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 16.28,
        "pitch": -13.07,
        "yaw": 6.46
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 21.2,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 21.2,
        "offsetY": 10.6,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.87,
        "yaw": 6.17,
        "width": 42.41
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_078AF9E4_2059_5AC3_41BF_210783EEE6DE",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241, this.camera_13A809F2_1CD5_7D81_41B3_27EB2864480E); this.mainPlayList.set('selectedIndex', 35); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_051A63FD_2058_EEBD_41B8_803B761C3D9A, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_0_HS_6_0.gif",
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 42
          }
         ],
         "class": "ImageResource"
        },
        "width": 42.41,
        "height": 21.2,
        "offsetX": 21.2,
        "offsetY": 10.6,
        "pitch": -13.87,
        "yaw": 6.17
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "pano_11",
  "id": "panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F34AAB8B_FC17_F01B_41E8_75DA4A60FED5"
  },
  "idleSequence": "this.sequence_F34AAB8B_FC17_F01B_41E8_75DA4A60FED5",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 47.03,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 23.51,
        "offsetY": 23.51,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.81,
        "yaw": -170.91,
        "width": 47.03
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E6648ADF_FCF4_503C_41DD_DD84E3037624",
      "useHandCursor": true,
      "areas": [
       {
        "toolTip": "Lobby",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E6A07C0A_FCF4_3004_41DF_EB2A8948CD92, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_0_HS_1_0.gif",
           "class": "ImageResourceLevel",
           "height": 47,
           "width": 47
          }
         ],
         "class": "ImageResource"
        },
        "width": 47.03,
        "height": 47.03,
        "offsetX": 23.51,
        "offsetY": 23.51,
        "pitch": -2.81,
        "yaw": -170.91
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 63,
           "width": 93
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.51,
        "hfov": 16.36,
        "yaw": -169.91
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E779D9BE_FCF4_707C_41D5_7AB62CBCD8F5",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E6806984_FCF4_D00D_41EB_7A13980C1659, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 126,
           "width": 187
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 16.36,
        "pitch": -3.51,
        "yaw": -169.91
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 47.03,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 23.51,
        "offsetY": 23.51,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.91,
        "yaw": 7.22,
        "width": 47.03
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_380A0FF0_205B_D6C3_413A_F04B6DD0D5E0",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_38B7C5EA_2069_2AC7_4186_5D8BE517E935, true, 0, this.effect_3884631B_205B_6F45_418D_0BCFD20DD017, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_0_HS_2_0.gif",
           "class": "ImageResourceLevel",
           "height": 47,
           "width": 47
          }
         ],
         "class": "ImageResource"
        },
        "width": 47.03,
        "height": 47.03,
        "offsetX": 23.51,
        "offsetY": 23.51,
        "pitch": 3.91,
        "yaw": 7.22
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "AUTUMN-2",
  "id": "panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F36D60AB_FC14_5004_41CD_E18668F1361E"
  },
  "idleSequence": "this.sequence_F36D60AB_FC14_5004_41CD_E18668F1361E",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_5_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 83
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.19,
        "hfov": 17.58,
        "yaw": -101.41
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "id": "overlay_E62658A7_FCF4_300C_41D4_D33BE884ABD2",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 26); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E6F754BA_FCF4_F004_41D5_23884ED04597, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_5_0.png",
           "class": "ImageResourceLevel",
           "height": 478,
           "width": 201
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 17.58,
        "pitch": -9.19,
        "yaw": -101.41
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_4_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 51
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.5,
        "hfov": 9.21,
        "yaw": -66.26
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "id": "overlay_E6BB0CA0_FCF4_5005_41D8_6564D625CF3B",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 16)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_4_0.png",
           "class": "ImageResourceLevel",
           "height": 402,
           "width": 105
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 9.21,
        "pitch": -8.5,
        "yaw": -66.26
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 85,
           "width": 110
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -23.3,
        "hfov": 19.28,
        "yaw": -5.2
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E62FD87F_FC0C_70FC_41C3_643D8913C2D2",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 24); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E771BBC0_FC0C_3004_41EA_B05E0D46371E, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 171,
           "width": 221
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 19.28,
        "pitch": -23.3,
        "yaw": -5.2
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 97,
           "width": 91
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -27.88,
        "hfov": 15.92,
        "yaw": 173.18
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E08A281F_FC0C_703B_41EF_79CC19EA288D",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E742C7EB_FC0C_3004_41E8_7B2BF9353D11, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 195,
           "width": 182
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 15.92,
        "pitch": -27.88,
        "yaw": 173.18
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_9_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 81,
           "width": 91
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.51,
        "hfov": 16.09,
        "yaw": -101.75
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_02E4D351_1123_2785_41A9_583B33646846",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": "Pool Side",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9, this.camera_130B9E30_1CD5_7681_41B4_D3A716798E64); this.mainPlayList.set('selectedIndex', 26); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_02158EBD_1121_1EFD_4193_516861454A30, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_9_0.png",
           "class": "ImageResourceLevel",
           "height": 162,
           "width": 183
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.09,
        "pitch": -4.51,
        "yaw": -101.75
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_8_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 68,
           "width": 75
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.52,
        "hfov": 13.26,
        "yaw": -66.81
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_02FB37BF_1123_2EFD_41AB_16B080B68241",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": "Ginseng",
        "click": "this.startPanoramaWithCamera(this.panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98, this.camera_13122E55_1CD5_7683_41BA_D8910F3F4BE4); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_023B33E6_1121_268F_4190_13C263FA5622, 'showEffect', false); this.mainPlayList.set('selectedIndex', 16)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_8_0.png",
           "class": "ImageResourceLevel",
           "height": 137,
           "width": 151
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.26,
        "pitch": -3.52,
        "yaw": -66.81
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 24.83,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.83,
        "offsetY": 12.41,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_11_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.6,
        "yaw": -5.44,
        "width": 49.66
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_049A9270_20A7_69C2_41B8_55D9D9996EBB",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC, this.camera_13062E0A_1CD5_7681_41B8_E1E7FDF66505); this.mainPlayList.set('selectedIndex', 24); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_05EEFA58_20A7_39C3_41A3_65DF6FD46CE3, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_11_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "width": 49.66,
        "height": 24.83,
        "offsetX": 24.83,
        "offsetY": 12.41,
        "pitch": -22.6,
        "yaw": -5.44
       }
      ]
     },
     {
      "maps": [
       {
        "height": 24.83,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.83,
        "offsetY": 12.41,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_10_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -26.95,
        "yaw": 173.62,
        "width": 49.66
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0E348142_20AF_2BC6_4185_FAE3F854DCF2",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_436C1B42_4F77_54CB_41C4_A68387BA7516, this.camera_1318EE7C_1CD5_7681_417B_782E42832BB8); this.mainPlayList.set('selectedIndex', 37); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_5EA5B34E_4F77_F4DB_41A6_EEDCA15542FA, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_0_HS_10_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "width": 49.66,
        "height": 24.83,
        "offsetX": 24.83,
        "offsetY": 12.41,
        "pitch": -26.95,
        "yaw": 173.62
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "SPRING HALL ENTRANCE",
  "id": "panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F33C96AB_FC14_D01B_41C0_61B5F432B79E"
  },
  "idleSequence": "this.sequence_F33C96AB_FC14_D01B_41C0_61B5F432B79E",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 46.86,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 23.43,
        "offsetY": 23.43,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.17,
        "yaw": 70.54,
        "width": 46.86
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E07F9276_FC15_F00D_41EC_49B8363B19E3",
      "useHandCursor": true,
      "areas": [
       {
        "toolTip": "Lobby",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E1354752_FC14_5004_41E2_335F70AA4473, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_0_HS_1_0.gif",
           "class": "ImageResourceLevel",
           "height": 46,
           "width": 46
          }
         ],
         "class": "ImageResource"
        },
        "width": 46.86,
        "height": 46.86,
        "offsetX": 23.43,
        "offsetY": 23.43,
        "pitch": -1.17,
        "yaw": 70.54
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 71,
           "width": 58
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.41,
        "hfov": 10.19,
        "yaw": 70.41
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E141F330_FC14_5004_41DC_706D81418306",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E1197027_FC14_D00C_41EC_3B326C41919B, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 142,
           "width": 116
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 10.19,
        "pitch": -1.41,
        "yaw": 70.41
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 46.86,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 23.43,
        "offsetY": 23.43,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.38,
        "yaw": 51.1,
        "width": 46.86
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D7045E07_FC7C_500C_41D6_5827705F5E28",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_632F8DE0_70C0_0427_41D7_D8435BFBE2C9, true, 0, this.effect_D715758C_FC7C_501C_41C3_2EB6F7E279FC, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_0_HS_2_0.gif",
           "class": "ImageResourceLevel",
           "height": 46,
           "width": 46
          }
         ],
         "class": "ImageResource"
        },
        "width": 46.86,
        "height": 46.86,
        "offsetX": 23.43,
        "offsetY": 23.43,
        "pitch": 9.38,
        "yaw": 51.1
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "ROYAL CLUB ROOM",
  "id": "panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F391D413_FC0B_D004_41D8_DDA6023522DE"
  },
  "idleSequence": "this.sequence_F391D413_FC0B_D004_41D8_DDA6023522DE",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 70,
           "width": 81
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.94,
        "hfov": 14.21,
        "yaw": 161.89
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D14EB75B_FC14_3004_41EC_3897F964D870",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 21); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_D1CEEC34_FC14_500C_41ED_F461C31DB39F, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 141,
           "width": 162
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 14.21,
        "pitch": -22.94,
        "yaw": 161.89
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 24.55,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.55,
        "offsetY": 12.28,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.7,
        "yaw": 162.18,
        "width": 49.11
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_04C464C8_20A9_2AC3_4198_6742D65C3A4B",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD, this.camera_13981B38_1CD5_7E80_41B9_CBCAB80BE53E); this.mainPlayList.set('selectedIndex', 21); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_04013622_20A9_2947_41BC_3B3A12600ACF, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_0_HS_3_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "width": 49.11,
        "height": 24.55,
        "offsetX": 24.55,
        "offsetY": 12.28,
        "pitch": -21.7,
        "yaw": 162.18
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "SEASONS",
  "id": "panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F287FAC4_FC0B_D00C_41D4_72A48B5034DA"
  },
  "idleSequence": "this.sequence_F287FAC4_FC0B_D00C_41D4_72A48B5034DA",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 72,
           "width": 85
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.41,
        "hfov": 15.02,
        "yaw": -2.22
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E276E3F2_FC14_3004_41E3_32BF183735DA",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 22); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E2348122_FC14_5004_41D2_C5E8DCDAE055, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 144,
           "width": 171
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 15.02,
        "pitch": -17.41,
        "yaw": -2.22
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 57,
           "width": 78
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.08,
        "hfov": 13.76,
        "yaw": 159.5
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E2799F42_FC14_5004_41EF_11BEDB3175AE",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 20); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E2383E8A_FC14_D004_41B4_37DDE128934B, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 114,
           "width": 157
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 13.76,
        "pitch": -21.08,
        "yaw": 159.5
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 64.3,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 32.15,
        "offsetY": 32.15,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.12,
        "yaw": 152.7,
        "width": 64.3
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_3809E2B8_2058_E943_41BE_F8519493D5EC",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_3CE5A369_207B_2FC2_41B3_C541A27970D9, true, 0, this.effect_38879C83_205B_7945_41AE_EE906B9D2A45, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_0_HS_6_0.gif",
           "class": "ImageResourceLevel",
           "height": 64,
           "width": 64
          }
         ],
         "class": "ImageResource"
        },
        "width": 64.3,
        "height": 64.3,
        "offsetX": 32.15,
        "offsetY": 32.15,
        "pitch": 2.12,
        "yaw": 152.7
       }
      ]
     },
     {
      "maps": [
       {
        "height": 27.69,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 27.69,
        "offsetY": 13.85,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_0_HS_8_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.15,
        "yaw": 158.81,
        "width": 55.39
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_04F593C0_20A9_2EC2_41B5_13775944AFFC",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368, this.camera_13273D4C_1CD5_7A81_41AF_8077675C8E3A); this.mainPlayList.set('selectedIndex', 20); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_05432D2D_20AB_5B42_41C0_CC6FF064F182, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_0_HS_8_0.gif",
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 55
          }
         ],
         "class": "ImageResource"
        },
        "width": 55.39,
        "height": 27.69,
        "offsetX": 27.69,
        "offsetY": 13.85,
        "pitch": -21.15,
        "yaw": 158.81
       }
      ]
     },
     {
      "maps": [
       {
        "height": 24.26,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.26,
        "offsetY": 12.13,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.31,
        "yaw": -2.15,
        "width": 48.53
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_04207148_20AB_2BD8_41B3_8F401291CB9C",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346, this.camera_132DFD72_1CD5_7A81_41B4_ADE6FE20CE65); this.mainPlayList.set('selectedIndex', 22); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0459B7C4_20A8_F6C2_41B7_391534D200C4, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_0_HS_7_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 48
          }
         ],
         "class": "ImageResource"
        },
        "width": 48.53,
        "height": 24.26,
        "offsetX": 24.26,
        "offsetY": 12.13,
        "pitch": -18.31,
        "yaw": -2.15
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "SEASONS",
  "id": "panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F2A985AC_FC0C_701C_41EA_DF2F5408C104"
  },
  "idleSequence": "this.sequence_F2A985AC_FC0C_701C_41EA_DF2F5408C104",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 84,
           "width": 81
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 1.95,
        "hfov": 14.25,
        "yaw": 22.2
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E3FCBEE8_FC1C_5004_41E9_63202CE9D486",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 21); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E3ED72C3_FC1C_F004_41EE_79123B5D3371, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 169,
           "width": 163
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 14.25,
        "pitch": 1.95,
        "yaw": 22.2
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 62,
           "width": 84
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.39,
        "hfov": 14.69,
        "yaw": 64.27
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_E32B52A1_FC1D_D004_419C_60673847FC0F",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 30); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_E3FAB05A_FC1C_7005_41EC_DBB6D142FA97, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 124,
           "width": 168
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 14.69,
        "pitch": -21.39,
        "yaw": 64.27
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_0_HS_6_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 85,
           "width": 68
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.8,
        "hfov": 12,
        "yaw": -175.79
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_1C1C8C23_10E1_E185_4163_3590DC34C9CA",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_1D04E9CD_10E1_629D_4191_77227BB6B4D8, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_0_HS_6_0.png",
           "class": "ImageResourceLevel",
           "height": 170,
           "width": 137
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 12,
        "pitch": -7.8,
        "yaw": -175.79
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 44.91,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 22.45,
        "offsetY": 22.45,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_0_HS_10_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.98,
        "yaw": 22.1,
        "width": 44.91
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_04292BE5_20A9_5ECC_41C0_FD5308410C86",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD, this.camera_0CD5F0C1_1CD5_6B83_41B1_72F0BE811D47); this.mainPlayList.set('selectedIndex', 21); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_057BA69A_20A9_6947_4184_B87A7049E9F4, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_0_HS_10_0.gif",
           "class": "ImageResourceLevel",
           "height": 44,
           "width": 44
          }
         ],
         "class": "ImageResource"
        },
        "width": 44.91,
        "height": 44.91,
        "offsetX": 22.45,
        "offsetY": 22.45,
        "pitch": 3.98,
        "yaw": 22.1
       }
      ]
     },
     {
      "maps": [
       {
        "height": 19.34,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 19.34,
        "offsetY": 9.67,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_0_HS_9_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.13,
        "yaw": 63.63,
        "width": 38.68
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_058F0AC6_20A8_FECF_41A5_E194210057E4",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301, this.camera_0CCF2087_1CD5_6B80_41A8_F9E468B2F45D); this.mainPlayList.set('selectedIndex', 30); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0ABCED59_20AF_5BC2_41BD_0192A9CC8BE6, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_0_HS_9_0.gif",
           "class": "ImageResourceLevel",
           "height": 19,
           "width": 38
          }
         ],
         "class": "ImageResource"
        },
        "width": 38.68,
        "height": 19.34,
        "offsetX": 19.34,
        "offsetY": 9.67,
        "pitch": -20.13,
        "yaw": 63.63
       }
      ]
     },
     {
      "maps": [
       {
        "height": 19.34,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 19.34,
        "offsetY": 9.67,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_0_HS_8_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.96,
        "yaw": -177.68,
        "width": 38.68
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0E0CFF2E_20A9_575F_41BF_314FA89E1960",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0E063520_20AB_6B43_4157_F2D50F87E430, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_0_HS_8_0.gif",
           "class": "ImageResourceLevel",
           "height": 19,
           "width": 38
          }
         ],
         "class": "ImageResource"
        },
        "width": 38.68,
        "height": 19.34,
        "offsetX": 19.34,
        "offsetY": 9.67,
        "pitch": -8.96,
        "yaw": -177.68
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "SeasonHallEntrance",
  "id": "panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F35C3283_FC0C_3004_41E6_6F018FCEBBA3"
  },
  "idleSequence": "this.sequence_F35C3283_FC0C_3004_41E6_6F018FCEBBA3",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 83,
           "width": 98
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -24.43,
        "hfov": 17.2,
        "yaw": 175.35
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DD199F30_FC1D_D005_41E3_C47435CD9A92",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 24); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DC251124_FC1C_D00C_41B1_EB474F00D6CD, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 167,
           "width": 197
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 17.2,
        "pitch": -24.43,
        "yaw": 175.35
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 29.66,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 29.66,
        "offsetY": 14.83,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.76,
        "yaw": 174.63,
        "width": 59.33
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_05C54C67_20AF_39CE_41AF_265208FE7402",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC, this.camera_13F7A7F3_1CD5_7587_41B9_3FE4C2CB9B25); this.mainPlayList.set('selectedIndex', 24); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_05E6854E_20A9_6BDF_4189_0E3CCEA5938F, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_0_HS_3_0.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 59
          }
         ],
         "class": "ImageResource"
        },
        "width": 59.33,
        "height": 29.66,
        "offsetX": 29.66,
        "offsetY": 14.83,
        "pitch": -23.76,
        "yaw": 174.63
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "SPRING",
  "id": "panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F34F6534_FC0C_F00C_41EA_4EEECD854B0D"
  },
  "idleSequence": "this.sequence_F34F6534_FC0C_F00C_41EA_4EEECD854B0D",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 77,
           "width": 106
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.31,
        "hfov": 18.53,
        "yaw": 2.8
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DCA022F1_FC1B_F004_41B0_1FF996ADD1B9",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 18); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DDA7E419_FC14_5004_41E0_E4D8E6B0C1F6, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 155,
           "width": 212
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 18.53,
        "pitch": -16.31,
        "yaw": 2.8
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 92,
           "width": 104
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -26.24,
        "hfov": 18.27,
        "yaw": 145.84
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DD9B1458_FC15_F005_41D6_D1214700E0C6",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 23); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DC618944_FC14_500C_41C8_DE446A29CCCC, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 184,
           "width": 209
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 18.27,
        "pitch": -26.24,
        "yaw": 145.84
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 57.91,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 28.96,
        "offsetY": 28.96,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.18,
        "yaw": 174.8,
        "width": 57.91
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_3B771CE0_2059_5AC3_4164_EFB415C39440",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_3B110AAA_2069_D947_41C0_45536C38D65A, true, 0, this.effect_3A697433_2059_2945_41BA_C159CF867BF3, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_0_HS_6_0.gif",
           "class": "ImageResourceLevel",
           "height": 57,
           "width": 57
          }
         ],
         "class": "ImageResource"
        },
        "width": 57.91,
        "height": 57.91,
        "offsetX": 28.96,
        "offsetY": 28.96,
        "pitch": 0.18,
        "yaw": 174.8
       }
      ]
     },
     {
      "maps": [
       {
        "height": 24.94,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.94,
        "offsetY": 12.47,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_0_HS_8_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.51,
        "yaw": 2.54,
        "width": 49.88
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_05BF8EC2_20A9_F6C7_41B3_356E231DE873",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68, this.camera_0CF6BFA3_1CD5_7580_41B8_698DC562B85F); this.mainPlayList.set('selectedIndex', 18); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0AD94566_20A9_2BCF_41B3_19FC369870C4, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_0_HS_8_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "width": 49.88,
        "height": 24.94,
        "offsetX": 24.94,
        "offsetY": 12.47,
        "pitch": -16.51,
        "yaw": 2.54
       }
      ]
     },
     {
      "maps": [
       {
        "height": 24.94,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.94,
        "offsetY": 12.47,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.65,
        "yaw": 146.34,
        "width": 49.88
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0520BB2F_20A8_DF5D_4190_20973E90FCBF",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F, this.camera_0CFD3FE0_1CD5_7581_41B9_96AD9F20BB58); this.mainPlayList.set('selectedIndex', 23); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0B8F4DB1_20AB_FB45_41A1_41768BCB1F7B, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_0_HS_7_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "width": 49.88,
        "height": 24.94,
        "offsetX": 24.94,
        "offsetY": 12.47,
        "pitch": -25.65,
        "yaw": 146.34
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "SPRING",
  "id": "panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F3115EBB_FC0C_307B_418B_B44978B912A8"
  },
  "idleSequence": "this.sequence_F3115EBB_FC0C_307B_418B_B44978B912A8",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -4.85,
   "yaw": 176.8
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 83,
           "width": 98
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -18.62,
        "hfov": 17.26,
        "yaw": 79.11
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DD019C18_FC14_3004_41E4_B3C4186FAD23",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 26); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DDF4C473_FC14_5004_41EE_A28A2E67E84D, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 166,
           "width": 197
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 17.26,
        "pitch": -18.62,
        "yaw": 79.11
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 28.28,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 28.28,
        "offsetY": 14.14,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.12,
        "yaw": 79.54,
        "width": 56.55
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_00E3A949_23B9_5BC5_41A1_F463AEB95023",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9, this.camera_13497C65_1CD5_7A83_41A5_15807EFA2165); this.mainPlayList.set('selectedIndex', 26); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_01531868_23BB_79C3_41A0_DF15214D7358, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_0_HS_3_0.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 56
          }
         ],
         "class": "ImageResource"
        },
        "width": 56.55,
        "height": 28.28,
        "offsetX": 28.28,
        "offsetY": 14.14,
        "pitch": -19.12,
        "yaw": 79.54
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "POOL SIDE",
  "id": "panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F3C4BFBC_FC0C_307C_41C1_D02A68510AAD"
  },
  "idleSequence": "this.sequence_F3C4BFBC_FC0C_307C_41C1_D02A68510AAD",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 51.37,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 25.68,
        "offsetY": 25.68,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.76,
        "yaw": -97.35,
        "width": 51.37
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DC5FA648_FC14_3004_41EC_B62F14259C12",
      "useHandCursor": true,
      "areas": [
       {
        "toolTip": "EXIT",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 18); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DEA56D8D_FC14_501A_41B2_77634E8B23FA, 'showEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_0_HS_3_0.gif",
           "class": "ImageResourceLevel",
           "height": 51,
           "width": 51
          }
         ],
         "class": "ImageResource"
        },
        "width": 51.37,
        "height": 51.37,
        "offsetX": 25.68,
        "offsetY": 25.68,
        "pitch": -1.76,
        "yaw": -97.35
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 82,
           "width": 69
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.83,
        "hfov": 12.16,
        "yaw": -97.42
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DED7E7AF_FC15_D01C_41E1_C1DB42AD831E",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68, this.camera_13E24703_1CD5_7680_419C_2A6B19DB6C5E); this.mainPlayList.set('selectedIndex', 18); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DD68C674_FC14_D00C_41EE_A29A39322197, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 165,
           "width": 138
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 12.16,
        "pitch": -2.83,
        "yaw": -97.42
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 81,
           "width": 98
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.35,
        "hfov": 17.14,
        "yaw": -15.93
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DF1085F8_FC0B_D004_41C2_3249C7CDCF97",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 25); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DE358752_FC0C_5004_41CD_B1119F7484B8, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 162,
           "width": 196
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 17.14,
        "pitch": -21.35,
        "yaw": -15.93
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 27.1,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 27.1,
        "offsetY": 13.55,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.01,
        "yaw": -14.9,
        "width": 54.19
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_013A6559_23BB_EBC5_41BC_5371C0196E28",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109, this.camera_13E52726_1CD5_7680_4183_760210C5B3B1); this.mainPlayList.set('selectedIndex', 25); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_062232DC_23BB_6EC3_41BC_D689489AB04B, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_0_HS_5_0.gif",
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 54
          }
         ],
         "class": "ImageResource"
        },
        "width": 54.19,
        "height": 27.1,
        "offsetX": 27.1,
        "offsetY": 13.55,
        "pitch": -20.01,
        "yaw": -14.9
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "POOL SIDE",
  "id": "panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F3982004_FC0C_300C_41DD_9F24B90DDE70"
  },
  "idleSequence": "this.sequence_F3982004_FC0C_300C_41DD_9F24B90DDE70",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 77.21,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 38.6,
        "offsetY": 38.6,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 14.08,
        "yaw": 36.3,
        "width": 77.21
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DEAF1D18_FC0C_F004_41E9_D3F7EFF3CF91",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_66EDDBB1_7340_0C29_41D4_173FF344E0CC, true, 0, this.effect_DFB5954F_FC0C_501C_41DB_E2F7DDD91ADB, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_0_HS_2_0.gif",
           "class": "ImageResourceLevel",
           "height": 77,
           "width": 77
          }
         ],
         "class": "ImageResource"
        },
        "width": 77.21,
        "height": 77.21,
        "offsetX": 38.6,
        "offsetY": 38.6,
        "pitch": 14.08,
        "yaw": 36.3
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 46,
           "width": 74
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.99,
        "hfov": 12.99,
        "yaw": 93.28
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D941C68F_FC0C_301C_41E1_15C048D3F387",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 28); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DB2D04F4_FC0C_500C_419A_2E7E6AB5B627, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 93,
           "width": 148
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 12.99,
        "pitch": -14.99,
        "yaw": 93.28
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 27.55,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 27.55,
        "offsetY": 13.78,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.72,
        "yaw": 93.03,
        "width": 55.1
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_05EF8D32_20AB_3B47_41C1_0A2FAFC91930",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3, this.camera_13E8774A_1CD5_7680_41AF_3E6E9F600A5D); this.mainPlayList.set('selectedIndex', 28); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0A435DD3_20A9_5AC5_41C0_8DE9F986CAB2, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_0_HS_4_0.gif",
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 55
          }
         ],
         "class": "ImageResource"
        },
        "width": 55.1,
        "height": 27.55,
        "offsetX": 27.55,
        "offsetY": 13.78,
        "pitch": -14.72,
        "yaw": 93.03
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "TIGER TRAIL",
  "id": "panorama_F23E9918_FC1C_3004_41DB_77ABF0310002",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F29FD4D4_FC0C_700C_41E0_36A142BC9A4F"
  },
  "idleSequence": "this.sequence_F29FD4D4_FC0C_700C_41E0_36A142BC9A4F",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_6_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 42,
           "width": 75
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.43,
        "hfov": 13.19,
        "yaw": -57.44
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D8D3B6C1_FC0C_5004_41B6_D41625448800",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DF47D0B9_FC0D_D004_41EF_2488F3ACA996, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_6_0.png",
           "class": "ImageResourceLevel",
           "height": 85,
           "width": 150
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 13.19,
        "pitch": -12.43,
        "yaw": -57.44
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_4_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 62,
           "width": 76
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.65,
        "hfov": 13.41,
        "yaw": 40.87
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D849D6C8_FC0C_F004_41DE_F6F7B1CA6DA8",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_D8A782F6_FC0C_300C_41DD_3425523E3F4E, 'showEffect', false); this.mainPlayList.set('selectedIndex', 32)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_4_0.png",
           "class": "ImageResourceLevel",
           "height": 125,
           "width": 153
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 13.41,
        "pitch": -11.65,
        "yaw": 40.87
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 36,
           "width": 60
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.42,
        "hfov": 10.62,
        "yaw": -119.11
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D9F0EAA2_FC34_5004_41EE_59EFB3338261",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_D806DCAE_FC34_D01C_41B4_B9ABC3B15E68, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 72,
           "width": 121
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 10.62,
        "pitch": -9.42,
        "yaw": -119.11
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 39,
           "width": 62
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.82,
        "hfov": 10.98,
        "yaw": -173.01
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D95B0FE1_FC35_D004_41E4_CF0434BED345",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 27); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_D99BC20F_FC34_D01C_41CD_8EA088C5338C, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 78,
           "width": 125
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 10.98,
        "pitch": -15.82,
        "yaw": -173.01
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 29.79,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 29.79,
        "offsetY": 14.89,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_14_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.54,
        "yaw": 40.24,
        "width": 59.58
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_1E271BD1_1286_29A8_4187_A37E6D1940BC",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6, this.camera_13D7A961_1CD5_7A83_41B1_512FA5FD926F); this.mainPlayList.set('selectedIndex', 32); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_1F9F3C43_1286_6EA8_41AE_040730B57734, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_14_0.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 59
          }
         ],
         "class": "ImageResource"
        },
        "width": 59.58,
        "height": 29.79,
        "offsetX": 29.79,
        "offsetY": 14.89,
        "pitch": -11.54,
        "yaw": 40.24
       }
      ]
     },
     {
      "maps": [
       {
        "height": 23.86,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 23.86,
        "offsetY": 11.93,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_13_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.68,
        "yaw": -118.77,
        "width": 47.72
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_02F0B480_1286_1FA8_4183_7F91245AEB98",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C, this.camera_13D4193E_1CD5_7A81_41A8_71B75E28406B); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_1CF9DB54_1286_2AA8_41A8_CB98D27FED5D, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_13_0.gif",
           "class": "ImageResourceLevel",
           "height": 23,
           "width": 47
          }
         ],
         "class": "ImageResource"
        },
        "width": 47.72,
        "height": 23.86,
        "offsetX": 23.86,
        "offsetY": 11.93,
        "pitch": -9.68,
        "yaw": -118.77
       }
      ]
     },
     {
      "maps": [
       {
        "height": 23.86,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 23.86,
        "offsetY": 11.93,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_12_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.64,
        "yaw": -172.99,
        "width": 47.72
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_1DA072A8_1286_3BF8_4180_0E25C0DF5BB4",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E9918_FC1C_3004_41DB_77ABF0310002, this.camera_13DEB9AD_1CD5_7D83_41AD_BEAF8D42FF58); this.mainPlayList.set('selectedIndex', 27); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_1C730683_1282_3BA8_41A1_C881975C22B7, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_12_0.gif",
           "class": "ImageResourceLevel",
           "height": 23,
           "width": 47
          }
         ],
         "class": "ImageResource"
        },
        "width": 47.72,
        "height": 23.86,
        "offsetX": 23.86,
        "offsetY": 11.93,
        "pitch": -15.64,
        "yaw": -172.99
       }
      ]
     },
     {
      "maps": [
       {
        "height": 30.93,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 30.93,
        "offsetY": 15.47,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_15_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.94,
        "yaw": -57.99,
        "width": 61.86
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0527F9F2_20A9_3AC7_4160_CFD9E101DBCC",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909, this.camera_13DB1984_1CD5_7D81_4198_29FBEE61F929); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0A4C772A_20A8_D747_41BE_1DF829D537A7, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_0_HS_15_0.gif",
           "class": "ImageResourceLevel",
           "height": 30,
           "width": 61
          }
         ],
         "class": "ImageResource"
        },
        "width": 61.86,
        "height": 30.93,
        "offsetX": 30.93,
        "offsetY": 15.47,
        "pitch": -11.94,
        "yaw": -57.99
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "TigerTrial Entrance",
  "id": "panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F35FAD44_FC0C_300C_41C7_AC58469449F5"
  },
  "idleSequence": "this.sequence_F35FAD44_FC0C_300C_41C7_AC58469449F5",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_6_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 109,
           "width": 98
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.38,
        "hfov": 17.26,
        "yaw": 20.04
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D95579DA_FC35_D004_41E0_8A3091210167",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_D446EDA5_FC34_500C_41D2_C8BAB9DD2017, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_6_0.png",
           "class": "ImageResourceLevel",
           "height": 219,
           "width": 197
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 17.26,
        "pitch": -1.38,
        "yaw": 20.04
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_4_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 72,
           "width": 97
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.12,
        "hfov": 16.95,
        "yaw": 59.11
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DA83D1A8_FC34_5004_41E1_0D0F827AE4B4",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DA50CCDC_FC3B_D03C_41D9_9BA3785E5AF0, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_4_0.png",
           "class": "ImageResourceLevel",
           "height": 145,
           "width": 194
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 16.95,
        "pitch": -2.12,
        "yaw": 59.11
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 58,
           "width": 89
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.81,
        "hfov": 15.65,
        "yaw": -111.85
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D93211B0_FC3C_D004_41EB_191780C22688",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909, this.camera_0CE5AEF8_1CD5_7781_41A6_5AA7FDF1A643); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DA136303_FC3C_5004_41DD_D8F522985D7C, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 116,
           "width": 179
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 15.65,
        "pitch": -11.81,
        "yaw": -111.85
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 116,
           "width": 126
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.06,
        "hfov": 21.96,
        "yaw": -149.18
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DA9493B8_FC3C_F005_41D3_A2913FE6C73A",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DA5924F4_FC3C_500C_41EB_B787388AED55, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 232,
           "width": 252
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 21.96,
        "pitch": -6.06,
        "yaw": -149.18
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_9_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 24
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.61,
        "hfov": 4.39,
        "yaw": 58.71
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_16ACB391_0218_46F1_4179_C7A5A71739E5",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": "Lobby",
        "click": "this.startPanoramaWithCamera(this.panorama_436C1B42_4F77_54CB_41C4_A68387BA7516, this.camera_0CEAAF30_1CD5_7681_41A8_71BF4AF47FCC); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_B58DB0B4_BA88_E554_41E2_46BBD4416947, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_9_0.png",
           "class": "ImageResourceLevel",
           "height": 49,
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.39,
        "pitch": -1.61,
        "yaw": 58.71
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_10_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 40,
           "width": 40
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.69,
        "hfov": 7.17,
        "yaw": 20.55
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_06CC2498_0C14_7056_4190_07732A0DF762",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": "Jeff's",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4, this.camera_0CF12F6F_1CD5_7680_41B9_87499E2071C2); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0783BC49_0C14_3036_418C_C94CC3FCC906, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_10_0.png",
           "class": "ImageResourceLevel",
           "height": 80,
           "width": 81
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.17,
        "pitch": -1.69,
        "yaw": 20.55
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 25.07,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 25.07,
        "offsetY": 12.54,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_13_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.28,
        "yaw": -112.67,
        "width": 50.14
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_053A9787_20A7_574E_4172_CBC9FB05BA86",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 30); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0A76C3AE_20A7_2F5E_41BC_5644AE15D36D, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_13_0.gif",
           "class": "ImageResourceLevel",
           "height": 25,
           "width": 50
          }
         ],
         "class": "ImageResource"
        },
        "width": 50.14,
        "height": 25.07,
        "offsetX": 25.07,
        "offsetY": 12.54,
        "pitch": -11.28,
        "yaw": -112.67
       }
      ]
     },
     {
      "maps": [
       {
        "height": 58.22,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 29.11,
        "offsetY": 29.11,
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_12_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.65,
        "yaw": -146.7,
        "width": 58.22
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0AE3D32E_20A7_2F5F_41BD_E6DF56666B00",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6, this.camera_131FEEBC_1CD5_7781_41B9_5742A6ADEB83); this.mainPlayList.set('selectedIndex', 32); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0A29D153_20B9_2BC6_41A2_5275185936F1, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_0_HS_12_0.gif",
           "class": "ImageResourceLevel",
           "height": 58,
           "width": 58
          }
         ],
         "class": "ImageResource"
        },
        "width": 58.22,
        "height": 58.22,
        "offsetX": 29.11,
        "offsetY": 29.11,
        "pitch": -4.65,
        "yaw": -146.7
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "Varanda",
  "id": "panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_F34E06E3_FC0C_700B_41E0_F11D4D0EA8DB"
  },
  "idleSequence": "this.sequence_F34E06E3_FC0C_700B_41E0_F11D4D0EA8DB",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 73,
           "width": 87
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.43,
        "hfov": 15.37,
        "yaw": 60.89
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DA3F24A9_FC3C_D004_419B_75029D560AF2",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 22); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_D48629AC_FC3C_701C_41BD_76E9191D2C3E, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 146,
           "width": 175
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 15.37,
        "pitch": -16.43,
        "yaw": 60.89
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 57,
           "width": 85
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.45,
        "hfov": 14.91,
        "yaw": -147.17
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D6029698_FC3C_5004_41E1_FB7B594C8A11",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DB0C3EA5_FC3C_D00C_41ED_87CA0ED0C65A, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 115,
           "width": 170
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 14.91,
        "pitch": -17.45,
        "yaw": -147.17
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 28.81,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 28.81,
        "offsetY": 14.4,
        "image": {
         "levels": [
          {
           "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_0_HS_10_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.96,
        "yaw": 60.08,
        "width": 57.61
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0AECA949_20B9_3BC5_41B9_3EE5D646A033",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346, this.camera_137CEC18_1CD5_7A80_4190_505DD175ADDF); this.mainPlayList.set('selectedIndex', 22); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0B2C6A6C_20BB_59C2_4191_1CC36601DD5D, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_0_HS_10_0.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 57
          }
         ],
         "class": "ImageResource"
        },
        "width": 57.61,
        "height": 28.81,
        "offsetX": 28.81,
        "offsetY": 14.4,
        "pitch": -15.96,
        "yaw": 60.08
       }
      ]
     },
     {
      "maps": [
       {
        "height": 28.81,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 28.81,
        "offsetY": 14.4,
        "image": {
         "levels": [
          {
           "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_0_HS_9_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.86,
        "yaw": -146.95,
        "width": 57.61
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_08FD3069_20BB_29C5_419A_C533363964F0",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909, this.camera_13768BF3_1CD5_7D80_41B7_1A431CC999A2); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0901C614_20BB_E943_41AF_C12292316BB0, 'showEffect', false); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_0_HS_9_0.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 57
          }
         ],
         "class": "ImageResource"
        },
        "width": 57.61,
        "height": 28.81,
        "offsetX": 28.81,
        "offsetY": 14.4,
        "pitch": -16.86,
        "yaw": -146.95
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "Lime Light Varanda",
  "id": "panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E94E1150_FC14_5005_41E7_D7F208821001"
  },
  "idleSequence": "this.sequence_E94E1150_FC14_5005_41E7_D7F208821001",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 60.42,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 30.21,
        "offsetY": 30.21,
        "image": {
         "levels": [
          {
           "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.42,
        "yaw": 0.72,
        "width": 60.42
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DA2D9D08_FC3C_5004_41E8_5835C1B0C0C0",
      "useHandCursor": true,
      "areas": [
       {
        "toolTip": "EXIT",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_DBF9A604_FC3B_D00C_41DA_C00DFFAD98C5, 'showEffect', false)",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_0_HS_3_0.gif",
           "class": "ImageResourceLevel",
           "height": 60,
           "width": 60
          }
         ],
         "class": "ImageResource"
        },
        "width": 60.42,
        "height": 60.42,
        "offsetX": 30.21,
        "offsetY": 30.21,
        "pitch": 2.42,
        "yaw": 0.72
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 111,
           "width": 106
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.91,
        "hfov": 18.59,
        "yaw": 0.44
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DBE48F48_FC34_3005_41DA_838058B3C038",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909, this.camera_13FAC822_1CD5_7A81_4193_62C04431C5DC); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_D4CE4145_FC34_D00C_41E3_BAC69C20298E, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 222,
           "width": 213
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 18.59,
        "pitch": 0.91,
        "yaw": 0.44
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 53,
           "width": 79
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.42,
        "hfov": 13.92,
        "yaw": -75.92
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DB6FD8E2_FC34_3004_41EC_EB916259A372",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_D47F28A1_FC34_5004_41E0_4F02F81205EF, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 107,
           "width": 159
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 13.92,
        "pitch": -19.42,
        "yaw": -75.92
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 60.42,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 30.21,
        "offsetY": 30.21,
        "image": {
         "levels": [
          {
           "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.72,
        "yaw": 174.74,
        "width": 60.42
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D786C3CA_FC0C_5004_41DE_604287324A8E",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_65B08C58_7340_0467_4190_CE04DA75D4D8, true, 0, this.effect_D7620967_FC0C_700C_41BA_DAB1143E96D4, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_0_HS_4_0.gif",
           "class": "ImageResourceLevel",
           "height": 60,
           "width": 60
          }
         ],
         "class": "ImageResource"
        },
        "width": 60.42,
        "height": 60.42,
        "offsetX": 30.21,
        "offsetY": 30.21,
        "pitch": 2.72,
        "yaw": 174.74
       }
      ]
     },
     {
      "maps": [
       {
        "height": 26.02,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 26.02,
        "offsetY": 13.01,
        "image": {
         "levels": [
          {
           "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.29,
        "yaw": -75.67,
        "width": 52.04
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0A508D73_20B8_FBC6_41B6_A0B538274666",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E7C1C_FC1C_703D_41C7_208D15482719, this.camera_13FE4843_1CD5_7A87_41B0_754761A96D69); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_08845719_20B9_3745_41AD_9C8EFEE1DA2D, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_0_HS_6_0.gif",
           "class": "ImageResourceLevel",
           "height": 26,
           "width": 52
          }
         ],
         "class": "ImageResource"
        },
        "width": 52.04,
        "height": 26.02,
        "offsetX": 26.02,
        "offsetY": 13.01,
        "pitch": -20.29,
        "yaw": -75.67
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "LIME LIGHT",
  "id": "panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E9450C76_FC14_D00C_41DE_3181A6E4D098"
  },
  "idleSequence": "this.sequence_E9450C76_FC14_D00C_41DE_3181A6E4D098",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 24.41,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.41,
        "offsetY": 12.2,
        "image": {
         "levels": [
          {
           "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.8,
        "yaw": 135.24,
        "width": 48.82
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_18CCB29C_1282_1BD8_419A_14DDF1617AB8",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 28); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_19BCD79C_1286_39D8_41AF_718F5DC98963, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_0_HS_5_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 48
          }
         ],
         "class": "ImageResource"
        },
        "width": 48.82,
        "height": 24.41,
        "offsetX": 24.41,
        "offsetY": 12.2,
        "pitch": -12.8,
        "yaw": 135.24
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_0_HS_4_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 64,
           "width": 103
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.74,
        "hfov": 18.12,
        "yaw": 134.67
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_19EF1290_1286_7BA8_4197_B394CAFD8008",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3, this.camera_13CE08F5_1CD5_7B80_41B4_8CE0F883BF47); this.mainPlayList.set('selectedIndex', 28); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_19128603_1287_FAA8_415C_82808018F926, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_0_HS_4_0.png",
           "class": "ImageResourceLevel",
           "height": 129,
           "width": 207
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 18.12,
        "pitch": -12.74,
        "yaw": 134.67
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 24.41,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.41,
        "offsetY": 12.2,
        "image": {
         "levels": [
          {
           "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.27,
        "yaw": -162.33,
        "width": 48.82
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_1EC249F0_1286_6968_4194_C1E80296BC9E",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_1EA65673_1286_FB68_41A1_C3B648395268, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_0_HS_3_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 48
          }
         ],
         "class": "ImageResource"
        },
        "width": 48.82,
        "height": 24.41,
        "offsetX": 24.41,
        "offsetY": 12.2,
        "pitch": -9.27,
        "yaw": -162.33
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 49,
           "width": 89
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.72,
        "hfov": 15.64,
        "yaw": -161.82
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_1EF0F718_1282_1AD8_41B0_8A04C43F6A99",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_1EF6C43B_1282_1ED8_418D_4014EBEBC9FF, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 99,
           "width": 179
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 15.64,
        "pitch": -9.72,
        "yaw": -161.82
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 30,
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.75,
        "hfov": 5.27,
        "yaw": -36.84
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_1E5F64D8_128E_1F58_418F_3F80DC7EAD5A",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": "Varanda",
        "click": "this.mainPlayList.set('selectedIndex', 29); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_1EC24E2C_128E_2AF8_41A2_14C282C9AF1E, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 60,
           "width": 60
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.27,
        "pitch": 0.75,
        "yaw": -36.84
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 47,
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.22,
        "hfov": 8.66,
        "yaw": -36.57
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_1EF08680_128E_1BA8_4170_701182AC5E60",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06, this.camera_13D1491A_1CD5_7A80_41B9_F1136B018D1B); this.mainPlayList.set('selectedIndex', 29); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_1E3F05B4_1282_39E8_4191_AB4D26E79F46, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 95,
           "width": 98
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 8.66,
        "pitch": 0.22,
        "yaw": -36.57
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "Geofferys Lawn",
  "id": "panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_A93BC374_A796_1D4E_41D8_AAF14A990967"
  },
  "idleSequence": "this.sequence_A93BC374_A796_1D4E_41D8_AAF14A990967",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -6.1,
   "yaw": 155.48
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 38,
           "width": 68
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.07,
        "hfov": 12.04,
        "yaw": -0.34
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_2BE48EB6_2018_A767_41B7_3046F822B775",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_2C12FEE2_201F_A71F_41A3_5AC7625B2516, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 77,
           "width": 137
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 12.04,
        "pitch": -12.07,
        "yaw": -0.34
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 29.57,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 29.57,
        "offsetY": 14.79,
        "image": {
         "levels": [
          {
           "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12,
        "yaw": 0.23,
        "width": 59.14
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0EF44568_20A9_2BC3_41B3_4B986745A069",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E1356_FC1C_300C_41C0_72C59E591498, this.camera_1370CBCE_1CD5_7D80_41AC_AEE6D75A4ED4); this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_0EF1D1BE_20A9_2ABF_41C1_2F2F97B88578, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_0_HS_2_0.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 59
          }
         ],
         "class": "ImageResource"
        },
        "width": 59.14,
        "height": 29.57,
        "offsetX": 29.57,
        "offsetY": 14.79,
        "pitch": -12,
        "yaw": 0.23
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "MainGate",
  "id": "panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_2A60EDA1_201B_E51D_4144_8783A890FA4B"
  },
  "idleSequence": "this.sequence_2A60EDA1_201B_E51D_4144_8783A890FA4B",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 78,
           "width": 137
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -28.29,
        "hfov": 23.85,
        "yaw": -174.34
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_2E184526_2069_EB4E_41B6_92E381480AE9",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 36); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_2E1CCFDA_2069_36C7_41AB_AB6D3A3E3B6B, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 157,
           "width": 275
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 23.85,
        "pitch": -28.29,
        "yaw": -174.34
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 24.82,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.82,
        "offsetY": 12.41,
        "image": {
         "levels": [
          {
           "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28.26,
        "yaw": -175.36,
        "width": 49.64
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0B049BC0_20BB_3EC3_41B0_20A598B38B2A",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B, this.camera_13C14864_1CD5_7A81_41AE_DA6FA606B0EA); this.mainPlayList.set('selectedIndex', 36); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_09C73DF6_20B8_FACE_41A6_A51DD51E8811, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_0_HS_2_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "width": 49.64,
        "height": 24.82,
        "offsetX": 24.82,
        "offsetY": 12.41,
        "pitch": -28.26,
        "yaw": -175.36
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "ginseng dinning",
  "id": "panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_32A24620_2067_2943_41B9_92511C14CEF8"
  },
  "idleSequence": "this.sequence_32A24620_2067_2943_41B9_92511C14CEF8",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 82,
           "width": 88
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.98,
        "hfov": 15.49,
        "yaw": -174.22
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_2DDF5AA5_207B_394D_41A7_A7302FEC1D5B",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_2D3D305F_207B_29FD_4192_0771020C8D99, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 165,
           "width": 177
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 15.49,
        "pitch": -3.98,
        "yaw": -174.22
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 58,
           "width": 80
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -32.8,
        "hfov": 14.03,
        "yaw": -43.97
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_2E35086B_2067_79C5_41BC_30F94BD6DA6C",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 116,
           "width": 160
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 14.03,
        "pitch": -32.8,
        "yaw": -43.97
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 56.06,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 28.03,
        "offsetY": 28.03,
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.39,
        "yaw": 47.06,
        "width": 56.06
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_387E2E70_2079_39C2_41BD_67DD64121922",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_39F67D00_206F_5B43_41BA_66721296B47A, true, 0, this.effect_388E5C6A_2079_D9C7_41A9_FE1789291910, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_0_HS_5_0.gif",
           "class": "ImageResourceLevel",
           "height": 56,
           "width": 56
          }
         ],
         "class": "ImageResource"
        },
        "width": 56.06,
        "height": 56.06,
        "offsetX": 28.03,
        "offsetY": 28.03,
        "pitch": 0.39,
        "yaw": 47.06
       }
      ]
     },
     {
      "maps": [
       {
        "height": 24.14,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 24.14,
        "offsetY": 12.07,
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -32.32,
        "yaw": -44.04,
        "width": 48.28
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0B572BB8_20B9_3F43_41A3_151BC6D3D4C3",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B, this.camera_13398DBA_1CD5_7581_41B4_15316BE0D59E); this.mainPlayList.set('selectedIndex', 36); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_09B45D4C_20B9_5BC3_41A9_4250962E2F94, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_0_HS_7_0.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 48
          }
         ],
         "class": "ImageResource"
        },
        "width": 48.28,
        "height": 24.14,
        "offsetX": 24.14,
        "offsetY": 12.07,
        "pitch": -32.32,
        "yaw": -44.04
       }
      ]
     },
     {
      "maps": [
       {
        "height": 56.06,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 28.03,
        "offsetY": 28.03,
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.76,
        "yaw": -172.19,
        "width": 56.06
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0EEAFCAC_20A7_3943_41BE_D2ECB8F0C392",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98, this.camera_13331D98_1CD5_7581_41A2_7C89E27ED122); this.mainPlayList.set('selectedIndex', 16)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_0_HS_6_0.gif",
           "class": "ImageResourceLevel",
           "height": 56,
           "width": 56
          }
         ],
         "class": "ImageResource"
        },
        "width": 56.06,
        "height": 56.06,
        "offsetX": 28.03,
        "offsetY": 28.03,
        "pitch": -6.76,
        "yaw": -172.19
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "GINSENG ",
  "id": "panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_2D730780_2078_F743_41B5_D091975C8A91"
  },
  "idleSequence": "this.sequence_2D730780_2078_F743_41B5_D091975C8A91",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 48,
           "width": 79
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -25.13,
        "hfov": 13.97,
        "yaw": -112.62
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_2E0D123C_206B_2943_419C_033AB872298B",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 35); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_2E150BDB_206B_DEC5_41BE_298944C509DA, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 96,
           "width": 159
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 13.97,
        "pitch": -25.13,
        "yaw": -112.62
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 53,
           "width": 88
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.95,
        "hfov": 15.4,
        "yaw": 25.89
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_2EE7284D_206F_79DD_41B5_88C4FBEA6D73",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 34); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_2EDD9A5D_2068_F9FD_41B8_793ECC13A5C4, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 106,
           "width": 176
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 15.4,
        "pitch": -12.95,
        "yaw": 25.89
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 28.03,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 28.03,
        "offsetY": 14.01,
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.73,
        "yaw": 26.05,
        "width": 56.05
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_0B7DC666_20B9_29CF_41AA_A4D7030D8EF2",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A, this.camera_13F117AE_1CD5_7580_41B0_3768C74F7C53); this.mainPlayList.set('selectedIndex', 34); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_09B3D9A4_20A7_5B43_41C0_8FEDCA2A7E55, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_0_HS_4_0.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 56
          }
         ],
         "class": "ImageResource"
        },
        "width": 56.05,
        "height": 28.03,
        "offsetX": 28.03,
        "offsetY": 14.01,
        "pitch": -12.73,
        "yaw": 26.05
       }
      ]
     },
     {
      "maps": [
       {
        "height": 23.86,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 23.86,
        "offsetY": 11.93,
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.62,
        "yaw": -111.82,
        "width": 47.72
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_29F593AD_22A3_9F19_419E_1D525AF19FDD",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241, this.camera_13F407D1_1CD5_7583_419D_14E45987B43B); this.mainPlayList.set('selectedIndex', 35); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_2EEEC797_22A2_8708_41BD_99F65D07CDEE, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_0_HS_5_0.gif",
           "class": "ImageResourceLevel",
           "height": 23,
           "width": 47
          }
         ],
         "class": "ImageResource"
        },
        "width": 47.72,
        "height": 23.86,
        "offsetX": 23.86,
        "offsetY": 11.93,
        "pitch": -25.62,
        "yaw": -111.82
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "ginseng dinning2",
  "id": "panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_2DAE9383_2069_EF45_41B5_17DDEF09294A"
  },
  "idleSequence": "this.sequence_2DAE9383_2069_EF45_41B5_17DDEF09294A",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 20,
           "width": 20
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.74,
        "hfov": 3.51,
        "yaw": -126.21
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_433061FA_4F7C_B7BB_41C6_319C060CA81E",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": "To Varanda",
        "click": "this.mainPlayList.set('selectedIndex', 29); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_42354F09_4F7F_EC59_418C_62B750096791, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "height": 40,
           "width": 40
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.51,
        "pitch": -3.74,
        "yaw": -126.21
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 20,
           "width": 20
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.94,
        "hfov": 3.51,
        "yaw": -36.95
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_43D4CD09_4F7F_AC59_4197_B2B645DAB16F",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": "To Spring Hall",
        "click": "this.mainPlayList.set('selectedIndex', 18); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_428109F7_4F7C_F7C9_41BD_7AD37563C070, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 40,
           "width": 40
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.51,
        "pitch": -2.94,
        "yaw": -36.95
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 49,
           "width": 33
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.51,
        "hfov": 5.84,
        "yaw": -37.09
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_416238C1_4F7C_B5C9_41C0_3292714815EF",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68, this.camera_13BD6A8F_1CD5_7F9F_41A2_53AF9B5A9CD2); this.mainPlayList.set('selectedIndex', 18); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_40B12840_4F7D_D4C7_41C6_7A037F9407F8, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 99,
           "width": 66
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 5.84,
        "pitch": -2.51,
        "yaw": -37.09
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 47,
           "width": 41
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.17,
        "hfov": 7.36,
        "yaw": -125.58
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_40919508_4F7D_DC58_41C0_5AD97CC7D74D",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06, this.camera_13886AD7_1CD5_7F80_4192_7301625B4B86); this.mainPlayList.set('selectedIndex', 29); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_4067EAD7_4F7D_55C9_41D2_651C3AD90D99, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 94,
           "width": 83
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 7.36,
        "pitch": -4.17,
        "yaw": -125.58
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 55.51,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 27.75,
        "offsetY": 27.75,
        "image": {
         "levels": [
          {
           "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_0_HS_8_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.47,
        "yaw": 87.72,
        "width": 55.51
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_5CE04550_4FB9_924F_41CA_2CEDDE803993",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_5D1F615F_4FBE_B272_41CE_BD96ACB1BC96, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_0_HS_8_0.gif",
           "class": "ImageResourceLevel",
           "height": 55,
           "width": 55
          }
         ],
         "class": "ImageResource"
        },
        "width": 55.51,
        "height": 55.51,
        "offsetX": 27.75,
        "offsetY": 27.75,
        "pitch": -3.47,
        "yaw": 87.72
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_0_HS_7_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 82,
           "width": 81
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.38,
        "hfov": 14.3,
        "yaw": 87.88
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_5CCBF470_4FBE_924F_4181_852345C0DEB6",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": "EXIT",
        "click": "this.startPanoramaWithCamera(this.panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE, this.camera_13824AB2_1CD5_7F80_418F_364EB0F264DB); this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_5CF0EF11_4FBF_8FF1_4176_DDDF45EC54EC, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_0_HS_7_0.png",
           "class": "ImageResourceLevel",
           "height": 164,
           "width": 163
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 14.3,
        "pitch": -2.38,
        "yaw": 87.88
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "Lobby",
  "id": "panorama_436C1B42_4F77_54CB_41C4_A68387BA7516",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_4558E234_4F77_D44F_41B4_6D0E60A2A30A"
  },
  "idleSequence": "this.sequence_4558E234_4F77_D44F_41B4_6D0E60A2A30A",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 26.57,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 26.57,
        "offsetY": 13.29,
        "image": {
         "levels": [
          {
           "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -31.49,
        "yaw": 167.74,
        "width": 53.15
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_44A91B5D_4F8B_9676_41CF_DF7A4F53185A",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 39); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_43B062FA_4F8A_9632_41C0_2CDC04E556E8, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_0_HS_1_0.gif",
           "class": "ImageResourceLevel",
           "height": 26,
           "width": 53
          }
         ],
         "class": "ImageResource"
        },
        "width": 53.15,
        "height": 26.57,
        "offsetX": 26.57,
        "offsetY": 13.29,
        "pitch": -31.49,
        "yaw": 167.74
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 100,
           "width": 87
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -30.03,
        "hfov": 15.37,
        "yaw": 168.27
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_43E19B3B_4F8A_B631_41B5_1DC0A4975142",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_46131D95_4F89_92F1_41AF_851887BE6E54, this.camera_13CA88CB_1CD5_7B80_41BA_B0D4A8934A8A); this.mainPlayList.set('selectedIndex', 39); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_431E6C6E_4F8A_9252_41C9_8D3672081299, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 201,
           "width": 175
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 15.37,
        "pitch": -30.03,
        "yaw": 168.27
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "Royal Suite Room (1)",
  "id": "panorama_45454609_4F89_91D1_41C2_EAB9A3F42087",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_459760FB_4F89_F232_41D0_20DAFD616A0C"
  },
  "idleSequence": "this.sequence_459760FB_4F89_F232_41D0_20DAFD616A0C",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "front": {
     "levels": [
      {
       "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_t.jpg",
    "back": {
     "levels": [
      {
       "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "maps": [
       {
        "height": 20.03,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 20.03,
        "offsetY": 10.01,
        "image": {
         "levels": [
          {
           "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.45,
        "yaw": -35.57,
        "width": 40.06
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_439390BA_4F89_7233_41AC_13D21359E6CE",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 38); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_433E8F4E_4F89_8E53_41CE_A569E418C8DE, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_0_HS_4_0.gif",
           "class": "ImageResourceLevel",
           "height": 20,
           "width": 40
          }
         ],
         "class": "ImageResource"
        },
        "width": 40.06,
        "height": 20.03,
        "offsetX": 20.03,
        "offsetY": 10.01,
        "pitch": -22.45,
        "yaw": -35.57
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 79,
           "width": 96
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.95,
        "hfov": 16.91,
        "yaw": -34.69
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_4355B472_4F89_F233_419D_2A2759A17005",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_45454609_4F89_91D1_41C2_EAB9A3F42087, this.camera_0CC36018_1CD5_6A80_4190_343228E1881E); this.mainPlayList.set('selectedIndex', 38); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_428F6E86_4F89_8ED3_41C4_C4207F8F2789, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "height": 159,
           "width": 193
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 16.91,
        "pitch": -22.95,
        "yaw": -34.69
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 55.5,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 27.75,
        "offsetY": 27.75,
        "image": {
         "levels": [
          {
           "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.73,
        "yaw": -153.28,
        "width": 55.5
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_4285D34F_4F9B_9652_41B5_7D26A2360115",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 37); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_42319B00_4F9B_F7CE_41C7_83A14AA38C23, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_0_HS_2_0.gif",
           "class": "ImageResourceLevel",
           "height": 55,
           "width": 55
          }
         ],
         "class": "ImageResource"
        },
        "width": 55.5,
        "height": 55.5,
        "offsetX": 27.75,
        "offsetY": 27.75,
        "pitch": -1.73,
        "yaw": -153.28
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 100,
           "width": 92
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.93,
        "hfov": 16.16,
        "yaw": -153.57
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_4214673F_4F9B_9E31_41B0_352B90C66295",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 37); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_4271106F_4F9A_9251_41C4_17EB5C077F37, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 201,
           "width": 185
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 16.16,
        "pitch": -1.93,
        "yaw": -153.57
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "height": 55.5,
        "class": "FlatHotspotPanoramaOverlayMap",
        "offsetX": 27.75,
        "offsetY": 27.75,
        "image": {
         "levels": [
          {
           "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_0_HS_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 4.67,
        "yaw": 8.91,
        "width": 55.5
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_42117297_4F9A_B6F2_41C9_EC243B45534E",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.setComponentVisibility(this.Container_629D0A7B_70C0_0C19_41D1_4679706BEF4B, true, 0, this.effect_40BDE4B7_4F9F_9232_41CC_A4FD0D01DA61, 'showEffect', false)"
       }
      ],
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_0_HS_0_0.gif",
           "class": "ImageResourceLevel",
           "height": 55,
           "width": 55
          }
         ],
         "class": "ImageResource"
        },
        "width": 55.5,
        "height": 55.5,
        "offsetX": 27.75,
        "offsetY": 27.75,
        "pitch": 4.67,
        "yaw": 8.91
       }
      ]
     }
    ],
    "left": {
     "levels": [
      {
       "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "label": "ROYAL SUITE ROOM",
  "id": "panorama_46131D95_4F89_92F1_41AF_851887BE6E54",
  "cardboardMenu": "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_46131D95_4F89_92F1_41AF_851887BE6E54_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_46131D95_4F89_92F1_41AF_851887BE6E54_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_45B43032_4F89_B233_41B3_DCE96665A8F9"
  },
  "idleSequence": "this.sequence_45B43032_4F89_B233_41B3_DCE96665A8F9",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "media": "this.panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E531C_FC1C_503C_41ED_13268D2B06FE_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_5CACADB1_4FBF_9231_41AA_5B74839C063A, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_5CACADB1_4FBF_9231_41AA_5B74839C063A, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F394FB06_FC34_F00C_41D0_83647C0FE18F, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F394FB06_FC34_F00C_41D0_83647C0FE18F, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E3568_FC1F_D004_41E6_9FA0F9F7049C_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F394EB07_FC34_F00C_41DA_14359632DC8F, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F394EB07_FC34_F00C_41DA_14359632DC8F, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3941B07_FC34_F00C_41DC_F2A8E4A8A22E, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3941B07_FC34_F00C_41DC_F2A8E4A8A22E, 'hideEffect', false); this.setComponentVisibility(this.Container_7F9EED49_70C0_0479_41D2_F30056ABBBA4, false, 0, this.effect_D66C517D_FC15_D0FC_41DE_A912D794F316, 'hideEffect', false); this.setComponentVisibility(this.Container_7F9EED49_70C0_0479_41D2_F30056ABBBA4, false, 0, this.effect_D66C517D_FC15_D0FC_41DE_A912D794F316, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.Container_7F9EED49_70C0_0479_41D2_F30056ABBBA4, true, 0, this.effect_D66C417D_FC15_D0FC_41DE_5F46F89840D3, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E1356_FC1C_300C_41C0_72C59E591498",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E1356_FC1C_300C_41C0_72C59E591498_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3940B08_FC34_F004_41E3_863B5DB66482, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3940B08_FC34_F004_41E3_863B5DB66482, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_F23E6185_FC1C_500C_41CF_73E258EC3699",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E6185_FC1C_500C_41CF_73E258EC3699_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3942B09_FC34_F004_41C4_AE40AF4EFF1F, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3942B09_FC34_F004_41C4_AE40AF4EFF1F, 'hideEffect', false); this.setComponentVisibility(this.Container_7D1C43A3_70C0_1C29_41C3_6FD83195B935, false, 0, this.effect_D66CB17F_FC15_D0FC_41D6_35B3B72FC15E, 'hideEffect', false); this.setComponentVisibility(this.Container_7D1C43A3_70C0_1C29_41C3_6FD83195B935, false, 0, this.effect_D66CB17F_FC15_D0FC_41D6_35B3B72FC15E, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.setComponentVisibility(this.Container_7D1C43A3_70C0_1C29_41C3_6FD83195B935, true, 0, this.effect_D66CA17E_FC15_D0FC_41DB_0CE5B097EC32, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E7839_FC1C_5004_41D0_9D7BBF488918_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3945B09_FC34_F004_41EE_C4FB5850CAD5, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3945B09_FC34_F004_41EE_C4FB5850CAD5, 'hideEffect', false); this.setComponentVisibility(this.Container_7D1C43A3_70C0_1C29_41C3_6FD83195B935, false, 0, this.effect_D66CE17F_FC15_D0FC_41D5_238874B63043, 'hideEffect', false); this.setComponentVisibility(this.Container_7D1C43A3_70C0_1C29_41C3_6FD83195B935, false, 0, this.effect_D66CE17F_FC15_D0FC_41D5_238874B63043, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.setComponentVisibility(this.Container_7D1C43A3_70C0_1C29_41C3_6FD83195B935, true, 0, this.effect_D66C917F_FC15_D0FC_41EC_00C6C021A996, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3946B0A_FC34_F004_41D4_E70380811E83, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3946B0A_FC34_F004_41D4_E70380811E83, 'hideEffect', false); this.setComponentVisibility(this.Container_7D1C43A3_70C0_1C29_41C3_6FD83195B935, false, 0, this.effect_D66CC180_FC15_D004_41CC_4AFDF87E7276, 'hideEffect', false); this.setComponentVisibility(this.Container_7D1C43A3_70C0_1C29_41C3_6FD83195B935, false, 0, this.effect_D66CC180_FC15_D004_41CC_4AFDF87E7276, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.setComponentVisibility(this.Container_7D1C43A3_70C0_1C29_41C3_6FD83195B935, true, 0, this.effect_D66CF180_FC15_D004_41D3_8AAF19CF5FCA, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E657E_FC1C_70FC_41E7_3E5584B95909_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3959B0A_FC34_F004_41DD_2BAE3900F16B, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3959B0A_FC34_F004_41DD_2BAE3900F16B, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "media": "this.panorama_F23E7C1C_FC1C_703D_41C7_208D15482719",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E7C1C_FC1C_703D_41C7_208D15482719_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3958B0B_FC34_F004_41EB_901D2507C4D3, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3958B0B_FC34_F004_41EB_901D2507C4D3, 'hideEffect', false); this.setComponentVisibility(this.Container_7D7D7D13_70C0_05E9_41C8_EE87696FA174, false, 0, this.effect_D66C7181_FC15_D004_41E1_5F6F5F5AD196, 'hideEffect', false); this.setComponentVisibility(this.Container_7D7D7D13_70C0_05E9_41C8_EE87696FA174, false, 0, this.effect_D66C7181_FC15_D004_41E1_5F6F5F5AD196, 'hideEffect', false); this.setComponentVisibility(this.Image_F7CA6873_FCF5_BF7A_41E1_5DFC5A18F6F9, false, 0, this.effect_EE50DBBB_FD72_D1EA_41EA_47250208EEA1, 'hideEffect', false); this.setComponentVisibility(this.Image_F7CA6873_FCF5_BF7A_41E1_5DFC5A18F6F9, false, 0, this.effect_EE50DBBB_FD72_D1EA_41EA_47250208EEA1, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10); this.setComponentVisibility(this.Container_7D7D7D13_70C0_05E9_41C8_EE87696FA174, true, 0, this.effect_D66C6181_FC15_D004_41C9_ADF10D3C0547, 'showEffect', false); this.setComponentVisibility(this.Image_F7CA6873_FCF5_BF7A_41E1_5DFC5A18F6F9, true, 0, this.effect_EE533BBB_FD72_D1EA_41AE_F2492EAD3EED, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395DB0C_FC34_F01C_41EC_AD8E4278954E, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395DB0C_FC34_F01C_41EC_AD8E4278954E, 'hideEffect', false); this.setComponentVisibility(this.Container_7D38866C_70C0_043F_41DA_0E79B574D9C3, false, 0, this.effect_D66C8183_FC15_D004_4199_BBA9DD4C53F8, 'hideEffect', false); this.setComponentVisibility(this.Container_7D38866C_70C0_043F_41DA_0E79B574D9C3, false, 0, this.effect_D66C8183_FC15_D004_4199_BBA9DD4C53F8, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.setComponentVisibility(this.Container_7D38866C_70C0_043F_41DA_0E79B574D9C3, true, 0, this.effect_D66CA183_FC15_D004_41D7_EB65C90E94E9, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395CB0D_FC34_F01C_41EC_F6E85D17C686, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395CB0D_FC34_F01C_41EC_F6E85D17C686, 'hideEffect', false); this.setComponentVisibility(this.Container_7F91195A_70C0_0C1B_4194_F53A932B7028, false, 0, this.effect_D66CF183_FC15_D004_41E3_557EDFF2F120, 'hideEffect', false); this.setComponentVisibility(this.Container_7F91195A_70C0_0C1B_4194_F53A932B7028, false, 0, this.effect_D66CF183_FC15_D004_41E3_557EDFF2F120, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12); this.setComponentVisibility(this.Container_7F91195A_70C0_0C1B_4194_F53A932B7028, true, 0, this.effect_D66C9183_FC15_D004_41ED_043175172440, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E3DED_FC1C_301C_41D9_74F8C846830D_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395FB0D_FC34_F01C_41CA_FDAEE5C88573, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395FB0D_FC34_F01C_41CA_FDAEE5C88573, 'hideEffect', false); this.setComponentVisibility(this.Container_7F91195A_70C0_0C1B_4194_F53A932B7028, false, 0, this.effect_D66F2184_FC15_D00C_41E1_A5FE522550F2, 'hideEffect', false); this.setComponentVisibility(this.Container_7F91195A_70C0_0C1B_4194_F53A932B7028, false, 0, this.effect_D66F2184_FC15_D00C_41E1_A5FE522550F2, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13); this.setComponentVisibility(this.Container_7F91195A_70C0_0C1B_4194_F53A932B7028, true, 0, this.effect_D66CC184_FC15_D00C_41C3_2DBAF1F373C9, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E94CB_FC1C_D004_41EA_F9CE53D23EAD_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3951B0E_FC34_F01C_41EB_5697006B7BA4, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3951B0E_FC34_F01C_41EB_5697006B7BA4, 'hideEffect', false); this.setComponentVisibility(this.Container_7F91195A_70C0_0C1B_4194_F53A932B7028, false, 0, this.effect_D66F0184_FC15_D00C_4175_15514CBAD5D2, 'hideEffect', false); this.setComponentVisibility(this.Container_7F91195A_70C0_0C1B_4194_F53A932B7028, false, 0, this.effect_D66F0184_FC15_D00C_4175_15514CBAD5D2, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14); this.setComponentVisibility(this.Container_7F91195A_70C0_0C1B_4194_F53A932B7028, true, 0, this.effect_D66F3184_FC15_D00C_41DC_BFDB5B523BE3, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3953B0E_FC34_F01C_41A9_823E6BA39280, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3953B0E_FC34_F01C_41A9_823E6BA39280, 'hideEffect', false); this.setComponentVisibility(this.Container_613A7B17_6D0A_842F_41D4_43A05A9A895F, false, 0, this.effect_D5C836D1_FC0C_3007_41AF_8F2DAC119FF5, 'hideEffect', false); this.setComponentVisibility(this.Container_613A7B17_6D0A_842F_41D4_43A05A9A895F, false, 0, this.effect_D5C836D1_FC0C_3007_41AF_8F2DAC119FF5, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15); this.setComponentVisibility(this.Container_613A7B17_6D0A_842F_41D4_43A05A9A895F, true, 0, this.effect_D5C846D1_FC0C_3007_41CB_8D93091EA69A, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23ED284_FC1C_F00C_41CC_28009879B164",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23ED284_FC1C_F00C_41CC_28009879B164_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3952B0F_FC34_F01C_41E6_28CB03A089EF, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3952B0F_FC34_F01C_41E6_28CB03A089EF, 'hideEffect', false); this.setComponentVisibility(this.Container_CB042A30_FC0C_7004_41EC_E8B99EAC5D20, false, 0, this.effect_CCA40B2B_FC0C_5004_41C9_C792D0BACFE3, 'hideEffect', false); this.setComponentVisibility(this.Container_CB042A30_FC0C_7004_41EC_E8B99EAC5D20, false, 0, this.effect_CCA40B2B_FC0C_5004_41C9_C792D0BACFE3, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16); this.setComponentVisibility(this.Container_CB042A30_FC0C_7004_41EC_E8B99EAC5D20, true, 0, this.effect_CCA47B2B_FC0C_5004_41D8_34477900DFBB, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23ED8F4_FC1C_F00C_41E8_B10BA7ABBD98_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3955B0F_FC34_F01C_41C1_723C7278218A, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3955B0F_FC34_F01C_41C1_723C7278218A, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "media": "this.panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3956B10_FC34_F004_41E9_0035B0CBE24D, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3956B10_FC34_F004_41E9_0035B0CBE24D, 'hideEffect', false); this.setComponentVisibility(this.Container_CB042A30_FC0C_7004_41EC_E8B99EAC5D20, false, 0, this.effect_CCA43B2D_FC0C_501C_41A8_3A19BE3337AF, 'hideEffect', false); this.setComponentVisibility(this.Container_CB042A30_FC0C_7004_41EC_E8B99EAC5D20, false, 0, this.effect_CCA43B2D_FC0C_501C_41A8_3A19BE3337AF, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18); this.setComponentVisibility(this.Container_CB042A30_FC0C_7004_41EC_E8B99EAC5D20, true, 0, this.effect_CCA42B2D_FC0C_501C_41AD_AE77EC412250, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23EEBFC_FC1C_D7FC_41E2_DA18EC04EF68_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3969B11_FC34_F004_41B3_813EE451DC92, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3969B11_FC34_F004_41B3_813EE451DC92, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "media": "this.panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3945B12_FC34_F004_41D0_9AB8F49C62FD, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3945B12_FC34_F004_41D0_9AB8F49C62FD, 'hideEffect', false); this.setComponentVisibility(this.Container_7FEEBD91_70C0_04E8_41C3_509CB6EF3FD8, false, 0, this.effect_D02FA683_FC14_3004_41DA_E1A997E07E95, 'hideEffect', false); this.setComponentVisibility(this.Container_7FEEBD91_70C0_04E8_41C3_509CB6EF3FD8, false, 0, this.effect_D02FA683_FC14_3004_41DA_E1A997E07E95, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20); this.setComponentVisibility(this.Container_7FEEBD91_70C0_04E8_41C3_509CB6EF3FD8, true, 0, this.effect_D02FB683_FC14_3004_41ED_5667EEE957FB, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23EBC42_FC1C_5004_41D9_7DEDB82C8368_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3944B13_FC34_F004_41DD_FF13C8492176, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3944B13_FC34_F004_41DD_FF13C8492176, 'hideEffect', false); this.setComponentVisibility(this.Container_D18D8691_FC0C_F004_41D0_0CFF90187AC7, false, 0, this.effect_D2DB083C_FC3C_507C_41DB_959B48A5CBCA, 'hideEffect', false); this.setComponentVisibility(this.Container_D18D8691_FC0C_F004_41D0_0CFF90187AC7, false, 0, this.effect_D2DB083C_FC3C_507C_41DB_959B48A5CBCA, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21); this.setComponentVisibility(this.Container_D18D8691_FC0C_F004_41D0_0CFF90187AC7, true, 0, this.effect_D2DB683C_FC3C_507C_41ED_BD13DBD37961, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3947B13_FC34_F004_41D8_DB9286C7ACE3, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3947B13_FC34_F004_41D8_DB9286C7ACE3, 'hideEffect', false); this.setComponentVisibility(this.Container_D18D8691_FC0C_F004_41D0_0CFF90187AC7, false, 0, this.effect_D2DB283C_FC3C_507C_41E6_55EC5CD846E1, 'hideEffect', false); this.setComponentVisibility(this.Container_D18D8691_FC0C_F004_41D0_0CFF90187AC7, false, 0, this.effect_D2DB283C_FC3C_507C_41E6_55EC5CD846E1, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22); this.setComponentVisibility(this.Container_D18D8691_FC0C_F004_41D0_0CFF90187AC7, true, 0, this.effect_D2DB183C_FC3C_507C_41D8_91F46EB36EB8, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23EA90E_FC1C_701C_41C7_2F4FB9CFD346_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_D18AA15F_FC14_F03B_41CB_66D9C40FC295, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_D18AA15F_FC14_F03B_41CB_66D9C40FC295, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)"
   },
   {
    "media": "this.panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23EBF53_FC1C_7004_41BF_6DEA8FD95C5F_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3946B14_FC34_F00C_41C2_6DB4331B51AC, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3946B14_FC34_F00C_41C2_6DB4331B51AC, 'hideEffect', false); this.setComponentVisibility(this.Container_D3954D83_FC0B_F004_41E8_406F4BA45E1C, false, 0, this.effect_D2DAC83D_FC3C_507C_41D5_F5185E078298, 'hideEffect', false); this.setComponentVisibility(this.Container_D3954D83_FC0B_F004_41E8_406F4BA45E1C, false, 0, this.effect_D2DAC83D_FC3C_507C_41D5_F5185E078298, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24); this.setComponentVisibility(this.Container_D3954D83_FC0B_F004_41E8_406F4BA45E1C, true, 0, this.effect_D2DB383D_FC3C_507C_41ED_4F78D021DF4A, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3959B15_FC34_F00C_41DC_0BEFCE90AF94, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3959B15_FC34_F00C_41DC_0BEFCE90AF94, 'hideEffect', false); this.setComponentVisibility(this.Container_D3954D83_FC0B_F004_41E8_406F4BA45E1C, false, 0, this.effect_D2DAE83E_FC3C_507C_41D4_74B237DE23B5, 'hideEffect', false); this.setComponentVisibility(this.Container_D3954D83_FC0B_F004_41E8_406F4BA45E1C, false, 0, this.effect_D2DAE83E_FC3C_507C_41D4_74B237DE23B5, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25); this.setComponentVisibility(this.Container_D3954D83_FC0B_F004_41E8_406F4BA45E1C, true, 0, this.effect_D2DAD83E_FC3C_507C_41D6_ADCD74A814D0, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E8C56_FC1C_500C_41E5_B8FC3D06C109_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3958B15_FC34_F00C_41E5_598B413B440B, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3958B15_FC34_F00C_41E5_598B413B440B, 'hideEffect', false); this.setComponentVisibility(this.Container_7E218512_70C0_05EB_41CD_EAC9E2F1ABFD, false, 0, this.effect_D0FDCC95_FC0B_F00C_41EA_BF12426DC1FD, 'hideEffect', false); this.setComponentVisibility(this.Container_7E218512_70C0_05EB_41CD_EAC9E2F1ABFD, false, 0, this.effect_D0FDCC95_FC0B_F00C_41EA_BF12426DC1FD, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26); this.setComponentVisibility(this.Container_7E218512_70C0_05EB_41CD_EAC9E2F1ABFD, true, 0, this.effect_D0FDDC95_FC0B_F00C_41EC_761F0A235CB2, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395BB16_FC34_F00C_41D2_6578A85D4EE0, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395BB16_FC34_F00C_41D2_6578A85D4EE0, 'hideEffect', false); this.setComponentVisibility(this.Container_7E218512_70C0_05EB_41CD_EAC9E2F1ABFD, false, 0, this.effect_D0FDEC95_FC0B_F00C_41D2_C3C2F9F73F25, 'hideEffect', false); this.setComponentVisibility(this.Container_7E218512_70C0_05EB_41CD_EAC9E2F1ABFD, false, 0, this.effect_D0FDEC95_FC0B_F00C_41D2_C3C2F9F73F25, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27); this.setComponentVisibility(this.Container_7E218512_70C0_05EB_41CD_EAC9E2F1ABFD, true, 0, this.effect_D0FDFC95_FC0B_F00C_41E3_D81552831719, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E9918_FC1C_3004_41DB_77ABF0310002",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395AB16_FC34_F00C_41EB_56F629C661E1, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395AB16_FC34_F00C_41EB_56F629C661E1, 'hideEffect', false); this.setComponentVisibility(this.Container_7FC82C41_70C0_0469_41CD_1BE2EF3E56B4, false, 0, this.effect_D66FB191_FC15_D004_41D2_071823312571, 'hideEffect', false); this.setComponentVisibility(this.Container_7FC82C41_70C0_0469_41CD_1BE2EF3E56B4, false, 0, this.effect_D66FB191_FC15_D004_41D2_071823312571, 'hideEffect', false); this.setComponentVisibility(this.Image_F755B8AD_FCF3_BFEE_41DC_C234FE5AB4AE, false, 0, this.effect_F35BC066_FD12_CE9A_41EC_98786329EFCD, 'hideEffect', false); this.setComponentVisibility(this.Image_F755B8AD_FCF3_BFEE_41DC_C234FE5AB4AE, false, 0, this.effect_F35BC066_FD12_CE9A_41EC_98786329EFCD, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28); this.setComponentVisibility(this.Container_7FC82C41_70C0_0469_41CD_1BE2EF3E56B4, true, 0, this.effect_D66FA190_FC15_D004_41D4_79CA7257F0ED, 'showEffect', false); this.setComponentVisibility(this.Image_F755B8AD_FCF3_BFEE_41DC_C234FE5AB4AE, true, 0, this.effect_F35BD065_FD12_CE9E_41EE_3C5C980EA6B3, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23F800E_FC1D_D01C_418A_EC8E779769A3_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395CB17_FC34_F00C_41E3_7D7E8DC1A9D1, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395CB17_FC34_F00C_41E3_7D7E8DC1A9D1, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)"
   },
   {
    "media": "this.panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23F76AA_FC1D_D004_41DC_071BC3318B06_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395FB17_FC34_F00C_41CF_AFE194B8659D, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395FB17_FC34_F00C_41CF_AFE194B8659D, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)"
   },
   {
    "media": "this.panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E8BB03F4_FC1C_500C_41EC_4DA0E4B64301_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_D4AD6A81_FC34_7007_41ED_9CC81AAA574A, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_D4AD6A81_FC34_7007_41ED_9CC81AAA574A, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)"
   },
   {
    "media": "this.panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_D11833DA_FC1C_D004_41EA_09BE34C77034, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_D11833DA_FC1C_D004_41EA_09BE34C77034, 'hideEffect', false); this.setComponentVisibility(this.Container_7D7D7D13_70C0_05E9_41C8_EE87696FA174, false, 0, this.effect_D66F9193_FC15_D004_41B4_058A9BA8D1C8, 'hideEffect', false); this.setComponentVisibility(this.Container_7D7D7D13_70C0_05E9_41C8_EE87696FA174, false, 0, this.effect_D66F9193_FC15_D004_41B4_058A9BA8D1C8, 'hideEffect', false); this.setComponentVisibility(this.Image_F7CA6873_FCF5_BF7A_41E1_5DFC5A18F6F9, false, 0, this.effect_F358306E_FD12_CF6A_41E8_3B0B1DF796B3, 'hideEffect', false); this.setComponentVisibility(this.Image_F7CA6873_FCF5_BF7A_41E1_5DFC5A18F6F9, false, 0, this.effect_F358306E_FD12_CF6A_41E8_3B0B1DF796B3, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32); this.setComponentVisibility(this.Container_7D7D7D13_70C0_05E9_41C8_EE87696FA174, true, 0, this.effect_D66F8193_FC15_D004_41EA_663424A7553D, 'showEffect', false); this.setComponentVisibility(this.Image_F7CA6873_FCF5_BF7A_41E1_5DFC5A18F6F9, true, 0, this.effect_F358506E_FD12_CF6A_41EE_D34FBB4EA027, 'showEffect', false)"
   },
   {
    "media": "this.panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_18AEAC42_127E_EEA8_4198_45F50AC81AD6_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_1EC113FC_12CF_5086_417B_6CD3A7463A40, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_1EC113FC_12CF_5086_417B_6CD3A7463A40, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)"
   },
   {
    "media": "this.panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2B6B9F23_2018_A51D_41B8_D53EB5F1B61F_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_2DEDD0CE_201F_9B27_41B6_D57863976CCC, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_2DEDD0CE_201F_9B27_41B6_D57863976CCC, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)"
   },
   {
    "media": "this.panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2C53E7C0_2069_D6C2_41BF_24A967D0796A_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_30BB1341_2067_6FC5_41B8_D5FC8A7A1E6C, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_30BB1341_2067_6FC5_41B8_D5FC8A7A1E6C, 'hideEffect', false); this.setComponentVisibility(this.Container_3AE45646_20AB_69CF_41AE_8FD941F03FF9, false, 0, this.effect_3BA37023_20AF_2945_41BF_F725AD965D41, 'hideEffect', false); this.setComponentVisibility(this.Container_3AE45646_20AB_69CF_41AE_8FD941F03FF9, false, 0, this.effect_3BA37023_20AF_2945_41BF_F725AD965D41, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35); this.setComponentVisibility(this.Container_3AE45646_20AB_69CF_41AE_8FD941F03FF9, true, 0, this.effect_3BA34023_20AF_2945_41BB_31697B9AF0BB, 'showEffect', false)"
   },
   {
    "media": "this.panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_2FD60686_2069_294F_41A5_DD1D6B0D86F2, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_2FD60686_2069_294F_41A5_DD1D6B0D86F2, 'hideEffect', false); this.setComponentVisibility(this.Image_F77C5325_FCF3_529E_41D0_E215A91A8F10, false, 0, this.effect_3D9C5E23_20B9_7945_41A2_AC6D6109977D, 'hideEffect', false); this.setComponentVisibility(this.Image_F77C5325_FCF3_529E_41D0_E215A91A8F10, false, 0, this.effect_3D9C5E23_20B9_7945_41A2_AC6D6109977D, 'hideEffect', false); this.setComponentVisibility(this.Container_3AE45646_20AB_69CF_41AE_8FD941F03FF9, false, 0, this.effect_3BA31023_20AF_2945_41B0_7F801EE400AB, 'hideEffect', false); this.setComponentVisibility(this.Container_3AE45646_20AB_69CF_41AE_8FD941F03FF9, false, 0, this.effect_3BA31023_20AF_2945_41B0_7F801EE400AB, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36); this.setComponentVisibility(this.Image_F77C5325_FCF3_529E_41D0_E215A91A8F10, true, 0, this.effect_3D9C4E23_20B9_7945_41A2_D2DB1EDE6F7B, 'showEffect', false); this.setComponentVisibility(this.Container_3AE45646_20AB_69CF_41AE_8FD941F03FF9, true, 0, this.effect_3BA36023_20AF_2945_41BC_B6BF62F3C5CF, 'showEffect', false)"
   },
   {
    "media": "this.panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2BBDF575_2069_2BCD_41BE_3AF497D7398B_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_2FD1C687_2069_294D_4198_C9815D763775, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_2FD1C687_2069_294D_4198_C9815D763775, 'hideEffect', false); this.setComponentVisibility(this.Container_3AE45646_20AB_69CF_41AE_8FD941F03FF9, false, 0, this.effect_3BA32024_20AF_2943_41BD_C41F60899AFD, 'hideEffect', false); this.setComponentVisibility(this.Container_3AE45646_20AB_69CF_41AE_8FD941F03FF9, false, 0, this.effect_3BA32024_20AF_2943_41BD_C41F60899AFD, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37); this.setComponentVisibility(this.Container_3AE45646_20AB_69CF_41AE_8FD941F03FF9, true, 0, this.effect_3BA30024_20AF_2943_4172_E631B730E050, 'showEffect', false)"
   },
   {
    "media": "this.panorama_436C1B42_4F77_54CB_41C4_A68387BA7516",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_436C1B42_4F77_54CB_41C4_A68387BA7516_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_5D169EAC_4F8C_EC5F_41D0_724000DBA3F9, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_5D169EAC_4F8C_EC5F_41D0_724000DBA3F9, 'hideEffect', false); this.setComponentVisibility(this.Container_7C2ADAA2_70C0_0C2B_41AC_664F67C04AD4, false, 0, this.effect_5D16BEAC_4F8C_EC5F_41C5_E1A1670C8D3C, 'hideEffect', false); this.setComponentVisibility(this.Container_7C2ADAA2_70C0_0C2B_41AC_664F67C04AD4, false, 0, this.effect_5D16BEAC_4F8C_EC5F_41C5_E1A1670C8D3C, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38); this.setComponentVisibility(this.Container_7C2ADAA2_70C0_0C2B_41AC_664F67C04AD4, true, 0, this.effect_5D168EAC_4F8C_EC5F_41D1_DE31D3EA7AEC, 'showEffect', false)"
   },
   {
    "media": "this.panorama_45454609_4F89_91D1_41C2_EAB9A3F42087",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_45454609_4F89_91D1_41C2_EAB9A3F42087_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_40741FD6_4F9F_8E72_41C3_9DF3B6BDE333, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_40741FD6_4F9F_8E72_41C3_9DF3B6BDE333, 'hideEffect', false); this.setComponentVisibility(this.Container_60EB8BC1_70C0_0C69_4181_A6FB7D538D36, false, 0, this.effect_40745FD6_4F9F_8E72_41D0_6D0319C3B691, 'hideEffect', false); this.setComponentVisibility(this.Container_60EB8BC1_70C0_0C69_4181_A6FB7D538D36, false, 0, this.effect_40745FD6_4F9F_8E72_41D0_6D0319C3B691, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39); this.setComponentVisibility(this.Container_60EB8BC1_70C0_0C69_4181_A6FB7D538D36, true, 0, this.effect_40747FD6_4F9F_8E72_41D0_CC3ABE080277, 'showEffect', false)"
   },
   {
    "media": "this.panorama_46131D95_4F89_92F1_41AF_851887BE6E54",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_46131D95_4F89_92F1_41AF_851887BE6E54_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_407B2FD7_4F9F_8E72_41A2_C31DAD1F3AB2, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_407B2FD7_4F9F_8E72_41A2_C31DAD1F3AB2, 'hideEffect', false); this.setComponentVisibility(this.Container_60EB8BC1_70C0_0C69_4181_A6FB7D538D36, false, 0, this.effect_407B6FD7_4F9F_8E72_41BA_378966A17284, 'hideEffect', false); this.setComponentVisibility(this.Container_60EB8BC1_70C0_0C69_4181_A6FB7D538D36, false, 0, this.effect_407B6FD7_4F9F_8E72_41BA_378966A17284, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 0); this.setComponentVisibility(this.Container_60EB8BC1_70C0_0C69_4181_A6FB7D538D36, true, 0, this.effect_407B1FD7_4F9F_8E72_41B9_C5D3E993B43F, 'showEffect', false)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "DropDown_95B75FED_9A90_0666_41E0_E5F9F0F7F94A_playlist",
  "items": [
   {
    "media": "this.panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E1C16_FC1F_D00C_41E9_9CEC6E50CD6B_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3941B07_FC34_F00C_41DC_F2A8E4A8A22E, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3941B07_FC34_F00C_41DC_F2A8E4A8A22E, 'hideEffect', false); this.setComponentVisibility(this.Container_7F9EED49_70C0_0479_41D2_F30056ABBBA4, false, 0, this.effect_D66C517D_FC15_D0FC_41DE_A912D794F316, 'hideEffect', false); this.setComponentVisibility(this.Container_7F9EED49_70C0_0479_41D2_F30056ABBBA4, false, 0, this.effect_D66C517D_FC15_D0FC_41DE_A912D794F316, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_95B75FED_9A90_0666_41E0_E5F9F0F7F94A_playlist, 0, 1); this.setComponentVisibility(this.Container_7F9EED49_70C0_0479_41D2_F30056ABBBA4, true, 0, this.effect_D66C417D_FC15_D0FC_41DE_5F46F89840D3, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E30E4_FC1C_300C_41A6_4A56F9F64C5E_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395DB0C_FC34_F01C_41EC_AD8E4278954E, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395DB0C_FC34_F01C_41EC_AD8E4278954E, 'hideEffect', false); this.setComponentVisibility(this.Container_7D38866C_70C0_043F_41DA_0E79B574D9C3, false, 0, this.effect_D66C8183_FC15_D004_4199_BBA9DD4C53F8, 'hideEffect', false); this.setComponentVisibility(this.Container_7D38866C_70C0_043F_41DA_0E79B574D9C3, false, 0, this.effect_D66C8183_FC15_D004_4199_BBA9DD4C53F8, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_95B75FED_9A90_0666_41E0_E5F9F0F7F94A_playlist, 1, 2); this.setComponentVisibility(this.Container_7D38866C_70C0_043F_41DA_0E79B574D9C3, true, 0, this.effect_D66CA183_FC15_D004_41D7_EB65C90E94E9, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E95F7_FC1C_500C_41E7_7C7DEAA9D0DC_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3945B12_FC34_F004_41D0_9AB8F49C62FD, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3945B12_FC34_F004_41D0_9AB8F49C62FD, 'hideEffect', false); this.setComponentVisibility(this.Container_7FEEBD91_70C0_04E8_41C3_509CB6EF3FD8, false, 0, this.effect_D02FA683_FC14_3004_41DA_E1A997E07E95, 'hideEffect', false); this.setComponentVisibility(this.Container_7FEEBD91_70C0_04E8_41C3_509CB6EF3FD8, false, 0, this.effect_D02FA683_FC14_3004_41DA_E1A997E07E95, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_95B75FED_9A90_0666_41E0_E5F9F0F7F94A_playlist, 2, 0); this.setComponentVisibility(this.Container_7FEEBD91_70C0_04E8_41C3_509CB6EF3FD8, true, 0, this.effect_D02FB683_FC14_3004_41ED_5667EEE957FB, 'showEffect', false)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "DropDown_959BFC4A_9AB0_09AD_41D9_CBF53C05989E_playlist",
  "items": [
   {
    "media": "this.panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E4728_FC1C_3005_41ED_F8BBB5F27FD4_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395CB0D_FC34_F01C_41EC_F6E85D17C686, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395CB0D_FC34_F01C_41EC_F6E85D17C686, 'hideEffect', false); this.setComponentVisibility(this.Container_7F91195A_70C0_0C1B_4194_F53A932B7028, false, 0, this.effect_D66CF183_FC15_D004_41E3_557EDFF2F120, 'hideEffect', false); this.setComponentVisibility(this.Container_7F91195A_70C0_0C1B_4194_F53A932B7028, false, 0, this.effect_D66CF183_FC15_D004_41E3_557EDFF2F120, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_959BFC4A_9AB0_09AD_41D9_CBF53C05989E_playlist, 0, 1); this.setComponentVisibility(this.Container_7F91195A_70C0_0C1B_4194_F53A932B7028, true, 0, this.effect_D66C9183_FC15_D004_41ED_043175172440, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23ECB9A_FC1C_D004_41CA_A462064A2985_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3953B0E_FC34_F01C_41A9_823E6BA39280, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3953B0E_FC34_F01C_41A9_823E6BA39280, 'hideEffect', false); this.setComponentVisibility(this.Container_613A7B17_6D0A_842F_41D4_43A05A9A895F, false, 0, this.effect_D5C836D1_FC0C_3007_41AF_8F2DAC119FF5, 'hideEffect', false); this.setComponentVisibility(this.Container_613A7B17_6D0A_842F_41D4_43A05A9A895F, false, 0, this.effect_D5C836D1_FC0C_3007_41AF_8F2DAC119FF5, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_959BFC4A_9AB0_09AD_41D9_CBF53C05989E_playlist, 1, 2); this.setComponentVisibility(this.Container_613A7B17_6D0A_842F_41D4_43A05A9A895F, true, 0, this.effect_D5C846D1_FC0C_3007_41CB_8D93091EA69A, 'showEffect', false)"
   },
   {
    "media": "this.panorama_46131D95_4F89_92F1_41AF_851887BE6E54",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_46131D95_4F89_92F1_41AF_851887BE6E54_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_407B2FD7_4F9F_8E72_41A2_C31DAD1F3AB2, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_407B2FD7_4F9F_8E72_41A2_C31DAD1F3AB2, 'hideEffect', false); this.setComponentVisibility(this.Container_60EB8BC1_70C0_0C69_4181_A6FB7D538D36, false, 0, this.effect_407B6FD7_4F9F_8E72_41BA_378966A17284, 'hideEffect', false); this.setComponentVisibility(this.Container_60EB8BC1_70C0_0C69_4181_A6FB7D538D36, false, 0, this.effect_407B6FD7_4F9F_8E72_41BA_378966A17284, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_959BFC4A_9AB0_09AD_41D9_CBF53C05989E_playlist, 2, 0); this.setComponentVisibility(this.Container_60EB8BC1_70C0_0C69_4181_A6FB7D538D36, true, 0, this.effect_407B1FD7_4F9F_8E72_41B9_C5D3E993B43F, 'showEffect', false)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "DropDown_1A8FC29D_10A8_20B6_41A9_64238A9CD814_playlist",
  "items": [
   {
    "media": "this.panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E6EE8_FC1C_5004_41E1_EA489B196BC4_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3946B0A_FC34_F004_41D4_E70380811E83, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3946B0A_FC34_F004_41D4_E70380811E83, 'hideEffect', false); this.setComponentVisibility(this.Container_7D1C43A3_70C0_1C29_41C3_6FD83195B935, false, 0, this.effect_D66CC180_FC15_D004_41CC_4AFDF87E7276, 'hideEffect', false); this.setComponentVisibility(this.Container_7D1C43A3_70C0_1C29_41C3_6FD83195B935, false, 0, this.effect_D66CC180_FC15_D004_41CC_4AFDF87E7276, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_1A8FC29D_10A8_20B6_41A9_64238A9CD814_playlist, 0, 1); this.setComponentVisibility(this.Container_7D1C43A3_70C0_1C29_41C3_6FD83195B935, true, 0, this.effect_D66CF180_FC15_D004_41D3_8AAF19CF5FCA, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E9918_FC1C_3004_41DB_77ABF0310002",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E9918_FC1C_3004_41DB_77ABF0310002_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395AB16_FC34_F00C_41EB_56F629C661E1, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395AB16_FC34_F00C_41EB_56F629C661E1, 'hideEffect', false); this.setComponentVisibility(this.Container_7FC82C41_70C0_0469_41CD_1BE2EF3E56B4, false, 0, this.effect_D66FB191_FC15_D004_41D2_071823312571, 'hideEffect', false); this.setComponentVisibility(this.Container_7FC82C41_70C0_0469_41CD_1BE2EF3E56B4, false, 0, this.effect_D66FB191_FC15_D004_41D2_071823312571, 'hideEffect', false); this.setComponentVisibility(this.Image_F755B8AD_FCF3_BFEE_41DC_C234FE5AB4AE, false, 0, this.effect_F35BC066_FD12_CE9A_41EC_98786329EFCD, 'hideEffect', false); this.setComponentVisibility(this.Image_F755B8AD_FCF3_BFEE_41DC_C234FE5AB4AE, false, 0, this.effect_F35BC066_FD12_CE9A_41EC_98786329EFCD, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_1A8FC29D_10A8_20B6_41A9_64238A9CD814_playlist, 1, 2); this.setComponentVisibility(this.Container_7FC82C41_70C0_0469_41CD_1BE2EF3E56B4, true, 0, this.effect_D66FA190_FC15_D004_41D4_79CA7257F0ED, 'showEffect', false); this.setComponentVisibility(this.Image_F755B8AD_FCF3_BFEE_41DC_C234FE5AB4AE, true, 0, this.effect_F35BD065_FD12_CE9E_41EE_3C5C980EA6B3, 'showEffect', false)"
   },
   {
    "media": "this.panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E9C50B8F_FC14_501C_41AC_ED6EEBBFA5B2_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_D11833DA_FC1C_D004_41EA_09BE34C77034, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_D11833DA_FC1C_D004_41EA_09BE34C77034, 'hideEffect', false); this.setComponentVisibility(this.Container_7D7D7D13_70C0_05E9_41C8_EE87696FA174, false, 0, this.effect_D66F9193_FC15_D004_41B4_058A9BA8D1C8, 'hideEffect', false); this.setComponentVisibility(this.Container_7D7D7D13_70C0_05E9_41C8_EE87696FA174, false, 0, this.effect_D66F9193_FC15_D004_41B4_058A9BA8D1C8, 'hideEffect', false); this.setComponentVisibility(this.Image_F7CA6873_FCF5_BF7A_41E1_5DFC5A18F6F9, false, 0, this.effect_F358306E_FD12_CF6A_41E8_3B0B1DF796B3, 'hideEffect', false); this.setComponentVisibility(this.Image_F7CA6873_FCF5_BF7A_41E1_5DFC5A18F6F9, false, 0, this.effect_F358306E_FD12_CF6A_41E8_3B0B1DF796B3, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_1A8FC29D_10A8_20B6_41A9_64238A9CD814_playlist, 2, 3); this.setComponentVisibility(this.Container_7D7D7D13_70C0_05E9_41C8_EE87696FA174, true, 0, this.effect_D66F8193_FC15_D004_41EA_663424A7553D, 'showEffect', false); this.setComponentVisibility(this.Image_F7CA6873_FCF5_BF7A_41E1_5DFC5A18F6F9, true, 0, this.effect_F358506E_FD12_CF6A_41EE_D34FBB4EA027, 'showEffect', false)"
   },
   {
    "media": "this.panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2BBDCECE_2069_D6DE_41AC_78E77B7C6241_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_2FD60686_2069_294F_41A5_DD1D6B0D86F2, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_2FD60686_2069_294F_41A5_DD1D6B0D86F2, 'hideEffect', false); this.setComponentVisibility(this.Image_F77C5325_FCF3_529E_41D0_E215A91A8F10, false, 0, this.effect_3D9C5E23_20B9_7945_41A2_AC6D6109977D, 'hideEffect', false); this.setComponentVisibility(this.Image_F77C5325_FCF3_529E_41D0_E215A91A8F10, false, 0, this.effect_3D9C5E23_20B9_7945_41A2_AC6D6109977D, 'hideEffect', false); this.setComponentVisibility(this.Container_3AE45646_20AB_69CF_41AE_8FD941F03FF9, false, 0, this.effect_3BA31023_20AF_2945_41B0_7F801EE400AB, 'hideEffect', false); this.setComponentVisibility(this.Container_3AE45646_20AB_69CF_41AE_8FD941F03FF9, false, 0, this.effect_3BA31023_20AF_2945_41B0_7F801EE400AB, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_1A8FC29D_10A8_20B6_41A9_64238A9CD814_playlist, 3, 0); this.setComponentVisibility(this.Image_F77C5325_FCF3_529E_41D0_E215A91A8F10, true, 0, this.effect_3D9C4E23_20B9_7945_41A2_D2DB1EDE6F7B, 'showEffect', false); this.setComponentVisibility(this.Container_3AE45646_20AB_69CF_41AE_8FD941F03FF9, true, 0, this.effect_3BA36023_20AF_2945_41BC_B6BF62F3C5CF, 'showEffect', false)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "DropDown_97F8A1EE_9A90_1A65_41DC_EBAEDDBFC28F_playlist",
  "items": [
   {
    "media": "this.panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F28EDE4F_FC1F_F01B_41DB_FAE76C32A94C_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F394FB06_FC34_F00C_41D0_83647C0FE18F, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F394FB06_FC34_F00C_41D0_83647C0FE18F, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_97F8A1EE_9A90_1A65_41DC_EBAEDDBFC28F_playlist, 0, 1)"
   },
   {
    "media": "this.panorama_F23ED284_FC1C_F00C_41CC_28009879B164",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23ED284_FC1C_F00C_41CC_28009879B164_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3952B0F_FC34_F01C_41E6_28CB03A089EF, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3952B0F_FC34_F01C_41E6_28CB03A089EF, 'hideEffect', false); this.setComponentVisibility(this.Container_CB042A30_FC0C_7004_41EC_E8B99EAC5D20, false, 0, this.effect_CCA40B2B_FC0C_5004_41C9_C792D0BACFE3, 'hideEffect', false); this.setComponentVisibility(this.Container_CB042A30_FC0C_7004_41EC_E8B99EAC5D20, false, 0, this.effect_CCA40B2B_FC0C_5004_41C9_C792D0BACFE3, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_97F8A1EE_9A90_1A65_41DC_EBAEDDBFC28F_playlist, 1, 2); this.setComponentVisibility(this.Container_CB042A30_FC0C_7004_41EC_E8B99EAC5D20, true, 0, this.effect_CCA47B2B_FC0C_5004_41D8_34477900DFBB, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23EE5A4_FC1C_D00D_41AF_52E7B9309114_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3956B10_FC34_F004_41E9_0035B0CBE24D, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3956B10_FC34_F004_41E9_0035B0CBE24D, 'hideEffect', false); this.setComponentVisibility(this.Container_CB042A30_FC0C_7004_41EC_E8B99EAC5D20, false, 0, this.effect_CCA43B2D_FC0C_501C_41A8_3A19BE3337AF, 'hideEffect', false); this.setComponentVisibility(this.Container_CB042A30_FC0C_7004_41EC_E8B99EAC5D20, false, 0, this.effect_CCA43B2D_FC0C_501C_41A8_3A19BE3337AF, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_97F8A1EE_9A90_1A65_41DC_EBAEDDBFC28F_playlist, 2, 3); this.setComponentVisibility(this.Container_CB042A30_FC0C_7004_41EC_E8B99EAC5D20, true, 0, this.effect_CCA42B2D_FC0C_501C_41AD_AE77EC412250, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23EB290_FC1C_7004_41B4_E2C21443D6CD_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3947B13_FC34_F004_41D8_DB9286C7ACE3, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3947B13_FC34_F004_41D8_DB9286C7ACE3, 'hideEffect', false); this.setComponentVisibility(this.Container_D18D8691_FC0C_F004_41D0_0CFF90187AC7, false, 0, this.effect_D2DB283C_FC3C_507C_41E6_55EC5CD846E1, 'hideEffect', false); this.setComponentVisibility(this.Container_D18D8691_FC0C_F004_41D0_0CFF90187AC7, false, 0, this.effect_D2DB283C_FC3C_507C_41E6_55EC5CD846E1, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_97F8A1EE_9A90_1A65_41DC_EBAEDDBFC28F_playlist, 3, 4); this.setComponentVisibility(this.Container_D18D8691_FC0C_F004_41D0_0CFF90187AC7, true, 0, this.effect_D2DB183C_FC3C_507C_41D8_91F46EB36EB8, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E95D2_FC1C_5005_41A0_DFF5A6025CEC_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3959B15_FC34_F00C_41DC_0BEFCE90AF94, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F3959B15_FC34_F00C_41DC_0BEFCE90AF94, 'hideEffect', false); this.setComponentVisibility(this.Container_D3954D83_FC0B_F004_41E8_406F4BA45E1C, false, 0, this.effect_D2DAE83E_FC3C_507C_41D4_74B237DE23B5, 'hideEffect', false); this.setComponentVisibility(this.Container_D3954D83_FC0B_F004_41E8_406F4BA45E1C, false, 0, this.effect_D2DAE83E_FC3C_507C_41D4_74B237DE23B5, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_97F8A1EE_9A90_1A65_41DC_EBAEDDBFC28F_playlist, 4, 5); this.setComponentVisibility(this.Container_D3954D83_FC0B_F004_41E8_406F4BA45E1C, true, 0, this.effect_D2DAD83E_FC3C_507C_41D6_ADCD74A814D0, 'showEffect', false)"
   },
   {
    "media": "this.panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F23E82B7_FC1C_300B_41EE_DA35FAFE5DE9_camera",
    "end": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395BB16_FC34_F00C_41D2_6578A85D4EE0, 'hideEffect', false); this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, false, 0, this.effect_F395BB16_FC34_F00C_41D2_6578A85D4EE0, 'hideEffect', false); this.setComponentVisibility(this.Container_7E218512_70C0_05EB_41CD_EAC9E2F1ABFD, false, 0, this.effect_D0FDEC95_FC0B_F00C_41D2_C3C2F9F73F25, 'hideEffect', false); this.setComponentVisibility(this.Container_7E218512_70C0_05EB_41CD_EAC9E2F1ABFD, false, 0, this.effect_D0FDEC95_FC0B_F00C_41D2_C3C2F9F73F25, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_97F8A1EE_9A90_1A65_41DC_EBAEDDBFC28F_playlist, 5, 0); this.setComponentVisibility(this.Container_7E218512_70C0_05EB_41CD_EAC9E2F1ABFD, true, 0, this.effect_D0FDFC95_FC0B_F00C_41E3_D81552831719, 'showEffect', false)"
   }
  ]
 },
 "this.Menu_123BD5D5_1CD5_7583_41AB_C38416F121CD",
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_8EBCE557_9B90_1BA2_41D8_5C444925CE59",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_8D478AF7_9B90_0E63_41CA_52811D5B71E9",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_EFBFA861_E332_2C09_41D0_965C769F595E",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_EF08D8BF_E332_6C7A_41EC_60DB0B2D8B6C",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_8D1B689E_9B90_0AA2_41C2_A26D77F96778",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_8D655D26_9B90_0BE5_41B2_64C71A4590B8",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_8EB6D9D8_9A70_0AAD_41E0_00A4553960A5",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_8D4C6E94_9A70_06A6_41CF_02B6F808C890",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_372D6C0A_21FB_3947_41A1_5B78322DEAFF",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_387D909A_207F_E947_41A1_6699150E3004",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_3B5EFE13_2069_5945_41A8_16578ACC6911",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_38833C7C_2069_59C2_4194_BDF414FBBAA1",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_7F5FBC7A_6FF8_E9A6_41CA_F6C18BEDF746",
  "duration": 200
 },
 {
  "footerBackgroundColorRatios": [],
  "borderSize": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColor": [],
  "headerBorderSize": 0,
  "backgroundColorRatios": [],
  "footerBorderSize": 0,
  "closeButtonBorderSize": 0,
  "shadowHorizontalLength": 3,
  "footerBackgroundOpacity": 1,
  "bodyPaddingTop": 5,
  "bodyPaddingBottom": 5,
  "paddingLeft": 0,
  "closeButtonPressedBackgroundOpacity": 1,
  "bodyBackgroundColor": [],
  "verticalAlign": "middle",
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonPaddingBottom": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "bodyPaddingRight": 5,
  "closeButtonPaddingTop": 5,
  "bodyBorderSize": 0,
  "modal": true,
  "titlePaddingBottom": 5,
  "veilColorDirection": "horizontal",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "scrollBarColor": "#000000",
  "closeButtonBackgroundOpacity": 1,
  "closeButtonPressedBackgroundColor": [
   "#000000"
  ],
  "headerPaddingTop": 5,
  "titleFontStyle": "normal",
  "closeButtonIconColor": "#000000",
  "headerPaddingRight": 15,
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "headerBackgroundOpacity": 1,
  "titleFontColor": "#000000",
  "paddingTop": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "shadow": true,
  "shadowBlurRadius": 6,
  "headerBackgroundColorDirection": "vertical",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedIconLineWidth": 1,
  "bodyPaddingLeft": 5,
  "closeButtonIconHeight": 15,
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "width": "80%",
  "borderRadius": 5,
  "closeButtonBackgroundColor": [
   "#FFFFFF"
  ],
  "title": "",
  "titlePaddingLeft": 5,
  "id": "window_03A4C1A4_11E1_2282_4194_E95931DDD7BD",
  "footerHeight": 5,
  "children": [
   {
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "class": "Image",
    "borderSize": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "shadow": false,
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "verticalAlign": "middle",
    "width": "100%",
    "height": "89%",
    "id": "image_uid125E6548_1CD5_6A81_41BA_374582FE922A_0",
    "minWidth": 0,
    "url": "media/photo_0264FDE9_11E7_E285_41A1_8F488274425E.jpg",
    "paddingBottom": 0
   },
   {
    "borderSize": 0,
    "paddingLeft": 10,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "minWidth": 0,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "paddingTop": 10,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "borderRadius": 0,
    "width": "100%",
    "height": "10%",
    "id": "htmlText_uid125E6548_1CD5_6A81_41BA_374582FE922A",
    "paddingRight": 10,
    "scrollBarWidth": 10
   }
  ],
  "closeButtonIconLineWidth": 2,
  "paddingRight": 0,
  "veilColorRatios": [
   0,
   1
  ],
  "shadowColor": "#000000",
  "headerBorderColor": "#000000",
  "headerBackgroundColorRatios": [],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilOpacity": 0.4,
  "footerBorderColor": "#000000",
  "footerBackgroundColor": [],
  "closeButtonRollOverBorderSize": 0,
  "bodyBorderColor": "#000000",
  "closeButtonIconWidth": 15,
  "height": "100%",
  "shadowSpread": 1,
  "closeButtonBackgroundColorRatios": [
   0.05
  ],
  "titleTextDecoration": "none",
  "layout": "vertical",
  "contentOpaque": false,
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverIconLineWidth": 1,
  "headerVerticalAlign": "middle",
  "headerPaddingLeft": 5,
  "minWidth": 20,
  "closeButtonPressedBorderColor": "#000000",
  "paddingBottom": 0,
  "class": "Window",
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "minHeight": 20,
  "headerPaddingBottom": 5,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "horizontalAlign": "center",
  "gap": 10,
  "shadowOpacity": 0.5,
  "backgroundOpacity": 1,
  "closeButtonRollOverBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColor": [
   "#000000"
  ],
  "scrollBarVisible": "rollOver",
  "closeButtonBorderColor": "#000000",
  "titleFontFamily": "Arial",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingTop": 5,
  "backgroundColor": [],
  "closeButtonPaddingRight": 5,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [],
  "scrollBarWidth": 10
 },
 {
  "easing": "linear",
  "class": "SlideOutEffect",
  "id": "effect_60D3F176_6FD8_9BA1_41D4_49CD4AA1F97D",
  "to": "left",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "SlideInEffect",
  "id": "effect_8F4138E8_9B90_0A6E_41D0_699C2D8532A4",
  "from": "left",
  "duration": 500
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E989C6CB_FC14_3004_41CC_1FC7E25A4A41",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_EA619EA9_FC14_5004_41CE_C3DBD7D84AED",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_06BAB0A8_23E9_2943_41AB_E40CBAD75C2B",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_2FB83B3D_22A1_8F79_41B9_1671F9F9C163",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_EC1DE477_FC3C_F00C_41DC_4FBB42ECC1C5",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_08AFF3A8_13E0_E683_41A9_5F422224B9A9",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_EC09041E_FC34_303C_41DC_9869EB6852BF",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D6B9F0FF_FC0D_D1FC_41DB_0A09E8203CC8",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0B8E4AA5_13EF_268D_4191_A8042CB9B69D",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_082E460D_13E1_219D_4180_1FB13280F28A",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_ECC0BDDF_FC34_F03C_41B6_202E93F362E3",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_ECA4D69F_FC35_F03C_41DC_22D461A4F1F8",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D17CD16C_FC0F_D01C_41EB_89E9718C2A6C",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_EDFE1F39_FC34_3004_41EA_B09D3C8E59A3",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_EDCD968C_FC34_501C_41E1_4DE5DC0D704D",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_3C083484_2059_E943_4193_65C8F2B59D9E",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_2E799256_22AF_B908_4183_EA79FB5167C0",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E843EF30_FC0C_F004_41C4_D1D017ACB984",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_EF3DC1C9_FC14_7004_4185_E33F6FF6721B",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_06F02B92_23E9_5F47_4190_A6EB79E9525A",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E8A998A3_FC15_D00B_41DC_D682EC85DEAE",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_076B2FF1_23EB_76C5_41B8_DF21C4DA6582",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E88EE7CB_FC14_3004_41E0_4C0EEFD38BDA",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E91FC68C_FC14_501C_41E0_3BC73BE195F8",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D724A6E5_FC0C_F00C_41BC_9F2B1BE0A2AA",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0170D961_0C0C_10F6_417F_D75826DD2787",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_00655010_206B_E943_419E_D798F387758A",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_EA533BC9_FC14_3004_41BC_6EC931A1901A",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E969DDAC_FC1C_501C_41E7_860352ECBF81",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_EA0AD4D8_FC1C_D005_41DB_C46463AB04F3",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E91F5435_FC14_D00C_41EE_7F983276FAE8",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_06A08192_2069_6B47_41B4_4567D8B004CA",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0737EDB8_2067_5B43_41BB_CE049D02C47A",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_04FCEFB8_2067_3743_41A8_EFBBA4AAA218",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0461E46B_205B_69C5_41C0_91A3A9E33038",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_AB546A1A_A68A_0EC5_41DF_3F1860E838ED",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_EA3F7B24_FC14_500C_41E8_670734BF5601",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_2C93C355_22A2_9F09_41BC_948EAF1F5D2D",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_EBBD0AD9_FC0D_D007_41EE_EA264ABC223C",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_EBE63DC9_FC0C_F004_41E6_566C03D7C400",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_EB3BEA79_FCF4_3004_41B2_B46F2FB926D1",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E44AAA3C_FCF4_F07D_41E9_CA48774CB0C9",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E4177701_FCF4_7004_41E7_E1F3CFAA858A",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D2C03107_FC77_D00B_41DD_0EFE2A00DF08",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_2F22B488_22A1_B907_41BE_AF96350E72D5",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_EBAEB0A9_FCF5_F004_41EE_4A583B638F0E",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_11F3D232_02E8_4633_4182_D41BE6F919F7",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_07AA8E41_205B_59C2_41AA_5C540653744F",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_05E94594_205B_6B42_41B4_E79C5A5009BD",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E5322BA5_FCFC_500F_41E4_1A364101F614",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0492BD14_2059_5B43_41BF_5A1EDC2E76C8",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E4B73B22_FCFC_3004_41D7_90D78A382EBB",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E4D5D698_FCFC_5004_41BD_4B88E0C273FC",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D51FB170_FC0C_5004_4197_14D4F2F41506",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E645A7FD_FCFD_DFFC_41D5_D3BE5F03FF8E",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E6788600_FCFC_D004_41D2_B75E6A8F2BBC",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E744CA0E_FCF4_501C_41BF_A09E2B3F7649",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E6C2DFED_FCF4_501C_41E0_F3552C833239",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D241573F_FC34_507B_41EA_751BF48B72FD",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_051A63FD_2058_EEBD_41B8_803B761C3D9A",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E6A07C0A_FCF4_3004_41DF_EB2A8948CD92",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E6806984_FCF4_D00D_41EB_7A13980C1659",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_3884631B_205B_6F45_418D_0BCFD20DD017",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E6F754BA_FCF4_F004_41D5_23884ED04597",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E771BBC0_FC0C_3004_41EA_B05E0D46371E",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E742C7EB_FC0C_3004_41E8_7B2BF9353D11",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_02158EBD_1121_1EFD_4193_516861454A30",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_023B33E6_1121_268F_4190_13C263FA5622",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_05EEFA58_20A7_39C3_41A3_65DF6FD46CE3",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_5EA5B34E_4F77_F4DB_41A6_EEDCA15542FA",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E1354752_FC14_5004_41E2_335F70AA4473",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E1197027_FC14_D00C_41EC_3B326C41919B",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D715758C_FC7C_501C_41C3_2EB6F7E279FC",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D1CEEC34_FC14_500C_41ED_F461C31DB39F",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_04013622_20A9_2947_41BC_3B3A12600ACF",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E2348122_FC14_5004_41D2_C5E8DCDAE055",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E2383E8A_FC14_D004_41B4_37DDE128934B",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_38879C83_205B_7945_41AE_EE906B9D2A45",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_05432D2D_20AB_5B42_41C0_CC6FF064F182",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0459B7C4_20A8_F6C2_41B7_391534D200C4",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E3ED72C3_FC1C_F004_41EE_79123B5D3371",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_E3FAB05A_FC1C_7005_41EC_DBB6D142FA97",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_1D04E9CD_10E1_629D_4191_77227BB6B4D8",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_057BA69A_20A9_6947_4184_B87A7049E9F4",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0ABCED59_20AF_5BC2_41BD_0192A9CC8BE6",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0E063520_20AB_6B43_4157_F2D50F87E430",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DC251124_FC1C_D00C_41B1_EB474F00D6CD",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_05E6854E_20A9_6BDF_4189_0E3CCEA5938F",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DDA7E419_FC14_5004_41E0_E4D8E6B0C1F6",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DC618944_FC14_500C_41C8_DE446A29CCCC",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_3A697433_2059_2945_41BA_C159CF867BF3",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0AD94566_20A9_2BCF_41B3_19FC369870C4",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0B8F4DB1_20AB_FB45_41A1_41768BCB1F7B",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DDF4C473_FC14_5004_41EE_A28A2E67E84D",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_01531868_23BB_79C3_41A0_DF15214D7358",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DEA56D8D_FC14_501A_41B2_77634E8B23FA",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DD68C674_FC14_D00C_41EE_A29A39322197",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DE358752_FC0C_5004_41CD_B1119F7484B8",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_062232DC_23BB_6EC3_41BC_D689489AB04B",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DFB5954F_FC0C_501C_41DB_E2F7DDD91ADB",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DB2D04F4_FC0C_500C_419A_2E7E6AB5B627",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0A435DD3_20A9_5AC5_41C0_8DE9F986CAB2",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DF47D0B9_FC0D_D004_41EF_2488F3ACA996",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D8A782F6_FC0C_300C_41DD_3425523E3F4E",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D806DCAE_FC34_D01C_41B4_B9ABC3B15E68",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D99BC20F_FC34_D01C_41CD_8EA088C5338C",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_1F9F3C43_1286_6EA8_41AE_040730B57734",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_1CF9DB54_1286_2AA8_41A8_CB98D27FED5D",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_1C730683_1282_3BA8_41A1_C881975C22B7",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0A4C772A_20A8_D747_41BE_1DF829D537A7",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D446EDA5_FC34_500C_41D2_C8BAB9DD2017",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DA50CCDC_FC3B_D03C_41D9_9BA3785E5AF0",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DA136303_FC3C_5004_41DD_D8F522985D7C",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DA5924F4_FC3C_500C_41EB_B787388AED55",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_B58DB0B4_BA88_E554_41E2_46BBD4416947",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0783BC49_0C14_3036_418C_C94CC3FCC906",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0A76C3AE_20A7_2F5E_41BC_5644AE15D36D",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0A29D153_20B9_2BC6_41A2_5275185936F1",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D48629AC_FC3C_701C_41BD_76E9191D2C3E",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DB0C3EA5_FC3C_D00C_41ED_87CA0ED0C65A",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0B2C6A6C_20BB_59C2_4191_1CC36601DD5D",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0901C614_20BB_E943_41AF_C12292316BB0",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_DBF9A604_FC3B_D00C_41DA_C00DFFAD98C5",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D4CE4145_FC34_D00C_41E3_BAC69C20298E",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D47F28A1_FC34_5004_41E0_4F02F81205EF",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_D7620967_FC0C_700C_41BA_DAB1143E96D4",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_08845719_20B9_3745_41AD_9C8EFEE1DA2D",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_19BCD79C_1286_39D8_41AF_718F5DC98963",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_19128603_1287_FAA8_415C_82808018F926",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_1EA65673_1286_FB68_41A1_C3B648395268",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_1EF6C43B_1282_1ED8_418D_4014EBEBC9FF",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_1EC24E2C_128E_2AF8_41A2_14C282C9AF1E",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_1E3F05B4_1282_39E8_4191_AB4D26E79F46",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_2C12FEE2_201F_A71F_41A3_5AC7625B2516",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_0EF1D1BE_20A9_2ABF_41C1_2F2F97B88578",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_2E1CCFDA_2069_36C7_41AB_AB6D3A3E3B6B",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_09C73DF6_20B8_FACE_41A6_A51DD51E8811",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_2D3D305F_207B_29FD_4192_0771020C8D99",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_388E5C6A_2079_D9C7_41A9_FE1789291910",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_09B45D4C_20B9_5BC3_41A9_4250962E2F94",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_2E150BDB_206B_DEC5_41BE_298944C509DA",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_2EDD9A5D_2068_F9FD_41B8_793ECC13A5C4",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_09B3D9A4_20A7_5B43_41C0_8FEDCA2A7E55",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_2EEEC797_22A2_8708_41BD_99F65D07CDEE",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_42354F09_4F7F_EC59_418C_62B750096791",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_428109F7_4F7C_F7C9_41BD_7AD37563C070",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_40B12840_4F7D_D4C7_41C6_7A037F9407F8",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_4067EAD7_4F7D_55C9_41D2_651C3AD90D99",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_5D1F615F_4FBE_B272_41CE_BD96ACB1BC96",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_5CF0EF11_4FBF_8FF1_4176_DDDF45EC54EC",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_43B062FA_4F8A_9632_41C0_2CDC04E556E8",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_431E6C6E_4F8A_9252_41C9_8D3672081299",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_433E8F4E_4F89_8E53_41CE_A569E418C8DE",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_428F6E86_4F89_8ED3_41C4_C4207F8F2789",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_42319B00_4F9B_F7CE_41C7_83A14AA38C23",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_4271106F_4F9A_9251_41C4_17EB5C077F37",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_40BDE4B7_4F9F_9232_41CC_A4FD0D01DA61",
  "duration": 200
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_121C36BF_1CD5_7780_41BB_92A0FF75DD73",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_121C16BF_1CD5_7780_41A9_4F29E6A2D9A9"
  },
  "idleSequence": "this.sequence_121C16BF_1CD5_7780_41A9_4F29E6A2D9A9",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 40.05
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_121F36E0_1CD5_7781_4188_537038165B9C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_121F06E1_1CD5_7780_41B3_237F729A61E3"
  },
  "idleSequence": "this.sequence_121F06E1_1CD5_7780_41B3_237F729A61E3",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -128.27
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13E24703_1CD5_7680_419C_2A6B19DB6C5E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13E25703_1CD5_7680_41A4_7AB6D486A40D"
  },
  "idleSequence": "this.sequence_13E25703_1CD5_7680_41A4_7AB6D486A40D",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 78.25
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13E52726_1CD5_7680_4183_760210C5B3B1",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13E53726_1CD5_7680_41B3_2D9A25A64E8C"
  },
  "idleSequence": "this.sequence_13E53726_1CD5_7680_41B3_2D9A25A64E8C",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -100.46
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13E8774A_1CD5_7680_41AF_3E6E9F600A5D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13E8474A_1CD5_7680_41BA_603D0D22A3F5"
  },
  "idleSequence": "this.sequence_13E8474A_1CD5_7680_41BA_603D0D22A3F5",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 7.01
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13EB576B_1CD5_7680_418E_1CD4893E0668",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13EB076B_1CD5_7680_419F_4B4F793AE14E"
  },
  "idleSequence": "this.sequence_13EB076B_1CD5_7680_419F_4B4F793AE14E",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 96.83
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13EE778C_1CD5_7580_419A_5F2285B30973",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13EE478C_1CD5_7580_41AB_E3CABD845431"
  },
  "idleSequence": "this.sequence_13EE478C_1CD5_7580_41AB_E3CABD845431",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -179.77
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13F117AE_1CD5_7580_41B0_3768C74F7C53",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13F1E7AE_1CD5_7580_41BC_3AEEBDF384A3"
  },
  "idleSequence": "this.sequence_13F1E7AE_1CD5_7580_41BC_3AEEBDF384A3",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 4.64
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13F407D1_1CD5_7583_419D_14E45987B43B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13F417D1_1CD5_7583_419B_CFF16114E473"
  },
  "idleSequence": "this.sequence_13F417D1_1CD5_7583_419B_CFF16114E473",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 135.96
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13F7A7F3_1CD5_7587_41B9_3FE4C2CB9B25",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13F7B7F3_1CD5_7587_41AC_DBA8757B0214"
  },
  "idleSequence": "this.sequence_13F7B7F3_1CD5_7587_41AC_DBA8757B0214",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -33.66
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13FAC822_1CD5_7A81_4193_62C04431C5DC",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13FAD822_1CD5_7A81_41B2_276FB13DAB3C"
  },
  "idleSequence": "this.sequence_13FAD822_1CD5_7A81_41B2_276FB13DAB3C",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -13.88
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13FE4843_1CD5_7A87_41B0_754761A96D69",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13FE2844_1CD5_7A81_41B4_3E82F0BBF29B"
  },
  "idleSequence": "this.sequence_13FE2844_1CD5_7A81_41B4_3E82F0BBF29B",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -124.35
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13C14864_1CD5_7A81_41AE_DA6FA606B0EA",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13C15864_1CD5_7A81_41AA_20E029A0DA32"
  },
  "idleSequence": "this.sequence_13C15864_1CD5_7A81_41AA_20E029A0DA32",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -153.95
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13C4E886_1CD5_7B81_41AB_230448AA9217",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13C4F886_1CD5_7B81_41AB_1A23DCE82E50"
  },
  "idleSequence": "this.sequence_13C4F886_1CD5_7B81_41AB_1A23DCE82E50",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -46.97
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13C798A8_1CD5_7B81_41B1_5CCD33190B86",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13C868A8_1CD5_7B81_41B8_02F0142918F3"
  },
  "idleSequence": "this.sequence_13C868A8_1CD5_7B81_41B8_02F0142918F3",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 128.41
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13CA88CB_1CD5_7B80_41BA_B0D4A8934A8A",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13CA98CB_1CD5_7B80_41BA_39CF0965C11A"
  },
  "idleSequence": "this.sequence_13CA98CB_1CD5_7B80_41BA_39CF0965C11A",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 145.31
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13CE08F5_1CD5_7B80_41B4_8CE0F883BF47",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13CEE8F5_1CD5_7B80_41A7_A704596FB3C9"
  },
  "idleSequence": "this.sequence_13CEE8F5_1CD5_7B80_41A7_A704596FB3C9",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -139.76
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13D1491A_1CD5_7A80_41B9_F1136B018D1B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13D1591A_1CD5_7A80_41A6_F6D22EF5B1D8"
  },
  "idleSequence": "this.sequence_13D1591A_1CD5_7A80_41A6_F6D22EF5B1D8",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 33.3
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13D4193E_1CD5_7A81_41A8_71B75E28406B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13D4F93E_1CD5_7A81_41A6_B771CE46CA2B"
  },
  "idleSequence": "this.sequence_13D4F93E_1CD5_7A81_41A6_B771CE46CA2B",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -125.44
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13D7A961_1CD5_7A83_41B1_512FA5FD926F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13D7B961_1CD5_7A83_41B1_8B9806044419"
  },
  "idleSequence": "this.sequence_13D7B961_1CD5_7A83_41B1_8B9806044419",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -45.33
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13DB1984_1CD5_7D81_4198_29FBEE61F929",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13DBE984_1CD5_7D81_41B8_D77743FEBEED"
  },
  "idleSequence": "this.sequence_13DBE984_1CD5_7D81_41B8_D77743FEBEED",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 178.54
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13DEB9AD_1CD5_7D83_41AD_BEAF8D42FF58",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13DE89AD_1CD5_7D83_41BC_75E2DCB9FDB0"
  },
  "idleSequence": "this.sequence_13DE89AD_1CD5_7D83_41BC_75E2DCB9FDB0",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -86.97
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13A399CE_1CD5_7D81_4166_3C31217FE892",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13A469CE_1CD5_7D81_41AB_15712E82BB43"
  },
  "idleSequence": "this.sequence_13A469CE_1CD5_7D81_41AB_15712E82BB43",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 113.19
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13A809F2_1CD5_7D81_41B3_27EB2864480E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13A819F2_1CD5_7D81_41B1_C06D39C00061"
  },
  "idleSequence": "this.sequence_13A819F2_1CD5_7D81_41B1_C06D39C00061",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 7.81
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13ADEA21_1CD5_7E83_41B9_9BAC68A1DADD",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13ADFA22_1CD5_7E81_41BA_BD8A1EB97A7F"
  },
  "idleSequence": "this.sequence_13ADFA22_1CD5_7E81_41BA_BD8A1EB97A7F",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -63.7
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13B19A46_1CD5_7E81_41B5_96D0F7DC96F9",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13B26A46_1CD5_7E81_41B8_0FCBB039B7E0"
  },
  "idleSequence": "this.sequence_13B26A46_1CD5_7E81_41B8_0FCBB039B7E0",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -88.38
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13B73A68_1CD5_7E81_41B7_90B85AB7A875",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13B70A68_1CD5_7E81_41B0_29DFF00394C6"
  },
  "idleSequence": "this.sequence_13B70A68_1CD5_7E81_41B0_29DFF00394C6",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 61.23
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13BD6A8F_1CD5_7F9F_41A2_53AF9B5A9CD2",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13BD7A8F_1CD5_7F9F_4195_1BC850483A31"
  },
  "idleSequence": "this.sequence_13BD7A8F_1CD5_7F9F_4195_1BC850483A31",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -6.38
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13824AB2_1CD5_7F80_418F_364EB0F264DB",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13825AB2_1CD5_7F80_417E_64C462AF2F84"
  },
  "idleSequence": "this.sequence_13825AB2_1CD5_7F80_417E_64C462AF2F84",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 177.26
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13886AD7_1CD5_7F80_4192_7301625B4B86",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13887AD7_1CD5_7F80_41B8_07198A4B140B"
  },
  "idleSequence": "this.sequence_13887AD7_1CD5_7F80_41B8_07198A4B140B",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -121.29
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_138D7AF9_1CD5_7F80_4196_C9F06439EC14",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_138D4AF9_1CD5_7F80_41B2_F356A78F33CD"
  },
  "idleSequence": "this.sequence_138D4AF9_1CD5_7F80_41B2_F356A78F33CD",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 120.87
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1392CB15_1CD5_7E80_41A4_C7A940129A38",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_1392BB15_1CD5_7E80_41B8_5DF98E9B2116"
  },
  "idleSequence": "this.sequence_1392BB15_1CD5_7E80_41B8_5DF98E9B2116",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -159.45
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13981B38_1CD5_7E80_41B9_CBCAB80BE53E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_1398FB38_1CD5_7E80_4161_B9357D181C9E"
  },
  "idleSequence": "this.sequence_1398FB38_1CD5_7E80_4161_B9357D181C9E",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -21.19
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_139EBB5D_1CD5_7E83_41B1_999D465E273B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_139E8B5E_1CD5_7E80_4196_610D84AAA590"
  },
  "idleSequence": "this.sequence_139E8B5E_1CD5_7E80_4196_610D84AAA590",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 104.33
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1364AB83_1CD5_7D80_41AA_30BAB11970FF",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13648B83_1CD5_7D80_4196_8FA66205BF3B"
  },
  "idleSequence": "this.sequence_13648B83_1CD5_7D80_4196_8FA66205BF3B",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -92.12
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_136AFBA9_1CD5_7D80_41B9_04B0D7033C48",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_136ACBA9_1CD5_7D80_41B0_12C014AE067B"
  },
  "idleSequence": "this.sequence_136ACBA9_1CD5_7D80_41B0_12C014AE067B",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 8.84
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1370CBCE_1CD5_7D80_41AC_AEE6D75A4ED4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_1370DBCF_1CD5_7D80_41B9_9E1B8020B1DB"
  },
  "idleSequence": "this.sequence_1370DBCF_1CD5_7D80_41B9_9E1B8020B1DB",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -166.15
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13768BF3_1CD5_7D80_41B7_1A431CC999A2",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13769BF3_1CD5_7D87_41BB_55AF52283076"
  },
  "idleSequence": "this.sequence_13769BF3_1CD5_7D87_41BB_55AF52283076",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -41.92
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_137CEC18_1CD5_7A80_4190_505DD175ADDF",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_137CFC19_1CD5_7A80_41B7_05A813AAC46C"
  },
  "idleSequence": "this.sequence_137CFC19_1CD5_7A80_41B7_05A813AAC46C",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -116.37
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13434C3E_1CD5_7A81_41A3_473605D7888D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13435C3E_1CD5_7A81_419D_4AC3CFAFB7FA"
  },
  "idleSequence": "this.sequence_13435C3E_1CD5_7A81_419D_4AC3CFAFB7FA",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 40.05
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13497C65_1CD5_7A83_41A5_15807EFA2165",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13494C65_1CD5_7A83_41B6_1EE8611DA38F"
  },
  "idleSequence": "this.sequence_13494C65_1CD5_7A83_41B6_1EE8611DA38F",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 165.1
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_134E9C88_1CD5_7B81_41A8_F3BCFD82D395",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_134F6C88_1CD5_7B81_41A3_7125F1D03E0B"
  },
  "idleSequence": "this.sequence_134F6C88_1CD5_7B81_41A3_7125F1D03E0B",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -179.56
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13556CAA_1CD5_7B81_417C_7C6CBECA7184",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13557CAB_1CD5_7B87_4130_69C7F78B88AC"
  },
  "idleSequence": "this.sequence_13557CAB_1CD5_7B87_4130_69C7F78B88AC",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 122.01
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_135A9D02_1CD5_7A80_41A5_B5D75C9ADF14",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_135B6D02_1CD5_7A80_41B9_1BE6642DD4F6"
  },
  "idleSequence": "this.sequence_135B6D02_1CD5_7A80_41B9_1BE6642DD4F6",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 33.05
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1321FD27_1CD5_7A8F_4189_9FDCA092A6E5",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_1321DD27_1CD5_7A8F_41B9_35292BF11A70"
  },
  "idleSequence": "this.sequence_1321DD27_1CD5_7A8F_41B9_35292BF11A70",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 68.15
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13273D4C_1CD5_7A81_41AF_8077675C8E3A",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13270D4C_1CD5_7A81_41B1_F6580466F988"
  },
  "idleSequence": "this.sequence_13270D4C_1CD5_7A81_41B1_F6580466F988",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -17.82
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_132DFD72_1CD5_7A81_41B4_ADE6FE20CE65",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_132DCD72_1CD5_7A81_418B_42DE23E5BBA3"
  },
  "idleSequence": "this.sequence_132DCD72_1CD5_7A81_418B_42DE23E5BBA3",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -157.9
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13331D98_1CD5_7581_41A2_7C89E27ED122",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_1333FD98_1CD5_7581_41B3_C05AD28467AB"
  },
  "idleSequence": "this.sequence_1333FD98_1CD5_7581_41B3_C05AD28467AB",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -173.83
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13398DBA_1CD5_7581_41B4_15316BE0D59E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13399DBA_1CD5_7586_419D_18A1C405283D"
  },
  "idleSequence": "this.sequence_13399DBA_1CD5_7586_419D_18A1C405283D",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 68.18
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13006DE1_1CD5_7583_418F_EFEE034414BB",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13007DE2_1CD5_7580_41B0_6D059A0C516F"
  },
  "idleSequence": "this.sequence_13007DE2_1CD5_7580_41B0_6D059A0C516F",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 86.71
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13062E0A_1CD5_7681_41B8_E1E7FDF66505",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13063E0A_1CD5_7681_4190_BC45280026C6"
  },
  "idleSequence": "this.sequence_13063E0A_1CD5_7681_4190_BC45280026C6",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -177.46
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_130B9E30_1CD5_7681_41B4_D3A716798E64",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_130C6E30_1CD5_7681_419F_32CE5FF81A22"
  },
  "idleSequence": "this.sequence_130C6E30_1CD5_7681_419F_32CE5FF81A22",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 82.58
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_13122E55_1CD5_7683_41BA_D8910F3F4BE4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_13123E55_1CD5_7683_41B0_9A562D351E59"
  },
  "idleSequence": "this.sequence_13123E55_1CD5_7683_41B0_9A562D351E59",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -85.49
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1318EE7C_1CD5_7681_417B_782E42832BB8",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_1318FE7C_1CD5_7681_418B_D0B41B2F1A11"
  },
  "idleSequence": "this.sequence_1318FE7C_1CD5_7681_418B_D0B41B2F1A11",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 142.91
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_131FEEBC_1CD5_7781_41B9_5742A6ADEB83",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_131FFEBC_1CD5_7781_4193_3548049C239E"
  },
  "idleSequence": "this.sequence_131FFEBC_1CD5_7781_4193_3548049C239E",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 143.43
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0CE5AEF8_1CD5_7781_41A6_5AA7FDF1A643",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_0CE5BEF8_1CD5_7781_41B9_09985B3A388D"
  },
  "idleSequence": "this.sequence_0CE5BEF8_1CD5_7781_41B9_09985B3A388D",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 8.36
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0CEAAF30_1CD5_7681_41A8_71BF4AF47FCC",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_0CEABF30_1CD5_7681_41AD_1B81AAC771ED"
  },
  "idleSequence": "this.sequence_0CEABF30_1CD5_7681_41AD_1B81AAC771ED",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 54.42
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0CF12F6F_1CD5_7680_41B9_87499E2071C2",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_0CF10F6F_1CD5_7680_41A7_22354F999609"
  },
  "idleSequence": "this.sequence_0CF10F6F_1CD5_7680_41A7_22354F999609",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 48.3
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0CF6BFA3_1CD5_7580_41B8_698DC562B85F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_0CF68FA3_1CD5_7587_41AA_E85F93C162C7"
  },
  "idleSequence": "this.sequence_0CF68FA3_1CD5_7587_41AA_E85F93C162C7",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 174.56
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0CFD3FE0_1CD5_7581_41B9_96AD9F20BB58",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_0CFD0FE0_1CD5_7581_41BB_5A0C191B55B9"
  },
  "idleSequence": "this.sequence_0CFD0FE0_1CD5_7581_41BB_5A0C191B55B9",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -5.37
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0CC36018_1CD5_6A80_4190_343228E1881E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_0CC35018_1CD5_6A80_41B3_5B143AF26587"
  },
  "idleSequence": "this.sequence_0CC35018_1CD5_6A80_41B3_5B143AF26587",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -11.73
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0CC9E053_1CD5_6A80_41AF_FBF51E4B2796",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_0CC9D053_1CD5_6A80_419E_CB10AC73661C"
  },
  "idleSequence": "this.sequence_0CC9D053_1CD5_6A80_419E_CB10AC73661C",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -16.25
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0CCF2087_1CD5_6B80_41A8_F9E468B2F45D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_0CCF0087_1CD5_6B80_41B8_3BAD54B34ABA"
  },
  "idleSequence": "this.sequence_0CCF0087_1CD5_6B80_41B8_3BAD54B34ABA",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -119.92
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0CD5F0C1_1CD5_6B83_41B1_72F0BE811D47",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 0.54,
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_0CD5E0C2_1CD5_6B80_41B0_FDF26FF2D7D2"
  },
  "idleSequence": "this.sequence_0CD5E0C2_1CD5_6B80_41B0_FDF26FF2D7D2",
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 177.85
  },
  "automaticZoomSpeed": 10
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5CACADB1_4FBF_9231_41AA_5B74839C063A",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F394FB06_FC34_F00C_41D0_83647C0FE18F",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F394EB07_FC34_F00C_41DA_14359632DC8F",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3941B07_FC34_F00C_41DC_F2A8E4A8A22E",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D66C417D_FC15_D0FC_41DE_5F46F89840D3",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D66C517D_FC15_D0FC_41DE_A912D794F316",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3940B08_FC34_F004_41E3_863B5DB66482",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3942B09_FC34_F004_41C4_AE40AF4EFF1F",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D66CA17E_FC15_D0FC_41DB_0CE5B097EC32",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D66CB17F_FC15_D0FC_41D6_35B3B72FC15E",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3945B09_FC34_F004_41EE_C4FB5850CAD5",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D66C917F_FC15_D0FC_41EC_00C6C021A996",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D66CE17F_FC15_D0FC_41D5_238874B63043",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3946B0A_FC34_F004_41D4_E70380811E83",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D66CF180_FC15_D004_41D3_8AAF19CF5FCA",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D66CC180_FC15_D004_41CC_4AFDF87E7276",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3959B0A_FC34_F004_41DD_2BAE3900F16B",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3958B0B_FC34_F004_41EB_901D2507C4D3",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D66C6181_FC15_D004_41C9_ADF10D3C0547",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D66C7181_FC15_D004_41E1_5F6F5F5AD196",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_EE533BBB_FD72_D1EA_41AE_F2492EAD3EED",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_EE50DBBB_FD72_D1EA_41EA_47250208EEA1",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F395DB0C_FC34_F01C_41EC_AD8E4278954E",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D66CA183_FC15_D004_41D7_EB65C90E94E9",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D66C8183_FC15_D004_4199_BBA9DD4C53F8",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F395CB0D_FC34_F01C_41EC_F6E85D17C686",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D66C9183_FC15_D004_41ED_043175172440",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D66CF183_FC15_D004_41E3_557EDFF2F120",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F395FB0D_FC34_F01C_41CA_FDAEE5C88573",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D66CC184_FC15_D00C_41C3_2DBAF1F373C9",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D66F2184_FC15_D00C_41E1_A5FE522550F2",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3951B0E_FC34_F01C_41EB_5697006B7BA4",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D66F3184_FC15_D00C_41DC_BFDB5B523BE3",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D66F0184_FC15_D00C_4175_15514CBAD5D2",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3953B0E_FC34_F01C_41A9_823E6BA39280",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D5C846D1_FC0C_3007_41CB_8D93091EA69A",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D5C836D1_FC0C_3007_41AF_8F2DAC119FF5",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3952B0F_FC34_F01C_41E6_28CB03A089EF",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_CCA47B2B_FC0C_5004_41D8_34477900DFBB",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_CCA40B2B_FC0C_5004_41C9_C792D0BACFE3",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3955B0F_FC34_F01C_41C1_723C7278218A",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3956B10_FC34_F004_41E9_0035B0CBE24D",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_CCA42B2D_FC0C_501C_41AD_AE77EC412250",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_CCA43B2D_FC0C_501C_41A8_3A19BE3337AF",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3969B11_FC34_F004_41B3_813EE451DC92",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3945B12_FC34_F004_41D0_9AB8F49C62FD",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D02FB683_FC14_3004_41ED_5667EEE957FB",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D02FA683_FC14_3004_41DA_E1A997E07E95",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3944B13_FC34_F004_41DD_FF13C8492176",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D2DB683C_FC3C_507C_41ED_BD13DBD37961",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D2DB083C_FC3C_507C_41DB_959B48A5CBCA",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3947B13_FC34_F004_41D8_DB9286C7ACE3",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D2DB183C_FC3C_507C_41D8_91F46EB36EB8",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D2DB283C_FC3C_507C_41E6_55EC5CD846E1",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D18AA15F_FC14_F03B_41CB_66D9C40FC295",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3946B14_FC34_F00C_41C2_6DB4331B51AC",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D2DB383D_FC3C_507C_41ED_4F78D021DF4A",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D2DAC83D_FC3C_507C_41D5_F5185E078298",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3959B15_FC34_F00C_41DC_0BEFCE90AF94",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D2DAD83E_FC3C_507C_41D6_ADCD74A814D0",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D2DAE83E_FC3C_507C_41D4_74B237DE23B5",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F3958B15_FC34_F00C_41E5_598B413B440B",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D0FDDC95_FC0B_F00C_41EC_761F0A235CB2",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D0FDCC95_FC0B_F00C_41EA_BF12426DC1FD",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F395BB16_FC34_F00C_41D2_6578A85D4EE0",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D0FDFC95_FC0B_F00C_41E3_D81552831719",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D0FDEC95_FC0B_F00C_41D2_C3C2F9F73F25",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F395AB16_FC34_F00C_41EB_56F629C661E1",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D66FA190_FC15_D004_41D4_79CA7257F0ED",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D66FB191_FC15_D004_41D2_071823312571",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_F35BD065_FD12_CE9E_41EE_3C5C980EA6B3",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F35BC066_FD12_CE9A_41EC_98786329EFCD",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F395CB17_FC34_F00C_41E3_7D7E8DC1A9D1",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F395FB17_FC34_F00C_41CF_AFE194B8659D",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D4AD6A81_FC34_7007_41ED_9CC81AAA574A",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D11833DA_FC1C_D004_41EA_09BE34C77034",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_D66F8193_FC15_D004_41EA_663424A7553D",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_D66F9193_FC15_D004_41B4_058A9BA8D1C8",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_F358506E_FD12_CF6A_41EE_D34FBB4EA027",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_F358306E_FD12_CF6A_41E8_3B0B1DF796B3",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_1EC113FC_12CF_5086_417B_6CD3A7463A40",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_2DEDD0CE_201F_9B27_41B6_D57863976CCC",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_30BB1341_2067_6FC5_41B8_D5FC8A7A1E6C",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_3BA34023_20AF_2945_41BB_31697B9AF0BB",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_3BA37023_20AF_2945_41BF_F725AD965D41",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_2FD60686_2069_294F_41A5_DD1D6B0D86F2",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_3D9C4E23_20B9_7945_41A2_D2DB1EDE6F7B",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_3D9C5E23_20B9_7945_41A2_AC6D6109977D",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_3BA36023_20AF_2945_41BC_B6BF62F3C5CF",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_3BA31023_20AF_2945_41B0_7F801EE400AB",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_2FD1C687_2069_294D_4198_C9815D763775",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_3BA30024_20AF_2943_4172_E631B730E050",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_3BA32024_20AF_2943_41BD_C41F60899AFD",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5D169EAC_4F8C_EC5F_41D0_724000DBA3F9",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_5D168EAC_4F8C_EC5F_41D1_DE31D3EA7AEC",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_5D16BEAC_4F8C_EC5F_41C5_E1A1670C8D3C",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_40741FD6_4F9F_8E72_41C3_9DF3B6BDE333",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_40747FD6_4F9F_8E72_41D0_CC3ABE080277",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_40745FD6_4F9F_8E72_41D0_6D0319C3B691",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_407B2FD7_4F9F_8E72_41A2_C31DAD1F3AB2",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_407B1FD7_4F9F_8E72_41B9_C5D3E993B43F",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_407B6FD7_4F9F_8E72_41BA_378966A17284",
  "duration": 1000
 },
 "this.effect_F3941B07_FC34_F00C_41DC_F2A8E4A8A22E",
 "this.effect_D66C417D_FC15_D0FC_41DE_5F46F89840D3",
 "this.effect_D66C517D_FC15_D0FC_41DE_A912D794F316",
 "this.effect_F395DB0C_FC34_F01C_41EC_AD8E4278954E",
 "this.effect_D66CA183_FC15_D004_41D7_EB65C90E94E9",
 "this.effect_D66C8183_FC15_D004_4199_BBA9DD4C53F8",
 "this.effect_F3945B12_FC34_F004_41D0_9AB8F49C62FD",
 "this.effect_D02FB683_FC14_3004_41ED_5667EEE957FB",
 "this.effect_D02FA683_FC14_3004_41DA_E1A997E07E95",
 "this.effect_F395CB0D_FC34_F01C_41EC_F6E85D17C686",
 "this.effect_D66C9183_FC15_D004_41ED_043175172440",
 "this.effect_D66CF183_FC15_D004_41E3_557EDFF2F120",
 "this.effect_F3953B0E_FC34_F01C_41A9_823E6BA39280",
 "this.effect_D5C846D1_FC0C_3007_41CB_8D93091EA69A",
 "this.effect_D5C836D1_FC0C_3007_41AF_8F2DAC119FF5",
 "this.effect_407B2FD7_4F9F_8E72_41A2_C31DAD1F3AB2",
 "this.effect_407B1FD7_4F9F_8E72_41B9_C5D3E993B43F",
 "this.effect_407B6FD7_4F9F_8E72_41BA_378966A17284",
 "this.effect_F3946B0A_FC34_F004_41D4_E70380811E83",
 "this.effect_D66CF180_FC15_D004_41D3_8AAF19CF5FCA",
 "this.effect_D66CC180_FC15_D004_41CC_4AFDF87E7276",
 "this.effect_F395AB16_FC34_F00C_41EB_56F629C661E1",
 "this.effect_D66FA190_FC15_D004_41D4_79CA7257F0ED",
 "this.effect_D66FB191_FC15_D004_41D2_071823312571",
 "this.effect_F35BD065_FD12_CE9E_41EE_3C5C980EA6B3",
 "this.effect_F35BC066_FD12_CE9A_41EC_98786329EFCD",
 "this.effect_D11833DA_FC1C_D004_41EA_09BE34C77034",
 "this.effect_D66F8193_FC15_D004_41EA_663424A7553D",
 "this.effect_D66F9193_FC15_D004_41B4_058A9BA8D1C8",
 "this.effect_F358506E_FD12_CF6A_41EE_D34FBB4EA027",
 "this.effect_F358306E_FD12_CF6A_41E8_3B0B1DF796B3",
 "this.effect_2FD60686_2069_294F_41A5_DD1D6B0D86F2",
 "this.effect_3D9C4E23_20B9_7945_41A2_D2DB1EDE6F7B",
 "this.effect_3D9C5E23_20B9_7945_41A2_AC6D6109977D",
 "this.effect_3BA36023_20AF_2945_41BC_B6BF62F3C5CF",
 "this.effect_3BA31023_20AF_2945_41B0_7F801EE400AB",
 "this.effect_F394FB06_FC34_F00C_41D0_83647C0FE18F",
 "this.effect_F3952B0F_FC34_F01C_41E6_28CB03A089EF",
 "this.effect_CCA47B2B_FC0C_5004_41D8_34477900DFBB",
 "this.effect_CCA40B2B_FC0C_5004_41C9_C792D0BACFE3",
 "this.effect_F3956B10_FC34_F004_41E9_0035B0CBE24D",
 "this.effect_CCA42B2D_FC0C_501C_41AD_AE77EC412250",
 "this.effect_CCA43B2D_FC0C_501C_41A8_3A19BE3337AF",
 "this.effect_F3947B13_FC34_F004_41D8_DB9286C7ACE3",
 "this.effect_D2DB183C_FC3C_507C_41D8_91F46EB36EB8",
 "this.effect_D2DB283C_FC3C_507C_41E6_55EC5CD846E1",
 "this.effect_F3959B15_FC34_F00C_41DC_0BEFCE90AF94",
 "this.effect_D2DAD83E_FC3C_507C_41D6_ADCD74A814D0",
 "this.effect_D2DAE83E_FC3C_507C_41D4_74B237DE23B5",
 "this.effect_F395BB16_FC34_F00C_41D2_6578A85D4EE0",
 "this.effect_D0FDFC95_FC0B_F00C_41E3_D81552831719",
 "this.effect_D0FDEC95_FC0B_F00C_41D2_C3C2F9F73F25",
 {
  "class": "Photo",
  "label": "_SKA6964",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_DEDA8518_CFDA_0F00_41AE_A4FDFF23E39F.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_DEDA8518_CFDA_0F00_41AE_A4FDFF23E39F_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_DEDA8518_CFDA_0F00_41AE_A4FDFF23E39F"
 },
 {
  "class": "Photo",
  "label": "_SKA6964",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C126A804_CF2A_0500_41BF_A51F6F1847E2.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C126A804_CF2A_0500_41BF_A51F6F1847E2_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C126A804_CF2A_0500_41BF_A51F6F1847E2"
 },
 {
  "class": "Photo",
  "label": "_SKA6942",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_DE99DD78_CF3A_1F00_418B_73F536F49206.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_DE99DD78_CF3A_1F00_418B_73F536F49206_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_DE99DD78_CF3A_1F00_418B_73F536F49206"
 },
 {
  "class": "Photo",
  "label": "_SKA6945",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C14E801E_CF3A_0500_41DA_F2035F01E8BD.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C14E801E_CF3A_0500_41DA_F2035F01E8BD_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C14E801E_CF3A_0500_41DA_F2035F01E8BD"
 },
 {
  "class": "Photo",
  "label": "_SKA6950",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C14F4242_CF3A_0501_41DD_B8152E648C77.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C14F4242_CF3A_0501_41DD_B8152E648C77_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C14F4242_CF3A_0501_41DD_B8152E648C77"
 },
 {
  "class": "Photo",
  "label": "_SKA6955",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C14F7458_CF3A_0D00_41C2_FF6FB54151C5.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C14F7458_CF3A_0D00_41C2_FF6FB54151C5_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C14F7458_CF3A_0D00_41C2_FF6FB54151C5"
 },
 {
  "class": "Photo",
  "label": "_SKA6963",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C14F7679_CF3A_0D00_41DE_46D7F54DC59C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C14F7679_CF3A_0D00_41DE_46D7F54DC59C_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C14F7679_CF3A_0D00_41DE_46D7F54DC59C"
 },
 {
  "class": "Photo",
  "label": "_SKA6964",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C14F68A7_CF3A_0500_41C3_1D7D5B927DDF.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C14F68A7_CF3A_0500_41C3_1D7D5B927DDF_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C14F68A7_CF3A_0500_41C3_1D7D5B927DDF"
 },
 {
  "class": "Photo",
  "label": "_SKA6984",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C14F7AE3_CF3A_0500_41CB_E0E1CFCCBF94.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C14F7AE3_CF3A_0500_41CB_E0E1CFCCBF94_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C14F7AE3_CF3A_0500_41CB_E0E1CFCCBF94"
 },
 {
  "class": "Photo",
  "label": "_SKA6986",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C14F6D0A_CF3A_3F01_41D9_2FEA30CC8CDD.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C14F6D0A_CF3A_3F01_41D9_2FEA30CC8CDD_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C14F6D0A_CF3A_3F01_41D9_2FEA30CC8CDD"
 },
 {
  "class": "Photo",
  "label": "_SKA7009",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C14F7F43_CF3A_3B00_41E1_737517A3F439.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C14F7F43_CF3A_3B00_41E1_737517A3F439_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C14F7F43_CF3A_3B00_41E1_737517A3F439"
 },
 {
  "class": "Photo",
  "label": "_SKA7011",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C14F5137_CF3A_0700_41CD_D12DFFE16B0C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C14F5137_CF3A_0700_41CD_D12DFFE16B0C_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C14F5137_CF3A_0700_41CD_D12DFFE16B0C"
 },
 {
  "class": "Photo",
  "label": "_SKA7016",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C14F433E_CF3A_0B00_419F_5843078C8C77.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C14F433E_CF3A_0B00_419F_5843078C8C77_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C14F433E_CF3A_0B00_419F_5843078C8C77"
 },
 {
  "class": "Photo",
  "label": "_SKA4208",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C0118D47_D26E_0D8B_41E2_D6938717378D.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C0118D47_D26E_0D8B_41E2_D6938717378D_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C0118D47_D26E_0D8B_41E2_D6938717378D"
 },
 {
  "class": "Photo",
  "label": "_SKA4701",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C0CB4A46_D25E_F78D_41CE_C29036AD6DE8.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C0CB4A46_D25E_F78D_41CE_C29036AD6DE8_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C0CB4A46_D25E_F78D_41CE_C29036AD6DE8"
 },
 {
  "class": "Photo",
  "label": "_SKA4245",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C716DC82_D23E_0C85_41C9_541A30FCADAF.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C716DC82_D23E_0C85_41C9_541A30FCADAF_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C716DC82_D23E_0C85_41C9_541A30FCADAF"
 },
 {
  "class": "Photo",
  "label": "_SKA4208",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C76D6DB1_D236_0C87_41B2_42BD83F577CF.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C76D6DB1_D236_0C87_41B2_42BD83F577CF_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C76D6DB1_D236_0C87_41B2_42BD83F577CF"
 },
 {
  "class": "Photo",
  "label": "_SKA4701",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C7B01C7B_D236_0C7B_41CB_6AAFC084A9BC.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C7B01C7B_D236_0C7B_41CB_6AAFC084A9BC_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C7B01C7B_D236_0C7B_41CB_6AAFC084A9BC"
 },
 {
  "class": "Photo",
  "label": "_SKA4223",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C6AE09CE_D2D6_149C_41E7_3CD9985B899C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C6AE09CE_D2D6_149C_41E7_3CD9985B899C_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C6AE09CE_D2D6_149C_41E7_3CD9985B899C"
 },
 {
  "class": "Photo",
  "label": "_SKA4220",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C62BC96E_D2DA_359D_41E3_0C6DEC36BDE6.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C62BC96E_D2DA_359D_41E3_0C6DEC36BDE6_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C62BC96E_D2DA_359D_41E3_0C6DEC36BDE6"
 },
 {
  "class": "Photo",
  "label": "_SKA4220",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C712B02D_D2DA_139F_41E9_BAA6D09543B5.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C712B02D_D2DA_139F_41E9_BAA6D09543B5_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C712B02D_D2DA_139F_41E9_BAA6D09543B5"
 },
 {
  "class": "Photo",
  "label": "_SKA4698",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C604BFB3_D2FA_0C8B_41E9_01AC721EA671.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C604BFB3_D2FA_0C8B_41E9_01AC721EA671_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C604BFB3_D2FA_0C8B_41E9_01AC721EA671"
 },
 {
  "class": "Photo",
  "label": "_SKA4697",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C659BCC3_D2EA_0C8A_41E6_695CE1D6405F.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C659BCC3_D2EA_0C8A_41E6_695CE1D6405F_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C659BCC3_D2EA_0C8A_41E6_695CE1D6405F"
 },
 {
  "class": "Photo",
  "label": "_SKA4668",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C6D3D7F0_D2D6_1C85_41E3_8DB202ED1408.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C6D3D7F0_D2D6_1C85_41E3_8DB202ED1408_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C6D3D7F0_D2D6_1C85_41E3_8DB202ED1408"
 },
 {
  "class": "Photo",
  "label": "_SKA4280",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C662CBCD_D22A_149C_411A_8B17AC570058.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C662CBCD_D22A_149C_411A_8B17AC570058_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C662CBCD_D22A_149C_411A_8B17AC570058"
 },
 {
  "class": "Photo",
  "label": "_SKA4338",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C4FDF4F1_D22A_1C87_41E5_B0D613DF86A9.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C4FDF4F1_D22A_1C87_41E5_B0D613DF86A9_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C4FDF4F1_D22A_1C87_41E5_B0D613DF86A9"
 },
 {
  "class": "Photo",
  "label": "_SKA4342",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C5AFD6BC_D22A_1CFE_41E2_C40A5DDEA597.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C5AFD6BC_D22A_1CFE_41E2_C40A5DDEA597_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C5AFD6BC_D22A_1CFE_41E2_C40A5DDEA597"
 },
 {
  "class": "Photo",
  "label": "_SKA4607",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C5EE92B0_D256_7485_41D3_0C0619B121D6.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C5EE92B0_D256_7485_41D3_0C0619B121D6_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C5EE92B0_D256_7485_41D3_0C0619B121D6"
 },
 {
  "class": "Photo",
  "label": "_SKA4408",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C55AEF37_D25A_0D8C_41E2_88F8257BAA5E.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C55AEF37_D25A_0D8C_41E2_88F8257BAA5E_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C55AEF37_D25A_0D8C_41E2_88F8257BAA5E"
 },
 {
  "class": "Photo",
  "label": "_SKA4587",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C5ADC80A_D25E_1385_41E2_E25213660277.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C5ADC80A_D25E_1385_41E2_E25213660277_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C5ADC80A_D25E_1385_41E2_E25213660277"
 },
 {
  "class": "Photo",
  "label": "_SKA4598",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C57BA3FD_D26B_F47F_41C5_383B002C4C9F.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C57BA3FD_D26B_F47F_41C5_383B002C4C9F_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C57BA3FD_D26B_F47F_41C5_383B002C4C9F"
 },
 {
  "class": "Photo",
  "label": "_SKA4367",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_CBAF5DEE_D26A_0C9C_4184_D77D7E154B5C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_CBAF5DEE_D26A_0C9C_4184_D77D7E154B5C_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_CBAF5DEE_D26A_0C9C_4184_D77D7E154B5C"
 },
 {
  "class": "Photo",
  "label": "_SKA4450",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C4A7D18E_D26A_149D_41E3_32911A9ACAB5.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C4A7D18E_D26A_149D_41E3_32911A9ACAB5_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C4A7D18E_D26A_149D_41E3_32911A9ACAB5"
 },
 {
  "class": "Photo",
  "label": "_SKA4560",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_C4112AE5_D26A_348F_41D7_E64054E7F435.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_C4112AE5_D26A_348F_41D7_E64054E7F435_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_C4112AE5_D26A_348F_41D7_E64054E7F435"
 },
 {
  "class": "Photo",
  "label": "_SKA4459",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_CA08427D_D256_147F_41DC_803B4AB00140.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_CA08427D_D256_147F_41DC_803B4AB00140_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_CA08427D_D256_147F_41DC_803B4AB00140"
 },
 {
  "class": "Photo",
  "label": "_SKA4559",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_CBAEE9E0_D25E_1485_41D3_E78DB4775E5D.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_CBAEE9E0_D25E_1485_41D3_E78DB4775E5D_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_CBAEE9E0_D25E_1485_41D3_E78DB4775E5D"
 },
 {
  "class": "Photo",
  "label": "_SKA4208",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D4569397_DCE5_EF02_41DF_E5B574421160.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D4569397_DCE5_EF02_41DF_E5B574421160_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D4569397_DCE5_EF02_41DF_E5B574421160"
 },
 {
  "class": "Photo",
  "label": "_SKA4701",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D5BC2820_DCE7_393F_41B8_2D95C1B86756.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D5BC2820_DCE7_393F_41B8_2D95C1B86756_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D5BC2820_DCE7_393F_41B8_2D95C1B86756"
 },
 {
  "class": "Photo",
  "label": "_SKA4245",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D5E47088_DCE4_E90F_416E_1EE701CADA2A.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D5E47088_DCE4_E90F_416E_1EE701CADA2A_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D5E47088_DCE4_E90F_416E_1EE701CADA2A"
 },
 {
  "class": "Photo",
  "label": "_SKA4223",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D5632FE1_DCE3_7701_41C1_48F387A2F435.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D5632FE1_DCE3_7701_41C1_48F387A2F435_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D5632FE1_DCE3_7701_41C1_48F387A2F435"
 },
 {
  "class": "Photo",
  "label": "_SKA4697",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D5253B47_DCED_3F01_41DE_3213D8A02B8F.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D5253B47_DCED_3F01_41DE_3213D8A02B8F_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D5253B47_DCED_3F01_41DE_3213D8A02B8F"
 },
 {
  "class": "Photo",
  "label": "_SKA4220",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D50F97CA_DCED_7703_41D2_C61FA2D45DC8.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D50F97CA_DCED_7703_41D2_C61FA2D45DC8_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D50F97CA_DCED_7703_41D2_C61FA2D45DC8"
 },
 {
  "class": "Photo",
  "label": "_SKA4280",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D527D37C_DCEF_EF07_41E5_ED8B38AB3530.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D527D37C_DCEF_EF07_41E5_ED8B38AB3530_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D527D37C_DCEF_EF07_41E5_ED8B38AB3530"
 },
 {
  "class": "Photo",
  "label": "_SKA4668",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D6F042C0_DCEF_297F_41D1_4FCDB3DFEDBC.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D6F042C0_DCEF_297F_41D1_4FCDB3DFEDBC_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D6F042C0_DCEF_297F_41D1_4FCDB3DFEDBC"
 },
 {
  "class": "Photo",
  "label": "_SKA4338",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D6063E8F_DCED_1901_41E1_D9F3E2A6E5F1.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D6063E8F_DCED_1901_41E1_D9F3E2A6E5F1_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D6063E8F_DCED_1901_41E1_D9F3E2A6E5F1"
 },
 {
  "class": "Photo",
  "label": "_SKA4408",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D69F22CD_DCE3_2901_41BC_03F3ABBE26EA.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D69F22CD_DCE3_2901_41BC_03F3ABBE26EA_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D69F22CD_DCE3_2901_41BC_03F3ABBE26EA"
 },
 {
  "class": "Photo",
  "label": "_SKA4587",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D624496B_DCE5_3B01_41E3_DA767C147DCD.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D624496B_DCE5_3B01_41E3_DA767C147DCD_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D624496B_DCE5_3B01_41E3_DA767C147DCD"
 },
 {
  "class": "Photo",
  "label": "_SKA4342",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D61E7617_DCE5_2901_41E9_60945158D42A.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D61E7617_DCE5_2901_41E9_60945158D42A_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D61E7617_DCE5_2901_41E9_60945158D42A"
 },
 {
  "class": "Photo",
  "label": "_SKA4367",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D7E11ACA_DCE7_1903_41E3_AEE43BB5A05A.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D7E11ACA_DCE7_1903_41E3_AEE43BB5A05A_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D7E11ACA_DCE7_1903_41E3_AEE43BB5A05A"
 },
 {
  "class": "Photo",
  "label": "_SKA4430",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D7C08740_DCE5_377F_41A4_C22F64FEA18E.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D7C08740_DCE5_377F_41A4_C22F64FEA18E_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D7C08740_DCE5_377F_41A4_C22F64FEA18E"
 },
 {
  "class": "Photo",
  "label": "_SKA4607",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D7A7AF71_DCE5_3701_41C7_6C4B67AF531E.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D7A7AF71_DCE5_3701_41C7_6C4B67AF531E_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D7A7AF71_DCE5_3701_41C7_6C4B67AF531E"
 },
 {
  "class": "Photo",
  "label": "_SKA4560",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D7A1A93B_DCFF_3B01_41B8_3C6661655B1F.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D7A1A93B_DCFF_3B01_41B8_3C6661655B1F_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D7A1A93B_DCFF_3B01_41B8_3C6661655B1F"
 },
 {
  "class": "Photo",
  "label": "_SKA4450",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D77CE520_DCFF_2B3F_41B0_986A3FFCD24A.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D77CE520_DCFF_2B3F_41B0_986A3FFCD24A_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D77CE520_DCFF_2B3F_41B0_986A3FFCD24A"
 },
 {
  "class": "Photo",
  "label": "_SKA4559",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D76D71B5_DCFC_EB01_41DF_BA6EC65BADCF.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D76D71B5_DCFC_EB01_41DF_BA6EC65BADCF_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D76D71B5_DCFC_EB01_41DF_BA6EC65BADCF"
 },
 {
  "class": "Photo",
  "label": "_SKA4459",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_D778FF7B_DCFD_1701_41C6_116B55052722.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_D778FF7B_DCFD_1701_41C6_116B55052722_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_D778FF7B_DCFD_1701_41C6_116B55052722"
 },
 {
  "class": "Photo",
  "label": "_SKA5270",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_EFE7CD8B_E217_FDFD_41D7_BA1CC01CF80A.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_EFE7CD8B_E217_FDFD_41D7_BA1CC01CF80A_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_EFE7CD8B_E217_FDFD_41D7_BA1CC01CF80A"
 },
 {
  "class": "Photo",
  "label": "_SKA5277",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_EF4B398F_E23F_A5F5_41DE_8066E2FD88A6.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_EF4B398F_E23F_A5F5_41DE_8066E2FD88A6_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_EF4B398F_E23F_A5F5_41DE_8066E2FD88A6"
 },
 {
  "class": "Photo",
  "label": "_SKA5284",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_EF12B934_E23E_A52B_41E9_E066C5797254.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_EF12B934_E23E_A52B_41E9_E066C5797254_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_EF12B934_E23E_A52B_41E9_E066C5797254"
 },
 {
  "class": "Photo",
  "label": "_SKA5284",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_EF6CB4BF_E231_A315_41DC_F7DCD81925DA.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_EF6CB4BF_E231_A315_41DC_F7DCD81925DA_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_EF6CB4BF_E231_A315_41DC_F7DCD81925DA"
 },
 {
  "class": "Photo",
  "label": "_SKA5281",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_ECB4F823_E233_E32C_41E0_F1C02C29F66F.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_ECB4F823_E233_E32C_41E0_F1C02C29F66F_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_ECB4F823_E233_E32C_41E0_F1C02C29F66F"
 },
 {
  "class": "Photo",
  "label": "_SKA5277",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_EC7E1EA7_E26E_BF35_41D3_26F431B219F6.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_EC7E1EA7_E26E_BF35_41D3_26F431B219F6_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_EC7E1EA7_E26E_BF35_41D3_26F431B219F6"
 },
 {
  "class": "Photo",
  "label": "_SKA5288",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_EC684DF4_E271_DD2B_41D8_4E0E79014C40.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_EC684DF4_E271_DD2B_41D8_4E0E79014C40_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_EC684DF4_E271_DD2B_41D8_4E0E79014C40"
 },
 {
  "class": "Photo",
  "label": "_SKA5267",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_ECE4D731_E3F2_AD2D_41A7_0BC415400F27.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_ECE4D731_E3F2_AD2D_41A7_0BC415400F27_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_ECE4D731_E3F2_AD2D_41A7_0BC415400F27"
 },
 {
  "class": "Photo",
  "label": "_SKA5167",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_EF6FA2C2_E7D1_5F73_41AE_E6CD5894B3C0.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_EF6FA2C2_E7D1_5F73_41AE_E6CD5894B3C0_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_EF6FA2C2_E7D1_5F73_41AE_E6CD5894B3C0"
 },
 {
  "class": "Photo",
  "label": "_SKA5191",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_EDB43BF8_E7F0_ED1F_41D8_85E91C66D4BC.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_EDB43BF8_E7F0_ED1F_41D8_85E91C66D4BC_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_EDB43BF8_E7F0_ED1F_41D8_85E91C66D4BC"
 },
 {
  "class": "Photo",
  "label": "_SKA5171",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_ED352566_E7D7_2532_41E6_4885AA29F09A.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_ED352566_E7D7_2532_41E6_4885AA29F09A_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_ED352566_E7D7_2532_41E6_4885AA29F09A"
 },
 {
  "class": "Photo",
  "label": "_SKA5192",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_ED4A9187_E7D1_3DF1_41D7_BFCE79373F7F.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_ED4A9187_E7D1_3DF1_41D7_BFCE79373F7F_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_ED4A9187_E7D1_3DF1_41D7_BFCE79373F7F"
 },
 {
  "class": "Photo",
  "label": "IMG_2197",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_FF842624_F2DB_FEFF_41D9_486FD7B1AD81.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_FF842624_F2DB_FEFF_41D9_486FD7B1AD81_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_FF842624_F2DB_FEFF_41D9_486FD7B1AD81"
 },
 {
  "class": "Photo",
  "label": "IMG_2185",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_FC0D1AFF_F2EA_F74A_41EE_1A64DF342DB9.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_FC0D1AFF_F2EA_F74A_41EE_1A64DF342DB9_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_FC0D1AFF_F2EA_F74A_41EE_1A64DF342DB9"
 },
 {
  "class": "Photo",
  "label": "_MG_0745",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_FFC0404B_F60C_DAE3_41D3_60B4AE553F15.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_FFC0404B_F60C_DAE3_41D3_60B4AE553F15_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_FFC0404B_F60C_DAE3_41D3_60B4AE553F15"
 },
 {
  "class": "Photo",
  "label": "_MG_0755",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_FC7AD253_F634_FEE2_4167_6F16AD8ABAD9.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_FC7AD253_F634_FEE2_4167_6F16AD8ABAD9_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_FC7AD253_F634_FEE2_4167_6F16AD8ABAD9"
 },
 {
  "class": "Photo",
  "label": "_SKA5394",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_FC61C200_F63C_5E5E_41E4_AD0B6D91FC2E.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_FC61C200_F63C_5E5E_41E4_AD0B6D91FC2E_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_FC61C200_F63C_5E5E_41E4_AD0B6D91FC2E"
 },
 {
  "class": "Photo",
  "label": "_SKA5398",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_FD2EC9AF_F674_4DA2_41DA_76452EE0F141.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_FD2EC9AF_F674_4DA2_41DA_76452EE0F141_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_FD2EC9AF_F674_4DA2_41DA_76452EE0F141"
 },
 {
  "class": "Photo",
  "label": "_SKA5401",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_FCD2DAC3_F67C_4FE2_41E5_8DA4CE0BBBEF.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_FCD2DAC3_F67C_4FE2_41E5_8DA4CE0BBBEF_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_FCD2DAC3_F67C_4FE2_41E5_8DA4CE0BBBEF"
 },
 {
  "class": "Photo",
  "label": "_SKA5379",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_9648BEA3_9B36_FC8A_41B1_45F483E6E6B9.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_9648BEA3_9B36_FC8A_41B1_45F483E6E6B9_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_9648BEA3_9B36_FC8A_41B1_45F483E6E6B9"
 },
 {
  "class": "Photo",
  "label": "_SKA5394",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_964BE19D_9B33_A4BE_41C0_11FB5C6326F4.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_964BE19D_9B33_A4BE_41C0_11FB5C6326F4_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_964BE19D_9B33_A4BE_41C0_11FB5C6326F4"
 },
 {
  "class": "Photo",
  "label": "_SKA5398",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_963D814E_9B3E_E59A_41D4_10EC6B2F85D2.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_963D814E_9B3E_E59A_41D4_10EC6B2F85D2_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_963D814E_9B3E_E59A_41D4_10EC6B2F85D2"
 },
 {
  "class": "Photo",
  "label": "_SKA5401",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_952BFA5D_9B11_67BE_41D5_7E54A1E48C9F.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_952BFA5D_9B11_67BE_41D5_7E54A1E48C9F_t.jpg",
  "width": 1440,
  "height": 1080,
  "id": "photo_952BFA5D_9B11_67BE_41D5_7E54A1E48C9F"
 },
 {
  "class": "Photo",
  "label": "IMG_1470",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_2BBCF695_252D_2351_4197_77B506652417.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_2BBCF695_252D_2351_4197_77B506652417_t.jpg",
  "width": 5184,
  "height": 3456,
  "id": "photo_2BBCF695_252D_2351_4197_77B506652417"
 },
 {
  "class": "Photo",
  "label": "IMG_1470",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_2636350C_2992_44BB_4197_4E9085020BE6.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_2636350C_2992_44BB_4197_4E9085020BE6_t.jpg",
  "width": 5184,
  "height": 3456,
  "id": "photo_2636350C_2992_44BB_4197_4E9085020BE6"
 },
 {
  "class": "Photo",
  "label": "IMG_1583",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_51DF12D5_4F0A_6C97_41B8_80EBA2C7C7FB.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_51DF12D5_4F0A_6C97_41B8_80EBA2C7C7FB_t.jpg",
  "width": 3456,
  "height": 5184,
  "id": "photo_51DF12D5_4F0A_6C97_41B8_80EBA2C7C7FB"
 },
 {
  "class": "Photo",
  "label": "IMG_1488",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_469EFAB7_521D_9D73_41B3_DE82ED8EDA8B.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_469EFAB7_521D_9D73_41B3_DE82ED8EDA8B_t.jpg",
  "width": 5184,
  "height": 3456,
  "id": "photo_469EFAB7_521D_9D73_41B3_DE82ED8EDA8B"
 },
 {
  "class": "Photo",
  "label": "IMG_1492",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_47BCA433_521C_950C_41C8_3142366D8E8A.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_47BCA433_521C_950C_41C8_3142366D8E8A_t.jpg",
  "width": 5184,
  "height": 3456,
  "id": "photo_47BCA433_521C_950C_41C8_3142366D8E8A"
 },
 {
  "class": "Photo",
  "label": "IMG_8331",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_40D3DB1F_5223_9333_41B2_01CE07C158D9.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_40D3DB1F_5223_9333_41B2_01CE07C158D9_t.jpg",
  "width": 4864,
  "height": 3648,
  "id": "photo_40D3DB1F_5223_9333_41B2_01CE07C158D9"
 },
 {
  "class": "Photo",
  "label": "INROOTZ SKETCH (1)",
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_0264FDE9_11E7_E285_41A1_8F488274425E.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_0264FDE9_11E7_E285_41A1_8F488274425E_t.jpg",
  "width": 3000,
  "height": 3000,
  "id": "photo_0264FDE9_11E7_E285_41A1_8F488274425E"
 }
], "children": [
 {
  "borderSize": 0,
  "toolTipBackgroundColor": "#000000",
  "progressBarBorderSize": 0,
  "toolTipOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "top": 0,
  "transitionMode": "blending",
  "bottom": "0%",
  "paddingLeft": 0,
  "progressBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingTop": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowColor": "#333333",
  "playbackBarHeadOpacity": 1,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowBlurRadius": 0,
  "toolTipBorderSize": 1,
  "toolTipPaddingLeft": 0,
  "shadow": false,
  "progressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "toolTipFontFamily": "Verdana",
  "playbackBarBorderColor": "#FFFFFF",
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowOpacity": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "id": "MainViewer",
  "progressBorderColor": "#000000",
  "paddingRight": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontSize": 13,
  "playbackBarHeadBorderSize": 0,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "progressOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "minWidth": 100,
  "class": "ViewerArea",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingRight": 0,
  "toolTipBorderRadius": 3,
  "minHeight": 50,
  "playbackBarHeadWidth": 6,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "left": 0,
  "playbackBarProgressBorderSize": 0,
  "right": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 0,
  "playbackBarOpacity": 1,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "progressBarOpacity": 1,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontWeight": "normal",
  "progressBarBorderRadius": 0,
  "progressBottom": 0,
  "progressHeight": 10
 },
 {
  "maxHeight": 55,
  "borderSize": 0,
  "iconURL": "skin/IconButton_B19095FA_BEBC_46FA_41D0_9364C93FEE2A.png",
  "top": "10.08%",
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "transparencyActive": true,
  "minWidth": 1,
  "paddingBottom": 0,
  "mode": "push",
  "class": "IconButton",
  "minHeight": 1,
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "shadow": false,
  "right": "1.88%",
  "cursor": "hand",
  "borderRadius": 0,
  "maxWidth": 55,
  "click": "this.setComponentVisibility(this.IconButton_B19095FA_BEBC_46FA_41D0_9364C93FEE2A, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_B1C52F07_BEBC_C309_41E7_06BAE5296FE3, true, 0, null, null, false)",
  "width": 45,
  "height": 45,
  "id": "IconButton_B19095FA_BEBC_46FA_41D0_9364C93FEE2A",
  "paddingRight": 0
 },
 {
  "maxHeight": 55,
  "borderSize": 0,
  "iconURL": "skin/IconButton_B1C52F07_BEBC_C309_41E7_06BAE5296FE3.png",
  "top": "10.2%",
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "transparencyActive": true,
  "minWidth": 1,
  "paddingBottom": 0,
  "mode": "push",
  "class": "IconButton",
  "minHeight": 1,
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "shadow": false,
  "right": "1.88%",
  "cursor": "hand",
  "borderRadius": 0,
  "maxWidth": 55,
  "click": "this.setComponentVisibility(this.IconButton_B19095FA_BEBC_46FA_41D0_9364C93FEE2A, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_B1C52F07_BEBC_C309_41E7_06BAE5296FE3, false, 0, null, null, false)",
  "width": 45,
  "height": 45,
  "id": "IconButton_B1C52F07_BEBC_C309_41E7_06BAE5296FE3",
  "paddingRight": 0,
  "visible": false
 },
 {
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "top": "0%",
  "paddingLeft": 0,
  "layout": "absolute",
  "verticalAlign": "top",
  "contentOpaque": false,
  "overflow": "scroll",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "gap": 10,
  "width": "100%",
  "height": "100%",
  "id": "Container_CB7598DA_C78D_4338_41E7_F415F33F96F2",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "top": "0%",
    "paddingLeft": 10,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:21px;font-family:Verdana, Geneva, sans-serif;\"><B>ORCHID SUITE</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:Verdana, Geneva, sans-serif;\">These large and spacious (530 sqft) suites have been designed to pamper you and make your vacation a grand affair.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:Verdana, Geneva, sans-serif;\">\u2022 530 sqft of living space with Pergo wooden flooring</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:Verdana, Geneva, sans-serif;\">\u2022 City view</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:Verdana, Geneva, sans-serif;\">\u2022 10\u201d mattresses with poly fill or cotton pillow</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:Verdana, Geneva, sans-serif;\">\u2022 4 fixture bathroom</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:Verdana, Geneva, sans-serif;\">\u2022 Complimentary Wi-Fi &amp; Buffet Breakfast</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "minWidth": 1,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "borderRadius": 0,
    "width": "100%",
    "height": "100%",
    "id": "HTMLText_637C00D7_6C6F_3F31_41DA_5C29362F709D",
    "paddingRight": 10,
    "scrollBarWidth": 10
   },
   {
    "borderSize": 0,
    "width": "21.088%",
    "textShadowColor": "#000000",
    "fontSize": 14,
    "bottom": "-0.1%",
    "paddingLeft": 0,
    "fontStyle": "italic",
    "verticalAlign": "middle",
    "textShadowBlurRadius": 3,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "bold",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": 1,
    "right": "0%",
    "text": "X Close",
    "textShadowVerticalLength": 1,
    "borderRadius": 0,
    "click": "this.setComponentVisibility(this.Container_7C1D1074_6C6C_DFF7_41BD_23722DE3691D, false, 0, this.effect_8EBCE557_9B90_1BA2_41D8_5C444925CE59, 'hideEffect', false)",
    "textDecoration": "none",
    "height": "10.938%",
    "id": "Label_7D187925_6CAD_6111_41D2_D021A9C2594E",
    "paddingRight": 0,
    "fontFamily": "Arial"
   }
  ],
  "backgroundColorRatios": [
   0.38
  ],
  "top": "20%",
  "paddingLeft": 0,
  "layout": "absolute",
  "verticalAlign": "top",
  "contentOpaque": false,
  "overflow": "scroll",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.7,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "right": "30%",
  "borderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "gap": 10,
  "width": "40%",
  "height": "46%",
  "id": "Container_7C1D1074_6C6C_DFF7_41BD_23722DE3691D",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 13,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": 1,
    "left": "0%",
    "text": "ORCHID SUITE",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_7AF36AE6_70C0_0C2B_41D3_57978F153B82",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.59,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_613A7B17_6D0A_842F_41D4_43A05A9A895F",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 13,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "left": "0%",
    "text": "LOBBY",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_7DC34E5F_70C0_0419_41D7_B6C44D36D2B7",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.6,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_7C2ADAA2_70C0_0C2B_41AC_664F67C04AD4",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 13,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "left": "0%",
    "text": "JEFF'S",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_7EE8EE29_70C0_0439_41D3_F5170953B9E5",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.59,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_7D1C43A3_70C0_1C29_41C3_6FD83195B935",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "99.242%",
    "textShadowColor": "#000000",
    "fontSize": 13,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "fontWeight": "normal",
    "textShadowOpacity": 0.73,
    "class": "Label",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "text": "LIME LIGHT",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_7D171430_70C0_0427_41D1_6F06A6FCFF23",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.6,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "horizontal",
  "contentOpaque": false,
  "verticalAlign": "middle",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_7D7D7D13_70C0_05E9_41C8_EE87696FA174",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 13,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "left": "0%",
    "text": "TIGER TRAIL",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_7F8218E1_70C0_0C29_41AB_2E560FD73C38",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.6,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_7FC82C41_70C0_0469_41CD_1BE2EF3E56B4",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 11,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "left": "0%",
    "text": "ROYAL SUITE  ROOM",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_60A29430_70C0_0427_41D5_CB5F36A82252",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.6,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_60EB8BC1_70C0_0C69_4181_A6FB7D538D36",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 13,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "left": "0%",
    "text": "DELUXE ROOM",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_7F57E0A8_70C0_7C27_418C_6B213804C602",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.6,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_7F9EED49_70C0_0479_41D2_F30056ABBBA4",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 13,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "left": "0%",
    "text": "ONE BED ROOM SUITE",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_7F40F9D8_70C0_0C67_41DC_1D04732578A7",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.6,
   0.95
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_7F91195A_70C0_0C1B_4194_F53A932B7028",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 13,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "left": "0%",
    "text": "ROYAL CLUB ROOM",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_7FA664FF_70C0_0419_41C2_8831343A3703",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.6,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_7FEEBD91_70C0_04E8_41C3_509CB6EF3FD8",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 13,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "left": "0%",
    "text": "LUXURY ROOM",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_7EFD0D9A_70C0_041B_41CE_A4A93F07553C",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.59,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_7D38866C_70C0_043F_41DA_0E79B574D9C3",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 13,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "left": "0%",
    "text": "POOL SIDE",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_7E0783FA_70C0_FC1B_41D5_ED4CF4A1AFE1",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.59,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_7E218512_70C0_05EB_41CD_EAC9E2F1ABFD",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "bottom": "-0.36%",
    "paddingLeft": 10,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:28px;\"><B>DELUXE ROOM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">These opulent and spacious Deluxe Rooms (300 sqft) overlooking the serene golf course are fully equipped with all modern amenities to make one\u2019s stay a memorable one. This category offers a choice of twin or queen-size beds.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 300 sqft of living space with Pergo wooden flooring</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 City view &amp; Golf course view</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 7\u201d mattresses with poly fill or cotton pillow</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 Choice of rooms with bathtub or Shower cubicles</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 Complimentary Wi-Fi &amp; Buffet Breakfast</SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "borderRadius": 0,
    "width": "100%",
    "height": "100.362%",
    "id": "HTMLText_6343767B_70C0_0419_41D4_8EB487A0A63B",
    "paddingRight": 10,
    "scrollBarWidth": 10
   },
   {
    "borderSize": 0,
    "width": "22.676%",
    "textShadowColor": "#000000",
    "fontSize": 14,
    "bottom": "0%",
    "paddingLeft": 0,
    "fontStyle": "italic",
    "verticalAlign": "middle",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "bold",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "right": "0%",
    "text": "X Close",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "click": "this.setComponentVisibility(this.Container_630714BF_70C0_0419_41C4_BBE2D0697E56, false, 0, this.effect_8D478AF7_9B90_0E63_41CA_52811D5B71E9, 'hideEffect', false)",
    "textDecoration": "none",
    "height": "10.87%",
    "id": "Label_62DCE27F_70C0_7C19_4190_5B427EEB9618",
    "paddingRight": 0,
    "fontFamily": "Arial"
   }
  ],
  "backgroundColorRatios": [
   0
  ],
  "top": "20%",
  "paddingLeft": 0,
  "layout": "absolute",
  "verticalAlign": "top",
  "contentOpaque": false,
  "overflow": "hidden",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.7,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "right": "30%",
  "borderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "gap": 10,
  "width": "40%",
  "height": "46%",
  "id": "Container_630714BF_70C0_0419_41C4_BBE2D0697E56",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "top": "0%",
    "paddingLeft": 10,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:28px;\"><B>ROYAL CLUB ROOM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">Our plush and well-appointed Royal Club Rooms (330 sqft) are equipped with enhanced modern amenities and facilities to make your trip an extravagant yet digital affair by integrating one\u2019s devices to the room\u2019s electronic amenities in a smooth transition.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 330 sqft of living space with Pergo wooden flooring</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 City view</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 10\u201d mattresses with poly fill or cotton pillow</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 4 fixture bathroom</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 Complimentary Wi-Fi &amp; Buffet Breakfast</SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "borderRadius": 0,
    "width": "100%",
    "height": "100%",
    "id": "HTMLText_624B6703_70C0_05E9_41D0_22DB8DA24B7A",
    "paddingRight": 10,
    "scrollBarWidth": 10
   },
   {
    "borderSize": 0,
    "width": "22.831%",
    "textShadowColor": "#000000",
    "fontSize": 14,
    "bottom": "0%",
    "paddingLeft": 0,
    "fontStyle": "italic",
    "verticalAlign": "middle",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "bold",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "right": "0%",
    "text": "X Close",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "click": "this.setComponentVisibility(this.Container_632F8DE0_70C0_0427_41D7_D8435BFBE2C9, false, 0, this.effect_EFBFA861_E332_2C09_41D0_965C769F595E, 'hideEffect', false)",
    "textDecoration": "none",
    "height": "10.87%",
    "id": "Label_6350EF61_70C0_0429_41D4_26F7CC1816AF",
    "paddingRight": 0,
    "fontFamily": "Arial"
   }
  ],
  "backgroundColorRatios": [
   0
  ],
  "top": "20%",
  "paddingLeft": 0,
  "layout": "absolute",
  "verticalAlign": "top",
  "contentOpaque": false,
  "overflow": "scroll",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.7,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "right": "30%",
  "borderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "gap": 10,
  "width": "40%",
  "height": "46%",
  "id": "Container_632F8DE0_70C0_0427_41D7_D8435BFBE2C9",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "top": "0%",
    "paddingLeft": 10,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:28px;\"><B>ONE BED ROOM SUITE</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">Our luxurious One-Bedroom Service Apartment (625 sqft) offers a magnificent view of the garden and golf course along with a separate living &amp; bed room, a well-equipped kitchenette and large storage spaces. It is ideal for extended stays offering premium modern amenities.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 625 sqft of living space with Pergo wooden flooring</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 Separate Living room, Bedroom area &amp; Kitchenette</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 City view &amp; Golf course view</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 7\u201d mattresses with poly fill or cotton pillow</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 Bathrooms with bathtub and Head shower</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 Complimentary Wi-Fi &amp; Buffet Breakfast</SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "borderRadius": 0,
    "width": "100%",
    "height": "100%",
    "id": "HTMLText_65B45BC9_70C0_0C79_41DB_6FC0D9B37787",
    "paddingRight": 10,
    "scrollBarWidth": 10
   },
   {
    "borderSize": 0,
    "width": "22.831%",
    "textShadowColor": "#000000",
    "fontSize": 14,
    "bottom": "0%",
    "paddingLeft": 0,
    "fontStyle": "italic",
    "verticalAlign": "middle",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "bold",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "right": "0%",
    "text": "X Close",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "click": "this.setComponentVisibility(this.Container_629CB49A_70C0_041B_41D6_A3E54851A12E, false, 0, this.effect_EF08D8BF_E332_6C7A_41EC_60DB0B2D8B6C, 'hideEffect', false)",
    "textDecoration": "none",
    "height": "10.87%",
    "id": "Label_620CCCDE_70C0_041B_41B8_AC7450035C21",
    "paddingRight": 0,
    "fontFamily": "Arial"
   }
  ],
  "backgroundColorRatios": [
   0
  ],
  "top": "20%",
  "paddingLeft": 0,
  "layout": "absolute",
  "verticalAlign": "top",
  "contentOpaque": false,
  "overflow": "scroll",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.7,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "right": "30%",
  "borderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "gap": 10,
  "width": "40%",
  "height": "46%",
  "id": "Container_629CB49A_70C0_041B_41D6_A3E54851A12E",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "top": "0%",
    "paddingLeft": 10,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:28px;\"><B>ROYAL SUITE</B></SPAN><SPAN STYLE=\"font-size:28px;\"><B> </B></SPAN><SPAN STYLE=\"color:#ffffff;font-size:28px;\"><B>ROOM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">Our spacious and luxurious Royal Suites (596 sqft) that overlooks the serene golf course are epitome of luxury and comfort. These premium suites are equipped with a classy master bedroom.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 596 sqft of living space with Pergo wooden flooring</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 Separate Living room, Bedroom area &amp; Kitchenette</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 Golf course view</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 7\u201d mattresses with poly fill or cotton pillow</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 4 fixture bathrooms</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">\u2022 Complimentary Wi-Fi &amp; Buffet Breakfast</SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "left": "-0.09%",
    "borderRadius": 0,
    "width": "100.011%",
    "height": "100%",
    "id": "HTMLText_65603A88_70C0_0CE7_41C2_360E041C169C",
    "paddingRight": 10,
    "scrollBarWidth": 10
   },
   {
    "borderSize": 0,
    "width": "22.779%",
    "textShadowColor": "#000000",
    "fontSize": 14,
    "bottom": "0.36%",
    "paddingLeft": 0,
    "fontStyle": "italic",
    "verticalAlign": "middle",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "bold",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "right": "0%",
    "text": "X Close",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "click": "this.setComponentVisibility(this.Container_629D0A7B_70C0_0C19_41D1_4679706BEF4B, false, 0, this.effect_8D1B689E_9B90_0AA2_41C2_A26D77F96778, 'hideEffect', false)",
    "textDecoration": "none",
    "height": "10.87%",
    "id": "Label_62ADC25E_70C0_1C1B_41A2_999EACD89B78",
    "paddingRight": 0,
    "fontFamily": "Arial"
   }
  ],
  "backgroundColorRatios": [
   0
  ],
  "top": "20%",
  "paddingLeft": 0,
  "layout": "absolute",
  "verticalAlign": "top",
  "contentOpaque": false,
  "overflow": "hidden",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.7,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "right": "30%",
  "left": "29.98%",
  "backgroundColor": [
   "#000000"
  ],
  "gap": 10,
  "borderRadius": 0,
  "height": "46%",
  "id": "Container_629D0A7B_70C0_0C19_41D1_4679706BEF4B",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "top": "0%",
    "paddingLeft": 10,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:28px;\"><B>Jeff\u2019s</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">Our English Jeff\u2019s, awarded and recognized as best bar in Bangalore with its wooden interiors offers a remarkable atmosphere for you to unwind. It is known for its finely blended spirits. </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Timings: Weekdays 5:00pm-11:00pm/Weekends 12:00pm-11:00pm</SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"> </SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Cuisine: Continental + Bar </SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "borderRadius": 0,
    "width": "100%",
    "height": "100%",
    "id": "HTMLText_622F7047_70C0_1C69_41D8_5493C1BC5CED",
    "paddingRight": 10,
    "scrollBarWidth": 10
   },
   {
    "borderSize": 0,
    "width": "22.831%",
    "textShadowColor": "#000000",
    "fontSize": 14,
    "bottom": "0%",
    "paddingLeft": 0,
    "fontStyle": "italic",
    "verticalAlign": "middle",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "bold",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "right": "0%",
    "text": "X Close",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "click": "this.setComponentVisibility(this.Container_658DB848_70C0_0C67_41C1_11D552CCF881, false, 0, this.effect_8D655D26_9B90_0BE5_41B2_64C71A4590B8, 'hideEffect', false)",
    "textDecoration": "none",
    "height": "10.87%",
    "id": "Label_663104EF_7340_0439_4198_5C8918EEC9E1",
    "paddingRight": 0,
    "fontFamily": "Arial"
   }
  ],
  "backgroundColorRatios": [
   0
  ],
  "top": "20%",
  "paddingLeft": 0,
  "layout": "absolute",
  "verticalAlign": "top",
  "contentOpaque": false,
  "overflow": "scroll",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.7,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "right": "30%",
  "borderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "gap": 10,
  "width": "40%",
  "height": "46%",
  "id": "Container_658DB848_70C0_0C67_41C1_11D552CCF881",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "top": "0%",
    "paddingLeft": 10,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:28px;\"><B>TIGER TRAIL</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">Our Indian cuisine restaurant, Tiger Trail offers an inspiring culinary journey, serving the most sumptuous traditional awadhi cuisines in a Gazeebo. It serves sizzling Kebabs and Grills from the live kitchen and and is open for Lunch and Dinner. We also organize candle light dinners for special occasions.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">Timings: 11:30am -11:30pm </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">Cuisine: Multi Cusine </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "minWidth": 1,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "left": "-0.09%",
    "borderRadius": 0,
    "width": "100.011%",
    "height": "100%",
    "id": "HTMLText_6484E312_7340_7DEB_41BE_E22CA2A1D140",
    "paddingRight": 10,
    "scrollBarWidth": 10
   },
   {
    "borderSize": 0,
    "width": "22.779%",
    "textShadowColor": "#000000",
    "fontSize": 14,
    "bottom": "0%",
    "paddingLeft": 0,
    "fontStyle": "italic",
    "verticalAlign": "middle",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "bold",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "right": "0%",
    "text": "X Close",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "click": "this.setComponentVisibility(this.Container_66EDDBB1_7340_0C29_41D4_173FF344E0CC, false, 0, this.effect_8EB6D9D8_9A70_0AAD_41E0_00A4553960A5, 'hideEffect', false)",
    "textDecoration": "none",
    "height": "10.87%",
    "id": "Label_64461D77_7340_0429_41D9_683D30797BAB",
    "paddingRight": 0,
    "fontFamily": "Arial"
   },
   {
    "url": "skin/Image_0BC61DE2_13E1_2287_4152_AD43EE57F719.png",
    "maxHeight": 815,
    "borderSize": 0,
    "bottom": "1.48%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "minWidth": 1,
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "right": "30.98%",
    "borderRadius": 0,
    "maxWidth": 1471,
    "width": "37.393%",
    "height": "28.783%",
    "id": "Image_0BC61DE2_13E1_2287_4152_AD43EE57F719",
    "paddingRight": 0
   }
  ],
  "backgroundColorRatios": [
   0
  ],
  "top": "20%",
  "paddingLeft": 0,
  "layout": "absolute",
  "verticalAlign": "middle",
  "contentOpaque": false,
  "overflow": "hidden",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.7,
  "scrollBarMargin": 2,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "right": "30%",
  "left": "29.98%",
  "backgroundColor": [
   "#000000"
  ],
  "gap": 10,
  "borderRadius": 0,
  "height": "46%",
  "id": "Container_66EDDBB1_7340_0C29_41D4_173FF344E0CC",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "top": "0%",
    "paddingLeft": 10,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:28px;\"><B>LIME LIGHT</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">Limelight, our trendy chic coffee shop is an all-day dining destination which remains open round-the-clock with option of seating both indoor and alfresco. We serves Indian, Chinese and Continental cuisines. Our Signature Thin Crust Wood Fired Pizzas is a crowd favorite.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">Timings: 07:00-10:00am/12:30-3:30pm/07:30-11:30pm </SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Verdana, Geneva, sans-serif;\">Cuisine: Multi-cuisine </SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "borderRadius": 0,
    "width": "100%",
    "height": "100%",
    "id": "HTMLText_642F7A2F_7340_0C39_41C6_4409815A36BE",
    "paddingRight": 10,
    "scrollBarWidth": 10
   },
   {
    "borderSize": 0,
    "width": "22.831%",
    "textShadowColor": "#000000",
    "fontSize": 14,
    "bottom": "0%",
    "paddingLeft": 0,
    "fontStyle": "italic",
    "verticalAlign": "middle",
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.73,
    "class": "Label",
    "fontWeight": "bold",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": -1,
    "right": "0%",
    "text": "X Close",
    "textShadowVerticalLength": 0,
    "borderRadius": 0,
    "click": "this.setComponentVisibility(this.Container_65B08C58_7340_0467_4190_CE04DA75D4D8, false, 0, this.effect_8D4C6E94_9A70_06A6_41CF_02B6F808C890, 'hideEffect', false)",
    "textDecoration": "none",
    "height": "10.87%",
    "id": "Label_6407975F_7340_0419_41D4_A38B5FBE837B",
    "paddingRight": 0,
    "fontFamily": "Arial"
   }
  ],
  "backgroundColorRatios": [
   0
  ],
  "top": "20%",
  "paddingLeft": 0,
  "layout": "absolute",
  "verticalAlign": "top",
  "contentOpaque": false,
  "overflow": "scroll",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.7,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "right": "30%",
  "borderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "gap": 10,
  "width": "40%",
  "height": "46%",
  "id": "Container_65B08C58_7340_0467_4190_CE04DA75D4D8",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.229753129285!2d77.64182831437509!3d12.957144990865375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13e8514f3b61%3A0x3f03ae46d85ca1a6!2sHotel+Royal+Orchid!5e0!3m2!1sen!2sin!4v1510038776230",
    "borderSize": 0,
    "backgroundColorRatios": [
     0
    ],
    "top": "0%",
    "insetBorder": false,
    "paddingLeft": 0,
    "minWidth": 1,
    "paddingBottom": 0,
    "class": "WebFrame",
    "minHeight": 1,
    "scrollEnabled": true,
    "backgroundOpacity": 1,
    "paddingTop": 0,
    "shadow": false,
    "backgroundColorDirection": "vertical",
    "right": "0%",
    "borderRadius": 0,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "width": "99.682%",
    "height": "100%",
    "id": "WebFrame_8597AF52_9528_ED66_41AD_23145CFD0C7A",
    "paddingRight": 0
   }
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "bottom": "10.5%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "23.631%",
  "height": "48.833%",
  "id": "Container_84205F78_9528_2D22_41D8_D318FDA195A5",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "maxHeight": 1000,
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "maxHeight": 200,
    "fontSize": 17,
    "backgroundColorRatios": [
     0.49
    ],
    "gap": 0,
    "fontFamily": "Georgia",
    "height": "100%",
    "arrowColor": "#FFFFFF",
    "popUpShadow": false,
    "popUpBackgroundOpacity": 0.5,
    "paddingLeft": 5,
    "fontStyle": "normal",
    "popUpShadowSpread": 1,
    "arrowBeforeLabel": false,
    "minWidth": 0,
    "paddingBottom": 0,
    "popUpFontColor": "#FFFFFF",
    "class": "DropDown",
    "playList": "this.DropDown_95B75FED_9A90_0666_41E0_E5F9F0F7F94A_playlist",
    "fontWeight": "normal",
    "minHeight": 0,
    "popUpShadowBlurRadius": 10,
    "backgroundOpacity": 0.5,
    "paddingTop": 0,
    "rollOverArrowColor": "#000000",
    "shadow": false,
    "selectedPopUpFontColor": "#000000",
    "rollOverPopUpBackgroundColor": "#660066",
    "backgroundColorDirection": "vertical",
    "popUpShadowColor": "#000000",
    "fontColor": "#FFFFFF",
    "borderRadius": 0,
    "backgroundColor": [
     "#660066"
    ],
    "prompt": "ROOMS",
    "maxWidth": 200,
    "popUpBackgroundColor": "#666666",
    "width": 106,
    "rollOverPopUpFontColor": "#000000",
    "id": "DropDown_95B75FED_9A90_0666_41E0_E5F9F0F7F94A",
    "selectedPopUpBackgroundColor": "#FFFFFF",
    "textDecoration": "none",
    "popUpBorderRadius": 10,
    "paddingRight": 5,
    "popUpShadowOpacity": 1
   },
   {
    "borderSize": 0,
    "maxHeight": 200,
    "fontSize": 17,
    "backgroundColorRatios": [
     0.49
    ],
    "gap": 0,
    "fontFamily": "Georgia",
    "height": "100%",
    "arrowColor": "#FFFFFF",
    "popUpShadow": false,
    "popUpBackgroundOpacity": 0.5,
    "paddingLeft": 5,
    "fontStyle": "normal",
    "popUpShadowSpread": 1,
    "rollOverBackgroundColorRatios": [
     0.09
    ],
    "arrowBeforeLabel": false,
    "minWidth": 0,
    "paddingBottom": 0,
    "rollOverBackgroundColor": [
     "#660066"
    ],
    "popUpFontColor": "#FFFFFF",
    "class": "DropDown",
    "playList": "this.DropDown_959BFC4A_9AB0_09AD_41D9_CBF53C05989E_playlist",
    "fontWeight": "normal",
    "minHeight": 0,
    "popUpShadowBlurRadius": 10,
    "backgroundOpacity": 0.5,
    "paddingTop": 0,
    "rollOverArrowColor": "#000000",
    "shadow": false,
    "selectedPopUpFontColor": "#000000",
    "rollOverPopUpBackgroundColor": "#660066",
    "backgroundColorDirection": "vertical",
    "popUpShadowColor": "#000000",
    "fontColor": "#FFFFFF",
    "borderRadius": 0,
    "backgroundColor": [
     "#660066"
    ],
    "prompt": "SUITES",
    "maxWidth": 200,
    "popUpBackgroundColor": "#666666",
    "width": 103,
    "rollOverPopUpFontColor": "#000000",
    "id": "DropDown_959BFC4A_9AB0_09AD_41D9_CBF53C05989E",
    "selectedPopUpBackgroundColor": "#FFFFFF",
    "textDecoration": "none",
    "popUpBorderRadius": 10,
    "paddingRight": 5,
    "popUpShadowOpacity": 1
   },
   {
    "borderSize": 0,
    "maxHeight": 200,
    "fontSize": 17,
    "backgroundColorRatios": [
     0.32
    ],
    "gap": 0,
    "fontFamily": "Georgia",
    "height": "100%",
    "arrowColor": "#FFFFFF",
    "popUpShadow": false,
    "popUpBackgroundOpacity": 0.5,
    "paddingLeft": 5,
    "fontStyle": "normal",
    "popUpShadowSpread": 1,
    "arrowBeforeLabel": false,
    "minWidth": 0,
    "paddingBottom": 0,
    "popUpFontColor": "#FFFFFF",
    "class": "DropDown",
    "playList": "this.DropDown_1A8FC29D_10A8_20B6_41A9_64238A9CD814_playlist",
    "fontWeight": "normal",
    "minHeight": 0,
    "popUpShadowBlurRadius": 6,
    "backgroundOpacity": 0.5,
    "paddingTop": 0,
    "rollOverArrowColor": "#000000",
    "shadow": false,
    "selectedPopUpFontColor": "#000000",
    "rollOverPopUpBackgroundColor": "#660066",
    "backgroundColorDirection": "vertical",
    "popUpShadowColor": "#000000",
    "fontColor": "#FFFFFF",
    "borderRadius": 0,
    "backgroundColor": [
     "#660066"
    ],
    "prompt": "RESTAURANT",
    "maxWidth": 220,
    "popUpBackgroundColor": "#666666",
    "width": 160,
    "rollOverPopUpFontColor": "#000000",
    "id": "DropDown_1A8FC29D_10A8_20B6_41A9_64238A9CD814",
    "selectedPopUpBackgroundColor": "#FFFFFF",
    "textDecoration": "none",
    "popUpBorderRadius": 10,
    "paddingRight": 5,
    "popUpShadowOpacity": 0
   },
   {
    "borderSize": 0,
    "maxHeight": 200,
    "fontSize": 17,
    "backgroundColorRatios": [
     0.26
    ],
    "gap": 0,
    "fontFamily": "Georgia",
    "height": "100%",
    "arrowColor": "#FFFFFF",
    "popUpShadow": false,
    "popUpBackgroundOpacity": 0.5,
    "paddingLeft": 5,
    "fontStyle": "normal",
    "popUpShadowSpread": 1,
    "rollOverBackgroundColorRatios": [],
    "arrowBeforeLabel": false,
    "minWidth": 0,
    "paddingBottom": 0,
    "rollOverBackgroundColor": [
     "#660066"
    ],
    "popUpFontColor": "#FFFFFF",
    "class": "DropDown",
    "playList": "this.DropDown_97F8A1EE_9A90_1A65_41DC_EBAEDDBFC28F_playlist",
    "fontWeight": "normal",
    "minHeight": 0,
    "pressedArrowColor": "#FFFFFF",
    "popUpShadowBlurRadius": 10,
    "backgroundOpacity": 0.5,
    "paddingTop": 0,
    "rollOverArrowColor": "#000000",
    "shadow": false,
    "selectedPopUpFontColor": "#000000",
    "rollOverPopUpBackgroundColor": "#660066",
    "backgroundColorDirection": "vertical",
    "popUpShadowColor": "#000000",
    "fontColor": "#FFFFFF",
    "borderRadius": 0,
    "backgroundColor": [
     "#660066"
    ],
    "prompt": "MEETINGS & EVENTS",
    "maxWidth": 300,
    "popUpBackgroundColor": "#666666",
    "width": 220,
    "rollOverPopUpFontColor": "#000000",
    "id": "DropDown_97F8A1EE_9A90_1A65_41DC_EBAEDDBFC28F",
    "selectedPopUpBackgroundColor": "#FFFFFF",
    "textDecoration": "none",
    "popUpBorderRadius": 10,
    "paddingRight": 5,
    "popUpShadowOpacity": 1
   }
  ],
  "backgroundColorRatios": [],
  "top": "4.95%",
  "paddingLeft": 0,
  "layout": "horizontal",
  "verticalAlign": "middle",
  "contentOpaque": false,
  "overflow": "scroll",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "horizontalAlign": "right",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "right": "8.03%",
  "backgroundColor": [],
  "maxWidth": 2000,
  "width": "76%",
  "borderRadius": 0,
  "height": "3.838%",
  "id": "Container_91FDCEFE_9A70_0665_41E2_52CD9E04EDA8",
  "gap": 2,
  "paddingRight": 0,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 14,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 3,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.7,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": 1,
    "left": "0%",
    "text": "MAIN  GATE",
    "textShadowVerticalLength": 1,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_DDD03F64_CE7A_1F1D_41E8_378C92855C8E",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.57,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.59,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_DCC025A0_CE66_0316_41E4_AFBA27E1921D",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "url": "skin/Image_61AAF447_7140_0469_41AD_8096D6B65B91.png",
    "maxHeight": 50,
    "borderSize": 0,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "minWidth": 1,
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "cursor": "hand",
    "borderRadius": 0,
    "maxWidth": 50,
    "click": "var newWindow = window.open(\"https://www.facebook.com/RoyalOrchidHotels/\", \"_blank\"); newWindow.focus()",
    "width": "20.71%",
    "height": "74.286%",
    "id": "Image_61AAF447_7140_0469_41AD_8096D6B65B91",
    "paddingRight": 0
   },
   {
    "url": "skin/Image_614F61DE_7140_1C1B_41D6_FBFB8CF3E8A5.png",
    "maxHeight": 50,
    "borderSize": 0,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "minWidth": 1,
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "cursor": "hand",
    "borderRadius": 0,
    "maxWidth": 50,
    "click": "var newWindow = window.open(\"https://twitter.com/Royal_Orchid\", \"_blank\"); newWindow.focus()",
    "width": "20.118%",
    "height": "80%",
    "id": "Image_614F61DE_7140_1C1B_41D6_FBFB8CF3E8A5",
    "paddingRight": 0
   },
   {
    "url": "skin/Image_614CD5F1_7140_0429_41CC_D979FBA21116.png",
    "maxHeight": 50,
    "borderSize": 0,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "minWidth": 1,
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "cursor": "hand",
    "borderRadius": 0,
    "maxWidth": 50,
    "click": "var newWindow = window.open(\"https://www.tripadvisor.in/Hotel_Review-g297628-d455923-Reviews-Hotel_Royal_Orchid-Bengaluru_Bangalore_District_Karnataka.html\", \"_blank\"); newWindow.focus()",
    "width": "21.538%",
    "height": "100%",
    "id": "Image_614CD5F1_7140_0429_41CC_D979FBA21116",
    "paddingRight": 0
   },
   {
    "url": "skin/Image_6176BB3D_7140_0C19_41D5_B76391E0C7B6.png",
    "maxHeight": 50,
    "borderSize": 0,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "minWidth": 1,
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "cursor": "hand",
    "borderRadius": 0,
    "maxWidth": 50,
    "click": "var newWindow = window.open(\"https://www.youtube.com/watch?v=A6dxP4wq-U8\", \"_blank\"); newWindow.focus()",
    "width": "20.71%",
    "height": "74.286%",
    "id": "Image_6176BB3D_7140_0C19_41D5_B76391E0C7B6",
    "paddingRight": 0
   }
  ],
  "backgroundColorRatios": [],
  "top": "17.03%",
  "paddingLeft": 0,
  "layout": "horizontal",
  "verticalAlign": "middle",
  "contentOpaque": false,
  "overflow": "scroll",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "right": "86.13%",
  "left": "2%",
  "backgroundColor": [],
  "gap": 5,
  "borderRadius": 0,
  "height": "7.5%",
  "id": "Container_6124A4C4_7140_046F_4197_0F8B14EE44BB",
  "paddingRight": 0,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 14,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 3,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.7,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": 1,
    "left": "0%",
    "text": "SPRING HALL",
    "textShadowVerticalLength": 1,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_CCA673E0_FC0C_5004_41A6_6C48730F0EFA",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.6,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_D3954D83_FC0B_F004_41E8_406F4BA45E1C",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 14,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 3,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.7,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": 1,
    "left": "0%",
    "text": "SEASON HALL",
    "textShadowVerticalLength": 1,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_D1127BD1_FC0F_D004_41DB_6312DBFBC7FF",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.59,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_D18D8691_FC0C_F004_41D0_0CFF90187AC7",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 14,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 3,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.7,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": 1,
    "left": "0%",
    "text": "GINSENG",
    "textShadowVerticalLength": 1,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_CA411B02_FC0C_7004_41ED_DA1C9088549C",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.59,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_C93C73BB_FC34_7004_41C1_0595F1B3E352",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 14,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 3,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.7,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": 1,
    "left": "0%",
    "text": "AUTUMN",
    "textShadowVerticalLength": 1,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_C4DAB685_FC0C_700C_41D4_074CA3915B6B",
    "paddingRight": 0,
    "fontFamily": "Verdana"
   }
  ],
  "backgroundColorRatios": [
   0.58,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.6,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_CB042A30_FC0C_7004_41EC_E8B99EAC5D20",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "url": "skin/Image_F7CA6873_FCF5_BF7A_41E1_5DFC5A18F6F9.png",
  "maxHeight": 601,
  "borderSize": 0,
  "bottom": "15%",
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "minWidth": 1,
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "minHeight": 1,
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "shadow": false,
  "right": "0%",
  "borderRadius": 0,
  "maxWidth": 1995,
  "width": "15%",
  "height": "14%",
  "id": "Image_F7CA6873_FCF5_BF7A_41E1_5DFC5A18F6F9",
  "paddingRight": 0,
  "visible": false
 },
 {
  "url": "skin/Image_F77C5325_FCF3_529E_41D0_E215A91A8F10.png",
  "maxHeight": 756,
  "borderSize": 0,
  "bottom": "15%",
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "minWidth": 1,
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "minHeight": 1,
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "shadow": false,
  "right": "0%",
  "borderRadius": 0,
  "maxWidth": 1586,
  "width": "15%",
  "height": "14%",
  "id": "Image_F77C5325_FCF3_529E_41D0_E215A91A8F10",
  "paddingRight": 0,
  "visible": false
 },
 {
  "url": "skin/Image_F755B8AD_FCF3_BFEE_41DC_C234FE5AB4AE.png",
  "maxHeight": 815,
  "borderSize": 0,
  "bottom": "15%",
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "minWidth": 1,
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "minHeight": 1,
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "shadow": false,
  "right": "0%",
  "borderRadius": 0,
  "maxWidth": 1471,
  "width": "15%",
  "height": "14%",
  "id": "Image_F755B8AD_FCF3_BFEE_41DC_C234FE5AB4AE",
  "paddingRight": 0,
  "visible": false
 },
 {
  "url": "skin/Image_31FE1D96_2039_A527_41B4_7892987A6ECF.png",
  "maxHeight": 335,
  "borderSize": 0,
  "top": "1.12%",
  "bottom": "81.67%",
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "minWidth": 1,
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "minHeight": 1,
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "shadow": false,
  "left": "1.84%",
  "borderRadius": 0,
  "maxWidth": 567,
  "click": "this.setComponentVisibility(this.Container_CB7598DA_C78D_4338_41E7_F415F33F96F2, true, 0, this.effect_372D6C0A_21FB_3947_41A1_5B78322DEAFF, 'showEffect', false); this.mainPlayList.set('selectedIndex', 37)",
  "width": "13.686%",
  "id": "Image_31FE1D96_2039_A527_41B4_7892987A6ECF",
  "paddingRight": 0
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "top": "0%",
    "paddingLeft": 10,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:33px;\"><B>GINSENG</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:16px;font-family:Verdana, Geneva, sans-serif;\">Ginseng, our award winning Pan Asian restaurant serves Chinese, Thai, Japanese &amp; Malaysian cuisines. Enjoy from a wide selections of sushi &amp; sashimi. Private dining room available for small groups.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:16px;font-family:Verdana, Geneva, sans-serif;\"> Timings: 07:30pm-11:30pm </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:16px;font-family:Verdana, Geneva, sans-serif;\">Cuisine: Oriental </SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "borderRadius": 0,
    "width": "99.573%",
    "height": "100%",
    "id": "HTMLText_3993565E_2069_69FE_41BC_89DE5E78A9BF",
    "paddingRight": 10,
    "scrollBarWidth": 10
   },
   {
    "borderSize": 0,
    "width": "21.368%",
    "textShadowColor": "#000000",
    "fontSize": 15,
    "bottom": "0%",
    "paddingLeft": 0,
    "fontStyle": "italic",
    "verticalAlign": "middle",
    "textShadowBlurRadius": 3,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.7,
    "class": "Label",
    "fontWeight": "bold",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": 1,
    "right": "0%",
    "text": "X Close",
    "textShadowVerticalLength": 1,
    "borderRadius": 0,
    "click": "this.setComponentVisibility(this.Container_39F67D00_206F_5B43_41BA_66721296B47A, false, 0, this.effect_387D909A_207F_E947_41A1_6699150E3004, 'hideEffect', false)",
    "textDecoration": "none",
    "height": "8.902%",
    "id": "Label_39ABA591_2079_2B45_41A7_AEA794EFF5D0",
    "paddingRight": 0,
    "fontFamily": "Arial"
   }
  ],
  "backgroundColorRatios": [
   0
  ],
  "top": "20%",
  "paddingLeft": 0,
  "layout": "absolute",
  "verticalAlign": "top",
  "contentOpaque": false,
  "overflow": "scroll",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.73,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "right": "30%",
  "borderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "gap": 10,
  "width": "40%",
  "height": "46.038%",
  "id": "Container_39F67D00_206F_5B43_41BA_66721296B47A",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "top": "0%",
    "paddingLeft": 10,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:34px;\"><B>SEASONS</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:16px;font-family:Verdana, Geneva, sans-serif;\">Overlooking the lush greens of the hotel, Seasons provides you with an option to host your event both indoors and outdoors. Spread across an area of 3,200 sq. ft. it has a capacity to accommodate 250 guests.</SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "borderRadius": 0,
    "width": "100%",
    "height": "100%",
    "id": "HTMLText_3B147D72_2079_DBC7_41A4_93FA7AB1FF29",
    "paddingRight": 10,
    "scrollBarWidth": 10
   },
   {
    "borderSize": 0,
    "width": "21.368%",
    "textShadowColor": "#000000",
    "fontSize": 15,
    "bottom": "1.3%",
    "paddingLeft": 0,
    "fontStyle": "normal",
    "verticalAlign": "middle",
    "textShadowBlurRadius": 3,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.7,
    "class": "Label",
    "fontWeight": "bold",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": 1,
    "right": "0%",
    "text": "X Close",
    "textShadowVerticalLength": 1,
    "borderRadius": 0,
    "click": "this.setComponentVisibility(this.Container_3CE5A369_207B_2FC2_41B3_C541A27970D9, false, 0, this.effect_3B5EFE13_2069_5945_41A8_16578ACC6911, 'hideEffect', false)",
    "textDecoration": "none",
    "height": "13.043%",
    "id": "Label_383031D9_2067_6AC5_41B1_C932B3BAD04B",
    "paddingRight": 0,
    "fontFamily": "Arial"
   }
  ],
  "backgroundColorRatios": [
   0
  ],
  "top": "20%",
  "paddingLeft": 0,
  "layout": "absolute",
  "verticalAlign": "top",
  "contentOpaque": false,
  "overflow": "scroll",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.67,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "left": "30%",
  "borderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "gap": 10,
  "width": "40%",
  "height": "31.421%",
  "id": "Container_3CE5A369_207B_2FC2_41B3_C541A27970D9",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "top": "0%",
    "paddingLeft": 10,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:32px;\"><B>SPRING</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:17px;font-family:Verdana, Geneva, sans-serif;\">Spring is a well-furnished banquet hall located in the lobby. It is ideal for business get-togethers, parties and other events. With an area of 3600 sq. ft., it has a capacity of hosting 350 guests.</SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "borderRadius": 0,
    "width": "100%",
    "height": "100%",
    "id": "HTMLText_3B34FC69_206B_59C5_41B7_391BD3ECE572",
    "paddingRight": 10,
    "scrollBarWidth": 10
   },
   {
    "borderSize": 0,
    "width": "21.368%",
    "textShadowColor": "#000000",
    "fontSize": 15,
    "bottom": "0%",
    "paddingLeft": 0,
    "fontStyle": "italic",
    "verticalAlign": "middle",
    "textShadowBlurRadius": 3,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.7,
    "class": "Label",
    "fontWeight": "bold",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": 1,
    "right": "0%",
    "text": "X Close",
    "textShadowVerticalLength": 1,
    "borderRadius": 0,
    "click": "this.setComponentVisibility(this.Container_3B110AAA_2069_D947_41C0_45536C38D65A, false, 0, this.effect_38833C7C_2069_59C2_4194_BDF414FBBAA1, 'hideEffect', false)",
    "textDecoration": "none",
    "height": "9.009%",
    "id": "Label_3B47BFA2_2069_7747_41B7_5291E0F40033",
    "paddingRight": 0,
    "fontFamily": "Arial"
   }
  ],
  "backgroundColorRatios": [
   0
  ],
  "top": "20%",
  "paddingLeft": 0,
  "layout": "absolute",
  "verticalAlign": "top",
  "contentOpaque": false,
  "overflow": "scroll",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "backgroundOpacity": 0.67,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "right": "29.57%",
  "left": "30.41%",
  "borderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "gap": 10,
  "height": "33.06%",
  "id": "Container_3B110AAA_2069_D947_41C0_45536C38D65A",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "bottom": "0%",
    "paddingLeft": 10,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:35px;\"><B>AUTUMN</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:17px;font-family:Verdana, Geneva, sans-serif;\">Located on the first floor, Autumn (1680 sq.ft.) is ideal to host your corporate functions. The hall can be partitioned in half to create smaller, more intimate spaces. It can host up to 60 guests people.</SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "paddingBottom": 10,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "borderRadius": 0,
    "width": "100%",
    "height": "100%",
    "id": "HTMLText_38B37368_206B_6FC3_419F_5CB12550032D",
    "paddingRight": 10,
    "scrollBarWidth": 10
   },
   {
    "borderSize": 0,
    "width": "21.368%",
    "textShadowColor": "#000000",
    "fontSize": 15,
    "bottom": "0%",
    "paddingLeft": 0,
    "fontStyle": "italic",
    "verticalAlign": "middle",
    "textShadowBlurRadius": 3,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.7,
    "class": "Label",
    "fontWeight": "bold",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": 1,
    "right": "0%",
    "text": "X Close",
    "textShadowVerticalLength": 1,
    "borderRadius": 0,
    "click": "this.setComponentVisibility(this.Container_38B7C5EA_2069_2AC7_4186_5D8BE517E935, false, 0, this.effect_7F5FBC7A_6FF8_E9A6_41CA_F6C18BEDF746, 'hideEffect', false)",
    "textDecoration": "none",
    "height": "12.552%",
    "id": "Label_38DBDD45_2069_3BC2_41A8_E1DEE5F68185",
    "paddingRight": 0,
    "fontFamily": "Arial"
   }
  ],
  "backgroundColorRatios": [
   0
  ],
  "top": "20%",
  "bottom": "47.4%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.68,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "left": "30%",
  "backgroundColorDirection": "vertical",
  "gap": 10,
  "width": "40%",
  "borderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "id": "Container_38B7C5EA_2069_2AC7_4186_5D8BE517E935",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "width": "100%",
    "textShadowColor": "#000000",
    "fontSize": 16,
    "top": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "fontStyle": "normal",
    "textShadowBlurRadius": 3,
    "minWidth": 1,
    "paddingBottom": 0,
    "textShadowOpacity": 0.7,
    "class": "Label",
    "fontWeight": "normal",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "fontColor": "#FFFFFF",
    "textShadowHorizontalLength": 1,
    "left": "0%",
    "text": "GINSENG",
    "textShadowVerticalLength": 1,
    "borderRadius": 0,
    "textDecoration": "none",
    "height": "100%",
    "id": "Label_38790419_20A9_2945_41B7_E92F4488E583",
    "paddingRight": 0,
    "fontFamily": "Arial"
   }
  ],
  "backgroundColorRatios": [
   0.62,
   1
  ],
  "bottom": "3%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "minHeight": 1,
  "backgroundOpacity": 0.62,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "horizontal",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [
   "#660066",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": "12%",
  "height": "5%",
  "id": "Container_3AE45646_20AB_69CF_41AE_8FD941F03FF9",
  "paddingRight": 0,
  "visible": false,
  "scrollBarWidth": 10
 },
 {
  "borderSize": 0,
  "children": [
   "this.IconButton_3BB6470E_20A8_D75F_41BC_C391A4090A55",
   {
    "url": "skin/Image_1E64D287_1123_268D_41AB_806ABA4F5F6C.png",
    "maxHeight": 115,
    "borderSize": 0,
    "bottom": "13.55%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "minWidth": 1,
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "shadow": false,
    "right": "35%",
    "borderRadius": 0,
    "maxWidth": 115,
    "click": "this.showWindow(this.window_03A4C1A4_11E1_2282_4194_E95931DDD7BD, null, false)",
    "width": 45,
    "height": 45,
    "id": "Image_1E64D287_1123_268D_41AB_806ABA4F5F6C",
    "paddingRight": 0
   },
   {
    "url": "skin/Image_5530D3B4_58CC_AF7A_41C4_163089B6F99B.png",
    "maxHeight": 115,
    "borderSize": 0,
    "bottom": "13.59%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "minWidth": 1,
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "left": "35%",
    "borderRadius": 0,
    "maxWidth": 115,
    "click": "this.setComponentVisibility(this.Container_84205F78_9528_2D22_41D8_D318FDA195A5, false, 0, this.effect_60D3F176_6FD8_9BA1_41D4_49CD4AA1F97D, 'hideEffect', false); this.setComponentVisibility(this.Image_8FB05954_9B90_0BA5_41E0_1701E958AFD1, true, 0, null, null, false); this.setComponentVisibility(this.Image_5530D3B4_58CC_AF7A_41C4_163089B6F99B, false, 0, null, null, false)",
    "width": 45,
    "height": 45,
    "id": "Image_5530D3B4_58CC_AF7A_41C4_163089B6F99B",
    "paddingRight": 0,
    "visible": false
   },
   {
    "url": "skin/Image_8FB05954_9B90_0BA5_41E0_1701E958AFD1.png",
    "maxHeight": 115,
    "borderSize": 0,
    "bottom": "13.53%",
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "minWidth": 1,
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minHeight": 1,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "left": "35%",
    "borderRadius": 0,
    "maxWidth": 115,
    "click": "this.setComponentVisibility(this.Container_84205F78_9528_2D22_41D8_D318FDA195A5, true, 0, this.effect_8F4138E8_9B90_0A6E_41D0_699C2D8532A4, 'showEffect', false); this.setComponentVisibility(this.Image_8FB05954_9B90_0BA5_41E0_1701E958AFD1, false, 0, null, null, false); this.setComponentVisibility(this.Image_5530D3B4_58CC_AF7A_41C4_163089B6F99B, true, 0, null, null, false)",
    "width": 45,
    "height": 45,
    "id": "Image_8FB05954_9B90_0BA5_41E0_1701E958AFD1",
    "paddingRight": 0
   }
  ],
  "backgroundColorRatios": [],
  "bottom": "0%",
  "paddingLeft": 0,
  "layout": "absolute",
  "contentOpaque": false,
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "overflow": "hidden",
  "minHeight": 1,
  "backgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "left": "0%",
  "borderRadius": 0,
  "backgroundColor": [],
  "gap": 10,
  "width": "100%",
  "height": "11.294%",
  "id": "Container_434E1216_4EF2_1EA9_41C5_394A09670753",
  "paddingRight": 0,
  "scrollBarWidth": 10
 }
], 
 "borderSize": 0,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_3BB6470E_20A8_D75F_41BC_C391A4090A55], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_95B75FED_9A90_0666_41E0_E5F9F0F7F94A_playlist,this.DropDown_959BFC4A_9AB0_09AD_41D9_CBF53C05989E_playlist,this.DropDown_1A8FC29D_10A8_20B6_41A9_64238A9CD814_playlist,this.DropDown_97F8A1EE_9A90_1A65_41DC_EBAEDDBFC28F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "backgroundPreloadEnabled": true,
 "buttonExitFullscreen": "this.IconButton_B1C52F07_BEBC_C309_41E7_06BAE5296FE3",
 "paddingLeft": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "contentOpaque": false,
 "overflow": "visible",
 "minWidth": 20,
 "paddingBottom": 0,
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "buttonEnterFullscreen": "this.IconButton_B19095FA_BEBC_46FA_41D0_9364C93FEE2A",
 "minHeight": 20,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "borderRadius": 0,
 "gap": 10,
 "width": "100%",
 "height": "100%",
 "id": "rootPlayer",
 "scripts": {
  "registerKey": function(key, value){    window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "syncPlaylists": function(playLists){    var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       delete audios[audio.get('id')];   }   audio.stop(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audio.play();   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   else if(audio.get('id') in audios){       return;   }   audios[audio.get('id')] = audio;   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "getKey": function(key){    return window[key]; },
  "existsKey": function(key){    return key in window; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "unregisterKey": function(key){    delete window[key]; },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audio.pause();   } }
 },
 "paddingRight": 0,
 "scrollBarWidth": 10
})