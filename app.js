const p1 = {
	score: 0,
	display: document.querySelector('#p1Display'),
	button: document.querySelector('#p1Button')
}

const p2 = {
	score: 0,
	display: document.querySelector('#p2Display'),
	button: document.querySelector('#p2Button')
}

const reset = document.querySelector('#reset');
const target = document.querySelector('#target');
let isGameOver = false;
let targetScore = parseInt(target.value);

function updateScores(player, opponent) {
	if (!isGameOver) {
		player.score++;
		player.display.innerText = player.score;
	} if (player.score === targetScore) {
		isGameOver = true;
		player.display.classList.add('has-text-success');
		opponent.display.classList.add('has-text-danger');
		player.button.disabled = true;
		opponent.button.disabled = true;
	}

}

p1.button.addEventListener('click', () => {
	updateScores(p1, p2);
})

p2.button.addEventListener('click', () => {
	updateScores(p2, p1);
})

target.addEventListener('change', () => {
	targetScore = parseInt(target.value);
	resetGame();
});

reset.addEventListener('click', resetGame);

function resetGame() {
	isGameOver = false;
	p1.display.classList.remove('has-text-success', 'has-text-danger');
	p2.display.classList.remove('has-text-success', 'has-text-danger');
	p1.button.disabled = false;
	p2.button.disabled = false;
	p1.display.innerText = 0;
	p2.display.innerText = 0;
	p1.score = 0;
	p2.score = 0;
}