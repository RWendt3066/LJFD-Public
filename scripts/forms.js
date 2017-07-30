// ================================ //
// Standard Form Scripted Functions //
// ================================ //

// Set Proposed ZIP Based on Selected City //
// --------------------------------------- //

function setZIP() 
{
    switch ($('#inputCity').attr('value')){
        case "Arden Hills":
            $('#inputZip').val('55112');
            break;
        case "North Oaks":
            $('#inputZip').val('55127');
            break;
        case "Shoreview":
            $('#inputZip').val('55126');
            break;
        default:
            $('#inputZip').val(' ');
    }

}

// Validate the Email Address Provided //
// ----------------------------------- //

function validateEmail(emailID) 
{
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
//    alert('email address: ' + $(emailID).val());
    
    if(!emailReg.test($(emailID).val())) 
    {
        $('#left-msg').html('<span style="color:#990000;">A valid email is required for the submission of an electronic Burn Permit request.</span>');
        return false;
    } 
    else 
    {
        return true;
    }
}
