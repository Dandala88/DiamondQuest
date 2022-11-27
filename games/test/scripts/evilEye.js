var evil = true;
var spikes = false;
EvaluateSystemScript("timer.js");
EvaluateSystemScript("math.js");
var flo = new Timer();
flo.pause();
var seconds = 3;
var second = 0
function evilEye()
{
	if(rocks == true && GetPersonDirection(GetCurrentPerson()) == "rock")
	{
		SetPersonDirection(GetCurrentPerson(), "water");
	}
	if(waters == true && GetPersonDirection(GetCurrentPerson()) == "water")
	{
		SetPersonDirection(GetCurrentPerson(), "fire");
	}
	if(fires == true && GetPersonDirection(GetCurrentPerson()) == "fire")
	{
		SetPersonDirection(GetCurrentPerson(), "light");
	}
	if(lights == true && GetPersonDirection(GetCurrentPerson()) == "light")
	{
		SetPersonDirection(GetCurrentPerson(), "shadow");
	}
	if(shadows == true && GetPersonDirection(GetCurrentPerson()) == "shadow")
	{
		DestroyPerson(GetCurrentPerson());
		evil = false;
	}
}

function evilFloor()
{
	for(j=6;j<26;j++)
	{
		for(k=1;k<15;k++)
		{
			SetTile(j,k,0,18);
		}
	}
	for(j=6;j<26;j++)
	{
		for(k=1;k<15;k++)
		{
			var ani = Math.floor(Math.random()*3)+25;
			SetTile(j,k,0,ani);
		}
	}
	flo.unpause();
	spikes = true;
}

function spike()
{
	if(GetCurrentMap() == "bossRoom.rmp")
	{
		if(GetTile(GetTileX(GetPersonX("arrow")),GetTileY(GetPersonY("arrow")),0) == 27)
		{
			heaven();
		}
		if(spikes == true)
		{
			second = Math.floor(flo.getMilliseconds() / 1000);
			if(second == seconds)
			{
				flo.pause();
				for(j=6;j<26;j++)
				{
					for(k=1;k<15;k++)
					{
						if(GetTile(j,k,0) == 25)
						{
							var aniTile = 26
							SetTile(j,k,0,aniTile);
						}
						else if(GetTile(j,k,0) == 26)
						{
							var aniTile = 27
							SetTile(j,k,0,aniTile);
						}
						else if(GetTile(j,k,0) == 27)
						{
							var aniTile = 25;
							SetTile(j,k,0,aniTile);
						}
					}	
				}
				seconds+=3;
				flo.unpause();
			}
		}
	}
	else
	{
		flo.pause();
	}
}