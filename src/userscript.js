// ==UserScript==
// @name LeetCode Dark Fix
// @version 1.0.0
// @author udontur
// @namespace http://tampermonkey.net/
// @run-at document-start
// @include      https://leetcode.com/
// @include      https://leetcode.com/explore*
// @include      https://leetcode.com/profile*
// @description LeetCode Dark Fix is a userscript that adds dark mode to LeetCode's home page, explore page, and settings page because dark theme is unavailable even when the site's offical dark mode is turned on in these pages.
// @license MIT
// ==/UserScript==

(function() {
let css = `
body {
  color: var(--dark-gray-80) !important;
  background-color: var(--dark-gray-10) !important;
}
#explore-app{
  background-color: var(--dark-gray-10) !important;
}
p{
  color: var(--dark-gray-70) !important;
}
a{
  color: var(--dark-gray-80) !important;
}
.title__3Mve{
  font-size: 20px !important;
}
.title__14re{
  color: var(--dark-gray-80) !important;
  font-weight: bold !important;
}
.container__2Jyj{
  border-radius: 8px !important;
  background-color: var(--dark-gray-20) !important;
}
.right-wrapper__3rVj{
  background-color: var(--dark-gray-20) !important;
}
.desc__2m9Y{
  color: var(--dark-gray-80) !important;
}
.media-heading{
  color: var(--dark-gray-80) !important;
}

.description{
  color: var(--dark-gray-70) !important;
}
.explore-heading>.description{
  color: white !important
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
.row-wrapper__1dH2{
  border-bottom: 1px solid var(--dark-gray-40) !important;
}
.link, .edit__J5pK, edit__NFWF{
  color: #1890ff !important;
}
.action__2DMr{
  background: none !important;
  color: #1890ff !important;
}
.fa-circle{
  background: var(--dark-gray-40) !important;
  color: var(--dark-gray-40) !important;
  border-radius: 50% !important;
}
.active__1IwF{
  background-color: var(--dark-blue-40) !important;
}
.previous>a{
  background-color: var(--dark-gray-30) !important;
  border-color: var(--dark-gray-40) !important;
}
.next>a{
  background-color: var(--dark-gray-30) !important;
  border-color: var(--dark-gray-40) !important;
}
.previous>span{
  background-color: var(--dark-gray-30) !important;
  border-color: var(--dark-gray-40) !important;
}
.next>span{
  background-color: var(--dark-gray-30) !important;
  border-color: var(--dark-gray-40) !important;
}
.more-btn{
  background-color: var(--dark-gray-30) !important;
  border-color: var(--dark-gray-40) !important;
}
.notification-category__2a96{
  background-color: var(--dark-gray-30) !important;
}
.css-18n69cu-Wrapper{
  color: var(--dark-gray-70) !important;
}
.notification-type__3O0k{
  border-bottom: 1px solid var(--dark-gray-40) !important; 
}
.showcase-row::before{
  background: transparent !important;
}
.bot-base{
  background-color: var(--dark-gray-30) !important;
  border-radius: 0px 0px 14px 14px !important;
}
.explore-card{
  border-radius: 16px !important;
}
.big-number{
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
