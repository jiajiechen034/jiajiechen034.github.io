var modal = document.querySelector(".modal");
var selectCharacterbtn = document.getElementById("selectCharacterbtn");

function fetchAndPopulateModal() {
    fetch('http://localhost:3000/api/characters')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(characterList => {
            populateModal(characterList); 
        })
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

function populateModal(characterList) {
    const container = document.getElementById("imagesContainer");
    container.innerHTML = "";
    characterList.forEach(function(character) {
        var image = document.createElement("img");
        image.src = character.url;  
        image.style.cursor = "pointer";
        image.addEventListener('click', function() {
            modal.style.display = "none";
            var character_image = document.getElementById("character_image");
            character_image.src = this.src; 
            character_image.addEventListener('click', openModal);
        });
        container.appendChild(image);
    });
}

function openModal() {
    modal.style.display = "flex";
    console.log("open modal");
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

selectCharacterbtn.addEventListener('click', function() {
    console.log("button clicked");
    fetchAndPopulateModal();
    openModal();
});
