
const commandblocksu=this.global.commandblocks;
const commandblockunit = extendContent(MessageBlock, "commandblockunit", {
  unitOn(tile,unit){
    var entity=tile.ent();
    var key=tile.x+","+tile.y;
    if(!commandblocksu.hasOwnProperty(key)) commandblocksu[key]={};
    thiscmd=commandblocksu[key];
    thiscmd.didsuccess = commandblocksu.command(unit,entity.message,this,"execute as @p[r=1] "+entity.message,true);
  },
  removed(tile){
    this.super$removed(tile);
    var key=tile.x+","+tile.y;
    delete commandblocksr[key];
  }
});
