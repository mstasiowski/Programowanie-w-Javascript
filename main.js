const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');
const liczba3 = document.querySelector('#liczba3');
// const liczba4 = document.querySelector('#liczba4');


const btndodajpole = document.querySelector('#dodajinput')
const wynikiPojemnik = document.querySelector('#wyniki')
const wynikiPojemnik2 = document.querySelector('#wyniki2')
const wynikiPojemnik3= document.querySelector('#wyniki3')
const wynikiPojemnik4 = document.querySelector('#wyniki4')



liczba1.addEventListener('change', function(){przelicz()});
liczba2.addEventListener('change', function(){przelicz()});
liczba3.addEventListener('change', function(){przelicz()});
// liczba4.addEventListener('change', function(){przelicz()});

let ileinput = document.getElementsByTagName("input")
console.log(ileinput)


function createinput(){
  dl = ileinput.length +1
  let nowyid

  for(let i = 0; i < dl; i++)
  {
    let inputt = ileinput[i];
    nowyid ="liczba" +(i+1);
    usunid = "usun"+(i+1);
  }

  const nowyinput = document.createElement("input");
  nowyinput.type = "number";
  nowyinput.id = nowyid ;
 
  const parent = document.getElementById("container")

    parent.appendChild(nowyinput);

    const usun = document.createElement("button");
    usun.appendChild(document.createTextNode("X"))
    usun.id = usunid;

    // const usunparent = document.getElementById("container")
    parent.appendChild(usun);

    usun.addEventListener("click",() =>{
      parent.removeChild(nowyinput)
      parent.removeChild(usun)
    })

    
}

function przelicz(){
  sum = +liczba1.value + +liczba2.value + +liczba3.value 
  avg = +sum / 3
  max = Math.max(liczba1.value, liczba2.value, liczba3.value)
  min = Math.min(liczba1.value, liczba2.value, liczba3.value)

 
  wynikiPojemnik.innerHTML ="Suma: " + sum; 
  wynikiPojemnik2.innerHTML ="Średnia: " + avg
  wynikiPojemnik3.innerHTML = "Maksymalna: "+ max;
  wynikiPojemnik4.innerHTML ="Minimalna: "+ min; 
}


btndodajpole.addEventListener('click', () => {
    createinput()
    
})

