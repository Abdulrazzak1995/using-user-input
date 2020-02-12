function Google(event) {
  // read & process user input
const form = event.target.form;
const searchText = form['Chercher'].value;

  // call the core logic
GoogleURL(searchText);

  // render results for the user


  // log action for developers
  console.log('\n-- user action --');
  console.log('variable:', '(' + typeof variable + ')', variable);

  // tell the browser everything is OK
  return true;
}
