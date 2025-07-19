const images = [
  '1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png',
  '11.png','12.png','13.png','14.png','15.png','16.png','17.png','18.png','19.png','20.png',
  '21.png','22.png','23.png','24.png','25.png','26.png','27.png','28.png','29.png','30.png',
  '31.png','32.png','33.png','34.png','35.png','36.png','37.png','38.png','39.png'
];

function toggleInfo(idToggle, idLink) {
  let extendedDisplay = document.getElementById(idToggle);
  let toggleLink = document.getElementById(idLink);

  if (extendedDisplay.style.display == 'none' || extendedDisplay.style.display == '') {
    extendedDisplay.style.display = 'block';
    toggleLink.text = 'How to use? (show less)';
  } else {
    extendedDisplay.style.display = 'none';
    toggleLink.text = 'How to use? (show more)';
  }
  console.log("toggled display!")
};

function toggleElement(idCheckbox, idPortrait) {
  let checkbox = document.getElementById(idCheckbox);
  let image = document.getElementById(idPortrait);

  if (checkbox.checked) {
    image.parentElement.style.visibility = 'visible'; // The black border
    image.style.visibility = 'visible'; // The image itself
  } else {
    image.parentElement.style.visibility = 'hidden'; // The black border
    image.style.visibility = 'hidden'; // The image itself
  }
};

function clearElement(identifier) {
  let image = document.getElementById(identifier);
  image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
  image.nextElementSibling.value = null
};

function selectBackground(identifier) {
  let overlay = document.getElementById('imageOverlay');
  let imageList = document.getElementById('imageList');
  let closeOverlay = document.getElementById('closeOverlay');
  let background = document.getElementById(identifier);

  imageList.innerHTML = '';
  images.forEach(img => {
    const imgElem = document.createElement('img');
    imgElem.src = `Background/${img}`;
    imgElem.alt = img;
    imgElem.addEventListener('click', () => {
      background.src = imgElem.src;
      background.nextElementSibling.value = null
      overlay.style.display = 'none';
    });
    imageList.appendChild(imgElem);
  });

  overlay.style.display = 'flex';
  closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  })

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.style.display = 'none';
  });
};


function toggleText(idCheckbox, idTextarea) {
  let checkbox = document.getElementById(idCheckbox);
  let textarea = document.getElementById(idTextarea);

  if (checkbox.checked) {
    textarea.style.fontFamily = 'OMORI_DISTURBED';
  } else {
    textarea.style.fontFamily = 'OMORI_MAIN';
  }
};

function clearFrame(identifier) {
  let frame = document.getElementById(identifier);
  // The below needs to be refactored at some point, OH GOD
  let download = frame.getElementsByTagName('a')[0];
  // End of refactor section
  let image = frame.getElementsByTagName('img')[0];
  let canvas = frame.getElementsByTagName('canvas')[0];

  frame.reset();
  image.src = "https://via.placeholder.com/106/000000?text=click+me!";
  canvas.style.display = "none";
  download.style.display = "none";

};

function displayElement(event, identifier) {
  // Adapted from https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript, by Jiwan Thapa
  let image = document.getElementById(identifier);
  image.src = URL.createObjectURL(event.target.files[0])
};

function displayDownload(identifier) {
  let downloadButton = document.getElementById(identifier);
  downloadButton.style.display = 'block';
};
