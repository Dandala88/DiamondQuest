var normal = true;
var rocks = false;
var waters = false;
var fires = false;
var lights = false;
var shadows = false;
var suitChange = true;
function suitChanges()
{
if(IsKeyPressed(KEY_1)&&suitChange == true)
	{
		normal = true;
		rocks = false;
		waters = false;
		fires = false;
		lights = false;
		shadows = false;
	}
	if(IsKeyPressed(KEY_2)&& numSuit >= 2&&suitChange == true)
	{
		normal = false;
		rocks = true;
		waters = false;
		fires = false;
		lights = false;
		shadows = false;
	}
	if(IsKeyPressed(KEY_3)&& numSuit >= 3&&suitChange == true)
	{
		normal = false;
		rocks = false;
		waters = true;
		fires = false;
		lights = false;
		shadows = false;
	}
	if(IsKeyPressed(KEY_4)&& numSuit >= 4&&suitChange == true)
	{
		normal = false;
		rocks = false;
		waters = false;
		fires = true;
		lights = false;
		shadows = false;
	}
	if(IsKeyPressed(KEY_5)&& numSuit >= 5&&suitChange == true)
	{
			normal = false;
			rocks = false;
			waters = false;
			fires = false;
			lights = true;
			shadows = false;
	}
	if(IsKeyPressed(KEY_6)&& numSuit >= 6&&suitChange == true)
	{
		normal = false;
		rocks = false;
		waters = false;
		fires = false;
		lights = false;
		shadows = true;
	}
	if(normal == true)
	{
		if(underwater == true)
		{
			SetPersonSpeed("arrow", .7);
		}
		if(underwater == false && launching == false)
		{
			SetPersonSpeed("arrow", 1);
		}
		SetPersonDirection("arrow", "normalSuit");
	}
	if(rocks == true)
	{
		if(underwater == true)
		{
			SetPersonSpeed("arrow", .3);
		}
		if(underwater == false && launching == false)
		{
			SetPersonSpeed("arrow", .6);
		}
		SetPersonDirection("arrow", "rockSuit");
	}	
	if(waters == true)
	{
		if(underwater == true)
		{
			SetPersonSpeed("arrow", 1.5);
		}
		if(underwater == false && launching == false)
		{
			SetPersonSpeed("arrow", .4);
		}
		SetPersonDirection("arrow", "waterSuit");
	}
	if(fires == true)
	{
		if(underwater == true)
		{
			SetPersonSpeed("arrow", .05);
		}
		if(underwater == false && launching == false)
		{
			SetPersonSpeed("arrow", 1.2);
		}
		SetPersonDirection("arrow", "fireSuit");
	}
	if(lights == true)
	{
			if(underwater == true)
			{
				SetPersonSpeed("arrow", 1);
			}
			if(underwater == false && launching == false)
			{
				SetPersonSpeed("arrow", 1.5);
			}
			SetPersonDirection("arrow", "lightSuit");
			if(IsKeyPressed(KEY_A))
			{
				SetPersonLayer("arrow", 3);
				SetLayerMask(3, CreateColor(255, 255, 255, 235));
			}
			if(IsKeyPressed(KEY_D))
			{
				SetPersonLayer("arrow", 0);
				SetLayerMask(3, CreateColor(255, 255, 255, 50))
			}
	}
	if(shadows == true)
	{
		if(underwater == true)
		{
			SetPersonSpeed("arrow", 1);
		}
		if(underwater == false && launching == false)
		{
			SetPersonSpeed("arrow", .8);
		}
		SetPersonDirection("arrow", "shadowSuit");
		SetTile(GetTileX(GetPersonX("arrow")), GetTileY(GetPersonY("arrow"))-1, 4, 9);
	}
	if(lights != true && GetCurrentMap() == "divideRoom.rmp"||GetCurrentMap() == "divideRoom.rmp"||GetCurrentMap() == "bossRoom.rmp")
	{
		SetLayerMask(3, CreateColor(255, 255, 255, 50))
	}
	if(GetPersonLayer("arrow") == 3)
	{
		SetLayerMask(3, CreateColor(255, 255, 255, 235));
	}
		if(GetCurrentMap() == "divideRoom.rmp"||GetCurrentMap() == "bossRoom.rmp")
		{
		if(numSuit>=6)
		{
			SetTile(GetTileX(GetPersonX("arrow"))+1, GetTileY(GetPersonY("arrow")), 4, 4);
			SetTile(GetTileX(GetPersonX("arrow"))-1, GetTileY(GetPersonY("arrow")), 4, 4);
			SetTile(GetTileX(GetPersonX("arrow")), GetTileY(GetPersonY("arrow"))+1, 4, 4);
			if(GetTileY(GetPersonY("arrow")) != 1)
			{
				SetTile(GetTileX(GetPersonX("arrow")), GetTileY(GetPersonY("arrow"))-2, 4, 4);
			}
			SetTile(GetTileX(GetPersonX("arrow"))+1, GetTileY(GetPersonY("arrow"))-1, 4, 4);
			SetTile(GetTileX(GetPersonX("arrow"))-1, GetTileY(GetPersonY("arrow"))-1, 4, 4);
			SetTile(GetTileX(GetPersonX("arrow")), GetTileY(GetPersonY("arrow")), 4, 4);
		}
		}
}