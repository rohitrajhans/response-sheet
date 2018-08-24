const scriptURL = 'https://script.google.com/macros/s/AKfycbxyHF5gdcPzHtE3VkL-21nGfqa-Pt1p0TlgRhIG2wgZIT56fWjR/exec'
  const form = document.forms['submit-to-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })