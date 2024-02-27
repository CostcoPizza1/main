var urlParams = new URLSearchParams(window.location.search);
var consoleParams = urlParams.get("c");
var gameParams = urlParams.get("g");
var EJS_player = "#game";
var EJS_color = getComputedStyle(document.body).getPropertyValue("--gradient1");
var EJS_startOnLoaded = true;
var EJS_defaultOptions = {
  shaders: "disabled",
  fps: "show",
};
var EJS_Buttons = {
  playPause: true,
  restart: true,
  mute: true,
  settings: true,
  fullscreen: true,
  saveState: false,
  loadState: false,
  screenRecord: false,
  gamepad: false,
  cheat: false,
  volume: true,
  saveSavFiles: true,
  loadSavFiles: true,
  quickSave: false,
  quickLoad: false,
  screenshot: false,
  cacheManager: false,
};
var EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
var EJS_core, EJS_gameUrl;
