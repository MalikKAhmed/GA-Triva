function check () {
  var question1 = document.quiz.question1.value
  var question2 = document.quiz.question2.value
  var question3 = document.quiz.question3.value
  var question4 = document.quiz.question4.value
  var question5 = document.quiz.question5.value
  var correct = 0

  if (question1 == 'MOBA') {
    correct++
  }
  if (question2 == 'Champions') {
    correct++
  }
  if (question3 == '5') {
    correct++
  }
  if (question4 == 'Fancy way of saying best strategy to win the game currently') {
    correct++
  }
  if (question5 == 'Season 8') {
    correct++
  }
  var ranks = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond']
  var tiers = ['ranks/bronze.png', 'ranks/Silver.png', 'ranks/gold.png', 'ranks/plat.png', 'ranks/diamond.png']

  var score

  if (correct <= 1) {
    score = 0
  }
  if (correct > 0 && correct <= 2) {
    score = 1
  }
  if (correct > 1 && correct <= 3) {
    score = 2
  }
  if (correct > 3 && correct <= 4) {
    score = 3
  }
  if (correct > 4) {
    score = 4
  }
  document.getElementById('after_submit').style.visibility = 'visible'

  document.getElementById('number_correct').innerHTML = 'You got ' + correct + ' correct.'
  document.getElementById('tier').innerHTML = ranks[score]
  document.getElementById('rank').src = tiers[score]
}
