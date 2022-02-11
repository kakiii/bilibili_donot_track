// ==UserScript==
// @name         Bilibili Do Not Track
// @namespace    https://github.com
// @version      0.1.1
// @description  delete digital fingerprint of bilibili
// @author       Kaki Wang
// @match        https://www.bilibili.com/video/*?*
// @match        https://live.bilibili.com/*?*
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
    if (sub_domain!=="search"){
        window.location=url.split("?")[0];
    }else{
        window.location=url.split("&")[0];
    }
})();
