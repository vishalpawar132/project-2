let namsteBtn = document.querySelector('button');
namsteBtn.addEventListener ('click',inputMsg);

function inputMsg(){
   let name = prompt('enter name of student ');
   namsteBtn.textContent = 'roll no. 1:' + name;
}
