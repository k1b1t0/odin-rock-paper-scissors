const CHOICES = ['rock', 'paper', 'scissors'];

function computerChoose() {
    let index = Math.round(Math.random() * 2);
    return CHOICES.at(index)
}




