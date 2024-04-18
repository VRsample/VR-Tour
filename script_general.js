(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"minWidth":0,"children":["this.MainViewer"],"data":{"history":{},"defaultLocale":"en","textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"rate":1,"speechOnTooltip":false,"pitch":1},"locales":{"en":"locale/en.txt"},"name":"Player428"},"propagateClick":false,"hash": "5dcee87ddffa1f01af7fc662fdef1f303f3186a909d86bcddea535e6e699f80c", "definitions": [{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"arrowKeysAction":"translate"},{"id":"video_FCC62D55_F0D8_5303_41E1_06C152CD9C4D","label":trans('video_FCC62D55_F0D8_5303_41E1_06C152CD9C4D.label'),"video":"this.videores_E004DA61_F0D8_5103_41D1_A21D77B29022","width":1920,"data":{"label":"Godzilla x Kong_ The New Empire _ Official Trailer 2 (1)"},"thumbnailUrl":"media/video_FCC62D55_F0D8_5303_41E1_06C152CD9C4D_t.jpg","class":"Video","height":1080},{"id":"MainViewer","playbackBarBackgroundOpacity":1,"vrPointerSelectionTime":2000,"progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"subtitlesTop":0,"propagateClick":false,"playbackBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipPaddingTop":4,"subtitlesFontFamily":"Arial","vrThumbstickRotationStep":20,"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColor":["#000000"],"toolTipBorderColor":"#767676","playbackBarHeight":10,"subtitlesTextShadowColor":"#000000","data":{"name":"Main Viewer"},"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadWidth":6,"class":"ViewerArea","progressBottom":10,"width":"100%","subtitlesTextShadowOpacity":1,"playbackBarProgressBorderSize":0,"progressHeight":2,"progressBorderSize":0,"subtitlesFontSize":"3vmin","playbackBarBackgroundColorDirection":"vertical","height":"100%","playbackBarRight":0,"progressBarBorderRadius":2,"toolTipFontFamily":"Arial","progressBarBorderSize":0,"minHeight":50,"subtitlesGap":0,"progressBackgroundColorRatios":[0],"minWidth":100,"progressOpacity":0.7,"progressRight":"33%","playbackBarProgressBorderRadius":0,"subtitlesBottom":50,"subtitlesBackgroundColor":"#000000","toolTipPaddingBottom":4,"subtitlesFontColor":"#FFFFFF","progressBorderRadius":2,"toolTipPaddingLeft":6,"toolTipShadowColor":"#333138","progressBarBackgroundColorDirection":"horizontal","progressLeft":"33%","vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowVerticalLength":1,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowOpacity":0.7,"progressBarBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingRight":6,"playbackBarHeadHeight":15,"playbackBarLeft":0,"toolTipTextShadowColor":"#000000","playbackBarHeadShadowColor":"#000000","vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarBorderColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","playbackBarHeadShadow":true,"firstTransitionDuration":0,"subtitlesTextShadowHorizontalLength":1,"toolTipFontColor":"#606060","playbackBarHeadBorderRadius":0},{"id":"MainViewerVideoPlayer","class":"VideoPlayer","displayPlayOverlay":true,"viewerArea":"this.MainViewer","clickAction":"play_pause","displayPlaybackBar":true},{"id":"panorama_FC76B9F1_F0D8_7303_41E7_D1053740EDA0_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_FCAC417F_F0D9_B3FF_41DF_10621D6A253B","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0}},{"id":"panorama_FC76B9F1_F0D8_7303_41E7_D1053740EDA0","hfov":360,"label":trans('panorama_FC76B9F1_F0D8_7303_41E7_D1053740EDA0.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"height":5120,"rowCount":10,"colCount":60,"class":"TiledImageResourceLevel","url":"media/panorama_FC76B9F1_F0D8_7303_41E7_D1053740EDA0_0/{face}/0/{row}_{column}.jpg","width":30720,"tags":"ondemand"},{"height":2560,"rowCount":5,"colCount":30,"class":"TiledImageResourceLevel","url":"media/panorama_FC76B9F1_F0D8_7303_41E7_D1053740EDA0_0/{face}/1/{row}_{column}.jpg","width":15360,"tags":"ondemand"},{"height":1536,"rowCount":3,"colCount":18,"class":"TiledImageResourceLevel","url":"media/panorama_FC76B9F1_F0D8_7303_41E7_D1053740EDA0_0/{face}/2/{row}_{column}.jpg","width":9216,"tags":"ondemand"},{"height":1024,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_FC76B9F1_F0D8_7303_41E7_D1053740EDA0_0/{face}/3/{row}_{column}.jpg","width":6144,"tags":"ondemand"},{"height":512,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_FC76B9F1_F0D8_7303_41E7_D1053740EDA0_0/{face}/4/{row}_{column}.jpg","width":3072,"tags":["ondemand","preload"]}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_FC76B9F1_F0D8_7303_41E7_D1053740EDA0_t.jpg"}],"overlays":["this.overlay_E0C61558_F0DF_D302_4196_3CD8D699CB30"],"hfovMax":130,"data":{"label":"Pano_1"},"class":"Panorama","vfov":180,"thumbnailUrl":"media/panorama_FC76B9F1_F0D8_7303_41E7_D1053740EDA0_t.jpg"},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FC76B9F1_F0D8_7303_41E7_D1053740EDA0_camera","media":"this.panorama_FC76B9F1_F0D8_7303_41E7_D1053740EDA0","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)","media":"this.video_FCC62D55_F0D8_5303_41E1_06C152CD9C4D","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)"}]},{"id":"videores_E004DA61_F0D8_5103_41D1_A21D77B29022","class":"VideoResource","height":642,"width":1140,"levels":["this.videolevel_E1E3CFA3_F0D8_CF07_41E7_166CDCC6D3AB"]},{"id":"sequence_FCAC417F_F0D9_B3FF_41DF_10621D6A253B","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out"}]},{"id":"overlay_E0C61558_F0DF_D302_4196_3CD8D699CB30","video":"this.videores_E004DA61_F0D8_5103_41D1_A21D77B29022","distance":50,"vertices":[{"class":"PanoramaPoint","yaw":132.99,"pitch":26.92},{"class":"PanoramaPoint","yaw":-142.22,"pitch":25.4},{"class":"PanoramaPoint","yaw":-141.94,"pitch":-13.86},{"class":"PanoramaPoint","yaw":134.36,"pitch":-15.91}],"useHandCursor":true,"loop":true,"class":"QuadVideoPanoramaOverlay","image":"this.res_E01B8806_F0D8_5101_41CC_A1BC991B4FFD","cues":[],"autoplay":true,"data":{"label":"Video"}},{"posterURL":trans('videolevel_E1E3CFA3_F0D8_CF07_41E7_166CDCC6D3AB.posterURL'),"id":"videolevel_E1E3CFA3_F0D8_CF07_41E7_166CDCC6D3AB","class":"VideoResourceLevel","codec":"h264","framerate":23.98,"type":"video/mp4","bitrate":1316,"height":642,"url":trans('videolevel_E1E3CFA3_F0D8_CF07_41E7_166CDCC6D3AB.url'),"width":1140},{"id":"res_E01B8806_F0D8_5101_41CC_A1BC991B4FFD","class":"ImageResource","levels":[{"height":1080,"class":"ImageResourceLevel","url":"media/res_E01B8806_F0D8_5101_41CC_A1BC991B4FFD_0.jpg","width":1920}]}],"scrollBarColor":"#000000","scripts":{"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizStart":TDV.Tour.Script.quizStart,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizFinish":TDV.Tour.Script.quizFinish,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getKey":TDV.Tour.Script.getKey,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"registerKey":TDV.Tour.Script.registerKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"unregisterKey":TDV.Tour.Script.unregisterKey,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"historyGoForward":TDV.Tour.Script.historyGoForward,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"existsKey":TDV.Tour.Script.existsKey,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"init":TDV.Tour.Script.init,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"createTween":TDV.Tour.Script.createTween,"cloneBindings":TDV.Tour.Script.cloneBindings,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initQuiz":TDV.Tour.Script.initQuiz,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"isPanorama":TDV.Tour.Script.isPanorama,"setLocale":TDV.Tour.Script.setLocale,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"downloadFile":TDV.Tour.Script.downloadFile,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"clone":TDV.Tour.Script.clone,"executeJS":TDV.Tour.Script.executeJS,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"translate":TDV.Tour.Script.translate,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"mixObject":TDV.Tour.Script.mixObject,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"shareSocial":TDV.Tour.Script.shareSocial,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getComponentByName":TDV.Tour.Script.getComponentByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showWindow":TDV.Tour.Script.showWindow,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startMeasurement":TDV.Tour.Script.startMeasurement,"setValue":TDV.Tour.Script.setValue,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"openLink":TDV.Tour.Script.openLink,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getOverlays":TDV.Tour.Script.getOverlays,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPixels":TDV.Tour.Script.getPixels},"scrollBarMargin":2,"class":"Player","width":"100%","watermark":false,"height":"100%","gap":10,"backgroundColorRatios":[0],"layout":"absolute","defaultMenu":["fullscreen","mute","rotation"],"start":"this.init()","minHeight":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.12.js.map
})();
//Generated with v2023.2.12, Thu Apr 18 2024