let num = document.querySelector("#count");
let btns = document.querySelectorAll(".btn");

let count = 3;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (details) {
    let operate = details.currentTarget.classList;
    if (operate.contains("more")) {
      console.log("more");
      count++;
      console.log(count)
    } 
    else if (operate.contains("less")) {
      console.log("less");
       count--;
       console.log(count)
    } 
    else {
      console.log("reset");
       count = 0;
       console.log(count)
    }

   
    num.textContent = count
});
});
if(count>0){
  num.style.color = "#008000"
}
if(count<0){
  num.style.color = "red"
}
if(count=0){
  num.style.color = "white"
}

//  console.log(count)
//  num.innerHTML=`${count}`
