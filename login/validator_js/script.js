$(function() {
    //this validor for email
    $.validator.addMethod('emailCheck', function(value){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( re.test(String(value).toLowerCase())==true){
            return  true;
        } else
        {
            return false;
        }
    },'Please insert correct email ')
    //------------------------//
    $("#register-form").validate({
      rules: {
        email: {
          required: true,
          emailCheck: true,
          email: true,
          remote: "http://localhost:3000/inputValidator"
        }
      },
      messages: {
        email: {
          required:'&nbsp;Please enter an email address.',
          email: 'Please enter a <em>valid</em> email address.',
          remote: $.validator.format("{0} is already associated with an account.")
        }
      }
    });
});

