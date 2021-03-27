function validateForm() {
  const form = document.forms['pet-info-form'];
  // TODO: Add checks here.
  const name = form['pet-name'].value;
  const age = form['pet-age'].value;
  const emailAddress = form['email-address'].value;
  const phoneNumber = form['phone-number'].value;

  const vaccineCheck = document.getElementsByClassName("form-check-input").value;
  if (vaccineCheck !== true){
   alert('Required. Pets should be vaccinated with all of the above. If not, please specify why in the textbox below.')
  }
  return true;
}