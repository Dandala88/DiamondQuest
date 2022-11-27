var pickup = false;
var magnifyingGlass = false;
var numSuit = 1;
var keyTotal = 0;
var matches = 0;
var time = 0;
var Time = false;
var timeR = 0;
var tileX = 0;
var tileY = 0;
var underwater = false;
var waterLevel = 2;
var wrench = false;
var rhombus = false;
var telescope = false;
var rockk = false;
var waterk = false;
var firek = false;
var boxofmatches = false;
var launching = false;
var outOfHeaven = "room.rmp";
var shadowKey = false;
var lightKey = false;
var a = "";var b = "";var c = "";
var d = "";var e = "";var f = "";
var g = "";
SetUpdateScript("us()");
SetRenderScript("rs()");
EvaluateScript("suit changes.js");
EvaluateScript("rhombusScript.js");
EvaluateScript("waterLevelScript.js");
EvaluateScript("moveScript.js");
EvaluateScript("shadowScript.js");
EvaluateScript("evilEye.js");
function game()
{
	CreatePerson("arrow", "arrow.rss", false);
	AttachInput("arrow");
	AttachCamera("arrow");
	MapEngine("room.rmp", 80);
}


//////////////////////////////////////////Update Script/////////render script/////////////////////////////////////
function us()
{
	SetLayerVisible(1, true);
	suitChanges();
	spike();
	if(shadows == true){shadowBlock();}
	if(GetCurrentMap() == "waterroom.rmp" || GetCurrentMap() == "waterroom_below.rmp"){water_level();}
	if(IsKeyPressed(KEY_M) && magnifyingGlass == true)
	{
		SetLayerVisible(1, false);
	}	
	if(IsKeyPressed(KEY_R) && rhombus == true)
	{
		rhombusWarp();
	}
	if(IsKeyPressed(KEY_L) && telescope == true)
	{
		look();
	}
	if(IsKeyPressed(KEY_S) && shadows == true)
	{
		shade();
	}
	if(IsKeyPressed(KEY_U))
	{
		manual();
	}
	if(Time == true)
	{
		time+=.01;
		if(time < timeR)
		{
			SetTile(tileX, tileY, 0, 1)
		}
		if(time >= timeR)
		{
			SetTile(tileX, tileY, 0, 0);
			Time = false;
			time  = 0;
			timeR = 0;
		}
	}
}
function rs()
{
	if(Time == true){GetSystemFont().drawText(10,10,time);}
}

////////////////////////////////other functions/////////////////////////////////////////////////////////
function rock()
{
	if(GetPersonDirection("arrow") == "rockSuit")
	{
   DestroyPerson(GetCurrentPerson());
	}
}
function door()
{
	if(keyTotal > 0)
	{
		DestroyPerson(GetCurrentPerson());
		keyTotal--;
	}
}

function key()
{
if(pickup == true)
{
	keyTotal++;
	DestroyPerson(GetCurrentPerson());
	}
}

function warp(map, x, y)
{
	ChangeMap(map);
	SetPersonX("arrow",x);
	SetPersonY("arrow",y);
}

function timer(timeT, tilex, tiley)
{
	timeR = 0;
  timeR +=timeT
  tileX -= tileX;
  tileX += tilex;
  tileY -=tileY;
  tileY += tiley;
	Time = true;
}

function talk(words)
{
	GetSystemFont().drawTextBox(10,10,300,250,0,words);
	FlipScreen();
	GetKey();
}

function lower()
{
	if(wrench == true && waterLevel > 0)
	{
		waterLevel --;
		talk("WaterLevel: Lowered");
	}
}
function raise()
{
	if(wrench == true && waterLevel < 2)
	{
		waterLevel ++;
		talk("WaterLevel: Raised");
	}
}


function look()
{
	if(IsKeyPressed(KEY_UP))
	{
		DetachInput()
		SetCameraX(GetPersonX("arrow"));
		SetCameraY(GetPersonY("arrow")-120);
	}
	else if(IsKeyPressed(KEY_DOWN))
	{
		DetachInput()
		SetCameraX(GetPersonX("arrow"));
		SetCameraY(GetPersonY("arrow")+120);
	}
	else if(IsKeyPressed(KEY_LEFT))
	{
		DetachInput()
		SetCameraX(GetPersonX("arrow")-150);
		SetCameraY(GetPersonY("arrow"));
	}
	else if(IsKeyPressed(KEY_RIGHT))
	{
		DetachInput()
		SetCameraX(GetPersonX("arrow")+150);
		SetCameraY(GetPersonY("arrow"));
	}
	else
	{
		AttachInput("arrow");
	}
}

function web()
{
	if(matches > 0 || boxofmatches == true)
	{
		DestroyPerson(GetCurrentPerson());
		matches--;
	}
}
function match()
{
if(pickup == true)
{
	matches++;
	DestroyPerson(GetCurrentPerson());
	}
}
function lava()
{
	if(fires == false)
	{
		ChangeMap("fireRoom.rmp");
		matches = 0;
	}
	else
	{
		suit(1);
	}
}
function suit(suit)
{
	if(suit == 0)
	{
		suitChange = true;
	}
	else if(suit == 1)
	{
		suitChange = false;
	}
}

function GetTileX(mapX)
{
	var tile_x = mapX;
	var tile_numx = 0;
	while(tile_x >= 16)
	{
		tile_x -= 16;
		tile_numx ++;
	}
	return tile_numx;
}
function GetTileY(mapY)
{
	var tile_y = mapY;
	var tile_numy = 0;
	while(tile_y >= 16)
	{
		tile_y -= 16;
		tile_numy ++;
	}
	return tile_numy;
}

function launch(Suit)
{
	SetPersonLayer("arrow", 3);
	var move = 0;
	launching = true;
	if(Suit == 1)
	{
		moveSW(26,52);
	}
	if(Suit == 2)
	{
		moveSW(2,53);
	}
}

function land()
{
	SetPersonLayer("arrow", 0);
	launching = false;
}

function arrowBlock(dir,speed)
{
	var move = 0;
	while(move <= 2000)
	{
	SetPersonSpeed(GetCurrentPerson(), speed);
	switch(dir)
	{
		case "north":
		SetPersonDirection(GetCurrentPerson(),"north");
		QueuePersonCommand(GetCurrentPerson(), COMMAND_MOVE_NORTH, false);
		break;
		case "south":
		SetPersonDirection(GetCurrentPerson(),"south");
		QueuePersonCommand(GetCurrentPerson(), COMMAND_MOVE_SOUTH, false);
		break;
		case "east":
		SetPersonDirection(GetCurrentPerson(),"east");
		QueuePersonCommand(GetCurrentPerson(), COMMAND_MOVE_EAST, false);
		break;
		case "west":
		SetPersonDirection(GetCurrentPerson(),"west");
		QueuePersonCommand(GetCurrentPerson(), COMMAND_MOVE_WEST, false);
		break;
	}
	move++;
	}
}
function arrowBlock2(dir,speed,person)
{
	var move = 0;
	while(move <= 200)
	{
	SetPersonSpeed(person, speed);
	switch(dir)
	{
		case "north":
		SetPersonDirection(person,"north");
		QueuePersonCommand(person, COMMAND_MOVE_NORTH, false);
		break;
		case "south":
		SetPersonDirection(person,"south");
		QueuePersonCommand(person, COMMAND_MOVE_SOUTH, false);
		break;
		case "east":
		SetPersonDirection(person,"east");
		QueuePersonCommand(person, COMMAND_MOVE_EAST, false);
		break;
		case "west":
		SetPersonDirection(person,"west");
		QueuePersonCommand(person, COMMAND_MOVE_WEST, false);
		break;
	}
	move++;
	}
}
function heaven()
{
	outOfHeaven = GetCurrentMap();
	suit(0);
	ChangeMap("heaven.rmp");
}
function manual()
{
	talk("Users Manual:Refer to this as you pick up items.\n\n>Use The arrow keys to move"
	+a+b+c+d+e+f+g);
	if(magnifyingGlass == true)
	{ a = "\n>Use the Magnifying Glass with M.";}
	if(numSuit > 1)
	{b = "\n>Press 1 through " + numSuit + " to cycle through your suits.";}
	if(wrench == true)
	{c="\n>Walk to a valve to use the wrench.";}
	if(rhombus == true)
	{d="\n>To warp back to start with the rhombus use R";}
	if(boxofmatches == true)
	{e="\n>Walk into a web to burn it up with the box of matches";}
	if(telescope == true)
	{f="\n>To use the telescope hold L to look around with arrow keys";}
	if(rocks == true)
	{g="\n>The rock suit allows you to break rocks";}
	if(waters == true)
	{g="\n>Move fast under water with the water suit";}
	if(fires == true)
	{g="\n>Move on lava with the fire suit";}
	if(lights == true)
	{g="\n>Press A to ascend while in light suit. Use D to descend.  Also lights lamps.";}
	if(shadows == true)
	{g="\n>Press S to create a shadow block.";}
}
	