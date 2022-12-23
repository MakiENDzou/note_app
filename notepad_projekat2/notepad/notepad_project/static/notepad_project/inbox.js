

    

    document.addEventListener('DOMContentLoaded', () => { 

    // let notes;
    // notes = document.querySelector('#notes-view');
    let notes = document.querySelector('#notes-view');
    
    // if (window.location == 'http://127.0.0.1:8000') {

        
        // notes.innerHTML = "";

        

    // }
    ListItem()
    
    

     function ListItem () {

        
        
    
    

        
        notes.innerHTML = "";
        
        fetch(`http://127.0.0.1:8000/api/notes/`)
        .then(response => response.json() )
        .then(data => {
            for(let i=0;i<data.length;i++) { 
                let note = data[i];
                console.log(note);
                
                let noteCard;
                let field = note.field;
                let timestamp = note.timestamp;


                noteCard = 
                `  <div class="jovan" data-id='${note.id}'>
                        
                        <div class="white" >
                            <div class="" data-note="${note.id}">
                                <p class='arial-font4 centre-left'> ${field.substring(0,20)}... </p>
                            </div>
                            <p class='arial-font5 centre-left'>${timestamp.substring(0,10)}</p>
                            <hr class='black'>
                            
                        </div>
                       
                        
                    </div>
                
                `
                notes.innerHTML += noteCard;
            }
            let newnotes = document.querySelectorAll('.jovan')
            console.log(newnotes)
            newnotes.forEach( element => {
                element.addEventListener('click', function () {
                    document.querySelector('#note-view').innerHTML = '';
                    document.querySelector('#note-view').style.display = 'block';
                    console.log(element.dataset.id)
                    let note_id = element.dataset.id

                    fetch(`http://127.0.0.1:8000/api/noteDetails/${note_id}`)
                    .then(response => response.json())
                    .then(data => {
                        let note = data
                        document.querySelector('#noteDetail').innerHTML = '';

                        noteCardDetails = 
                        `
                        <div>
                        
                        <div class="background-lightblack">
                            <div class="background-black negative-margin margin-right">
                                <h2 class="arial-font6">Your note</h2>

                                
                        </div>

                        <div class="negative-margin" data-id="${note.id}">
                        
                            <form>
                               
                                <div class="flex-row3 ">
                                    <input type="submit" class="arial-font3" value="Save" id="saveBtn">
                                    <input type ='submit' value='Delete' class="arial-font3" id="deleteBtn">
                                </div>
                                <textarea class="" name="textArea">
                                    ${note.field}

                                </textarea>
                            </form>
                        </div>
                        
                        </div>
                        `
                        document.querySelector('#note-view').innerHTML = noteCardDetails;
                        // document.querySelector('#noteDetail').innerHTML = noteCardDetails;


                        const deleteBtn = document.querySelector('#deleteBtn')
                        deleteBtn.onclick = deleteNote;

                        function deleteNote(event) {
                            event.preventDefault()
                            fetch(`http://127.0.0.1:8000/api/deleteNote/${note.id}/`, {
                                method: "DELETE",
                                headers: {
                                    "Content-Type" : 'application/json',
                    
                                },
                    
                            })
                            .then(response => response.json())
                                .then(data => {
                                    console.log(data);
                                    window.location = 'http://127.0.0.1:8000';
                                })
                        }

                        const saveBtn = document.querySelector('#saveBtn')
                        saveBtn.onclick = saveNote;
                        
                        function saveNote(event) {
                            let text = document.querySelector('textarea')
                            console.log(text.value)
                            event.preventDefault()
                            fetch(`http://127.0.0.1:8000/api/updateNote/${note.id}/`, {
                                method: "PUT",
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

                    })
                    // ovjde ponovo napraviti html dje ima textarea 
                })
                
                
            });
                
            })

            
            function createNoteView () {
                
                

                toCreateBtn = document.querySelector('#toCreate');
                toCreateBtn.addEventListener('click', function () {
                
                    document.querySelector('#note-view').innerHTML = '';

                    let createCard;

                    createCard = `
                    
                    <div class="background-lightblack">
                    <div class="background-black negative-margin margin-right">
                        <h2 class="arial-font6">Your note</h2>
                            
                    </div>

                       
                        <div class="" id="compose-form">
                            <div class="negative-margin ">
                                
                                <form>
                                    
                                    <div class="flex-row3 ">
                                        <input type="submit" class="arial-font3" value="Save" id="createBtn">
                                        
                                    </div>
                                    <textarea class="" name="textArea">

                                    </textarea>
                                </form>
                                <button class="arial-font3" id="goBackBtn">Go back</button>
                            </div>

                        </div>

                    </div>

                    `

                    // notes.innerHTML =+ createCard;
                    document.querySelector('#note-view').innerHTML = createCard;

                    const createBtn = document.querySelector('#createBtn')
                    createBtn.onclick = createNote;
                    const noteForm = document.querySelector('#compose-form');



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

                    const goBackBtn = document.querySelector('#goBackBtn');
                    goBackBtn.onclick = goBack;

                    function goBack () {
                        window.location = 'http://127.0.0.1:8000';
                            }

                        })

                    }

            createNoteView();
        
        }
        
            
 

     
     

        



    })

