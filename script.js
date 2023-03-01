   let color1 = document.querySelector('#color1');
   let color2 = document.querySelector('#color2');
   function linearGradient(){
       box.style.background="linear-gradient(30deg,"
       + color1.value + ", " + color2.value + ")";
   }
   color1.addEventListener("input", linearGradient);
   color2.addEventListener("input", linearGradient);