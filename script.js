const passbook = document.getElementById('passbook');
let slider = document.getElementById('slider');
let sliderValue = document.getElementById('sliderValue');

const lowerCase = document.getElementById('lowerCase');
const upperCase = document.getElementById('upperCase');
const number = document.getElementById('number');
const symbols = document.getElementById('symbols');
const btn = document.getElementById('genBtn');
const copy=document.getElementById('copyPass');
sliderValue.textContent = slider.value;

slider.addEventListener('input', () => {
    sliderValue.textContent = slider.value;
})

btn.addEventListener('click', () => {
    passbook.value = generatePassword();
});

let lower = 'abcdefghijklmnopqrstuvwxyz';
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let num = '0123456789';
let symb = '!@#$&^*';
function generatePassword() {

    let pass = "";
    let charval = "";
    charval += lowerCase.checked ? lower : "";
    charval += upperCase.checked ? upper : "";
    charval += number.checked ? num : "";
    charval += symbols.checked ? symb : "";
    if (charval == "" || charval.length == 0) {
        return pass;
    }

   let i=1;
   while(i<=slider.value){
    pass += charval.charAt(Math.floor(Math.random() * charval.length));
   i++;
   }
return pass;
    
    
//    console.log(pass);

    
   
    // let pass="";
    // pass=Math.random()*10;
    // return pass;

    
}

copy.addEventListener('click',()=>{

    if(passbook.value!="" || passbook.value>=1){
        navigator.clipboard.writeText(passbook.value);
        copy.innerText='check';
        copy.title="passWord copied";

        setTimeout(()=>{
            copy.innerHTML="content_copy";
            copy.title="";
        },3000);
    }
   
})
