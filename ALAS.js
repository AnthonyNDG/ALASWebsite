const family = document.querySelector('.family');
const culture = document.querySelector('.culture');
const events = document.querySelector('.events');
const qmail = document.querySelector('.qmail');
const id = document.querySelector('.CunyID');
const errorMessage = document.querySelector('.error');
const button = document.querySelector('.submit');

var filename = "Signup.txt";
var counter = 1;



window.onload = function(){

    window.setInterval(changeAllSlides, 5000);



    window.addEventListener('blur', function (event) {
      clearInterval(setInterval(changeAllSlides, 5000));
      console.log("lost focus");
  });


  function changeAllSlides() {   
  	counter++;
  	if(counter>=4){
  		counter=1;
  	}
  	$(".family").fadeOut(500);
  	family.style.opacity=0;
  	setTimeout(function() {
            family.innerHTML= "<img src='img/slideshow/slideshow/photo"+counter+".jpg'>";
        }, 500);
  	family.style.opacity=1;
  	$(".family").fadeIn(500);
  	console.log(1)
  }

$(".submit").on('click', function(){

  if(inputCheck(qmail,id)){

    sendEmail(qmail,id);
  }
  });
    return false;
}



function sendEmail(qmail,id){
  Email.send({
    Host: "smtp.gmail.com",
    Username: 'anthonyninodeguzman@gmail.com',
    Password: "xpykavmrillufuaz",
    To: 'anthonyninodeguzman@gmail.com',
    From: 'anthonyninodeguzman@gmail.com',
    Subject: `${qmail.value} is interested in joining ALAS!`,
    Body: `Name: ${qmail.value} <br>CunyID: ${id.value}`,
  })
  console.log("SUCCESS");
}

function inputCheck(qmail,id){
  if (qmail.value===""||id.value==="") {
    errorMessage.innerHTML = "Make sure to write both your QMail and CunyID";
    return false;
  }
  errorMessage.innerHTML = "";
  console.log("true");
  return true;
}