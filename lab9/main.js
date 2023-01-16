//TODO Prezentuje pogodę z róznych miejsc na świecie (temp, wilgotność, odpowiednia grafika względem pogody(chmurki, sloneczko, itp.))
//TODO Wskazane przez usera miejsca powinny byc zapamiętane (localStorage), pogoda pobierana na nowo przy każdym wejściu do aplikacji.
//TODO Można dodać/usunąć do 10 miejsc 
//! USTAWIĆ ALERT JAK KTOŚ PODA BŁĘDNE MIASTO

const API_KEY = `907faf56db9342f237f4d1acebd67c0e`;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metric`;
const search = document.querySelector('#search');
const searchBtn = document.querySelector('#btn');
const container = document.querySelector("#container");



class appFunctions{
    constructor(element){
        this.element = element;

        const getCities = localStorage.getItem('cities');
        let cities = [];
        


        if(getCities)
        {
            
            cities = JSON.parse(getCities);
        }        
            this.cities = cities.map(c => new City(c.name,this));

        this.show();
        

    }
    addCity(city) 
    {
        const localStorageCities = JSON.parse(localStorage.getItem("cities"));
        if(localStorageCities == null)
        {
            this.cities.push(city)
            this.save();
            this.show();

        }else if(localStorageCities.length>=10)
        {
            alert("Osiągnięta maksymalna ilość miast");
        }else
        {
            this.cities.push(city)
            this.save();
            this.show();
        }

    }

    removeCity(c)
    {
        this.cities =  this.cities.filter(city => city.name !== c.name);

        this.save();
        this.show();

    }

   async show()
    {
        this.element.innerHTML = '';

        // this.cities.forEach(city =>{
        //     if(this.cities.length != 0)
        //     {
        //         city.getWeather();
        //         console.log(city)
        //     }
        // })

        for(let i=0;i<this.cities.length;i++)
        {
           await  this.cities[i].getWeather();
         
        }
    }

    save()
    {
        localStorage.setItem('cities', JSON.stringify(this.cities))
    }
        
}

class City{
    constructor(name,appFunctions){
        this.name = name;
        this.appFunctions = appFunctions;
    }

   async getWeather(){
        const result = await fetch(`${API_URL}&q=${this.name}`)
        .then( response => response.json())
        .then(data =>this.showWeather(data))
        return result
    }

    showWeather(data){
        let temp = Math.round( data.main.temp);
        let temp_min =Math.round( data.main.temp_min);
        let temp_max = Math.round(data.main.temp_max);
        let feels_like =Math.round( data.main.feels_like);
        let humidity = data.main.humidity;
        let icon = data.weather[0].icon;
        let description = data.weather[0].description;
        let wind_speed = data.wind.speed;

        // console.log(data);
        // console.log(temp);
        // console.log(temp_min);
        // console.log(temp_max);
        // console.log(feels_like);
        // console.log(humidity);
        // console.log(icon);
        // console.log(description);
        // console.log(wind_speed);

        const weather = document.createElement("div");
        weather.classList.add("weather");
        weather.innerHTML=`
        <div class="topic">
        <div class ="city">${data.name}</div>
        <i class="closeBtn fa-solid fa-xmark fa-lg "></i>
        </div>
        <div class ="desc">${description}</div>
        <div class="icon_and_temp">
        <img class ="icon" src="https://openweathermap.org/img/wn/${icon}.png"/>
        <div class ="temp">${temp} ℃</div>
        </div>
        <div class ="temp_min">Temperatura minimalna: ${temp_min} ℃</div>
        <div class ="temp_max">Temperatura maksymalna: ${temp_max} ℃</div>
        <div class ="feels_like">Temperatura odczuwalna: ${feels_like} ℃</div>
        <div class ="humidity">Wilgotność: ${humidity} %</div>
        <div class ="wind_speed">Wiatr: ${wind_speed} m/s</div>
        
        `;
        container.appendChild(weather)

        const close = weather.querySelector('.closeBtn');
        close.addEventListener('click', () => app.removeCity(this))
        // const close = document.querySelector('.closeBtn');
        // close.addEventListener('click',(p)=>{
        //      this.appFunctions.removeCity(this)
        //     this.app.removeCity(this);
        //     console.log(p)
        //     })

        // console.log(container.childElementCount)
        
    }

    toJSON() {
        return {name: this.name};
    }
}

searchBtn.addEventListener('click',searchCity);
// const app = new appFunctions(container);
const app = new appFunctions(document.querySelector("#container"));

 

function searchCity(){
    // const localStorageCities = JSON.parse(localStorage.getItem("cities"));
    // for(let i=0;i<localStorageCities.length;i++)
    // {
    //     console.log(localStorageCities.length);
    // }
  const c1 = new City(search.value,app);
  app.addCity(c1);

// c1.getWeather();
search.value = "";
}