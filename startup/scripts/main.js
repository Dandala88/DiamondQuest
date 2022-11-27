EvaluateScript("flik_menu.js");

///////////////////////////////////////////////////////////

function DoesGameExist(directory)
{
  var game_list = GetGameList();
  for (var i = 0; i < game_list.length; ++i)
    if (game_list[i].directory == directory)
      return true;
  return false;
}

///////////////////////////////////////////////////////////

function DrawClock(center_x, center_y, x_radius, y_radius, scale, date)
{
  var angle_offset = (Math.PI / 6);
  var base_angle = (-Math.PI / 2) + angle_offset;
  var theta = base_angle;

  center_x = typeof(center_x) == "number" ? center_x : GetScreenWidth() / 2;
  center_y = typeof(center_y) == "number" ? center_y : GetScreenHeight() / 2;
  x_radius = typeof(x_radius) == "number" ? x_radius : 50;
  y_radius = typeof(y_radius) == "number" ? y_radius : x_radius;
  date  = date instanceof(Date) ? date : new Date;
  scale = typeof(scale) == "Number" ? scale : 1;

  for (var i = 0; i < 12; i++) {
    var x = center_x + Math.cos(theta) * x_radius;
    var y = center_y + Math.sin(theta) * y_radius;
    Line(center_x, center_y, x, y, CreateColor(100, 200, 100));
    var str = 1 + i;
    var str_width = GetSystemFont().getStringWidth(str) * scale;
    var str_height = GetSystemFont().getStringHeight(str, str_width) * scale;
    GetSystemFont().drawZoomedText(x - (str_width / 2), y - (str_height / 2), scale, 1 + i);
    theta += angle_offset;
  }

  var sec_angle  = base_angle - angle_offset + date.getUTCSeconds() * ((2 * Math.PI) / 60);
  var min_angle  = base_angle - angle_offset + date.getUTCMinutes() * ((2 * Math.PI) / 60);
  var hour_angle = base_angle - angle_offset + Math.abs(date.getUTCHours() - 12) * ((2 * Math.PI) / 12) + (min_angle / 6);

  Line(center_x, center_y, center_x + Math.cos(hour_angle) * x_radius, center_y + Math.sin(hour_angle) * y_radius, CreateColor(255, 255, 0));
  Line(center_x, center_y, center_x + Math.cos(min_angle)  * x_radius, center_y + Math.sin(min_angle)  * y_radius, CreateColor(255, 255, 0));
  Line(center_x, center_y, center_x + Math.cos(sec_angle)  * x_radius, center_y + Math.sin(sec_angle)  * y_radius, CreateColor(255, 0, 255));

  return true;
}

///////////////////////////////////////////////////////////

function GameListMenu() {
  var game_list = GetGameList();

  var menu = DefaultMenu(48, 38, GetScreenWidth() - (48 * 2), (GetScreenHeight() / 6) * 3);
      menu.setWindowStyle(LoadWindowStyle("windowstyle.rws"));

      menu.setArrow(LoadImage("flik_pointer.png"));
      menu.hspace = 2;
      menu.addDefaultKeys();
      menu.cutOffWidth = false;
        
      menu.addKey(KEY_PAGEUP, function() { menu.selection -= 10; if (menu.selection < 0) menu.selection = 0; });
      menu.addKey(KEY_PAGEDOWN, function() { menu.selection += 10; if (menu.selection >= menu.items.length - 1) menu.selection = menu.items.length - 1; });

  if (game_list.length == 0) {
    menu.addText("No games detected.", Exit);
  }
  else {

    var up_arrow   = LoadImage("up_arrow.png");
    var down_arrow = LoadImage("down_arrow.png");

    var info_x = 32;
    var info_y = GetScreenHeight() - (menu.getFont().getHeight() * 5);
    var info_w = GetScreenWidth() - 64;
    var info_h = menu.getFont().getHeight() * 4;
    var info_year = new Date().getUTCFullYear();

    var sphere_str = "Sphere " + GetVersion() + " 1997->" + info_year + " " + GetVersionString() + " ";

    var arrow_x = menu.x + menu.width - Math.max(up_arrow.width, down_arrow.width) - 16;
    var up_arrow_y = menu.y;
    var down_arrow_y = menu.y + menu.height - down_arrow.height;
    
    var current_item = -1;
    var info_str = "";

    var game_list_str = "Game list";
    var game_list_x = menu.x + 16;
    var game_list_y = menu.y - 16;
    
        menu.postRender = function() {
        
          if (current_item != menu.selection) {
            var game_author =    game_list[menu.selection].author;
            var game_directory = game_list[menu.selection].directory;
            var game_info = "/" + game_directory + "\n" + game_author;
            info_str = sphere_str + game_info;
            current_item = menu.selection;
          }

          menu.getFont().drawText(game_list_x, game_list_y, game_list_str);
 
          menu.getFont().drawText(8, 10, sphere_str);
 
          menu.getWindowStyle().drawWindow(info_x, info_y, info_w, info_h);
          menu.getFont().drawTextBox(info_x, info_y, info_w, info_h, 0, info_str);

          if (menu.shown_items[0] > 0)
            up_arrow.blit(arrow_x, up_arrow_y);
            
          if (menu.shown_items[menu.shown_items.length - 1] < menu.items.length - 1)
            down_arrow.blit(arrow_x, down_arrow_y);
            
          DrawClock(menu.x + menu.width - 30, menu.y + 30, 30, 30, new Date());
          
        }

    for (var i = 0; i < game_list.length; ++i) {
      menu.addText(game_list[i].name, function() {
        if (DoesGameExist(game_list[menu.selection].directory)) {
          ExecuteGame(game_list[menu.selection].directory);
        }
      });
    }
  }

  return menu;
}

///////////////////////////////////////////////////////////

function game(test)
{
  GameListMenu().execute();
}

///////////////////////////////////////////////////////////

