var v_table = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var theGame_2048 = function(){
 var KEY = {
  LEFT : 37,
  UP	: 38,
  RIGHT: 39,
  DOWN	: 40
 }, size = 4;
 function getDir(dir){
  var result = "";
  switch(dir){
   case KEY.LEFT:
    result = "LEFT";
   break; 
   case KEY.UP:
    result = "UP";
   break; 
   case KEY.RIGHT:
    result = "RIGHT";
   break; 
   case KEY.DOWN:
    result = "DOWN";
   break; 
  }
  return result;
 }
 function moveLeft_v_2(){
  for(var i=0;i<size;i++){
   for(var j=0;j<(size-1);j++){
	if(v_table[i][j]===v_table[i][j+1]){
	 v_table[i][j]*=2;
	 v_table[i][j+1]=0;
	}
   }
  for(var j=0;j<size;j++){
    if(j<(size-1) && v_table[i][j]===0){
      v_table[i][j]=v_table[i][j+1];
      v_table[i][j+1]=0;
    } 
   }
  }
 }
 function moveLeft_v_1(){
  for(var i=0;i<size;i++){
   for(var j=size;j--;){
    if((j-1)>=0){
     if(v_table[i][j-1]===v_table[i][j]){ 
      v_table[i][j-1]*=2;
      v_table[i][j]=0;
     }else if(v_table[i][j-1]===0) {
      v_table[i][j-1]=v_table[i][j];
      v_table[i][j]=0;
     }
    }
   }
   for(var j=0;j<size;j++){
    if(j<(size-1) && v_table[i][j]===0){
      v_table[i][j]=v_table[i][j+1];
      v_table[i][j+1]=0;
    } 
   }
  }
 }
 function moveRight(){
  for(var i=0;i<size;i++){
   for(var j=0;j<size;j++){
    if((j+1)<size){
     if(v_table[i][j+1]===v_table[i][j]){ 
      v_table[i][j+1]*=2;
      v_table[i][j]=0;
     }
    }
   }
   for(var j=0;j<size;j++){
    if(j<(size-1) && v_table[i][j+1]===0){
      v_table[i][j+1]=v_table[i][j];
      v_table[i][j]=0;
    } 
   }
  }
 }
 function moveUp(){
  for(var i=size;i--;){
   for(var j=0;j<size;j++){
    if((i-1)>=0)
     if(v_table[i][j]===v_table[i-1][j]){
      v_table[i-1][j]*=2; 
      v_table[i][j]=0;
     }else if(v_table[i-1][j]===0){
      v_table[i-1][j]=v_table[i][j];
      v_table[i][j]=0;
     }
   }
  }
  for(var i=size;i--;){
   for(var j=0;j<size;j++){
     if((i-1)>=0 && v_table[i-1][j]===0) {
       v_table[i-1][j]=v_table[i][j];
       v_table[i][j]=0;
     }
   }
  }
 }
 function moveDown(){
  for(var i=0;i<size;i++){
   for(var j=0;j<size;j++){
    if((i+1)<size){
     if(v_table[i+1][j]===v_table[i][j]){ 
      v_table[i+1][j]*=2;
      v_table[i][j]=0;
     }else if(v_table[i+1][j]===0){
      v_table[i+1][j]=v_table[i][j];
      v_table[i][j]=0;
     }
    }
   }
  }
  for(var i=0;i<size;i++){
   for(var j=0;j<size;j++){
    if((i+1)<size && v_table[i+1][j]===0){
      v_table[i+1][j]=v_table[i][j];
      v_table[i][j]=0;
    }
   }
  }
 }
 function moveTable(direction){
  $('#console').text(getDir(direction));
   switch(direction){
   case KEY.LEFT:
    moveLeft_v_2(); 
   break; 
   case KEY.RIGHT:
    moveRight();
   break; 
    case KEY.UP:
    moveUp();
   break; 
   case KEY.DOWN:
    moveDown();
   break; 
  }
  refreshScreen();
  setValue(getCoordinates_v_2().join(""),2);
  // $("#lista").text(v_table.join(""));
  console.logv(v_table.join(""));
 }
 function refreshScreen(){
  for(var i=0;i<size;i++){
   for(var j=size;j--;){
    $("#"+i+""+j).text((v_table[i][j]==0 ? "":v_table[i][j]));
   }
  }
 }
 function setValue(cell,value){
  var coord = cell.split("");
  v_table[coord[0]][coord[1]]=value;
  $("#"+cell).text(value); 
 }
 function checkKey(e) {
  e = e || window.event;
  if(e.keyCode===KEY.LEFT || e.keyCode===KEY.UP || e.keyCode===KEY.RIGHT || e.keyCode===KEY.DOWN)
   moveTable(e.keyCode);
 }
 function totheUpTest(){
  setValue("00",2);
  setValue("10",2);
  setValue("20",2);
  setValue("30",2);
  setValue("31",2);
 }
 function totheLeftRightTest(){
  setValue("10",2);
  setValue("11",2);
  setValue("12",2);
  setValue("13",2);
  setValue("30",2);
  setValue("00",2);
  setValue("01",2);
  setValue("02",2);
  setValue("03",2);
  setValue("31",2);
 }
 function toTest_8422(){
  setValue("00",8);
  setValue("01",4);
  setValue("02",2);
  setValue("03",2);
 }
 function RandomMax(max){
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
 }
 function Random16(){
  return Math.floor(Math.random() * (15 - 0 + 1)) + 0;
 }
 function getCoordinates_v_1(){
  var rand = Random16(),
  coords = [[0,0],[0,1],[0,2],[0,3],
	    [1,0],[1,1],[1,2],[1,3],
	    [2,0],[2,1],[2,2],[2,3],
	    [3,0],[3,1],[3,2],[3,3]],
  pair = [];
  pair = coords[rand];
  for(var i=0;i<10000;i++){
   if(v_table[pair[0],pair[1]]===0) break;
   pair = coords[Random16()];
  }
  return pair;
 }
 function getCoordinates_v_2(){
  var empty_cells = emptyCells();
  var rand = RandomMax(empty_cells.length),
      pair = empty_cells[rand];
  return pair;
 }
 function emptyCells(){
  v_empty_cells=[];
  for(var i=0;i<size;i++)
   for(var j=0;j<size;j++)
	if(v_table[i][j]===0)
		v_empty_cells.push((i+","+j).split(","));
  return v_empty_cells;
 }
 function startValues(){
  var coord = getCoordinates_v_2();
  setValue(coord.join(""),2);
  coord = getCoordinates_v_2();
  setValue(coord.join(""),2);
 }
 function l_start(){
 // startValues();
	 toTest_8422();
 }
 
 return {
  checkKey : checkKey,
  start : l_start
 }
}
