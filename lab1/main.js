const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');
const liczba3 = document.querySelector('#liczba3');
// const liczba4 = document.querySelector('#liczba4');


const btndodajpole = document.querySelector('#dodajinput')
const wynikiPojemnik = document.querySelector('#wyniki')
const wynikiPojemnik2 = document.querySelector('#wyniki2')
const wynikiPojemnik3= document.querySelector('#wyniki3')
const wynikiPojemnik4 = document.querySelector('#wyniki4')
const parent = document.getElementById("container")



liczba1.addEventListener('change', function(){przelicz()});
liczba2.addEventListener('change', function(){przelicz()});
liczba3.addEventListener('change', function(){przelicz()});
// liczba4.addEventListener('change', function(){przelicz()});
let num = [];
let ileinput = document.getElementsByTagName("input");


function createinput(){
  dl = ileinput.length +1
  let nowyid
  let usunid

  for(let i = 0; i < dl; i++)
  {
    nowyid ="liczba" +(i+1);
    usunid = "usun"+(i+1);
  }

  const nowyinput = document.createElement("input");
  nowyinput.type = "number";
  nowyinput.id = nowyid ;
 

    parent.appendChild(nowyinput);
    const usun = document.createElement("button");
    usun.appendChild(document.createTextNode("X"))
    usun.id = usunid;
    parent.appendChild(usun);

    usun.addEventListener("click",() =>{
      parent.removeChild(nowyinput)
      parent.removeChild(usun)
    })

}

function przelicz(){
  // sum = +liczba1.value + +liczba2.value + +liczba3.value 
  // avg = +sum / 3
  // max = Math.max(liczba1.value, liczba2.value, liczba3.value)
  // min = Math.min(liczba1.value, liczba2.value, liczba3.value)

  
  // wynikiPojemnik.innerHTML ="Suma: " + sum; 
  // wynikiPojemnik2.innerHTML ="Średnia: " + avg
  // wynikiPojemnik3.innerHTML = "Maksymalna: "+ max;
  // wynikiPojemnik4.innerHTML ="Minimalna: "+ min; 

  num  =[];
  let sum = 0;


  for(let i =0;i<ileinput.length;i++)
  {
    num.push(ileinput[i].value)
  }
  
    // console.log(num)
  let max = Math.max(...num);
  let min = Math.min(...num);
  let numMap = num.map(s =>{ return Number(s)});
  let howmanyvalues = numMap.length;
  sum = numMap.reduce( function(a,b){return a + b;}, 0);
  let avg = sum/howmanyvalues;


  // console.log(`Sum value is : ${sum}`);
  // console.log(`Avg value is : ${avg}`);
  // console.log(`Max value is : ${max}`);
  // console.log(`Min value is : ${min}`);

  wynikiPojemnik.innerHTML ="Suma: " + sum; 
  wynikiPojemnik2.innerHTML ="Średnia: " + avg
  wynikiPojemnik3.innerHTML = "Maksymalna: "+ max;
  wynikiPojemnik4.innerHTML ="Minimalna: "+ min; 

}

btndodajpole.addEventListener('click', () => {
    createinput();
    
})

