var btn = document.getElementById("go-button");
var inner=document.getElementById("text");



function buttonClicked(){

  console.log("Button clicked");
  btn.removeEventListener("click", buttonClicked);
  inner.innerHTML = "Don't do it";
  btn.innerHTML = "oh";
  console.log(inner.innerHTML);
  console.log(btn.innerHTML);

}


btn.addEventListener("click", buttonClicked);
