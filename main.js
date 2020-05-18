const scriptURL = 'https://script.google.com/macros/s/AKfycbxyHF5gdcPzHtE3VkL-21nGfqa-Pt1p0TlgRhIG2wgZIT56fWjR/exec'
const form = $('#response-form');

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => { alert('Successfully submitted'); location.reload(); })
//       .catch(error => console.error('Error!', error.message))
//   }) 


form.submit(function (e) {
            $.ajax({
                type: "GET",
                url: scriptURL,
                data: form.serialize(),
                success: function (data) {
                    // console.log(data);
                },
                error: function(xhr, desc, err){
                    console.log(err);
                }
            });

            e.preventDefault();
        });

