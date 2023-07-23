
function updateName() {
   const name = prompt('Enter your name');
   console.log(this);
   this.textContent = name;
   
   if(p.style.display == 'block') {   
       p.style.display = 'none';
   } else {
       p.style.display = 'block';
   }
}

const btns = document.getElementsByClassName('btn');
const p = document.getElementById('para');

for(const btn of btns) {
    btn.addEventListener('click',updateName);
}


