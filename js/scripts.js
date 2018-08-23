//backendLogic
function Contact(iFirstName,iLastName,iPhoneNumber,iAddress) {
  this.iFirstName=iFirstName;
  this.iLastName=iLastName;
  this.iPhoneNumber=iPhoneNumber;
  this.iAddress=iAddress;
}
//frontendLogic
$(document).ready(function() {
  $("#newContact").submit(function(event) {
    event.preventDefault();
    var iFirstName = $("#firstName").val();
    var iLastName = $("#lastName").val();
    var iPhoneNumber = $("#phoneNumber").val();
    var iAddress = $("#address").val();
//backendLogic
    var newContact = new Contact(iFirstName, iLastName, iPhoneNumber, iAddress);
//frontEndLogic
    $("div#contacts").append("<br><span class='contact'>" + newContact.iFirstName + "</span>");

    $(".contact").last().click(function() {
      $("#showContacts").toggle();
      $("#showContacts h2").text(newContact.iFirstName);
      $(".first-name").text(newContact.iFirstName);
      $(".last-name").text(newContact.iLastName);
      $(".phone-number").text(newContact.iPhoneNumber);
      $(".ad-dress").text(newContact.iAddress);
    });
  });
});
