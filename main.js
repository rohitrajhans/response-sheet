const scriptURL = 'https://script.google.com/macros/s/AKfycbxyHF5gdcPzHtE3VkL-21nGfqa-Pt1p0TlgRhIG2wgZIT56fWjR/exec'
const form = document.forms['submit-to-sheet']

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'GET', body: new FormData(form)})
//       .then(response => { alert('Successfully submitted'); location.reload(); })
//       .catch(error => console.error('Error!', error.message))
//   }) 

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
