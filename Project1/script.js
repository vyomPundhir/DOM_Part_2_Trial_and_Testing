const btn = document.getElementById("button");

const randomColor = () =>{
  let val = "0123456789ABCDEF";
  let cons = "#";
  for (let i =0; i<6; i++) {
    // below Math.random will give a random value between 0 to 0.999...
    // Math.floor will give an approx value. e.g. 1.6 will be 1 
    cons = cons + val[Math.floor(Math.random()*16)];
    // here now cons will have the hexadecimal value after the addition with val[].
  }
  return cons; 
}

console.log(randomColor());

function changeRandomColor() {
  document.body.style.backgroundColor=randomColor();
}

btn.addEventListener('click', changeRandomColor);