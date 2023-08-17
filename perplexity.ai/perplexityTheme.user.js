// ==UserScript==
// @name          Perplexity Theme
// @version       1.0
// @author        Spezi
// @description   Custom theme for PerplexityAI
// @match         https://*.perplexity.ai/*
// @resource      customStyle https://raw.githubusercontent.com/35e/css-themes/main/perplexity.ai/theme.css
// @grant         GM_addStyle
// @grant         GM_getResourceText
// ==/UserScript==

GM_addStyle(GM_getResourceText("customStyle"));
