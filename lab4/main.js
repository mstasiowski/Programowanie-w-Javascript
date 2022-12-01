// let notes = [];
// let title ="";
// let text = "";
// let noteColor = "";
// let Pin = Boolean;
// let createTime = Date;


const Btn = document.querySelector("#Btn")
const container = document.querySelector("#container")
Btn.addEventListener("click",()=> 
{
    addNote()
})

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
            (note) => {
                data.push(note.value)
            }
        )
        
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}



const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
         <i class="save fas fa-save"></i>
         <i class="trash fas fa-trash"></i> 
    </div>
    <textarea>${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove()
            saveNotes()
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function() {
            saveNotes()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNotes()
        }
    )
    container.appendChild(note);
    saveNotes()
}
