  var inp = document.querySelector("input");
  var get = document.querySelector("#get");
  var list = document.querySelector(".list");
  var body = document.querySelector("body");
  var to = document.querySelector("#to");

  var menu = document.querySelector("#menu");

  get.addEventListener("click", () => {
    var values = inp.value;
    if (values.trim() === "") return;
    list.innerHTML += ` 
              
                  <div class="lem">
              <h1 id = "change">${inp.value}</h1>
              <div class="btn">
                  <button id="edit" class = "edit">edit</button>
                  <button id="done" class = "done">Done</button>
              </div>
            </div>`;

    inp.value = "";
  });

  // var change = document.querySelector("#change")
  // var lem = document.querySelector(".lem");
  // var edit = document.querySelector("#edit");
  // var done = document.querySelector("#done");

  list.addEventListener("click", function(e){

   // EDIT / SAVE
   if(e.target.classList.contains("edit")){

      let task = e.target
      .closest(".lem")
      .querySelector("#change");

      // SAVE MODE
      if(task.querySelector("input")){

         let input = task.querySelector("input");
         let newValue = input.value.trim();

         // empty save block
         if(newValue === ""){
            alert("bro , you can't save empty task. ");
            return;
         }

         task.innerText = newValue;

         e.target.innerText = "edit";
      }

      // EDIT MODE
      else{

         let oldText = task.innerText;

         task.innerHTML = `
            <input class="edit-input" 
            type="text" 
            placeholder="Edit task..."
            value="${oldText}">
         `;

         e.target.innerText = "save";
      }
   }

   
   if(e.target.classList.contains("done")){
      e.target.closest(".lem").remove();
   }

});

list.addEventListener("click", function(e){

   if(e.target.classList.contains("edit")){
      console.log("edit clicked");
   }

});

  var dark = document.querySelector("#dark");
  var boble = "dark";

  dark.addEventListener("click", function () {
    if (boble == "dark") {
      dark.innerHTML = `<i class="ri-moon-fill"></i>`;
      dark.style.marginLeft = "50px";
      boble = "light";
    } else {
      dark.innerHTML = `<i class="ri-sun-line"></i>`;
      boble = "dark";
      dark.style.marginLeft = "0px";
    }
  });

  var sandip = true;
  dark.addEventListener("click", function () {
    if (sandip === true) {
      body.style.backgroundColor = "white";
      to.style.color = "black";
      menu.style.color = "black";
      sandip = false;
    } else {
      body.style.backgroundColor = "#1a312c";
      to.style.color = "white";
      menu.style.color = "white";
      sandip = true;
    }
  });

  gsap.from("#to", {
    y: 20,
    duration: 0.5,
    delay: 0.4,
    opacity: 0,
  });
  gsap.from(".top", {
    y: 20,
    duration: 0.5,
    delay: 0.8,
    opacity: 0,
  });


  