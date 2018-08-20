window.onload = function() {
  var memeForm = document.getElementById('queryForm');
  var memeContainer = document.getElementById('meme-container');
  var memeButton = document.getElementById('queryBtn');
  var deleteButton = document.getElementsByClassName('delete-button');

  memeButton.addEventListener('click', function(event) {
    var imageFigure = document.createElement('FIGURE');

    var newMeme = document.createElement('img');
    newMeme.src = document.getElementById('url').value;
    newMeme.height = '500';
    newMeme.width = '500';

    var imageHeader = document.createElement('FIGCAPTION');
    imageHeader.innerText = document.getElementById('top-text').value;

    var imageFooter = document.createElement('FIGCAPTION');
    imageFooter.innerText = document.getElementById('bottom-text').value;

    var deleteButton = document.createElement('BUTTON');
    deleteButton.innerText = 'X';
    deleteButton.type = 'Delete';
    deleteButton.setAttribute('class', 'btn btn-circle btn-sm btn-danger');

    imageFigure.classList.add('image-figure');
    imageHeader.classList.add('meme-header');
    imageFooter.classList.add('meme-footer');
    deleteButton.classList.add('delete-button');

    imageFigure.appendChild(newMeme);
    imageFigure.appendChild(imageHeader);
    imageFigure.appendChild(imageFooter);
    imageFigure.appendChild(deleteButton);

    memeContainer.appendChild(imageFigure);

    deleteButton.addEventListener('click', function(event) {
      memeContainer.removeChild(imageFigure);
    });

    memeForm.reset();
  });
};
