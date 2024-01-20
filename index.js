function sendMail(){
    Email.send({
        SecureToken:"e0c8819d-55a2-4ce7-8093-47464b9ef28e",
        To : 'gokul.jayan9@gmail.com',
        From : 'gokul.99jayan@gmail.com',
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
