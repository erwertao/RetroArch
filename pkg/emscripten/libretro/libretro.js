/**
 * RetroArch Web Player
 *
 * This provides the basic JavaScript for the RetroArch web player.
 */

////////////erwertao add begin//////////////////
var RETROK_UNKNOWN        = 0;
var RETROK_FIRST          = 0;
var RETROK_BACKSPACE      = 8;
var RETROK_TAB            = 9;
var RETROK_CLEAR          = 12;
var RETROK_RETURN         = 13;
var RETROK_PAUSE          = 19;
var RETROK_ESCAPE         = 27;
var RETROK_SPACE          = 32;
var RETROK_EXCLAIM        = 33;
var RETROK_QUOTEDBL       = 34;
var RETROK_HASH           = 35;
var RETROK_DOLLAR         = 36;
var RETROK_AMPERSAND      = 38;
var RETROK_QUOTE          = 39;
var RETROK_LEFTPAREN      = 40;
var RETROK_RIGHTPAREN     = 41;
var RETROK_ASTERISK       = 42;
var RETROK_PLUS           = 43;
var RETROK_COMMA          = 44;
var RETROK_MINUS          = 45;
var RETROK_PERIOD         = 46;
var RETROK_SLASH          = 47;
var RETROK_0              = 48;
var RETROK_1              = 49;
var RETROK_2              = 50;
var RETROK_3              = 51;
var RETROK_4              = 52;
var RETROK_5              = 53;
var RETROK_6              = 54;
var RETROK_7              = 55;
var RETROK_8              = 56;
var RETROK_9              = 57;
var RETROK_COLON          = 58;
var RETROK_SEMICOLON      = 59;
var RETROK_LESS           = 60;
var RETROK_EQUALS         = 61;
var RETROK_GREATER        = 62;
var RETROK_QUESTION       = 63;
var RETROK_AT             = 64;
var RETROK_LEFTBRACKET    = 91;
var RETROK_BACKSLASH      = 92;
var RETROK_RIGHTBRACKET   = 93;
var RETROK_CARET          = 94;
var RETROK_UNDERSCORE     = 95;
var RETROK_BACKQUOTE      = 96;
var RETROK_a              = 97;
var RETROK_b              = 98;
var RETROK_c              = 99;
var RETROK_d              = 100;
var RETROK_e              = 101;
var RETROK_f              = 102;
var RETROK_g              = 103;
var RETROK_h              = 104;
var RETROK_i              = 105;
var RETROK_j              = 106;
var RETROK_k              = 107;
var RETROK_l              = 108;
var RETROK_m              = 109;
var RETROK_n              = 110;
var RETROK_o              = 111;
var RETROK_p              = 112;
var RETROK_q              = 113;
var RETROK_r              = 114;
var RETROK_s              = 115;
var RETROK_t              = 116;
var RETROK_u              = 117;
var RETROK_v              = 118;
var RETROK_w              = 119;
var RETROK_x              = 120;
var RETROK_y              = 121;
var RETROK_z              = 122;
var RETROK_LEFTBRACE      = 123;
var RETROK_BAR            = 124;
var RETROK_RIGHTBRACE     = 125;
var RETROK_TILDE          = 126;
var RETROK_DELETE         = 127;

var RETROK_KP0            = 256;
var RETROK_KP1            = 257;
var RETROK_KP2            = 258;
var RETROK_KP3            = 259;
var RETROK_KP4            = 260;
var RETROK_KP5            = 261;
var RETROK_KP6            = 262;
var RETROK_KP7            = 263;
var RETROK_KP8            = 264;
var RETROK_KP9            = 265;
var RETROK_KP_PERIOD      = 266;
var RETROK_KP_DIVIDE      = 267;
var RETROK_KP_MULTIPLY    = 268;
var RETROK_KP_MINUS       = 269;
var RETROK_KP_PLUS        = 270;
var RETROK_KP_ENTER       = 271;
var RETROK_KP_EQUALS      = 272;

var RETROK_UP             = 273;
var RETROK_DOWN           = 274;
var RETROK_RIGHT          = 275;
var RETROK_LEFT           = 276;
var RETROK_INSERT         = 277;
var RETROK_HOME           = 278;
var RETROK_END            = 279;
var RETROK_PAGEUP         = 280;
var RETROK_PAGEDOWN       = 281;

var RETROK_F1             = 282;
var RETROK_F2             = 283;
var RETROK_F3             = 284;
var RETROK_F4             = 285;
var RETROK_F5             = 286;
var RETROK_F6             = 287;
var RETROK_F7             = 288;
var RETROK_F8             = 289;
var RETROK_F9             = 290;
var RETROK_F10            = 291;
var RETROK_F11            = 292;
var RETROK_F12            = 293;
var RETROK_F13            = 294;
var RETROK_F14            = 295;
var RETROK_F15            = 296;

var RETROK_NUMLOCK        = 300;
var RETROK_CAPSLOCK       = 301;
var RETROK_SCROLLOCK      = 302;
var RETROK_RSHIFT         = 303;
var RETROK_LSHIFT         = 304;
var RETROK_RCTRL          = 305;
var RETROK_LCTRL          = 306;
var RETROK_RALT           = 307;
var RETROK_LALT           = 308;
var RETROK_RMETA          = 309;
var RETROK_LMETA          = 310;
var RETROK_LSUPER         = 311;
var RETROK_RSUPER         = 312;
var RETROK_MODE           = 313;
var RETROK_COMPOSE        = 314;

var RETROK_HELP           = 315;
var RETROK_PRINT          = 316;
var RETROK_SYSREQ         = 317;
var RETROK_BREAK          = 318;
var RETROK_MENU           = 319;
var RETROK_POWER          = 320;
var RETROK_EURO           = 321;
var RETROK_UNDO           = 322;
var RETROK_OEM_102        = 323;

var rwebinput_key_to_code_map =
{
   "KeyA": RETROK_a,
   "KeyB": RETROK_b,
   "KeyC": RETROK_c,
   "KeyD": RETROK_d,
   "KeyE": RETROK_e,
   "KeyF": RETROK_f,
   "KeyG": RETROK_g,
   "KeyH": RETROK_h,
   "KeyI": RETROK_i,
   "KeyJ": RETROK_j,
   "KeyK": RETROK_k,
   "KeyL": RETROK_l,
   "KeyM": RETROK_m,
   "KeyN": RETROK_n,
   "KeyO": RETROK_o,
   "KeyP": RETROK_p,
   "KeyQ": RETROK_q,
   "KeyR": RETROK_r,
   "KeyS": RETROK_s,
   "KeyT": RETROK_t,
   "KeyU": RETROK_u,
   "KeyV": RETROK_v,
   "KeyW": RETROK_w,
   "KeyX": RETROK_x,
   "KeyY": RETROK_y,
   "KeyZ": RETROK_z,
   "ArrowLeft": RETROK_LEFT,
   "ArrowRight": RETROK_RIGHT,
   "ArrowUp": RETROK_UP,
   "ArrowDown": RETROK_DOWN,
   "Enter": RETROK_RETURN,
   "NumpadEnter": RETROK_KP_ENTER,
   "Tab": RETROK_TAB,
   "Insert": RETROK_INSERT,
   "Delete": RETROK_DELETE,
   "End": RETROK_END,
   "Home": RETROK_HOME,
   "ShiftRight": RETROK_RSHIFT,
   "ShiftLeft": RETROK_LSHIFT,
   "ControlLeft": RETROK_LCTRL,
   "AltLeft": RETROK_LALT,
   "Space": RETROK_SPACE,
   "Escape": RETROK_ESCAPE,
   "NumpadAdd": RETROK_KP_PLUS,
   "NumpadSubtract": RETROK_KP_MINUS,
   "F1": RETROK_F1,
   "F2": RETROK_F2,
   "F3": RETROK_F3,
   "F4": RETROK_F4,
   "F5": RETROK_F5,
   "F6": RETROK_F6,
   "F7": RETROK_F7,
   "F8": RETROK_F8,
   "F9": RETROK_F9,
   "F10": RETROK_F10,
   "F11": RETROK_F11,
   "F12": RETROK_F12,
   "Digit0": RETROK_0,
   "Digit1": RETROK_1,
   "Digit2": RETROK_2,
   "Digit3": RETROK_3,
   "Digit4": RETROK_4,
   "Digit5": RETROK_5,
   "Digit6": RETROK_6,
   "Digit7": RETROK_7,
   "Digit8": RETROK_8,
   "Digit9": RETROK_9,
   "PageUp": RETROK_PAGEUP,
   "PageDown": RETROK_PAGEDOWN,
   "Numpad0": RETROK_KP0,
   "Numpad1": RETROK_KP1,
   "Numpad2": RETROK_KP2,
   "Numpad3": RETROK_KP3,
   "Numpad4": RETROK_KP4,
   "Numpad5": RETROK_KP5,
   "Numpad6": RETROK_KP6,
   "Numpad7": RETROK_KP7,
   "Numpad8": RETROK_KP8,
   "Numpad9": RETROK_KP9,
   "Period": RETROK_PERIOD,
   "CapsLock": RETROK_CAPSLOCK,
   "NumLock": RETROK_NUMLOCK,
   "Backspace": RETROK_BACKSPACE,
   "NumpadMultiply": RETROK_KP_MULTIPLY,
   "NumpadDivide": RETROK_KP_DIVIDE,
   "PrintScreen": RETROK_PRINT,
   "ScrollLock": RETROK_SCROLLOCK,
   "Backquote": RETROK_BACKQUOTE,
   "Pause": RETROK_PAUSE,
   "Quote": RETROK_QUOTE,
   "Comma": RETROK_COMMA,
   "Minus": RETROK_MINUS,
   "Slash": RETROK_SLASH,
   "Semicolon": RETROK_SEMICOLON,
   "Equal": RETROK_EQUALS,
   "BracketLeft": RETROK_LEFTBRACKET,
   "Backslash": RETROK_BACKSLASH,
   "BracketRight": RETROK_RIGHTBRACKET,
   "NumpadDecimal": RETROK_KP_PERIOD,
   "NumpadEqual": RETROK_KP_EQUALS,
   "ControlRight": RETROK_RCTRL,
   "AltRight": RETROK_RALT,
   "F13": RETROK_F13,
   "F14": RETROK_F14,
   "F15": RETROK_F15,
   "MetaRight": RETROK_RMETA,
   "MetaLeft": RETROK_LMETA,
   "Help": RETROK_HELP,
   "ContextMenu": RETROK_MENU,
   "Power": RETROK_POWER
};

var rwebinput_code_to_key_map = new Array();

for(var key in rwebinput_key_to_code_map){
   rwebinput_code_to_key_map[rwebinput_key_to_code_map[key]] = key;
}

var D_Pad_Up_ID = 4;
var D_Pad_Down_ID = 5;
var D_Pad_Left_ID = 6;
var D_Pad_Right_ID = 7;
var A_Button_ID = 8;
var B_Button_ID = 0;
var X_Button_ID = 9;
var Y_Button_ID = 1;
var Select_Button_ID = 2;
var Start_Button_ID = 3;


var arcade_arr = [
   //core name
   //content(rom) path
   //max player num supported by this game
   //joypad type
   ["fbalpha2012_neogeo","/home/web_user/retroarch/userdata/content/downloads/SNK - Neo Geo/kof98.zip",2,"neogeo"], 
   ["fbalpha2012_neogeo","/home/web_user/retroarch/userdata/content/downloads/SNK - Neo Geo/mslugx.zip",2,"neogeo"],
   ["fbalpha2012_cps1","/home/web_user/retroarch/userdata/content/downloads/Capcom - CPS1/dino.zip",3,"cps"],
   ["fceumm","/home/web_user/retroarch/userdata/content/downloads/Nintendo - Nintendo Entertainment System/Contra.nes",2,"nes"]
];
////////////erwertao add end//////////////////

var BrowserFS = BrowserFS;
var afs;

function cleanupStorage()
{
   localStorage.clear();
   if (BrowserFS.FileSystem.IndexedDB.isAvailable())
   {
      var req = indexedDB.deleteDatabase("RetroArch");
      req.onsuccess = function () {
         console.log("Deleted database successfully");
      };
      req.onerror = function () {
         console.log("Couldn't delete database");
      };
      req.onblocked = function () {
         console.log("Couldn't delete database due to the operation being blocked");
      };
   }

   document.getElementById("btnClean").disabled = true;
}

function idbfsInit()
{
   $('#icnLocal').removeClass('fa-globe');
   $('#icnLocal').addClass('fa-spinner fa-spin');
   var imfs = new BrowserFS.FileSystem.InMemory();
   if (BrowserFS.FileSystem.IndexedDB.isAvailable())
   {
      afs = new BrowserFS.FileSystem.AsyncMirror(imfs,
         new BrowserFS.FileSystem.IndexedDB(function(e, fs)
      {
         if (e)
         {
            //fallback to imfs
            afs = new BrowserFS.FileSystem.InMemory();
            console.log("WEBPLAYER: error: " + e + " falling back to in-memory filesystem");
            setupFileSystem("browser");
            preLoadingComplete();
         }
         else
         {
            // initialize afs by copying files from async storage to sync storage.
            afs.initialize(function (e)
            {
               if (e)
               {
                  afs = new BrowserFS.FileSystem.InMemory();
                  console.log("WEBPLAYER: error: " + e + " falling back to in-memory filesystem");
                  setupFileSystem("browser");
                  preLoadingComplete();
               }
               else
               {
                  idbfsSyncComplete();
               }
            });
         }
      },
      "RetroArch"));
   }
}

function idbfsSyncComplete()
{
   $('#icnLocal').removeClass('fa-spinner').removeClass('fa-spin');
   $('#icnLocal').addClass('fa-check');
   console.log("WEBPLAYER: idbfs setup successful");

   setupFileSystem("browser");
   ///////erwertao add begin//////////////////////
   setTimeout(function(){repeat();},200);
   ///////////erwertao add end///////////////////
   preLoadingComplete();
}

function preLoadingComplete()
{
   /* Make the Preview image clickable to start RetroArch. */
   $('.webplayer-preview').addClass('loaded').click(function () {
      startRetroArch();
      return false;
  });
  document.getElementById("btnRun").disabled = false;
  $('#btnRun').removeClass('disabled');
}

function setupFileSystem(backend)
{
   /* create a mountable filesystem that will server as a root
      mountpoint for browserfs */
   var mfs =  new BrowserFS.FileSystem.MountableFileSystem();

   /* create an XmlHttpRequest filesystem for the bundled data */
   var xfs1 =  new BrowserFS.FileSystem.XmlHttpRequest
      (".index-xhr", "assets/frontend/bundle/");
   /* create an XmlHttpRequest filesystem for core assets */
   var xfs2 =  new BrowserFS.FileSystem.XmlHttpRequest
      (".index-xhr", "assets/cores/");

   console.log("WEBPLAYER: initializing filesystem: " + backend);
   mfs.mount('/home/web_user/retroarch/userdata', afs);

   mfs.mount('/home/web_user/retroarch/bundle', xfs1);
   mfs.mount('/home/web_user/retroarch/userdata/content/downloads', xfs2); 
   BrowserFS.initialize(mfs);
   var BFS = new BrowserFS.EmscriptenFS();
   FS.mount(BFS, {root: '/home'}, '/home');

   //////erwerao add begin///////
   mapBiosConf();
   /////erwertao add end/////////

   console.log("WEBPLAYER: " + backend + " filesystem initialization successful");
}

/**
 * Retrieve the value of the given GET parameter.
 */
function getParam(name) {
  var results = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results) {
    return results[1] || null;
  }
}

function startRetroArch()
{
   $('.webplayer').show();
   $('.webplayer-preview').hide();
   document.getElementById("btnRun").disabled = true;

   $('#btnFullscreen').removeClass('disabled');
   $('#btnMenu').removeClass('disabled');
   $('#btnAdd').removeClass('disabled');
   $('#btnRom').removeClass('disabled');

   document.getElementById("btnAdd").disabled = false;
   document.getElementById("btnRom").disabled = false;
   document.getElementById("btnMenu").disabled = false;
   document.getElementById("btnFullscreen").disabled = false;

   Module['callMain'](Module['arguments']);
   document.getElementById('canvas').focus();
}

function selectFiles(files)
{
   $('#btnAdd').addClass('disabled');
   $('#icnAdd').removeClass('fa-plus');
   $('#icnAdd').addClass('fa-spinner spinning');
   var count = files.length;

   for (var i = 0; i < count; i++)
   {
      filereader = new FileReader();
      filereader.file_name = files[i].name;
      filereader.readAsArrayBuffer(files[i]);
      filereader.onload = function(){uploadData(this.result, this.file_name)};
      filereader.onloadend = function(evt)
      {
         console.log("WEBPLAYER: file: " + this.file_name + " upload complete");
         if (evt.target.readyState == FileReader.DONE)
         {
            $('#btnAdd').removeClass('disabled');
            $('#icnAdd').removeClass('fa-spinner spinning');
            $('#icnAdd').addClass('fa-plus');
         }
       }
   }
}

function uploadData(data,name)
{
   var dataView = new Uint8Array(data);
   FS.createDataFile('/', name, dataView, true, false);

   var data = FS.readFile(name,{ encoding: 'binary' });
   FS.writeFile('/home/web_user/retroarch/userdata/content/' + name, data ,{ encoding: 'binary' });
   FS.unlink(name);
}

var Module =
{
  noInitialRun: true,
  //arguments: ["-v", "--menu"],//erwertao delete//////
  arguments: ["-v", "--menu", "--rom", arcade_arr[getArcadeIndex()][1] ], ///erwertao add
  /*
      erwertao retroarch implemented a getopt_long function, it is not standard, "--rom=123" or "--rom 123" are not supported, 
      you have to input "--rom" "123" instead. Check compat_getopt.c
  */
  preRun: [],
  postRun: [],
  print: function(text)
  {
     console.log(text);
  },
  printErr: function(text)
  {
     console.log(text);
  },
  canvas: document.getElementById('canvas'),
  totalDependencies: 0,
  monitorRunDependencies: function(left)
  {
     this.totalDependencies = Math.max(this.totalDependencies, left);
  }
};

function switchCore(corename) {
   localStorage.setItem("core", corename);
}

function switchStorage(backend) {
   if (backend != localStorage.getItem("backend"))
   {
      localStorage.setItem("backend", backend);
      location.reload();
   }
}

//////////////////erwertao add begin////////////////////////////
function getArcadeIndex() {
   return Number(window.location.hash.substring(1).split(",")[0]) //the index to arcade_arr
}
function getPlayerIndex() {
   return Number(window.location.hash.substring(1).split(",")[1]) //valid when netplay, index of player
}
function getPlayType() {
   return Number(window.location.hash.substring(1).split(",")[2]) //0 netplay, 1 local play
}
function buildFileTree(root,rootPath,basePath,baseURL){
   for (var name in root._ls) {
      var node = root._ls[name];
      if (node.isDir()) {
         try
         {
            FS.createFolder(rootPath,name,true,true);
         }
         catch(err)
         {
            console.log(err);
         }
         buildFileTree(node,rootPath+"/"+name,basePath,baseURL);
      } else if (node.isFile()) {   
         var absURL = (rootPath+"/"+name).replace(basePath,baseURL)
         var xhr = new XMLHttpRequest();
	      xhr.open('GET', absURL, false);
	      xhr.send(null);
         FS.writeFile(rootPath+"/"+name, xhr.responseText ,{ encoding: 'utf8' });
      }
   }
}
function mapBiosConf() {
   try
   {
      FS.createFolder('/home/web_user/retroarch/userdata/','config',true,true);
   }
   catch(err)
   {
      console.log(err);
   }

   var baseURL = "assets/bios_conf/";
   var xfs3 =  new BrowserFS.FileSystem.XmlHttpRequest(".index-xhr", baseURL);
   var root = xfs3._index._index["/"];
   var rootPath = "/home/web_user/retroarch/userdata/config";

   buildFileTree(root,rootPath,rootPath,baseURL);
}
//////////////////erwertao add end//////////////////////////////

// When the browser has loaded everything.
$(function() {
   // Enable all available ToolTips.
   $('.tooltip-enable').tooltip({
      placement: 'right'
   });

   // Allow hiding the top menu.
   $('.showMenu').hide();
   //$('nav').hide();   //////erwertao add//////
   $('#btnHideMenu, .showMenu').click(function () {
      $('nav').slideToggle('slow');
      $('.showMenu').toggle('slow');
   });

   /**
    * Attempt to disable some default browser keys.
    */
	var keys = {
    9: "tab",
    13: "enter",
    16: "shift",
    18: "alt",
    27: "esc",
    33: "rePag",
    34: "avPag",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12"
  };
	window.addEventListener('keydown', function (e) {
    if (keys[e.which]) {
      e.preventDefault();
    }
  });

   // Switch the core when selecting one.
   $('#core-selector a').click(function () {
      var coreChoice = $(this).data('core');
      switchCore(coreChoice);
   });

   // Find which core to load.
   var core = localStorage.getItem("core", core);
   if (!core) {
      ///////////////erwertao add begin////////////////////
      //load core by window.location.hash and arcade
      core = arcade_arr[getArcadeIndex()][0];
      //////////////erwertao add end/////////////////////
   }
   // Make the core the selected core in the UI.
   var coreTitle = $('#core-selector a[data-core="' + core + '"]').addClass('active').text();
   $('#dropdownMenu1').text(coreTitle);

   // Load the Core's related JavaScript.
   $.getScript(core + '_libretro.js', function ()
   {
      $('#icnRun').removeClass('fa-spinner').removeClass('fa-spin');
      $('#icnRun').addClass('fa-play');
      $('#lblDrop').removeClass('active');
      $('#lblLocal').addClass('active');
      idbfsInit();
   });

   /////////////erwertao add begin///////////////////
   init_joy_pad();
   /////////////erwertao add end////////////////////
 });

///////erwertao add begin///////////////////////
var joy_pad_init_progress = 0;
function next_joy_pad(){
   var playType = getPlayType();
   if (playType==0){
      //net play
      if (joy_pad_init_progress==1){
         return; //net play only need init one pad.
      }
      var joypads = $("#joypads");
      var arcinfo = arcade_arr[getArcadeIndex()];
      var joypad_type = arcinfo[3];
      var pidx = getPlayerIndex();

      var joypad=$('<div style="width:420px;height:200px;background: url(/media/'+joypad_type+'.png);background-size:100% 100%;background-repeat:no-repeat;background-color:black;display:inline-block;position:relative;"></div>');
      joypad.attr('id','joypad_'+pidx);
      joypad.appendTo(joypads);
      joypad.load("/joypads/"+joypad_type+".html",
                  null,
                  function(rsp,st,xhr){
                     var btns = joypad.children()
                     for (var i=0;i<btns.length;i++){
                        var btn=btns[i];
                        btn.setAttribute("pidx",""+pidx);
                        btn.addEventListener("focus", onFocus,false);
                        btn.addEventListener('keydown', onKeyDown,false);
                        btn.addEventListener('keypress', function(e) {e.stopImmediatePropagation();},false);
                        btn.addEventListener('keyup', function(e) {e.stopImmediatePropagation();},false);
                     }
                     joy_pad_init_progress += 1;
                     next_joy_pad();
                  }
      );
   } else {
      //local play
      var joypads = $("#joypads");
      var arcinfo = arcade_arr[getArcadeIndex()];
      var player_num = arcinfo[2];
      if (joy_pad_init_progress==player_num){
         return;
      }
      var joypad_type = arcinfo[3];
      var joypad=$('<div style="width:420px;height:200px;background: url(/media/'+joypad_type+'.png);background-size:100% 100%;background-repeat:no-repeat;background-color:black;display:inline-block;position:relative;"></div>');
      joypad.attr('id','joypad_'+joy_pad_init_progress);
      joypad.appendTo(joypads);
      joypad.load("/joypads/"+joypad_type+".html",
               null,
               function(rsp,st,xhr){
                  var btns = joypad.children()
                  for (var i=0;i<btns.length;i++){
                     var btn=btns[i];
                     btn.setAttribute("pidx",""+joy_pad_init_progress);
                     btn.addEventListener("focus", onFocus,false);
                     btn.addEventListener('keydown', onKeyDown,false);
                     btn.addEventListener('keypress', function(e) {e.stopImmediatePropagation();},false);
                     btn.addEventListener('keyup', function(e) {e.stopImmediatePropagation();},false);
                  }
                  joy_pad_init_progress += 1;
                  next_joy_pad();
               }
      );
   }

   function onFocus(e){
      var pidx = Number(e.target.getAttribute("pidx"));
      var bidx = Number(e.target.getAttribute("bidx"));
      e.target.value=rwebinput_code_to_key_map[_get_binds_key(pidx,bidx)];
   }
   function onKeyDown(e){
      e.target.value=e.code;
      var pidx = Number(e.target.getAttribute("pidx"));
      var bidx = Number(e.target.getAttribute("bidx"));
      _set_binds_key(pidx,bidx,rwebinput_key_to_code_map[e.code]);
      e.stopImmediatePropagation();
      e.target.blur();
   }
}

function init_joy_pad(){
   next_joy_pad();
}

function repeat(){
   if(Module["asm"]){
      startRetroArch();
   } else {
      setTimeout(function(){repeat();},200);
   }
}

/////////////////////erwertao add end//////////////// maybe we need a better way to determin whether asm is loaded

function keyPress(k)
{
   kp(k, "keydown");
   setTimeout(function(){kp(k, "keyup")}, 50);
}

kp = function(k, event) {
   var oEvent = new KeyboardEvent(event, { code: k });

   document.dispatchEvent(oEvent);
   document.getElementById('canvas').focus();
}
