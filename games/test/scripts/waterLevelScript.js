var key1 = false;
var key2 = false;
var key3 = false;
var key4 = false;
var key5 = false;
var key6 = false;
function water_level()
{
	if(waterLevel == 2)
	{
		if(GetCurrentMap() == "waterroom.rmp" || GetCurrentMap() == "waterroom_below.rmp")
		{
			underwater = true;
			SetLayerVisible(2, true)
		}
		else
		{
			underwater = false;
			SetLayerVisible(2, false)
		}
	}
	if(waterLevel == 1)
	{
		if(GetCurrentMap() == "waterroom_below.rmp")
		{
			underwater = true;
			SetLayerVisible(2, true)
		}
		else
		{
			underwater = false;
			SetLayerVisible(2, false)
		}		
	}
	if(waterLevel == 0)
	{
		if(GetCurrentMap() == "waterroom.rmp" || GetCurrentMap() == "waterroom_below.rmp")
		{
			underwater = false;
			SetLayerVisible(2, false)
		}
	}
}