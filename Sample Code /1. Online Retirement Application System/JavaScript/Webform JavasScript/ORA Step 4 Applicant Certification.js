/*
<div class="alert alert-warning" role="alert" style="text-align: center;color:#000;"><strong>Warning</strong>
  <br>Any intentionally false statements in this application or willful misrepresentation relative thereto is a violation of the law
  <br>punishable by a fine of not more than <strong>$10,000</strong>&nbsp;or imprisonment of not more than 5 years, or both (18 U.S.C. 1001)
  <br>&nbsp;
</div>
*/



$(document).ready(function () {
    // $("#govmod_empolyeeappcertsignature").prop('disabled', true);
    //$("#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(3) > table > tbody > tr:nth-child(2) > td.clearfix.cell.datetime.form-control-cell > div.control > div > input").prop('disabled', true);
    
    //Variables for Dom ELements
    var warningDiv = $('<div class="alert alert-warning" role="alert" style="text-align: center;color:#000;"><strong>Warning</strong><br>Any intentionally false statements in this application or willful misrepresentation relative thereto is a violation of the law<br>punishable by a fine of not more than <strong>$10,000</strong>&nbsp;or imprisonment of not more than 5 years, or both (18 U.S.C. 1001)<br>&nbsp;</div>');
    var warningplaceholder = $('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(1) > table');
    //var warningplaceholder = $('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(2) > legend');
    var signatureButton = $('<button type="button" id="signatureCertification">Click to sign and Certify</button>').css({ "background-color": "#337ab7", "border-color": "#2e6da4", "color": "#FFF", "font-size": "14px" });
    var formSpacer = $('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(2)');
    //Appending dom variables
     $(warningplaceholder).append(warningDiv);
     $(formSpacer).append(signatureButton);

     $('#signatureCertification').click(function () {
         //Set the datetime picker to today's date
         $('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(3) > table > tbody > tr:nth-child(2) > td.clearfix.cell.datetime.form-control-cell > div.control > div > input').datepicker().datepicker('setDate', 'today');
         //Set The Signature field to thw Firstname + Middlename + Lastname
         var employeeSignature = $('#govmod_empolyeeappcertsignature');
         employeeSignature.val($('#govmod_firstname').val() + ' ' + $('#govmod_middlename').val() + ' ' + $('#govmod_lastname').val());     
       });
     
 });

 