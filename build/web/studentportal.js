function searchResults(){
    location.replace("Search Results.html");
}

function attendanceAppealSuccess(){
    location.replace("Attendance Success.html");
}

function supportSuccessTracking(){
  location.replace("Support Success Tracking.html");
}

function viewArtificialIntelligenceGrades(){
  location.replace("Artificial Intelligence Grades.html");
}

function attendanceAppealTracking(){
  location.replace("Attendance Appeal Tracking.html");
}

function myAttendance(){
    location.replace("View your past attendance.html");
}

function myExamSchedule(){
    location.replace("Exam Schedule.html");
}
function myGrades(){
    location.replace("Grades.html");
}
function myHomepage(){
    location.replace("Homepage of SIM Portal.html");
}

function myProfile(){
location.replace("Settings.html");
}


function artificialIntelligence(){
location.replace("Artificial Intelligence Course.html");

}

function Support(){
        location.replace("Support.html");
    }

    function myCourses(){
        location.replace("My Courses.html");
    }

    function interactionDesign(){

        location.replace("CO3348 Interaction Design.html");
    }

    function validateattendanceForm() {
        let x = document.forms["myForm"]["form"].value;
        let reason = document.getElementById("reason").value;
        let datetime = document.getElementById("datetime").value;
        let file = document.getElementById("myfile").value;
        if (reason == "" ||datetime == null) {
          return false;
        }
        else{
            window.localStorage.setItem('datetime',datetime);
            window.localStorage.setItem('reason',reason);
            file=file.substring(file.lastIndexOf('\\')+1,file.length);
            window.localStorage.setItem('file',file);
           window.open('Attendance Success.html');
        }
    }


    function loadattendance(){
        let datetime = document.getElementById("datetime");
        datetime.innerText = window.localStorage.getItem("datetime");

        let reason = document.getElementById("reason");
        reason.innerText = window.localStorage.getItem("reason");
    
        let file= document.getElementById("file");
        file.innerText = window.localStorage.getItem("file");
    
    
      }
function savefilename(event){
    alert("Hello");

let fileInput = document.getElementById("myfile");
window.localStorage.setItem('file',event.value);
}


        function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.email.value == "priyanka@gmail.com" && form.password.value == "12345")
  {
      alert("Correct Password! Taking you to the homepage")
    window.open('Homepage of SIM Portal.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Incorrect Email Address or Password. Please try again!")/*displays error message*/
  }
}

function validateForm() {
    let x = document.forms["myForm"]["form"].value;
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    
    if (fullname == "" ||email == "" || phone== "" || address== "") {
      return false;
    }
    else{
       window.localStorage.setItem('fullname',fullname);
        window.localStorage.setItem('email',email);
        window.localStorage.setItem('phone',phone);
        window.localStorage.setItem('address',address); 
      window.open('Saved changes settings.html'); 
      
    }
  }

  function loadname(){
   let fullname = document.getElementById("fullname");
    fullname.innerText = window.localStorage.getItem("fullname");

    let email = document.getElementById("email");
    email.innerText = window.localStorage.getItem("email");

    let phone = document.getElementById("phone");
    phone.innerText = window.localStorage.getItem("phone");

    let address = document.getElementById("address");
    address.innerText = window.localStorage.getItem("address");

  }

  


  function faq(){
    var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
    }

    function validateSupportForm() {
        
  let textbox = document.getElementById("textbox").value;
  
  
  if (textbox=="") {
    return false;
  }
  else{
    
  window.open("Support Success.html");

  }
  } 


  function loadsupport(){
    let textbox = document.getElementById("textbox");
     textbox.innerText = window.localStorage.getItem("textbox");
  }

  function saveSupport(){
      let textbox = document.getElementById("textbox").value;
    window.localStorage.setItem('textbox',textbox);
  }

  

  function onsubmit(){
    let textbox = document.getElementById("textbox").value;
    let submitbutton = document.getElementById("submit");
    if(textbox.length==0){submitbutton.disabled=true;}
else{submitbutton.disabled=false;}

  }

  function searchonfocus(){
    let dropdownOption = document.querySelector('#dropdown-search');
    dropdownOption.style.visibility = "visible";
    
  }

  function searchonblur(){
    let dropdownOption = document.querySelector('#dropdown-search');
    setTimeout(()=>{dropdownOption.style.visibility = "hidden";},100);
  }

