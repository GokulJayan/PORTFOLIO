function sendMail(){
    Email.send({
        SecureToken:"15adc783-c079-48f9-8bfd-520c5c89779f",
        To : 'gokul.jayan9@gmail.com',
        From : 'gokul.jayan9@gmail.com',
        Subject : "Response from portfolio",
        Body : "Name: "+document.getElementById("name").value
        + "<br>Email: "+document.getElementById("email").value
        + "<br>Mobile: "+document.getElementById("mobile").value
        + "<br>State: "+document.getElementById("state").value
        + "<br>City: "+document.getElementById("city").value
        + "<br>Message: "+document.getElementById("msg").value
    }).then(
      message => {
        console.log(message)
        if (message=='OK') 
        alert("Message sent successfully😀, Thankyou!")
        else 
        alert("Sorry😔, ERROR in sending message, Kindly mail to gokul.jayan9@gmail.com*")
    });
}