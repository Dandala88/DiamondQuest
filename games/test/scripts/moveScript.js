function moveSW(xtiles, ytiles)
{
	var speedx = .05*xtiles 
	var speedy = .05*ytiles 
	var move = 0;
	launching = true;
	while(move <= 320)
		{
			SetPersonSpeedXY("arrow", speedx, speedy);
			QueuePersonCommand("arrow", COMMAND_MOVE_SOUTH, false);
			QueuePersonCommand("arrow", COMMAND_MOVE_WEST, false);
			move++;
		}
}
function moveSE(xtiles, ytiles)
{
	var speedx = .05*xtiles 
	var speedy = .05*ytiles 
	var move = 0;
	launching = true;
	while(move <= 320)
		{
			SetPersonSpeedXY("arrow", speedx, speedy);
			QueuePersonCommand("arrow", COMMAND_MOVE_SOUTH, false);
			QueuePersonCommand("arrow", COMMAND_MOVE_EAST, false);
			move++;
		}
}
function moveNW(xtiles, ytiles)
{
	var speedx = .05*xtiles 
	var speedy = .05*ytiles 
	var move = 0;
	launching = true;
	while(move <= 320)
		{
			SetPersonSpeedXY("arrow", speedx, speedy);
			QueuePersonCommand("arrow", COMMAND_MOVE_NORTH, false);
			QueuePersonCommand("arrow", COMMAND_MOVE_WEST, false);
			move++;
		}
}
function moveNE(xtiles, ytiles)
{
	var speedx = .05*xtiles 
	var speedy = .05*ytiles 
	var move = 0;
	launching = true;
	while(move <= 320)
		{
			SetPersonSpeedXY("arrow", speedx, speedy);
			QueuePersonCommand("arrow", COMMAND_MOVE_NORTH, false);
			QueuePersonCommand("arrow", COMMAND_MOVE_EAST, false);
			move++;
		}
}