// ==UserScript==
// @name         Bilibili Do Not Track
// @namespace    https://github.com
// @version      0.1.3
// @description  delete digital fingerprint of bilibili
// @author       Kaki Wang
// @match        https://*.bilibili.com/*?*
// @icon         https://www.google.com/s2/favicons?domain=bilibili.com
// @include      https?:\/\/www.bilibili.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/kakiii/bilibili_donot_track/main/src.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //alert(window.location.href.split("?")[0]);
    const url = window.location.href;
    const sub_domain = url.split("//")[1].split(".")[0];
    // alert(sub_domain);
    //do nothing for domain of https://live.bilibili.com/p/eden/area-tags
    if (sub_domain!=="search" || sub_domain!=="live"){
        window.location=url.split("?")[0];
    }else if(url.includes("&")){
        window.location=url.split("&")[0];
    }
})();
