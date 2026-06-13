var inp = document.querySelector("input");
var get = document.querySelector("#get");
var edit = document.querySelector("#edit");
var done = document.querySelector("#done");
var list = document.querySelector(".list")
var body = document.querySelector("body")
var to = document.querySelector("#to")
var lem = document.querySelector(".lem")

get.addEventListener("click", () => {
   var values  = inp.value;
   if(values.trim()==="") return;
list.innerHTML += ` 
            
                <div class="lem">
             <h1>${inp.value}</h1>
            <div class="btn">
                <button id="edit">edit</button>
                <button id="done">Done</button>
            </div>
           </div>`

            inp.value = ""
           
});


var dark = document.querySelector("#dark")
var boble = "dark"

dark.addEventListener("click", function(){
   
   if(boble=="dark"){
      dark.innerHTML = `<i class="ri-moon-fill"></i>`
      dark.style.marginLeft = "50px"
      console.log("hello");
      boble = "light"
      
      
   }else{
      dark.innerHTML = `<i class="ri-sun-line"></i>`
      boble = "dark"
      console.log("fuck");
      dark.style.marginLeft = "0px"
   }
  
})

var sandip = true
dark.addEventListener("click",function(){
if(sandip ===true){
   body.style.backgroundColor = "white"
   to.style.color = "black"
   // lem.style.backgroundColor = "lightgray"
   lem.style.border = "1px solid darkgreen"
   sandip = false
}
else{
   body.style.backgroundColor = "#1a312c"
   to.style.color = "white"
   // lem.style.backgroundColor = "#fff4e1"
   // lem.style.border = "1px solid darkgreen"
   sandip = true
}
})

