const scriptURL = 'https://script.google.com/macros/s/AKfycbwEqPWy0Hq-fH-oH9c3hBGK5PiDeBFYfB6wh7vrZ_XBgnCSFjv5bovPHeU4Q3hlPMs/exec'
const form = document.forms['google-sheet']
          
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Succesfully Submitted"))
    .catch(error => console.error('Error!', error.message))
})