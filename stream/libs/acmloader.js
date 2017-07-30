/*
* ACMLoader - ACM homepage loader
*
* Copyright (c) 2017 Donny Hikari
* licensed under MIT license.
*
* https://github.com/Donny-Hikari/stream-blog
*
* Version: 0.0.1
*/

var DEBUG_MODE = true;
var DEBUG_VERBOSE = DEBUG_MODE && true;

function onClickACMHome() {
  jumpToACM();
  $(window).scrollTop(0);
}

function jumpToACM() {
  pushHistoryState("?category=ACM");
  loadHomepage();
}