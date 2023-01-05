// let notes = [];
// let title ="";
// let text = "";
// let noteColor = "";
// let Pin = Boolean;
// let createTime = Date;

//// SHOW SAVED NOTE FROM LOCAL STORAGE
//TODO ADD PIN (BOOLEAN) TO MOVE NOTE IN THE TOP OF THE PAGE
//TODO ADD CREATE TIME TO NOTE
//? HOW TO REMOVE A AWFUL VERTICAL SCROLL BARS WHEN THERE IS TOO MUCH TEXT IN TITLE
//// HOW TO ADD COLOR TO LOCAL STORAGE
//// HOW TO ADDPIN TO NOTES ARRAY IN CORRECT DIRECTION

//* for four
//TODO TAG NOTES
//TODO SEARCH NOTES BY TITLE, TEXT, COLOR, PIN, TAGS

const Btn = document.querySelector("#Btn");
const container = document.querySelector("#container");






Btn.addEventListener("click",()=> 
{
    addNote()
})

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const pin = document.querySelectorAll(".pin");
    const notes2 = document.querySelectorAll(".note");
    const pinned = document.querySelectorAll(".pinned");
  
    
    const data = [];
    const colorsData = [];
    const pinCheck = []; 
    
    notes.forEach(
            (note) => {
                data.push(note.value)
            }
        )
        
       
        for(let i=0;i<container.childElementCount;i++)
        {
            
            colorsData.push(document.querySelectorAll(" .noteText")[i].style.backgroundColor);
           
            let pinValue =false;
            if(pin[i].style.color !="white")
            {
                pinValue = true;
                pinCheck.push(pinValue);
                notes2[i].classList.add("pinned");
                

            }else
            {
                pinValue = false;
                pinCheck.push(pinValue);
                notes2[i].classList.remove("pinned");
                
            }
            // console.log("Note "+i+" "+pinValue);

           
        }
       
        
      
        

    if (data.length === 0) {
        localStorage.removeItem("notes");
        localStorage.removeItem("notesColors");
        localStorage.removeItem("notesPins");
        
    } else {
        localStorage.setItem("notes", JSON.stringify(data));
        localStorage.setItem("notesColors", JSON.stringify(colorsData));
        localStorage.setItem("notesPins", JSON.stringify(pinCheck));
    }
}


const addNote = (textTitle="", text = "", color="#FFE15D", pinCheck) => {
    const note = document.createElement("div");
    
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
        
         <textarea class="title" maxlength="50" spellcheck="false">${textTitle}</textarea>
        
        <div class="colorPickerMenu"> 


        <div class="colorDivContainer">
          <div class="colorDiv" id="ColorDivRed"></div>
          <div class="colorDiv" id="ColorDivGreen"></div>
          <div class="colorDiv" id="ColorDivBlue"></div>
          <div class="colorDiv" id="ColorDivPurple"></div>
          <div class="colorDiv" id="ColorDivDefault"></div>
         </div>
        <i class="colorPicker fa-thin fas fa-palette"></i>


        </div>
         <i class="pin fas fa-regular fa-thumbtack" style="color:white;" ></i>
         <i class="save fas fa-save" style="color:white"></i>
         <i class="trash fas fa-trash" style="color:white"></i> 
    </div>
    <textarea class="noteText" spellcheck="false" style="background-color: ${color};">${text}</textarea>
    
    `;

    let pin = note.querySelector(".pin");

    if(pinCheck == true)
    {
        pin.style.color = color;
    }else
    {
        pin.style.color ="white";
    }

    note.querySelector(".colorPicker").addEventListener(
        "click",
        function() {
         let menu =  note.querySelector('.colorDivContainer');
         let palleteIcon = note.querySelector('.colorPicker');
        //  let pin = note.querySelector(".pin");

            if(menu.style.display == "flex")
            {
                menu.style.display = "none"
                palleteIcon.style.color ="white";
            }else
            {
                menu.style.display ="flex";
                palleteIcon.style.color =`${color}`;
            }
         
            

            let redPick = note.querySelector('#ColorDivRed');
            let greenPick = note.querySelector('#ColorDivGreen');
            let bluePick = note.querySelector('#ColorDivBlue');
            let purplePick = note.querySelector('#ColorDivPurple');
            let defaultPick = note.querySelector('#ColorDivDefault');

           redPick.addEventListener('click',()=>{
            note.querySelector(".noteText").style.backgroundColor ="#E97777";
            color ="#E97777";
            palleteIcon.style.color = `${color}`;
            if(pin.style.color !="white")
            {
                pin.style.color =`${color}`;
            }
           
           })

           greenPick.addEventListener('click',()=>{
            note.querySelector(".noteText").style.backgroundColor ="#B6E2A1";
            color ="#B6E2A1";
            palleteIcon.style.color = `${color}`;

            if(pin.style.color !="white")
            {
                pin.style.color =`${color}`;
            }
            
           })

           bluePick.addEventListener('click',()=>{
            note.querySelector(".noteText").style.backgroundColor ="#B8E8FC";
            color = "#B8E8FC";
            palleteIcon.style.color = `${color}`;

            if(pin.style.color !="white")
            {
                pin.style.color =`${color}`;
            }
           
           })

           purplePick.addEventListener('click',()=>{
            note.querySelector(".noteText").style.backgroundColor ="#B1AFFF";
            color ="#B1AFFF";
            palleteIcon.style.color = `${color}`;

            if(pin.style.color !="white")
            {
                pin.style.color =`${color}`;
            }
            
           })

           defaultPick.addEventListener('click',()=>{
            note.querySelector(".noteText").style.backgroundColor ="#FFE15D";
            color ="#FFE15D";
            palleteIcon.style.color = `${color}`;

            if(pin.style.color !="white")
            {
                pin.style.color =`${color}`;
            }
            
           })

            saveNotes()
        }
    )

    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove();
            saveNotes();
        }
    )
        note.querySelector(".trash").addEventListener("mouseover",function(){
            note.querySelector(".trash").style.color =`${color}`;
        })
        note.querySelector(".trash").addEventListener("mouseout",function(){
            note.querySelector(".trash").style.color ="white";
        })

    note.querySelector(".save").addEventListener(
        "click",
        function() {
            saveNotes();
        }
    )

       note.querySelector(".save").addEventListener("mouseover",function(){
           note.querySelector(".save").style.color =`${color}`;
       })
       note.querySelector(".save").addEventListener("mouseout",function(){
           note.querySelector(".save").style.color ="white";
       })

    note.querySelector(".pin").addEventListener(
        "click",
        function() {
            // let pin = note.querySelector(".pin");
            
            if(pin.style.color == "white")
            {
                pin.style.color =`${color}`;
               
                

            }else
            {
                pin.style.color ="white";
              
                

            }
            
       
          
          saveNotes();
        }
    )

    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNotes();
        }
    )
     //! ---------------------------------------------------------------------
     
    //    console.log(localStorageNotesP);
    //    for(let i=0;i<localStorageNotesP.length;i++)
    //    {

    //     if(pinCheck == localStorageNotesP[i])
    //    {
    //     if(pinCheck !=true)
    //     {
    //         console.log("meh");
            
    //     }else
    //     {
    //         console.log(`Note${i} found`)
            
    //     }

    //    }


    //    }
     
       
    
        //! -------------------------------------------------------------------------
    container.appendChild(note);
    saveNotes()
}


(
function showNotes(){
    const localStorageNotes = JSON.parse(localStorage.getItem("notes"));
    const localStorageNotesColors = JSON.parse(localStorage.getItem("notesColors"));
    const localStorageNotesPins = JSON.parse(localStorage.getItem("notesPins"));

    if(localStorageNotes === null)
    {
        console.log("Add your first note!");
    }else
    {
        let j=0 ;

       for(let i=0;i<localStorageNotes.length;i+=2)
       {
        if(i == 0)
        {
            j = 0;
        }else
        {
            j++;
        }
      
        
        addNote(localStorageNotes[i],localStorageNotes[i+1],localStorageNotesColors[j],localStorageNotesPins[j])
        // console.log(localStorageNotes[i]);
        // console.log(localStorageNotesColors[j]);
        // console.log(localStorageNotesPins[j]);

        

        
       }

    }
})()



