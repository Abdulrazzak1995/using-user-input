function reverseItHandler(event) {
  // read & process user input
  const form = event.target.form;
  const userInput = form['user-input'].value;

  // execute core logic
  const reversed = reversed(userInput);

  // display results to user
  document.getElementById('output').innerHTML = reversed;

  // log action for developers
  console.log('\n-- user action --');
  console.log('userInput:', '(' + typeof userInput + ')', userInput);
  console.log('userOutput:', '(' + typeof reversed + ')',reversed);

  // tell the browser everything is OK
  return true;
}
