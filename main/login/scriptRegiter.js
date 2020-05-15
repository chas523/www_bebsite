$(function() {

   


    //this validator for  town
    $.validator.addMethod('passwordCheck', function(value){
       var  elem1 = document.getElementById("password").value; 
       var  elem2 = document.getElementById("password-repeat").value; 
       if(elem2 == elem1){
           return true; 
       }else{
           return false; 
       }
    },'password must match')
    //------------------------//
    $("#register-form").validate({
      rules: {
        password:{
            passwordCheck:true
        }
      },
      messages: {
      }
    });

});


