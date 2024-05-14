const Ex2_day = 0;

switch (true) {
  case Ex2_day === 0:
    console.log("sunday");
    break;
  case Ex2_day === 1:
    console.log("monday");
    break;
  case Ex2_day === 2:
    console.log("tuesday");
    break;
  case Ex2_day === 3:
    console.log("wednesday");
    break;
  case Ex2_day === 4:
    console.log("thursday");
    break;
  case Ex2_day === 5:
    console.log("friday");
    break;
  case Ex2_day === 6:
    console.log("saturday");
    break;
  default:
    console.log("Invalid day number");
}
if(Ex2_day===0||Ex2_day===6){
    console.log("weekend");
}
else{
    console.log("weekday");
}