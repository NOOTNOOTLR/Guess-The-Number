const randomNumber = Math.floor(Math.random()*100)+1
var timesGuessed = 0
var running = true
var numberText = ""
const numbersAlreadyGuessed = []
function checkGuessedNumber() {
  if (running) {
    const guessednumber = document.getElementById("textbox").value
	document.getElementById("textbox").value = ""
    for (let i = 0; i <= numbersAlreadyGuessed.length; i+=1) {
      if (numbersAlreadyGuessed[i] == guessednumber) {
        document.getElementById('numbers').innerHTML = numberText + "<p class='red'>You already guessed that number.</p>"
        return
      }
    }
    
    if (isNaN(guessednumber)) {
      document.getElementById('numbers').innerHTML = numberText + "<p class='red'>Make sure the number is a whole number between 1 and 100.</p>"
      return
    }
	  if (guessednumber >= 1 && guessednumber <= 100 && Math.floor(guessednumber) == guessednumber) {
	    timesGuessed++
	    numbersAlreadyGuessed.push(guessednumber)
	    if (guessednumber==randomNumber) {
	      running = false
	      if (timesGuessed == 1) {
	        document.getElementById('numbers').innerHTML = document.getElementById('numbers').innerHTML + `<br>${randomNumber} is the correct number! It took 1 try!`
	      } else {
	        numberText += `<br>${randomNumber} is the correct number! It took ${timesGuessed} tries.`
	        document.getElementById('numbers').innerHTML = numberText
	      }
	    } else if (guessednumber>randomNumber) {
	      numberText += `<br> lower than ${guessednumber}`
	      document.getElementById('numbers').innerHTML = numberText
	    } else if (guessednumber<randomNumber)	{
	      numberText += `<br> higher than ${guessednumber}`
	      document.getElementById('numbers').innerHTML = numberText
	    } else alert('unknown error')
	  } else {document.getElementById('numbers').innerHTML = numberText + "<p class='red'>Make sure the number is a whole number between 1 and 100.</p>"}
  }
}
function KeyPressed(event) {
  if (event.key == "Enter") {
    checkGuessedNumber()
  }
}