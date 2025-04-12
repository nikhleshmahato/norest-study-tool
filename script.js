
function loadBtn() {
    fetch('data.txt')
      .then(response => {
        if (!response.ok) throw new Error('File not found.');
        return response.text();
      })
      .then(text => {
        document.getElementById('loadBtn').style.display = 'none';
        document.getElementById('editorContainer').style.display = 'block';
        document.getElementById('editor').value = text;
      })
      .catch(error => {
        console.error('Error loading file:', error);
        alert('Failed to load the text file.');
      });
  }

  function goBack() {
    // Hide editor, show load button
    document.getElementById('editorContainer').style.display = 'none';
    document.getElementById('loadBtn').style.display = 'inline-block';
  }
