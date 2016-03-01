var theGame_2048 = function(){
 var KEY = {
  LEFT : 37,
  UP	: 38,
  RIGHT: 39,
  DOWN	: 40
 },v_table = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 size = 16;
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
 function moveLeft(){
  for(var i=0;i < size-1;i++){
   if(v_table[i]===v_table[i+1] && (((i+1)%4)===0))){
    v_table[i]*=2;
    i++;
   }
  }
  for(var i=0;i < size-1;i++){
   if(v_table[i]===0 && (((i+1)%4)===0)){
     v_table[i]=v_table[i+1];
     v_table[i+1]==0;
   }
  }
 }
 function moveRight(){
 }
 function moveUp(){
 }
 function moveDown(){
 }
 function moveTable(direction){
  $('#console').text(getDir(direction));
   switch(direction){
   case KEY.LEFT:
    moveLeft();   
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
  console.log(v_table.join(""));
 }
 function refreshScreen(){
  for(var i =0;i < size;i++){
   var coord = Math.floor(i/4)+""+(i-Math.floor(i/4)*4);
   setValue(coord,v_table[i]);
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
  startValues();
 }
 
 return {
  checkKey : checkKey,
  start : l_start
 }
}
