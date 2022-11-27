///////////////////////////////////////////////////////////

var GameWindowStyle = GetGameWindowStyle();
var GameMouseStatus = GetGameMouseStatus();
var GameMouse       = GetGameMouse(); 
var GameFont        = GetGameFont();
var GameArrow       = GetGameArrow();
var GameJoypad      = GetGameJoypad();

var GameMouseStatus = true;

var ActiveColor    = CreateColor(0, 255, 255);
var NonactiveColor = CreateColor(255, 255, 255);
var UnselectableColor = CreateColor(128, 128, 128);

var GameActionKey = KEY_ENTER;
var GameMenuKey   = KEY_M;
var GameTalkKey   = KEY_SHIFT;
var GameUpKey     = KEY_UP;
var GameRightKey  = KEY_RIGHT;
var GameDownKey   = KEY_DOWN;
var GameLeftKey   = KEY_LEFT;
var GameEscapeKey = KEY_ESCAPE;

///////////////////////////////////////////////////////////

function CreateMouseImage()
{
  var s = CreateSurface(10, 10, CreateColor(0,0,0,0));
  s.setPixel(1, 1,  CreateColor(156, 156, 156));
  s.setPixel(1, 2,  CreateColor(156, 156, 156));
  s.setPixel(2, 3,  CreateColor(156, 156, 156));
  s.setPixel(2, 4,  CreateColor(156, 156, 156));
  s.setPixel(3, 5,  CreateColor(156, 156, 156));
  s.setPixel(3, 6,  CreateColor(156, 156, 156));
  s.setPixel(4, 7,  CreateColor(156, 156, 156));
  s.setPixel(4, 8,  CreateColor(156, 156, 156));
  s.setPixel(5, 6,  CreateColor(156, 156, 156));
  s.setPixel(5, 7,  CreateColor(156, 156, 156));
  s.setPixel(6, 6,  CreateColor(156, 156, 156));
  s.setPixel(7, 5,  CreateColor(156, 156, 156));
  s.setPixel(7, 8,  CreateColor(156, 156, 156));
  s.setPixel(8, 9,  CreateColor(156, 156, 156));
  s.setPixel(2, 1,  CreateColor(192, 192, 192));
  s.setPixel(2, 2,  CreateColor(192, 192, 192));
  s.setPixel(3, 3,  CreateColor(192, 192, 192));
  s.setPixel(3, 4,  CreateColor(192, 192, 192));
  s.setPixel(4, 2,  CreateColor(192, 192, 192));
  s.setPixel(4, 4,  CreateColor(192, 192, 192));
  s.setPixel(4, 5,  CreateColor(192, 192, 192));
  s.setPixel(4, 5,  CreateColor(192, 192, 192));
  s.setPixel(5, 5,  CreateColor(192, 192, 192));
  s.setPixel(6, 3,  CreateColor(192, 192, 192));
  s.setPixel(6, 5,  CreateColor(192, 192, 192));
  s.setPixel(7, 7,  CreateColor(192, 192, 192));
  s.setPixel(8, 8,  CreateColor(192, 192, 192));
  s.setPixel(9, 9,  CreateColor(192, 192, 192));
  s.setPixel(3, 2,  CreateColor(255, 255, 255));
  s.setPixel(4, 3,  CreateColor(192, 192, 192));
  s.setPixel(5, 3,  CreateColor(255, 255, 255));
  s.setPixel(5, 4,  CreateColor(255, 255, 255));
  s.setPixel(6, 4,  CreateColor(255, 255, 255));
  s.setPixel(7, 4,  CreateColor(255, 255, 255));
  s.setPixel(7, 6,  CreateColor(255, 255, 255));
  s.setPixel(8, 7,  CreateColor(255, 255, 255));
  s.setPixel(9, 8,  CreateColor(255, 255, 255));
  s.setPixel(0, 0,  CreateColor(0, 0, 0));
  s.setPixel(0, 1,  CreateColor(0, 0, 0));
  s.setPixel(0, 2,  CreateColor(0, 0, 0));
  s.setPixel(1, 0,  CreateColor(0, 0, 0));
  s.setPixel(1, 1,  CreateColor(0, 0, 0));
  s.setPixel(1, 2,  CreateColor(0, 0, 0));
  s.setPixel(1, 3,  CreateColor(0, 0, 0));
  s.setPixel(1, 4,  CreateColor(0, 0, 0));
  s.setPixel(2, 5,  CreateColor(0, 0, 0));
  s.setPixel(2, 6,  CreateColor(0, 0, 0));
  s.setPixel(3, 7,  CreateColor(0, 0, 0));
  s.setPixel(3, 8,  CreateColor(0, 0, 0));
  s.setPixel(4, 9,  CreateColor(0, 0, 0));
  s.setPixel(5, 8,  CreateColor(0, 0, 0));
  s.setPixel(6, 7,  CreateColor(0, 0, 0));
  s.setPixel(6, 8,  CreateColor(0, 0, 0));
  s.setPixel(7, 9,  CreateColor(0, 0, 0));
  s.setPixel(3, 1,  CreateColor(0, 0, 0));
  s.setPixel(4, 1,  CreateColor(0, 0, 0));
  s.setPixel(5, 2,  CreateColor(0, 0, 0));
  s.setPixel(6, 2,  CreateColor(0, 0, 0));
  s.setPixel(7, 3,  CreateColor(0, 0, 0));
  s.setPixel(8, 3,  CreateColor(0, 0, 0));
  s.setPixel(9, 4,  CreateColor(0, 0, 0));
  s.setPixel(8, 5,  CreateColor(0, 0, 0));
  s.setPixel(8, 6,  CreateColor(0, 0, 0));
  s.setPixel(9, 7,  CreateColor(0, 0, 0));
  return s.createImage();
}

function CreateJoypadImage()
{
  var s = CreateSurface(10, 10, CreateColor(0, 0, 0, 0));
  s.line(0, 0, 9, 9, CreateColor(255, 0, 0));
  s.line(9, 0, 0, 9, CreateColor(255, 0, 0));
  return s.createImage();
}

/**
  Returns the font currently being used by the game.
  Default is the system font.
*/
function GetGameFont(){
  if(!IsFont(GameFont))
    return (GameFont = GetSystemFont());
  else
    return GameFont;
}

/**
  Returns the windowstyle currently being used by the game.
  Default is the system windowstyle.
*/
function GetGameWindowStyle(){
  if(!IsWindowStyle(GameWindowStyle))
    GameWindowStyle = GetSystemWindowStyle();
  return GameWindowStyle;
}

/**
  Returns the arrow/pointer currently being used by the game.
  Default is the system arrow.
*/
function GetGameArrow(){
  if(!IsImage(GameArrow))
    GameArrow = GetSystemArrow();
  return GameArrow;
}

/**
  Returns the mouse image currently being used by the game.
  Default is the image defined in CreateMouseImage.
*/
function GetGameMouse(){
  if(!IsImage(GameMouse))
    GameMouse = CreateMouseImage();
  return GameMouse;
}

/**
  Returns whether the mouse is being used or not.
  Default is yes.
*/
function GetGameMouseStatus() {
  if (GameMouseStatus == undefined)
    return (GameMouseStatus = true);
  else
    return GameMouseStatus;
}

/**
  Returns the joypad/joystick image current being used by the game.
  Default is the image defined in CreateJoypadImage.
*/
function GetGameJoypad(){
  if(!IsImage(GameJoypad))
    return (GameJoypad = CreateJoypadImage());
  else
    return GameJoypad;
}

///////////////////////////////////////////////////////////

/**
  Delays the engine for a set amount of time.
  @param time The amount of time in milliseconds to delay.
*/
function Delay(time)
{
  var until = GetTime() + time;
  while(GetTime() < until) { }
}

///////////////////////////////////////////////////////////

/**
  Clears the keyboard input queue.
*/
function ClearKeyQueue()
{
  while(AreKeysLeft()) {
    GetKey();
  }
}

/**
  Waits for a key to be pressed, and returns the new key.
*/
function Wait()
{
  ClearKeyQueue(); 
  return GetKey();
}

///////////////////////////////////////////////////////////

/**
  Returns whether or not a key has been pressed
  and is still in the key queue.
*/
function BiosKeyPressed(key)
{
  return (AreKeysLeft() && IsKeyPressed(key));
}

///////////////////////////////////////////////////////////

function DegreesToRadians(degrees) {
  return (degrees * Math.PI / 180.0);
}

function RadiansToDegrees(radians) {
  return (radians * 180.0 / Math.PI);
}

///////////////////////////////////////////////////////////

function IsNumber(n) {
  return (n != null && typeof(n) == "number");
}

function IsImage(n) {
  return (n != null && typeof(n) == "object");
}

function IsFont(n) {
  return (n != null && typeof(n) == "object");
}

function IsColor(n) {
  return (n != null && typeof(n) == "object");
}

function IsWindowStyle(n) {
  return (n != null && typeof(n) == "object");
}

function IsSpriteset(n) {
  return (n != null && typeof(n) == "object");
}

///////////////////////////////////////////////////////////

/**
  DefaultMenu
  - Has a windowstyle background
  - Can be cancelled by pressing the escape key
  - Can use the keyboard, mouse or possibly a joystick if available.
*/
function DefaultMenu(px, py, pwidth, pheight)
{
  var menu = new FlikMenu(px, py, pwidth, pheight);
  menu.defaultMouseSupport(GetGameMouseStatus(), menu.getMouse(), true);
  menu.preRender = menu.defaultPreRender;
  menu.escapeable = function(){ return true; }

  if (GetNumJoysticks() >= 1)
  {
    menu.joypadSupport = true;
    menu.addDefaultJoypadButtons(0);
  }

  return menu;
}

///////////////////////////////////////////////////////////

/**
  DefaultMapMenu
  - Is exactly the same as DefaultMenu,
    but draws the map engine as a background aswell.
*/
function DefaultMapMenu(px, py, pwidth, pheight)
{
  var menu = DefaultMenu(px, py, pwidth, pheight);
  menu.preRender = function() {
    if (IsMapEngineRunning())
      RenderMap();
    menu.defaultPreRender();  
  }
  return menu;
}

///////////////////////////////////////////////////////////

/**
  FlikMenu object
  @param px The top left corner of where the menu starts, zero if omitted.
  @param py the top left corner of where the menu starts, zero if omitted.
  @param pwidth The width of the menu, can be omitted.
  @param pheight the The height of the menu, can be omitted.
*/
function FlikMenu(px, py, pwidth, pheight)
{
  if (this instanceof FlikMenu == false) {
    return new FlikMenu(px, py, pwidth, pheight);
  }

  this.x = IsNumber(px) ? px : 0;
  this.y = IsNumber(px) ? py : 0;
  this.setWidth(pwidth);
  this.setHeight(pheight);

  this.items = new Array();
  this.escapeable = function(){ return false; }

  this.done = false;
  this.escaped = false;
  this.keys = new Array();
  
  this.mouseSupport = false;
  this.mouseButtons = new Array();
  this.mouse = undefined;

  this.joypads = new Array();
  this.joypadSupport = false;

  this.selection = 0;
  this.cutOffWidth = false;
  this.cutOffHeight = true;
  this.smooth_scrolling = false;
  
  this.horizontal = false;
  this.vertical = true;

  this.selectionArray = new Array();
  this.multiselection = false;

  this.mouseX = GetMouseX();
  this.mouseY = GetMouseY();

  this.lastMenuItemReturnValue = undefined;
  this.shown_items = new Array();
  
  this.font = null;
  this.window_style = null;
  
  this.background = undefined;
  
  this.vspace = 0;
  this.hspace = 0;
  
  this.wrap_selection = true;
  
  this.key_delay = 200;
  this.mouse_button_delay = 200;
  this.joypad_delay = 200;
  
  this.has_key_focus = true;
  this.has_mouse_focus = true;
  this.has_joystick_focus = true;
}

///////////////////////////////////////////////////////////

/**
  The method that is called when the menu is escaped.
*/
FlikMenu.prototype.escape_function = function(){
  this.escaped = true;
  this.done = true;
}

///////////////////////////////////////////////////////////

/**
  This returns the font object currently being used by the menu.
*/
FlikMenu.prototype.getFont = function() {
  if (IsFont(this.font))
    return this.font;
  return GetGameFont();
}

/**
  This returns the windowstlye object currently being used by the menu.
*/
FlikMenu.prototype.getWindowStyle = function() {
  if (IsWindowStyle(this.window_style))
    return this.window_style;
  return GetGameWindowStyle();
}

/**
  This returns the arrow/pointer object currently being used by the menu.
*/
FlikMenu.prototype.getArrow = function() {
  if (IsImage(this.arrow))
    return this.arrow;
  return GetGameArrow();
}

/**
  This returns the mouse image currently being used by the menu.
*/
FlikMenu.prototype.getMouse = function() {
  if (IsImage(this.mouse))
    return this.mouse;
  return GetGameMouse();
}

///////////////////////////////////////////////////////////

/**
  This sets all the items currently in the menu to use the new font.
  @param font The new font that previous menu items should use.
*/
FlikMenu.prototype.setFont = function(font) {
  if (IsFont(font)) {
    for (var i = 0; i < this.items.length; ++i) {
      if (IsFont(this.items[i].item.font)) {
        this.items[i].item.font = font;
      }
    }
  }
}

/**
  This sets all the items currently in the menu to use the new windowstyle.
  @param window_style The new windowstyle that previous menu items should use.
*/
FlikMenu.prototype.setWindowStyle = function(window_style) {
  if (IsWindowStyle(window_style)) {
    this.window_style = window_style;
  }
}

/**
  This sets all the items currently in the menu to use the new arrow image.
  @param arrow The new arrow/pointer image that previous menu items should use.
*/
FlikMenu.prototype.setArrow = function(arrow) {
  if (IsImage(arrow)) {
    this.arrow = arrow;
  }
}

///////////////////////////////////////////////////////////

/**
  This adds a key to be processed by the menu.
  Adding a key means that the default keys will no longer be added automatically.
  @param KEY The keycode of the key e.g. KEY_A
  @param action The function to be performed when the key is pressed.
  @param delay (optional) The delay until the action of the key can be repeated.
*/
FlikMenu.prototype.addKey = function(KEY, action, delay)
{
  var FoundKey = false;
  if(!IsNumber(delay))
    delay = this.key_delay;

  for(var i = 0; i < this.keys.length; ++i)
  {
    if(this.keys[i].name == KEY)
    {
      this.keys[i].action = action;
      this.keys[i].delay = delay;
      FoundKey = true; 
    }
  }

  if(!FoundKey)
  {
    this.keys[this.keys.length] = new Object();
    this.keys[this.keys.length - 1].name = KEY;
    this.keys[this.keys.length - 1].action = action;
    this.keys[this.keys.length - 1].delay = delay;
    this.keys[this.keys.length - 1].lastPressed = GetTime();
  }
}

/**
  This removes the key from the menu.
  @param KEY The keycode of the key e.g. KEY_ESCAPE
*/
FlikMenu.prototype.removeKey = function(KEY)
{
  for(var i = 0; i < this.keys.length; ++i)
  {
    if(this.keys[i].name == KEY)
    {
      this.keys[i] = this.keys.slice(0, i).concat(this.keys.slice(i+1, this.keys.length));
    }
  }
}

FlikMenu.prototype.addMouseButton = function(BUTTON, action, delay)
{
  this.mouseButtons[this.mouseButtons.length] = new Object();
  this.mouseButtons[this.mouseButtons.length - 1].name = BUTTON;
  this.mouseButtons[this.mouseButtons.length - 1].action = action;
  if(!IsNumber(delay))
    delay = this.mouse_button_delay;
  this.mouseButtons[this.mouseButtons.length - 1].delay = delay;
  this.mouseButtons[this.mouseButtons.length - 1].lastPressed = GetTime();
}

FlikMenu.prototype.removeMouseButton = function(BUTTON)
{
  for(var i = 0; i < this.keys.length; ++i)
  {
    if(this.mouseButtons[i].name == BUTTON)
    {
      this.mouseButtons[i] = this.mouseButtons.splice(0, i);
    }
  }
}


FlikMenu.prototype.addDefaultKeys = function(up, down, left, right, select, escape)
{
  var ref = this;
  if(up == undefined)   up     = this.horizontal ? GameLeftKey  : GameUpKey;
  if(down == undefined) down   = this.horizontal ? GameRightKey : GameDownKey;
  if(left == undefined) left   = this.horizontal ? GameUpKey    : GameLeftKey;
  if(right == undefined) right = this.horizontal ? GameDownKey  : GameRightKey;
  if(select == undefined) select = GameActionKey;
  if(escape == undefined) escape = GameEscapeKey;

  this.addKey(up, function()
  {
    if(BiosKeyPressed(up))
      ref.selection -= 1;
  });

  this.addKey(down, function()
  {   
    if(BiosKeyPressed(down))
      ref.selection +=1;
  });

  this.addKey(select, function()
  {   
    if(BiosKeyPressed(select))
    {
      ref.handleSelection();
      if (ref.items.length > 0) {
        if (ref.items[ref.selection].isSelectable())
          ref.lastMenuItemReturnValue = ref.items[ref.selection].onSelection();
      }
    }
  });

  this.addKey(escape, function()
  {   
    if(BiosKeyPressed(escape))
    {
      if(ref.escapeable())
      {
        ref.done = true;
        ref.lastMenuItemReturnValue = ref.escape_function();
      }
    }
  });
}


FlikMenu.prototype.addJoypad = function(joypad_index, joypad_image)
{
  var ref = this;

  if (!IsNumber(joypad_index)) {
    return false;
  }
  
  var joypad = new Object();
  joypad.joypad_index = joypad_index;
  joypad.image = IsImage(joypad_image) ? joypad_image : GetGameJoypad();
  joypad.x = GetScreenWidth() / 2;
  joypad.y = GetScreenHeight() / 2;
  joypad.last_x = joypad.x;
  joypad.last_y = joypad.y;
  joypad.width  = joypad.image.width;
  joypad.height = joypad.image.height;
  joypad.buttons = new Array();
  joypad.has_focus = true;
  joypad.last_update = 0;

  joypad.addJoypadButton = function(JOYPAD_BUTTON, action, delay) {

    var FoundButton = false;

    if(!IsNumber(delay))
      delay = ref.joypad_delay;

    for(var i = 0; i < joypad.buttons.length; ++i)
    {
      if(joypad.buttons[i].name == JOYPAD_BUTTON)
      {
        joypad.buttons[i].action = action;
        joypad.buttons[i].delay = delay;
        FoundButton = true;
      }
    }

    if(!FoundButton)
    {
      var index = joypad.buttons.length
      joypad.buttons.push(new Object());
      joypad.buttons[index].name = JOYPAD_BUTTON;
      joypad.buttons[index].action = action;
      joypad.buttons[index].delay = delay;
      joypad.buttons[index].lastPressed = GetTime();
    }
  }
  
  this.joypads.push(joypad);

  return true;
}


FlikMenu.prototype.addDefaultJoypadButtons = function(joypad_index, select, escape)
{  
  var index = this.joypads.length;
  var ref = this;

  if( !this.addJoypad(joypad_index) )
    return false;
  
  for (var i = 0; i < this.joypads.length; ++i) {
    if (this.joypads[i].joypad_index == i) {
      index = i;
      break;
    }
  }

  var joyref = this.joypads[index];

  select = select == undefined ? 0 : select;
  escape = escape == undefined ? 2 : escape;

  this.joypads[index].addJoypadButton(select, function() {
    var button_index = -1;
    for (var i = 0; i < joyref.buttons.length; i++) {
      if (joyref.buttons[i].name == escape) {
        button_index = i;
        break;
      }
    }

    if(joyref.buttons[button_index].lastPressed + joyref.buttons[button_index].delay < GetTime()){
      var joypad_item = false ? ref.getJoypadItem(joyref.joypad_index) : ref.selection;
      if (joypad_item >= 0 && joypad_item < ref.items.length) {
        if (ref.items[joypad_item].isSelectable()) {
          ref.lastMenuItemReturnValue = ref.items[joypad_item].onSelection();
          joyref.buttons[button_index].lastPressed = GetTime();
        }
      }
    }
  });

  this.joypads[index].addJoypadButton(escape, function()
  {   
    var button_index = -1;
    for (var i = 0; i < joyref.buttons.length; i++) {
      if (joyref.buttons[i].name == escape) {
        button_index = i;
        break;
      }
    }
  
    if(joyref.buttons[button_index].lastPressed + joyref.buttons[button_index].delay < GetTime()){
      if(ref.escapeable())
      {
        ref.done = true;
        ref.lastMenuItemReturnValue = ref.escape_function();
      }
      joyref.buttons[button_index].lastPressed = GetTime();
    }
  });

  return true;
}


FlikMenu.prototype.addDefaultMouseButtons = function()
{
  var ref = this;
  this.addMouseButton(MOUSE_LEFT, function()
  {   
    if(IsMouseButtonPressed(MOUSE_LEFT))
    {
      var mouse_item = ref.getMouseItem();
      if(this.lastPressed + this.delay < GetTime()){
        if (mouse_item >= 0 && mouse_item < ref.items.length) {
          if (ref.items[mouse_item].isSelectable()) {
            ref.lastMenuItemReturnValue = ref.items[mouse_item].onSelection();
            this.lastPressed = GetTime();
          }
        }
      }
    }
  });
}


FlikMenu.prototype.defaultOnSelection = function() {
  this.done = true;
  return this.selection;
}

/**
  This is how all menu items get added.
  @param onSelection The method to call when the item being added is selected,
    invalid onSelections will be replaced with the defaultOnSelection instead.
*/
FlikMenu.prototype.add = function(x, y, item, w, h, drawMethod, highLightMethod, isSelectable, onSelection)
{
  var index = this.items.length;
  var ref = this;

  if (onSelection == undefined)
    onSelection = function() { return this.lastMenuItemReturnValue = ref.defaultOnSelection(); }

  this.items.push(new Object());
  this.items[index].x = x;
  this.items[index].y = y;
  this.items[index].item = item;
  this.items[index].width = w;
  this.items[index].height = h;
  this.items[index].drawMethod = drawMethod;
  this.items[index].highLightMethod = highLightMethod;
  this.items[index].isSelectable = isSelectable;
  this.items[index].onSelection = onSelection;  
}

/**
  This is for removing an item from the menu.
  It returns whether or not the item is removed.
  @param index The index of the item to be removed.
  @param rearrange Whether or not to rearrange the menu items afterwards.
*/
FlikMenu.prototype.remove = function(index, rearrange)
{
  if (index >= 0 && index < this.items.length) {
    this.items = this.items.splice(index, 1);
    return true;
  }
  
  return false;
}

/**
  When the selection changes, this method is called to ensure that
  menu.selection refers to a valid item.
*/
FlikMenu.prototype.handleSelection = function()
{
  if(this.selection > this.items.length - 1) {
    if (this.wrap_selection) {
      this.selection = 0;
    }
    else {
      this.selection = this.items.length - 1;
    }
  }
      
  if(this.selection < 0) {
    if (this.wrap_selection) {
      this.selection = this.items.length - 1;
    }
    else {
      this.selection = 0;
    }
  }
}

/**
  draw's the background for the menu
*/
FlikMenu.prototype.drawBackground = function() {
  if (IsImage(this.background)) {
    this.background.blit(0, 0);
  }
}

/**
  This method draws the menu within the box (px, py) -> (px+pw, py+ph).
*/
FlikMenu.prototype.draw = function(px, py, pw, ph)
{
  var x = IsNumber(px) ? px : this.x;
  var y = IsNumber(py) ? py : this.y;
  var w = IsNumber(pw) ? pw : this.width;
  var h = IsNumber(ph) ? ph : this.height;

  this.handleSelection();

  // this ensures that the items are always onscreen when drawing begins
  for (var j = 0; j < this.items.length; j++) {
    var i = this.selection;
    if(this.items[i].x >= x && (!this.cutOffWidth || this.items[i].x + this.items[i].width <= x + w))
    {
      if(this.items[i].y >= y && (!this.cutOffHeight || this.items[i].y + this.items[i].height <= y + h))
      {
        break;
      }
      else
      if(this.selection == i)
        this.whenOffScreen(x, y, w, h);
    }
    else
    if(this.selection == i)
      this.whenOffScreen(x, y, w, h);
  }

  this.shown_items = new Array();
  this.handleSelection();

  for(var i = 0; i < this.items.length; ++i)
  {  
    var selected = false;
  
    if(this.multiselection)
    {
      if(this.selectionArray.length > 0)
      for(var j = 0; j < this.selectionArray.length; ++j)
      {
        if(this.selectionArray[j] == i || this.selection == i)
        {
          selected = true;
          break;
        }
      }
      else
        { if(this.selection == i) selected = true; }
    }
    else
      if(i == this.selection) selected  = true;

    if(selected)
    {
      if(this.items[i].x >= x && (!this.cutOffWidth || this.items[i].x + this.items[i].width <= x + w))
      {
        if(this.items[i].y >= y && (!this.cutOffHeight || this.items[i].y + this.items[i].height <= y + h))
        {
          this.shown_items.push(i);
          this.items[i].highLightMethod();
        }
        else
          if(this.selection == i)
            this.whenOffScreen(x, y, w, h);
      }
      else
       if(this.selection == i)  
         this.whenOffScreen(x, y, w, h);
      
    }
    else
    {
      if((this.items[i].x >= x) && (!this.cutOffWidth || (this.items[i].x + this.items[i].width) <= (x + w)))
      {
        if((this.items[i].y >= y) && (!this.cutOffHeight || (this.items[i].y + this.items[i].height) <= (y + h)))
        {
          this.shown_items.push(i);
          this.items[i].drawMethod();
        }
      }
    }
  }

}

/**
  menu.preRender is called just before menu.draw is.
  Use this function to draw backgrounds.
*/
FlikMenu.prototype.preRender = function()
{

}


FlikMenu.prototype.defaultPreRender = function()
{
  this.drawBackground();
  var width = true ? Math.min(this.width, this.getWidth()) : this.width;
  var height = true ? Math.min(this.height, this.getHeight()) : this.height;
  
  this.getWindowStyle().drawWindow(this.x, this.y, width, height);
}

FlikMenu.prototype.handleKeys = function()
{
  if (!this.has_key_focus)
    return;

  if(this.keys.length == 0)
    this.addDefaultKeys();

  for(var i = 0; i < this.keys.length; ++i)
  {
    if(BiosKeyPressed(this.keys[i].name))
    {
      this.keys[i].action();
    }
  }

  this.handleSelection();

  ClearKeyQueue();
}

FlikMenu.prototype.drawMouse = function() {
  if(this.mouseSupport) {
    this.getMouse().blit(GetMouseX(), GetMouseY());
  }
}

FlikMenu.prototype.drawJoypads = function() {
  if(this.joypadSupport && this.has_joystick_focus && false) {
    for (var i = 0; i < this.joypads.length; ++i) {
      this.joypads[i].image.blit(this.joypads[i].x, this.joypads[i].y);
    }
  }
}

/**
  Returns the menu item index that the mouse cursor is currently hovering over.
  Returns -1 if there is no item under the mouse cursor.
*/
FlikMenu.prototype.getMouseItem = function() {

  var mouseOverItem = -1;

  // check items to see if mouse is hovering, set MouseOverItem = selection
  for(var i = 0; i < this.items.length; ++i)
  {
    if(GetMouseX() > this.items[i].x && GetMouseX() < this.items[i].x + this.items[i].width)
    {
      if(GetMouseY() > this.items[i].y && GetMouseY() < this.items[i].y + this.items[i].height)
      {
        mouseOverItem = i;
      }
    }
  }

  return mouseOverItem;
}


FlikMenu.prototype.getJoypadItem = function(joypad_index) {

  var joypadOverItem = -1;

  // check items to see if joypad is hovering, set joypadOverItem = selection
  for(var j = 0; j < this.items.length; ++j)
  {
    if(this.joypads[joypad_index].x > this.items[j].x && this.joypads[joypad_index].x < this.items[j].x + this.items[j].width)
    {
      if(this.joypads[joypad_index].y > this.items[j].y && this.joypads[joypad_index].y < this.items[j].y + this.items[j].height)
      {
        joypadOverItem = j;
      }
    }
  }

  return joypadOverItem;
}

FlikMenu.prototype.handleMouse = function(px, py, pw, ph)
{
  if (!this.has_mouse_focus)
    return;

  var x = IsNumber(px) ? px : this.x;
  var y = IsNumber(py) ? py : this.y;
  
  var w = IsNumber(pw) ? pw : this.width;
  var h = IsNumber(ph) ? ph : this.height;

  if(this.mouseSupport)
  {
    var mouse_moved = false;

    if(this.mouseX != GetMouseX() || this.mouseY != GetMouseY())
    {
      this.mouseX = GetMouseX();
      this.mouseY = GetMouseY();
      mouse_moved = true;  
    } // if mouse moved...

    if(false)
    {
      if(GetMouseX() < x || GetMouseY() < y)
        mouse_moved = false;
      if(GetMouseX() > x + w || GetMouseY() > y + h)
        mouse_moved = false;
    }

    var mouse_item = this.getMouseItem();
    if(mouse_moved) { 
      if (mouse_item >= 0 && mouse_item < this.items.length) {
        this.selection = mouse_item;
      }
    }

    for(var i = 0; i < this.mouseButtons.length; ++i)
    {
      if(IsMouseButtonPressed(this.mouseButtons[i].name))
      {
         this.mouseButtons[i].action();
      }
    }

  }
}


FlikMenu.prototype.handleJoypads = function(px, py, pw, ph)
{
  var x = IsNumber(px) ? px : this.x;
  var y = IsNumber(py) ? py : this.y;
  
  var w = IsNumber(pw) ? pw : this.width;
  var h = IsNumber(ph) ? ph : this.height;

  if(this.joypadSupport && this.has_joystick_focus)
  {
    for (var i = 0; i < this.joypads.length; ++i) {

      if (this.joypads[i].joypad_index < 0 || this.joypads[i].joypad_index >= GetNumJoysticks())
        continue;

      var dx = Math.round(GetJoystickX(this.joypads[i].joypad_index));
      var dy = Math.round(GetJoystickY(this.joypads[i].joypad_index));

      this.joypads[i].x += dx
      this.joypads[i].y += dy

      if (!this.joypads[i].has_focus)
        continue;

      var joypad_moved = false;

      if(Math.round(this.joypads[i].x) != Math.round(this.joypads[i].last_x)
      || Math.round(this.joypads[i].y) != Math.round(this.joypads[i].last_y))
      {
        joypad_moved = true;
      } // if joypad moved...

      if(false)
      {
        if(Math.round(this.joypads[i].x) < Math.round(x) || Math.round(this.joypads[i].y) < Math.round(y))
          joypad_moved = false;
        if(Math.round(this.joypads[i].x) > Math.round(x + w) || Math.round(this.joypads[i].y) > Math.round(y + h))
          joypad_moved = false;
      }

      if (false) {
        if (joypad_moved) {
          var joypad_item = this.getJoypadItem(i);
          if (joypad_item >= 0 && joypad_item < this.items.length) {
            this.selection = joypad_item;
          }
        }
      } else {
        if (this.joypads[i].last_update + 200 < GetTime()) {
          if (dy > 0)
            this.selection++;
          else if (dy < 0)
            this.selection--;
          this.joypads[i].last_update = GetTime();
        }
      }
    
      for(var k = 0; k < this.joypads[i].buttons.length; ++k)
      {
        if (this.joypads[i].joypad_index >= 0 && this.joypads[i].joypad_index < GetNumJoystickButtons(this.joypads[i].joypad_index))
        {
          if(IsJoystickButtonPressed(this.joypads[i].joypad_index, this.joypads[i].buttons[k].name))
          {
            this.joypads[i].buttons[k].action();
          }
        }
      }
      
      this.joypads[i].last_x = this.joypads[i].x;
      this.joypads[i].last_y = this.joypads[i].y;      
    }
  }
}

/**
  menu.postRender is called just after menu.draw is.
  Use this function to draw foregrounds, and anything ontop of the menu.
*/
FlikMenu.prototype.postRender = function()
{

}

/**
  A non-blocking version of FlikMenu.execute
  @param selection The menu item selection to use, can be omitted.
  @see FlikMenu.execute
*/
FlikMenu.prototype.go = function(px, py, pw, ph, selection)
{
  var x = IsNumber(px) ? px : this.x;
  var y = IsNumber(py) ? py : this.y;
  var w = IsNumber(pw) ? pw : this.width;
  var h = IsNumber(ph) ? ph : this.height;

  if (IsNumber(selection))
    this.selection = selection;

  if(!this.done)
  {
    this.draw(x, y, w, h);
    this.drawMouse();
    this.drawJoypads();

    this.handleKeys();
    this.handleMouse(x, y, w, h);
    this.handleJoypads(x, y, w, h);
  }
}

/**
  The method called to execute the menu within the box (x, y) -> (x+w, y+h).
  It returns the last return value of the last selected item.  
*/
FlikMenu.prototype.execute = function(px, py, pw, ph)
{
  var x = IsNumber(px) ? px : this.x;
  var y = IsNumber(py) ? py : this.y;  
  var w = IsNumber(pw) ? pw : this.width;
  var h = IsNumber(ph) ? ph : this.height;

  ClearKeyQueue();

  var time = GetTime() + 100;

  while(!this.done)
  {
    this.preRender();
    this.draw(x, y, w, h);
    this.postRender();
    this.drawMouse();
    this.drawJoypads();

    time = GetTime() + 100;

    this.handleKeys();
    this.handleMouse(x, y, w, h);
    this.handleJoypads(x, y, w, h);
    
    // redraw if dealing with the keys takes too long
    if (!this.done && time < GetTime()) {
      this.preRender();
      this.draw(x, y, w, h);
      this.postRender();
      this.drawMouse();
      this.drawJoypads();
    }

    FlipScreen();
  }

  return this.lastMenuItemReturnValue;
}

/**
  This method is called when an item is off the screen.
  It is used to reposition the menu items onscreen.
*/
FlikMenu.prototype.whenOffScreen = function(px, py, pw, ph)
{
  // find the lowest width and height
  var x = IsNumber(px) ? px : this.x;
  var y = IsNumber(py) ? py : this.y;
  var w = IsNumber(pw) ? pw : this.width;
  var h = IsNumber(ph) ? ph : this.height;

  var width  = 0;
  var height = 0;
  
  if (this.items.length > 0) {
    width = this.items[0].width;
    height = this.items[0].height;  
  }

  for (var i = 0; i < this.items.length; ++i) {
    if (this.items[i].width < width)
      width = this.items[i].width;
      
    if (this.items[i].height < height)
      height = this.items[i].height;
  }

  var x_speed = this.smooth_scrolling ? 1 : (width > 0 ? width: 0);
  var y_speed = this.smooth_scrolling ? 1 : (height > 0 ? height : 0);
  
  // move down
  if(this.items[this.selection].y + this.items[this.selection].height > y + h) {
     for(var i = 0; i < this.items.length; ++i) {
       this.items[i].y -= y_speed;
     }
  }

  // move up    
  if(this.items[this.selection].y < y) {
    for(var i = 0; i < this.items.length; ++i) {
      this.items[i].y +=  y_speed;
    }
  }

  // move right
  if(this.items[this.selection].x + this.items[this.selection].width > x + w) {
    for(var i = 0; i < this.items.length; ++i) {
      this.items[i].x -=  x_speed;
    }
  }

  // move left
  if(this.items[this.selection].x < x) {
    for(var i = 0; i < this.items.length; ++i) {
      this.items[i].x += x_speed;
    }
  }
}

/**
  This returns the x value that the next menu item will be added at.
*/
FlikMenu.prototype.getNextX = function()
{
  var x = this.x;
  if(this.items.length > 0)
  {
    x = this.items[this.items.length - 1].x;

    if (this.horizontal) {
      x += this.items[this.items.length - 1].width;
      x += this.hspace;
    }
  }
  return x;
}

/**
  This returns the y value that the next menu item will be added at.
*/
FlikMenu.prototype.getNextY = function()
{
  var y = this.y;
  if(this.items.length > 0)
  {
    y = this.items[this.items.length - 1].y;

    if (this.vertical) {
      y += this.items[this.items.length - 1].height;      
      y += this.vspace;
    }
  }
  return y;
}


///////////////////////////////////////////////////////////////
// Extension methods
///////////////////////////////////////////////////////////////

/**
  FlikMenu.addText adds 'text' to the menu at the next spot in the menu.
  @param text The text to be added.
*/
FlikMenu.prototype.addText = function(text, action, font, color, highlightcolor, pointer)
{
  var obj = new Object();
  obj.font = IsFont(font) ? font : this.getFont();
  obj.pointer = IsImage(pointer) ? pointer : this.getArrow();
  obj.color = IsColor(color) ? color : NonactiveColor;
  obj.highlightcolor = IsColor(highlightcolor) ? highlightcolor : ActiveColor;
  obj.text = text;
  
  var x = this.getNextX();
  var y = this.getNextY();

  this.add(x,y, obj, obj.pointer.width + obj.font.getStringWidth(obj.text), obj.font.getHeight(),
  function(){
    var color = (this.isSelectable()) ? this.item.color : UnselectableColor;
    this.item.font.setColorMask(color);
    this.item.font.drawText(this.x  + this.item.pointer.width, this.y, this.item.text);
    this.item.font.setColorMask(this.item.color);
  },
  function(){
    var color = (this.isSelectable()) ? this.item.highlightcolor : UnselectableColor;
    this.item.pointer.blit(this.x, this.y);
    this.item.font.setColorMask(color);
    this.item.font.drawText(this.x + this.item.pointer.width, this.y, this.item.text);
    this.item.font.setColorMask(this.item.color);
  }, function(){ return true; }, action);

  return true;
}

/**
  FlikMenu.addTextBox adds 'text' to the menu at the next spot in the menu.
  @param text The text to be added.
  @param text_width The width of which the text should be word-wrapped at.
*/
FlikMenu.prototype.addTextBox = function(text, action, text_width, font, color, highlightcolor, pointer)
{
  var o = new Object();
  o.font = IsFont(font) ? font : this.getFont();
  o.pointer = IsImage(pointer) ? pointer : this.getArrow();
  o.color = color ? IsColor(color) : NonactiveColor;
  o.highlightcolor = IsColor(highlightcolor) ? highlightcolor : ActiveColor;
  o.text = text;
  o.text_width = IsNumber(text_width) ? text_width : o.font.getStringWidth(o.text);

  var x = this.getNextX();
  var y = this.getNextY();

  this.add(x,y, o, o.pointer.width + o.text_width, o.font.getStringHeight(o.text, o.text_width),
  function(){ this.item.font.drawTextBox(this.x + this.item.pointer.width, this.y, this.item.text_width, this.height, 0, this.item.text); },
  function(){
    this.item.pointer.blit(this.x, this.y);
    this.item.font.setColorMask(this.item.highlightcolor);
    this.item.font.drawTextBox(this.x + this.item.pointer.width, this.y, this.item.text_width, this.height, 0, this.item.text);
    this.item.font.setColorMask(this.item.color);
  }, function(){ return true; }, action);

  return true;
}

/**
  FlikMenu.addImage adds 'image' to the menu at the next spot in the menu.
  @param image The image object to be added.
*/
FlikMenu.prototype.addImage = function(image, action, normaltint, highlighttint, pointer)
{
  var o = new Object();
  o.pointer = IsImage(pointer) ? pointer : this.getArrow();
  o.normaltint = IsColor(normaltint) ? normaltint : NonactiveColor;
  o.highlighttint = IsColor(highlighttint) ? highlighttint : ActiveColor;
  o.image = image;
  
  if (!IsImage(o.image))
    return false;

  var x = this.getNextX();
  var y = this.getNextY();
    
  this.add(x,y, o, o.pointer.width + o.image.width, o.image.height,
    function(){ this.item.image.blitMask(this.x + this.item.pointer.width, this.y, this.item.normaltint); },
    function(){
      this.item.pointer.blit(this.x, this.y);
      this.item.image.blitMask(this.x + this.item.pointer.width, this.y, this.item.highlighttint);
    }, function(){ return true;}, action);
    
  return true;
}

/**
  FlikMenu.addSpriteset adds an animated 'spriteset' to the menu,
  at the next spot in the menu.
  @param spriteset The spriteset to be added.
  @param text The text to be added.
  @param space The space between the spriteset and the text.
*/
FlikMenu.prototype.addSpriteset = function(spriteset, action, normaltint, highlighttint, text, font, space, pointer)
{
  pointer = IsImage(pointer) ? pointer : this.getArrow();
  normaltint = IsColor(normaltint) ? normaltint : NonactiveColor;
  highlighttint = IsColor(highlighttint) ? highlighttint : ActiveColor;
  font = IsFont(font) ? font : this.getFont();
  space = IsNumber(space) ? space : 0;

  if (!IsSpriteset(spriteset))
    return false;

  var sprite = new Object();
  sprite.spriteset = spriteset;
  sprite.text = text;
  sprite.font = font;
  sprite.frame_index = 0;
  sprite.direction_index = 0;
  sprite.lastOccurance = 0;
  sprite.delay = sprite.spriteset.directions[sprite.direction_index].frames[sprite.frame_index].delay * 10;
  sprite.pointer = pointer;
  sprite.normaltint = normaltint ? normaltint : NonactiveColor;
  sprite.highlighttint = highlighttint ? highlighttint : ActiveColor;

  var x = this.getNextX();
  var y = this.getNextY();
  var width = pointer.width + sprite.spriteset.images[sprite.spriteset.directions[sprite.direction_index].frames[0].index].width
            + space + sprite.font.getStringWidth(sprite.text);
  var height = Math.max(sprite.spriteset.images[sprite.spriteset.directions[sprite.direction_index].frames[0].index].height,
                        sprite.font.getStringHeight(sprite.text, this.width));
    
  this.add(x,y, sprite, width, height,
    function(){
      if(this.item.lastOccurance + this.item.delay <= GetTime()){
        this.item.lastOccurance = GetTime();
        this.item.delay = this.item.spriteset.directions[this.item.direction_index].frames[this.item.frame_index].delay * 10;
        if(++this.item.frame_index >= this.item.spriteset.directions[this.item.direction_index].frames.length)
          this.item.frame_index = 0;
      }

      var index = this.item.spriteset.directions[this.item.direction_index].frames[this.item.frame_index].index;
      this.item.spriteset.images[index].blitMask(this.x + pointer.width, this.y, normaltint);
      if(this.item.text != undefined)
        this.item.font.drawText(this.x + pointer.width + space, this.y, this.item.text);
    },
    function(){
      if(this.item.lastOccurance + this.item.delay <= GetTime()){
        this.item.lastOccurance = GetTime();
        this.item.delay = this.item.spriteset.directions[this.item.direction_index].frames[this.item.frame_index].delay * 10;
        if(++this.item.frame_index >= this.item.spriteset.directions[this.item.direction_index].frames.length)
          this.item.frame_index = 0;
      }
      if(this.item.text != undefined)
      {
        this.item.font.setColorMask(highlighttint);
        this.item.font.drawText(this.x + pointer.width + space, this.y, this.item.text);
        this.item.font.setColorMask(normaltint);
      }
      
      this.item.pointer.blit(this.x, this.y);
      var index = this.item.spriteset.directions[this.item.direction_index].frames[this.item.frame_index].index;
      this.item.spriteset.images[index].blitMask(this.x + pointer.width, this.y, highlighttint);
    }, function(){ return true; }, action);

  return true;
}

/**
  FlikMenu.addTextGradient adds 'text' with a gradient background color effect,
  to the menu at the next spot in the menu.
  @param text The text to be added.
  @param backgroundcolor The color of the gradient background.
*/
FlikMenu.prototype.addTextGradient = function(text, action, fontcolor, activefontcolor, backgroundcolor, font, pointer)
{
  var x = this.getNextX();
  var y = this.getNextY();

  var woo = new Object();
  woo.font = IsFont(font) ? font : this.getFont();
  woo.text = text;
  woo.fontcolor = IsColor(fontcolor) ? fontcolor : CreateColor(255,255,255);
  woo.activefontcolor = IsColor(activefontcolor) ? activefontcolor : CreateColor(0,255,255);
  woo.pointer = IsImage(pointer) ? pointer : this.getArrow();
  backgroundcolor = IsColor(backgroundcolor) ? backgroundcolor : CreateColor(255,0,0); 
  
  woo.fadeCounter = 0;
  woo.fadeDirection = 1;
  woo.r = backgroundcolor.red;
  woo.g = backgroundcolor.green;
  woo.b = backgroundcolor.blue;

  this.add(x, y, woo, woo.font.getStringWidth(woo.text) + woo.pointer.width, woo.font.getHeight(), function(){
    this.item.font.drawText(this.x + this.item.pointer.width, this.y, this.item.text);
  }, function(){
    GradientRectangle(this.x + this.item.pointer.width,
                      this.y,
                      this.item.font.getStringWidth(this.item.text),
                      this.item.font.getHeight(),
                      CreateColor(this.item.r, this.item.g, this.item.b, this.item.fadeCounter),
                      CreateColor(this.item.r, this.item.g, this.item.b, -this.item.fadeCounter),
                      CreateColor(this.item.r, this.item.g, this.item.b, -this.item.fadeCounter),
                      CreateColor(this.item.r, this.item.g, this.item.b, this.item.fadeCounter));

    this.item.pointer.blit(this.x, this.y);
    this.item.font.setColorMask(this.item.activefontcolor);
    this.item.font.drawText(this.x + this.item.pointer.width, this.y, this.item.text);
    this.item.font.setColorMask(this.item.fontcolor);

    if(this.item.fadeDirection == 1)
      this.item.fadeCounter+=2;
    else
      this.item.fadeCounter-=2;
    if(this.item.fadeCounter > 255)
    {
      this.item.fadeDirection = -1;
      this.item.fadeCounter = 255;
    }
    if(this.item.fadeCounter < 0)
    {
      this.item.fadeDirection = 1;
      this.item.fadeCounter = 0;
    }
  }, function(){ return true; }, action);

  return true;
}

/**
  FlikMenu.addTextWindowStyle adds 'text'
  using 'windowstyle' as a background for the text,
  to the menu at the next spot in the menu.
  @param text The text to be added.
  @param windowstyle The windowstyle background to be used.
*/
FlikMenu.prototype.addTextWindowStyle = function(text, action, fontcolor, activefontcolor, windowstyle, font, pointer)
{
  var x = this.getNextX();
  var y = this.getNextY();

  var woo = new Object();
  woo.font = IsColor(font) ? font : this.getFont();
  woo.text = text;
  woo.fontcolor = IsColor(fontcolor) ? fontcolor : NonactiveColor;
  woo.activefontcolor = IsColor(activefontcolor) ? activefontcolor : ActiveColor;
  woo.pointer = IsImage(pointer) ? pointer : this.getArrow();
  woo.windowstyle = IsWindowStyle(windowstyle) ? windowstyle : this.getWindowStyle();
  
  this.add(x, y, woo, woo.font.getStringWidth(woo.text) + woo.pointer.width, woo.font.getHeight(), function(){
    this.item.font.setColorMask(color);
    this.item.font.drawText(this.x + this.item.pointer.width, this.y, this.item.text);
    this.item.font.setColorMask(this.item.fontcolor);
  }, function(){
    this.item.windowstyle.drawWindow(this.x, this.y, this.width, this.height);
    this.item.pointer.blit(this.x, this.y);
    this.item.font.setColorMask(this.item.activefontcolor);
    this.item.font.drawText(this.x + this.item.pointer.width, this.y, this.item.text);
    this.item.font.setColorMask(this.item.fontcolor);
  }, function(){ return true; }, action);

  return true;
}

FlikMenu.prototype.defaultMouseSupport = function(support, image, defaultbuttons)
{
  if (IsImage(image))
    this.mouse = image;

  this.mouseSupport = support;

  if(this.mouseSupport)
    this.addDefaultMouseButtons();
}

/**
  Returns the lowest x value currently being used by the menu.
*/
FlikMenu.prototype.getX = function()
{
  var x = this.x;
  
  for(var i = 0; i < this.items.length; ++i)
  {
    if(this.items[i].x < x)
      x = this.items[i].x;
  }
  
  return x;
}

/**
  Returns the lowest x value currently being used by the menu.
*/
FlikMenu.prototype.getY = function()
{
  var y = this.y;

  for(var i = 0; i < this.items.length; ++i)
  {
    if(this.items[i].y < y)
      y = this.items[i].y;
  }

  return y;
}

/**
  Returns the dynamic width of the menu.
*/
FlikMenu.prototype.getWidth = function()
{
  var x = this.getX();
  var CurrentWidth = 0;
  for(var i = 0; i < this.items.length; ++i)
  {
    if(this.items[i].x + this.items[i].width - x > CurrentWidth)
    {
      CurrentWidth = this.items[i].x + this.items[i].width - x;
    }
  }

  return CurrentWidth;
}


/**
  Returns the dynamic height of the menu.
*/
FlikMenu.prototype.getHeight = function()
{
  var y = this.getY();
  var CurrentHeight = 0;
  for(var i = 0; i < this.items.length; ++i)
  {
    if(this.items[i].y + this.items[i].height - y > CurrentHeight)
    {
      CurrentHeight = this.items[i].y + this.items[i].height - y;
    }
  }

  return CurrentHeight;
}

/**
  Sets the dynamic width of the menu
*/
FlikMenu.prototype.setWidth = function(pwidth)
{
  this.width  = IsNumber(pwidth)  ? (pwidth)  : (GetScreenWidth()  - (this.x * 2));
}

/**
  Sets the dynamic height of the menu
*/
FlikMenu.prototype.setHeight = function(pheight)
{
  this.height = IsNumber(pheight) ? (pheight) : (GetScreenHeight() - (this.y * 2));
}

/*
// doesn't quite work correctly when columns are equal sizes
FlikMenu.prototype.configureKeysForRows = function(rows)
{
  var ref = this;
  this.addKey(KEY_LEFT, function(){ ref.selection -= 1; });
  this.addKey(KEY_RIGHT, function(){ ref.selection += 1; });
  
  this.addKey(KEY_UP, function(){
    var OldSelection = ref.selection;
    ref.selection -= rows;
    if (ref.selection < 0)
    {
      if (ref.wrap_selection) {
        ref.selection = ref.items.length - Math.abs(ref.selection);
      }
      else {
        ref.selection = OldSelection;
      }
    }
  });
  
  this.addKey(KEY_DOWN, function(){
    var OldSelection = ref.selection;
    ref.selection += rows;
    if(ref.selection >= ref.items.length) {
      if (ref.wrap_selection) {
        ref.selection -= ref.items.length;
      }
      else {
        ref.selection = OldSelection;
      }
    }

  });
}
*/


///////////////////////////////////////////////////////////////
// Animation methods
///////////////////////////////////////////////////////////////

/**
  Slides the menu from (sx, sy) to (ex, ey) over 'time' milliseconds.
  Note that it repositions the menu at (sx, sy) before the slide.
*/
FlikMenu.prototype.slide = function (sx, sy, ex, ey, time) {

  var old_x = this.x;
  var old_y = this.y;

  this.x = sx;
  this.y = sy;

  for (var i = 0; i < this.items.length; ++i) {
    this.items[i].x = sx + (this.items[i].x - old_x);
    this.items[i].y = sy + (this.items[i].y - old_y);
  }

  var x_diff = ex - sx;
  var y_diff = ey - sy;
  
  var original_x_array = new Array();
  var original_y_array = new Array();

  for (var i = 0; i < this.items.length; ++i) {
    original_x_array[i] = this.items[i].x;
    original_y_array[i] = this.items[i].y;
  }

  var start = GetTime();
  while (start + time > GetTime()) {
    var time_passed = GetTime() - start;

    var x_offset = 0; 
    var y_offset = 0;
    if (time) {
      x_offset = time_passed / time * x_diff;
      y_offset = time_passed / time * y_diff;
    }
    
    this.x = sx + x_offset;
    this.y = sy + y_offset;
    
    for (var i = 0; i < this.items.length; ++i) {
      this.items[i].x = original_x_array[i] + x_offset;
      this.items[i].y = original_y_array[i] + y_offset;
    }
    
    this.preRender();
    this.draw();
    FlipScreen();
  }
  
  for (var i = 0; i < this.items.length; ++i) {
    this.items[i].x = x_diff + original_x_array[i];
    this.items[i].y = y_diff + original_y_array[i];
  }

  this.x = ex;
  this.y = ey;
}

/*

FlikMenu.prototype.addBattlePointer = function(target_list, action, pointer)
{
  var o = new Object();
  o.pointer = (pointer == undefined ? this.getArrow() : pointer);
  o.target_list = target_list;

  var x = 0;
  var y = 0;
  var width = 0;
  var height = 0;

  if (target_list.length > 1) // array of targets
  {
   x = g_entities[target_list[0]].x;
   y = g_entities[target_list[0]].y;
  } 
  else // only one
  {
    x = g_entities[target_list[0]].x;
    y = g_entities[target_list[0]].y;
    width = g_entities[target_list[0]].width;
    height = g_entities[target_list[0]].height;
  }
  
  var ref = this;
  
  this.add(x, y, o, width, height,
  function(){  },
  function(){
    for(var j = 0; j < this.item.target_list.length; ++j)
    {
      this.item.pointer.blit(g_entities[this.item.target_list[j]].x - this.item.pointer.width, g_entities[this.item.target_list[j]].y);
    }
  }, function(){ return true; }, action);
}





FlikMenu.prototype.init_ring_menu = function(center_x, center_y)
{
  this.angle_difference = 360 / this.items.length;
  this.radius = 50;
  this.end_angle = 0;
  this.angle = 0;
  this.perspective = 2;
  this.rotation_speed = 2;
  this.center_x = center_x;
  this.center_y = center_y;

  this.recalculate_ring_menu_positions(this.center_x, this.center_y, this.angle);

  var ref = this;

  this.postRender = function(){
    this.getArrow().blit(ref.center_x - this.getArrow().width, ref.center_y + ref.radius / ref.perspective);
  }


  this.addKey(KEY_UP, function()
  {
    if(BiosKeyPressed(KEY_UP))
    {
      ref.end_angle = (ref.angle - 360 / ref.items.length) % 360;
      ref.end_angle += 720;	// to get around that stupid wrap-around junk
      while (ref.angle < ref.end_angle) ref.angle += 360;	// x_x

      do
      {
        ref.recalculate_ring_menu_positions(ref.center_x, ref.center_y, ref.angle);
        ref.preRender();
        ref.draw();
        ref.postRender();
        FlipScreen();

        ref.angle -= ref.rotation_speed;
      } while (ref.angle > ref.end_angle);

      ref.angle = (ref.end_angle + 720) % 360;

      ref.selection -= 1;
      if (ref.selection < 0)
        ref.selection = ref.items.length - 1;
    }
  });

  ref.addKey(KEY_DOWN, function()
  {
    if(BiosKeyPressed(KEY_DOWN))
    {
      ref.end_angle = (ref.angle + 360 / ref.items.length) % 360;
      ref.end_angle += 720;
      ref.angle += 720; // to get around that stupid wrap-around junk

   	  while (ref.angle > ref.end_angle) ref.angle -= 360;	// x_x

      do
      {
        ref.recalculate_ring_menu_positions(120, 120, ref.angle);
        ref.preRender();
        ref.draw();
        ref.postRender();
        FlipScreen();

        ref.angle += ref.rotation_speed;
      } while (ref.angle < ref.end_angle);

      ref.angle = (ref.end_angle + 720) % 360;

      ref.selection += 1;
      if (ref.selection > ref.items.length - 1)
        ref.selection = 0;
    }
  });

}

FlikMenu.prototype.recalculate_ring_menu_positions = function(center_x, center_y, theta)
{
  for (var i = 0; i < this.items.length; ++i)
  {
    theta += 90;

    this.items[i].x = this.radius * Math.cos((theta + this.angle_difference * i) * Math.PI/180);
    this.items[i].y = this.radius * Math.sin((theta + this.angle_difference * i) * Math.PI/180);
    this.items[i].y /= this.perspective;

    this.items[i].x += center_x;
    this.items[i].y += center_y;

  }
}

*/
