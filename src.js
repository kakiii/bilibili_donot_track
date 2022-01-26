// ==UserScript==
// @name         Bilibili Do Not Track
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kaki Wang
// @match        https://www.bilibili.com/video/*?*
// @icon         https://www.google.com/s2/favicons?domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //alert(window.location.href.split("?")[0]);
    window.location=window.location.href.split("?")[0];
})();
