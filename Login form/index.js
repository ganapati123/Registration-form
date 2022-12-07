function formValidations(){
   
    //Enter details
    var fname = document.getElementById('fname') //firstname
    var lname = document.getElementById('lname') //lname
    var email = document.getElementById('email') //email
    var pwd   = document.getElementById('pwd')  //password
    var cpwd  = document.getElementById('cpwd')  //confirm password
   
    var status = true;

    
    //Error details
    var fname_err = document.getElementById('fname_span')
    var lname_err = document.getElementById('lname_span')
    var email_err = document.getElementById('email_span')
    var pwd_err   = document.getElementById('pwd_span')
    var cpwd_err  = document.getElementById('cpwd_span')




    //icons
    var wrong = `<i class="bi bi-patch-exclamation-fill"></i>`
    var right = `<i class="bi bi-patch-check-fill"></i>`
    
    //First Name
    if(fname.value == "" || fname.value == undefined){
        fname_err.innerHTML = `${wrong} Enter your firstname`
        fname.style.border ="1px solid #e02810"
        fname_err.className = "text-danger"
        status = false;
    }
    else if(!fname.value.match(/^[a-z]+$/)){
        fname_err.innerHTML = `${wrong} only enter lowercase letters [a-z]`
        fname.style.border ="1px solid #e02810"
        fname_err.className = "text-danger"
        status = false;       }
    else{
        fname_err.innerHTML = `${right} Thank you`
        fname.style.border ="1px solid #265931"
        fname_err.className="text-success"
        

    }
    //Last Name
    if(lname.value == "" || lname.value == undefined){
        lname_err.innerHTML = `${wrong} Enter your Lastname`
        lname.style.border ="1px solid #e02810"
        lname_err.className = "text-danger"
        status = false;   
       }
    else if(!lname.value.match(/^[a-z]+$/)){
        lname_err.innerHTML = `${wrong} only enter lowercase letters [a-z]`
        lname.style.border ="1px solid #e02810"
        lname_err.className = "text-danger"
        status = false;
    }
    else{
        lname_err.innerHTML = `${right} Thank you`
        lname.style.border ="1px solid #265931"
        lname_err.className="text-success"
        

    }

    //email
    if(email.value == "" || email.value == undefined){
        email_err.innerHTML = `${wrong} Enter your valid email`
        email.style.border ="1px solid #e02810"
        email_err.className = "text-danger"
        status = false;   
      
      }
    else if(!email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/)){
        email_err.innerHTML = `${wrong} Must be name@gmail.com`
        email.style.border ="1px solid #e02810"
        email_err.className = "text-danger"
        status = false;
      
      }
    else{
        email_err.innerHTML = `${right} Thank you`
        email.style.border ="1px solid #265931"
        email_err.className="text-success"
        

    }

    //password
    if(pwd.value == "" || pwd.value == undefined){
        pwd_err.innerHTML = `${wrong} minimum 8 characters required`
        pwd.style.border ="1px solid #e02810"
        pwd_err.className = "text-danger"
        status = false;
      
      }
    else if(!pwd.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*?-]).{8,}/))
    {
        pwd_err.innerHTML = `${wrong} Must be one-uppercase,lowercase,number,special character`
        pwd.style.border ="1px solid #e02810"
        pwd_err.className = "text-danger"
        status = false;
      
      }
    else{
        pwd_err.innerHTML = `${right} Thank you`
        pwd.style.border ="1px solid #265931"
        pwd_err.className="text-success"
        

    }

     // confirm password
     if(cpwd.value == "" || cpwd.value == undefined){
        cpwd_err.innerHTML = `${wrong} minimum 8 characters required`
        cpwd.style.border ="1px solid #e02810"
        cpwd_err.className = "text-danger"
        status = false;
      
      }
    else if(!cpwd.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*?-]).{8,}/))
    {
        cpwd_err.innerHTML = `${wrong} password and confirm password must be equal`
        cpwd.style.border ="1px solid #e02810"
        cpwd_err.className = "text-danger"
        status = false;
      
      }
    else{
        cpwd_err.innerHTML = `${right} Thank you`
        cpwd.style.border ="1px solid #265931"
        cpwd_err.className="text-success"     

    } 
    return status;
            
}

// //phone number
// function country_code(){
//   var val =document.getElementById('country').value

//   if(val === "select country" ){
//       document.getElementById('output').value = "";
//   }
//   else if(val === "IN"){
//       document.getElementById('output').value = "+91";

//   }
//   else if(val === "US"){
//       document.getElementById('output').value = "+1";

//   }
//   else if(val === "UK"){
//       document.getElementById('output').value = "+44";

//   }
//   else if(val === "BR"){
//       document.getElementById('output').value = "+55";

//   }
// }

       //states and cities
       let state_cities = [
        {
           state:'AndhraPradesh',
           code:'AP',
           cities:['Srikakulam','Visakhapatnam','Vijayawada']
        },
        {
           state:'Telangana',
           code:'TS',
           cities:['Hyderabad','Karimnagar','Khambam']
        }
]
let stateselect = document.querySelector('#states')
let cityselect = document.querySelector('#cities')

function myss(){
if(stateselect.value!=-1){
   for(ele of state_cities){
      // console.log(ele.cities)
      if(stateselect.value == ele.code){
       let cities = ele.cities;
       
       let op =document.createElement('option')
       op.value=-1;
       op.innerText="select city";
       cityselect.options[0]=op;
      
       let i=1;
       for(city of cities){
           let op =document.createElement('option');
           op.value=city;
           op.innerText=city;
           cityselect.options[i]=op;
           i++;
       }
      }
   }
}
}

      
























     //Textarea
     function textArea()
     {
      // target text by id-ref
        var text = document.getElementById('text_area')
      // target span by id-ref
        var span = document.getElementById('text_span')
      // target meter by id-ref
        var meter = document.getElementById('text_meter')

        span.innerHTML = text.value.length //for numbers

        meter.value = text.value.length //for meter
     }




