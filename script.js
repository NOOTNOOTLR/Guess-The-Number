<!DOCTYPE html>
<html>
  <head>
    <title>Guess the number!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
      <h1 class="title">Guess the number!</h1>
      <b>Enter a number between 1 and 100.</b>
      <br><label  for="textbox"></label>
      <input autocomplete="off" type="number" class="boxBackground" id="textbox" placeholder="" onkeypress="KeyPressed(event)">
      <button class="boxBackground" onclick="checkGuessedNumber()">Guess</button>
      <p id="numbers"></p>
      <script src="script.js"></script>
  </body>
</html>