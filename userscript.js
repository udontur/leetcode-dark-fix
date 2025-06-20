// ==UserScript==
// @name LeetCode Dark Mode Fix
// @version 1.0.0
// @author udontur
// @namespace http://tampermonkey.net/
// @run-at document-start
// @include      https://leetcode.com/
// @include      https://leetcode.com/explore*
// @include      https://leetcode.com/settings*
// @description Adds dark mode in LeetCode's home page, explore page, and settings page
// @license MIT
// ==/UserScript==

(function() {
let css = `
body {
  color: var(--dark-gray-80) !important;
  background-color: var(--dark-gray-10) !important;
}

p{
  color: var(--dark-gray-70) !important;
}

.media-heading{
  color: var(--dark-gray-80) !important;
}

.description{
  color: var(--dark-gray-70) !important;
}

hr, .side-bar{
  border-top: 1px solid var(--dark-gray-40) !important;
}

span {
  color: var(--dark-gray-70) !important;
}

.problem-category .problem-category-info a {
  color: var(--dark-gray-80) !important;
}
`;
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("body") || document.documentElement).appendChild(styleNode);
}
})();
