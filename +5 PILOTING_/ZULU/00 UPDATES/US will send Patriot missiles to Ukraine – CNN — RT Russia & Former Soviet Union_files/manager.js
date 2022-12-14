(function (c) {
    if (isEngineInited()){
        return;
    }

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = 1;
    script.src = c.managerUrl;
    script.dataset.roxotInited = 'true';

    let head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, head.firstChild);

    window.rom = window.rom || {cmd: [], icmd: []};
    window.rom.icmd = window.rom.icmd || [];
    window.rom.icmd.push(c);

    function isEngineInited(){
        return  document.querySelectorAll('[data-roxot-inited]').length;
    }
})({"publisherId":"880ca144-da2d-42d5-918a-bc6aa4fbd9c3","publisher":"Rt.com","adBlockMode":"iframe","iframeSspList":["adfox"],"managerUrl":"https:\/\/cdn.dmtgvn.com\/wrapper\/js\/common-engine.js?v=s-3630d1d1-9052-414f-aa9e-a88025e4b672","wrapperUrl":"https:\/\/cdn.dmtgvn.com\/wrapper\/js\/wrapper.js?v=s-3630d1d1-9052-414f-aa9e-a88025e4b672","placementConfigTemplate":"https:\/\/cdn.dmtgvn.com\/wrapper-builder\/placement\/__PLACEMENT_ID__?v=d-1645082464","gfsPlacementOptionsTemplate":"https:\/\/cdn.dmtgvn.com\/wrapper-builder\/gfs-placement\/__PLACEMENT_ID__?v=d-1645082464","isLanguageSpecific":false,"hostConfig":{"rt.com":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"russian.rt.com":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"de.rt.com":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"francais.rt.com":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"actualidad.rt.com":{"wrapperOptions":{"prebidAnalyticsIntegration":{"auctionSettings":{"isNeedToSend":true,"sampleCoefficient":100},"impressionSettings":{"isNeedToSend":true,"sampleCoefficient":100}}},"isAcceptableAdsEnabled":false},"arabic.rt.com":{"wrapperOptions":{"prebidAnalyticsIntegration":{"auctionSettings":{"isNeedToSend":true,"sampleCoefficient":500},"impressionSettings":{"isNeedToSend":true,"sampleCoefficient":500}}},"isAcceptableAdsEnabled":false}},"isBrowserSpecific":false,"isOsSpecific":false,"isDeviceTypeSpecific":true,"isGeoSpecific":false,"isGetParamSpecific":false,"dynamicUrlTemplate":"","wrapperConfig":{"prebidAnalyticsIntegration":{"enabled":true,"publisherId":"92707dda-5614-4d3a-b4f5-531645d13ecf","auctionSettings":{"isNeedToSend":true,"sampleCoefficient":50},"impressionSettings":{"isNeedToSend":true,"sampleCoefficient":50}},"engineFileName":"roxot-common-engine.js","universalPlaceHolder":{"enabled":false},"prebid":{"adjustment":{"mytarget":0.2,"otm":0.85,"rubicon":0.4,"segmento":0.75,"criteo":0.85},"path":"https:\/\/cdn.dmtgvn.com\/wrapper\/js\/prebid.js?v=s-3630d1d1-9052-414f-aa9e-a88025e4b672"},"adfox":{"hb":{"biddersMap":{"betweenDigital":"1749489","myTarget":"1749495","otm":"1749502","segmento":"1749486","adriver":"1749497","getintent":"1749562","criteo":"1749499","rtbhouse":"1749498","videonow":"1407059"},"timeout":1000}},"videojsLibs":{"path":"https:\/\/cdn.dmtgvn.com\/wrapper\/js\/video-libs.js?v=s-3630d1d1-9052-414f-aa9e-a88025e4b672"},"pageUrlVariableName":"roxotPlusPageUrl","stubVideoPath":"https:\/\/cdn.dmtgvn.com\/wrapper\/js\/video-ad?v=s-3630d1d1-9052-414f-aa9e-a88025e4b672","adfoxIntegrationType":"common","yandexIntegrationType":"common","openRtbHost":"https:\/\/openrtb.skcrtxr.com"},"lazyLoading":[],"geoSpecificUrl":"https:\/\/geo-worker.skcrtxr.com\/api\/geo\/region"})