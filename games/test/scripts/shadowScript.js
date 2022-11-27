EvaluateSystemScript("math.js");
function light(l,r,b,t)
{
	if(GetPersonDirection("arrow") == "lightSuit")
	{
	var k = 0;
		for(i=l;i<=r;i++)
		{
			for(j=b;j<=t;j++)
			{
				SetTile(GetTileX(GetPersonX(GetCurrentPerson()))+i, GetTileY(GetPersonY(GetCurrentPerson()))+j, 4, 4);
			}
		}
		SetPersonDirection(GetCurrentPerson(), "on");
	}
}
function shade()
{
	var tileBack = GetTile(GetTileX(GetPersonX("arrow")), GetTileY(GetPersonY("arrow"))-1,0)
	SetTile(GetTileX(GetPersonX("arrow")), GetTileY(GetPersonY("arrow"))-1, 0, 6);
	if(IsPersonObstructed("arrow",GetPersonX("arrow"), GetPersonY("arrow")))
	{
		SetTile(GetTileX(GetPersonX("arrow")), GetTileY(GetPersonY("arrow"))-1, 0, tileBack);
	}
}