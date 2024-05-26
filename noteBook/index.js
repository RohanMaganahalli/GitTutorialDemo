let notes = [];

// Load notes from Local Storage (if available)
const storedNotes = JSON.parse(localStorage.getItem('notes'));
if (storedNotes) {
  notes = storedNotes;
}

function addNote() {
  const titleInput = document.getElementById('noteTitle');
  const descriptionInput = document.getElementById('noteDescription');

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (title === '' || description === '') {
    alert('Please enter both title and description.');
    return;
  }

  const note = {
    title: title,
    description: description
  };

  notes.push(note);

  renderNotes(); // Call renderNotes() after adding a note
  updateNoteCount();
  titleInput.value = '';
  descriptionInput.value = '';

  saveNotesToLocalStorage();
}

function renderNotes(filteredNotes = notes) {
  const noteList = document.getElementById('noteList');
  noteList.innerHTML = '';

  filteredNotes.forEach((note, index) => {
    const li = document.createElement('li');
    li.classList.add('note');

    const noteText = document.createElement('div');
    noteText.textContent = `Title: ${note.title}`;

    const noteDescription = document.createElement('p');
    noteDescription.textContent = `Description: ${note.description}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteNote(index);

    li.appendChild(noteText);
    li.appendChild(noteDescription);
    li.appendChild(deleteButton);

    noteList.appendChild(li);
  });

  updateShowingCount(filteredNotes.length);
}

function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
  updateNoteCount();
  saveNotesToLocalStorage();
}

function searchNotes() {
  const searchTerm = document.getElementById('searchNote').value.trim().toLowerCase();

  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(searchTerm) ||
           note.description.toLowerCase().includes(searchTerm);
  });

  renderNotes(filteredNotes);
}

function updateNoteCount(count = notes.length) {
  document.getElementById('totalNotes').textContent = count;
}

function updateShowingCount(count) {
  document.getElementById('showing').textContent = count;
}

function saveNotesToLocalStorage() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Add event listener to the button (assuming your button now has the ID 'addNoteButton')
const addNoteButton = document.getElementById('addNoteButton');
addNoteButton.addEventListener('click', addNote);

// Call this code after all your functions are defined
window.onload = function() {
  // Render notes initially based on loaded data
  renderNotes();
};
