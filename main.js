const liczba1 = document.querySelector('#liczba1');
const btnPrzelicz = document.querySelector('#przelicz')
const wynikiPojemnik = document.querySelector('#wyniki')

const liczba2 = document.querySelector('#liczba2');
const liczba3 = document.querySelector('#liczba3');
const liczba4 = document.querySelector('#liczba4');


btnPrzelicz.addEventListener('click', () => {
     

  wynikiPojemnik.innerHTML = 
    console.dir(liczba1.value)
    console.dir(liczba2.value)
    console.dir(liczba3.value)
    console.dir(liczba4.value)
    
})