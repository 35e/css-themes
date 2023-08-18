// ==UserScript==
// @name          Perplexity Theme
// @version       1.1
// @author        Spezi
// @description   Custom theme for PerplexityAI
// @match         https://*.perplexity.ai/*
// @grant         GM_xmlhttpRequest
// ==/UserScript==

(() => {
    'use strict';

    const cssUrl = 'https://raw.githubusercontent.com/35e/css-themes/main/perplexity.ai/theme.css';

    GM_xmlhttpRequest({
        method: 'GET',
        url: cssUrl,
        onload: function(response) {
            const style = document.createElement('style');
            style.textContent = response.responseText;
            document.head.appendChild(style);
        }
    });
})();
