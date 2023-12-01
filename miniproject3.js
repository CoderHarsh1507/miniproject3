const fooddata = require('./food.json');
function listAllFoodItems() {
  return fooddata;
}
var ans=listAllFoodItems();
console.log(ans);
function vegetables(){
      return fooddata.filter((food)=>food.category==="Vegetable");
}
var ans1=vegetables();
console.log(ans1);
function fruit(){
    return fooddata.filter((food)=>food.category==="Fruit")
}
var ans2=fruit();
console.log(ans2);
function nuts(){
    return fooddata.filter((food)=>food.category==="Nuts")
}
var ans3=nuts();
console.log(ans3);

function protein(){
    return fooddata.filter((food)=>food.category==="Protein")
}
var ans4=protein();
console.log(ans4);
function grains(){
    return fooddata.filter((food)=>food.category==="Grain")
}
var ans5=grains();
console.log(ans5);
function dairy(){
    return fooddata.filter((food)=>food.category==="Dairy")
}
var ans6=dairy();
console.log(ans6);
function calorieabove(){
    return fooddata.filter((food)=>food.calorie>100)
}
var ans7=calorieabove();
console.log(ans7);
function caloriebelow(){
    return fooddata.filter((food)=>food.calorie<100)
}
var ans8=caloriebelow();
console.log(ans8);
function calorie1(){
    return fooddata.sort((a,b)=>b.protiens-a.protiens);
}
var ans9=calorie1();
console.log(ans9);
function cab(){
    return fooddata.sort((a,b)=>a.cab-b.cab);
}
var ans10=cab();
console.log(ans10);

















