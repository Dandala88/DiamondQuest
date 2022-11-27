var rhombusX = 423;
var rhombusY = 25;
function rhombusWarp()
{
	if(GetCurrentMap() == "waterroom.rmp")
	{
		SetPersonX("arrow", rhombusX);
		SetPersonY("arrow", rhombusY);
	}
	else if (GetCurrentMap() == "waterroom_below.rmp")
	{
		warp("waterroom.rmp", rhombusX, rhombusY);
	}
	else if (GetCurrentMap() == "fireRoom.rmp")
	{
		SetPersonX("arrow", rhombusX);
		SetPersonY("arrow", rhombusY);
		suit(0);
	}
	else if (GetCurrentMap() == "divideRoom.rmp")
	{
		SetPersonX("arrow", rhombusX);
		SetPersonY("arrow", rhombusY);
	}
	else if (GetCurrentMap() == "bossRoom.rmp")
	{
		SetPersonX("arrow", rhombusX);
		SetPersonY("arrow", rhombusY);
	}
}