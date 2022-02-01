// ==UserScript==
// @name         Bilibili Do Not Track
// @namespace    https://github.com
// @version      0.1
// @description  delete digital fingerprint of bilibili
// @author       Kaki Wang
// @match        https://www.bilibili.com/video/*?*
// @icon         https://www.google.com/s2/favicons?domain=bilibili.com
// @include      https?:\/\/www.bilibili.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/kakiii/bilibili_donot_track/main/src.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //alert(window.location.href.split("?")[0]);
    window.location=window.location.href.split("?")[0];
    alert("Removed!");
})();
