
document.addEventListener('DOMContentLoaded', () => {

   
   
    const createBtn = document.querySelector('#createBtn')
    createBtn.onclick = createNote;
    const noteForm = document.querySelector('#compose-form');
    // noteForm.onsubmit = createNote;
    function createNote(event) {
        // let content = document.querySelector('#textArea').innerHTML;
        
            let text = document.querySelector('textarea')
            console.log(text.value)
            event.preventDefault();
            fetch(`http://127.0.0.1:8000/api/createnote/`,{

            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                
            },
                body: JSON.stringify({
                    
                    'field' : text.value

                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location = 'http://127.0.0.1:8000';
            })


        
        
    }

    const deleteBtn = document.querySelector('#deleteBtn')
    deleteBtn.onclick = deleteNote;
    

    function deleteNote() {

        fetch(`http://127.0.0.1:8000/api/deleteNote/${noteId}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : 'application/json',

            },

        })
        .then(response => response.json())
            .then(data => {
                console.log(data);
                // window.location = 'http://127.0.0.1:8000';
            })
    }


     function updateNote() {
        let content = document.querySelector('#textArea').innerHTML;

        console.log(content)
        
            fetch(`http://127.0.0.1:8000/api/updateNote/${noteId}`, {
                method: "PUT",
                headers: {
                    "Content-Type" : 'application/json'
                },
                body: JSON.stringify({"content" : content})
            })
            .then(response => response.json())
                .then(data => {
                    setNote(data)
                })
                    
                    
     }

    //  function ListItem () {

    //     fetch(`http://127.0.0.1:8000/api/noteDetails/${id}/`)
    //     .then(response => response.json() )
    //     .then(data => {
            
    //             let note = data;
    //             console.log(note);
                
    //             let noteCard;
    //             let field = note.field;
                


    //             noteCard = 
    //             `  <div class="">
                        
    //                     <div class="white" >
    //                         <div class="" data-note="${note.id}">
    //                             <textarea class=''> ${field.substring}... </textarea>
    //                         </div>
                            
                            
                            
    //                     </div>
                        
                        
    //                 </div>
                
    //             `
    //             notes.innerHTML += noteCard;
            
                
    //         })
    //     }
     
      

})