// ==UserScript==
// @name LeetCode Dark Mode Fix
// @version 1.0.0
// @author udontur
// @namespace http://tampermonkey.net/
// @run-at document-start
// @include      https://leetcode.com/
// @include      https://leetcode.com/explore*
// @include      https://leetcode.com/settings*
// @description Adds dark mode to LeetCode's home page, explore page, and settings page
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

.side-block{
  border-bottom: 1px solid var(--dark-gray-40) !important;
}

hr, .side-bar{
  border-top: 1px solid var(--dark-gray-40) !important;
}

span {
  color: var(--dark-gray-70) !important;
}

.storyboard{
  border-right: 1px solid var(--dark-gray-40) !important;
}
.problem-category .problem-category-info a {
  color: var(--dark-gray-80) !important;
}

.problem-category .problem-category-info a:hover{
  background-color: var(--dark-gray-40) !important;
}

#leetcode-navbar{
  background-color: var(--dark-gray-20) !important;
}

#leetcode-navbar>div>ul>li>a{
  color: var(--dark-gray-70) !important;
}

#leetcode-navbar>div>ul>li>a:hover{
  color: var(--dark-gray-80) !important;
}
.storyboard>div{
  border-top: 0px solid !important;
}
.storyboard>:not(.msg){
  margin-top: 16px !important;
}
svg{
  color: var(--dark-gray-90) !important;
}

#subscribe>a>span>span{
  background-color: #423726 !important;
  color: #FFA116 !important;
}
.side-block-btn{
  background-color: var(--dark-gray-20) !important;
  color: var(--dark-gray-80) !important;
  border-color: var(--dark-gray-40) !important;
}
svg>path:nth-child(3){
  fill: white !important;
}
.container__2AdV{
  border-top: 1px solid var(--dark-gray-40) !important;
}
footer{
  background-color: var(--dark-gray-10) !important;
}
.nav-items__1KWV>li>a{
  color: var(--dark-color-50) !important;
}

.nav-items__1KWV li:not(:last-child)::after{
  border-right: var(--dark-color-40) !important;
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
