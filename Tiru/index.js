

const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
    const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const confirmpasswordValue = confirmpassword.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}

    if(lastnameValue === '') {
		setErrorFor(lastname, 'lastname cannot be blank');
	} else {
		setSuccessFor(lastname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');

	}else if (!isPassword(passwordValue)){
        setErrorFor(password, 'Provide Captial, Small, Special charecters, Numbers');
    }
     else {
		setSuccessFor(password);
	}
     
	
	if(confirmpasswordValue === '') {
		setErrorFor(confirmpassword, 'confirmpassword cannot be blank');
	} else if(passwordValue !== confirmpasswordValue) {
		setErrorFor(confirmpassword, 'Passwords does not match');
	} else{
		setSuccessFor(confirmpassword);
	}
 }

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
}


 var pass = document.getElementById("password");
    var msg  = document.getElementById("message");
    var str  =  document.getElementById("strenght");

    pass.addEventListener('input', () => {
        if(pass.value.length > 0) {
            msg.style.display = "block";
        }
        else{
            msg.style.display = "none";
        }
        if(pass.value.length < 4){
            str.innerHTML = "weak";
            pass.style.borderColor = "#ff5925";
            msg.style.color = "#ff5925";
        }
        else if(pass.value.length >= 4 && pass.value.length < 8){
            str.innerHTML = "medium";
            pass.style.borderColor = "orange";
            msg.style.color = "orange";
        }
        else if(pass.value.length >= 8) {
            str.innerHTML = "strong";
            pass.style.borderColor = "#26d730";
            msg.style.color = "#26d730";
        }
    })


    // state city

      //State and City
      function populate(s1,s2)
      {
         var s1 = document.getElementById(s1);
         var s2 = document.getElementById(s2);
 
         s2.innerHTML = "";
 
         if(s1.value == "andrapradesh")
         {
             var optionArray = ['vizag|VIZAG', 'vijayawada|VIJAYAWADA', 'tirupathi|TIRUPATHI'];
         }
         else if(s1.value == "telangana")
         {
             var optionArray = ['warangal|WARANGAL', 'secundrabad|SECUNDRABAD', 'karimnagar|KARIMNAGAR']
         }
          
         for (var option in optionArray)
         {
             var pair = optionArray[option].split("|");
             var newoption = document.createElement("option");
 
             newoption.value = pair[0];
             newoption.innerHTML = pair[1];
             s2.options.add(newoption)
         }
      }
      
      var loadFile = function(event) {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
          URL.revokeObjectURL(output.src) // free memory
        }
      };  

      //Textarea meter and character
   function myfun() {
    var input_dom = document.getElementById("uname");
  
    var span_dom = document.getElementById("uname_span");
  
    var meter_dom = document.getElementById("uname_meter");
  
    // alert(input_dom.value)
  
    span_dom.innerHTML = input_dom.value.length;
  
    meter_dom.value = input_dom.value.length;
  }

  const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
const info = document.querySelector(".alert-info");

function process(event) {
 event.preventDefault();

 const phoneNumber = phoneInput.getNumber();

 info.style.display = "";
 info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
}
function getIp(callback) {
    fetch('https://ipinfo.io/json?token=<your token>', { headers: { 'Accept': 'application/json' }})
      .then((resp) => resp.json())
      .catch(() => {
        return {
          country: 'us',
        };
      })
      .then((resp) => callback(resp.country));
   }
   const phoneInputs = window.intlTelInput(phoneInputField, {
    initialCountry: "auto",
    geoIpLookup: getIp,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });
   const phoneInputss = window.intlTelInput(phoneInputField, {
    preferredCountries: ["in", "co", "us", "de"],
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
 



function signup(e){
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var uname = document.getElementById('uname').value;

    var user = {
        username:username,
        lastname:lastname,
        email:email,
        password:password,
        confirmpassword:confirmpassword,
        phone:phone,
        dob:dob,
        uname:uname,
    };

    var json = JSON.stringify(user);
    localStorage.setItem("username",username);
    localStorage.setItem("lastname",lastname);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    localStorage.setItem("confirmpassword",confirmpassword);
    localStorage.setItem("phone",phone);
    localStorage.setItem("dob",dob);
    localStorage.setItem("uname",uname);
    console.log('user added');
}




