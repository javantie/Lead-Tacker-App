const refNumber = document.querySelector('input[name="ref-number"]').value;
const status = document.querySelector('select[name="status"]').value;
const offerAmount = document.querySelector('input[name="offer-amount"]').value;
const addNote = document.querySelector('textarea[name="notes"]').value;
const submitButton = document.querySelector("#submit-btn");


const submitHandler = event =>{
    event.preventDefault()

    console.log(refNumber, status, offerAmount,addNote)
    return;
}


submitButton.addEventListener('submit', submitHandler)