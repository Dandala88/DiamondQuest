/**
 * Exit
 * Abort
 * 
 * GetTime
 * 
 * SetTile
 * GetTile
 * 
 * GetTileName
 * 
 * GetMouseX
 * GetMouseY
 * 
 * GetLayerScaleFactorX
 * GetLayerScaleFactorY
 * 
 * GetTileWidth
 * GetTileHeight
 * GetNumTiles
 * 
 * GetLayerWidth
 * GetLayerHeight
 * GetNumLayers
 * 
 * MapToScreenX
 * MapToScreenY
 * ScreenToMapX
 * ScreenToMapY
 * 
 * IsMouseButtonPressed
 * 
 * GetScreenWidth
 * GetScreenHeight
 *
 * GetSelectedTile
 * GetNumSelectedTiles
 *
**/

function __SetTile__(x, y, layer, tile)
{
  if (x >= 0 && y >= 0 && x < GetLayerWidth(layer) && y < GetLayerHeight(layer)) {
    SetTile(x, y, layer, tile); 
  }
}

function __GetTile__(x, y, layer)
{
  if (x >= 0 && y >= 0 && x < GetLayerWidth(layer) && y < GetLayerHeight(layer)) {
    return GetTile(x, y, layer); 
  }

  return -1;
}

function main()
{
  var layer = 0;
  var px = -1;
  var py = -1;
  var tx = -1;
  var ty = -1;

  do {
    var mouse_x = GetMouseX();
    var mouse_y = GetMouseY();
    
    if (mouse_x >= 0 && mouse_x < GetScreenWidth()
     && mouse_y >= 0 && mouse_y < GetScreenHeight()) {
  
      px = Math.floor(ScreenToMapX(layer, mouse_x) / GetLayerScaleFactorX(layer));
      tx = Math.floor(px / GetTileWidth());
      py = Math.floor(ScreenToMapY(layer, mouse_y) / GetLayerScaleFactorY(layer));
      ty = Math.floor(py / GetTileHeight());

      var tile = __GetTile__(tx, ty, layer);
      if (tile != -1) {
        __SetTile__(tx + 5, ty + 0, layer, tile);
      }
    }
  } while (IsMouseButtonPressed(MOUSE_LEFT));

  Abort("Tile: (" + tx + ", " + ty + ") Pixel: (" + px + ", " + py + ") " + GetTileName(0) + " " + GetSelectedTile() + " " + GetNumSelectedTiles() + "\n");
}
