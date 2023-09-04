const scriptURL = 'https://script.google.com/macros/s/AKfycbx_Q3DmN4spY2jg2uHa7Kx5ecDtfcO6OLSlBbuBjJoGPEmo3KD7hYcq1u1c-p_Rr69NKA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})