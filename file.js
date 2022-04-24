function dropdown(a)
{
  var value =a;
  if(a==1){
    var x = document.getElementById("tb1");
  }
  else if(a==2){
    var x = document.getElementById("tb2");
  }
  else if(a==3){
    var x = document.getElementById("tb3");
  }
  else if(a==4){
    var x = document.getElementById("tb4");
  }
  else if(a==5){
    var x = document.getElementById("tb5");
  }
  else if(a==6){
    var x = document.getElementById("tb6");
  }
  else if(a==7){
    var x = document.getElementById("tb7");
  }
  else{
    var x = document.getElementById("tb8");
  }
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function clear_all()
{
  
  var grp1 = document.getElementById("group1")
  var grp2 = document.getElementById("group2")
  grp1.style.display = "none";
  grp2.style.display = "none";
}