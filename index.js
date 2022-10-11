// Get the modal
var modal = document.getElementById("zeldaModal");

// Get the button that opens the modal
var woBtn = document.querySelector(".modal-btn-WO");
var boBtn = document.querySelector(".modal-btn-BO");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
woBtn.onclick = function() {
  modal.style.display = "block";
}

boBtn.onclick = function() {
  modal.style.display = "block";
  document.body.classList.add('blackout')
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.classList.remove('blackout')
}

const exitEvent = e => {
  if (!e.toElement && !e.relatedTarget) {
    document.removeEventListener('mouseout', exitEvent);
    
    modal.style.display = "block";
    document.body.classList.add('blackout');
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove('blackout')
  }
} 

document.addEventListener('mouseout', exitEvent);