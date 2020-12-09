const p1Display = document.querySelector('#p1Display');
const p1Button = document.querySelector('#p1Button');
const p2Display = document.querySelector('#p2Display');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const target = document.querySelector('#target');

let p1Score= 0;
let p2Score = 0;
let isGameOver = false;
let targetScore = parseInt(target.value);

p1Button.addEventListener('click', () => {
	if (!isGameOver) {
		p1Score++;
		p1Display.innerText = p1Score;
		if (p1Score === targetScore) {
			isGameOver = true;
			p1Display.classList.add('has-text-success');
			p2Display.classList.add('has-text-danger');
			p1Button.disabled = true;
			p2Button.disabled = true;
		}
	}
})

p2Button.addEventListener('click', () => {
	if (!isGameOver) {
		p2Score++;
		p2Display.innerText = p2Score;
		if (p2Score === targetScore) {
			isGameOver = true;
			p2Display.classList.add('has-text-success');
			p1Display.classList.add('has-text-danger');
			p1Button.disabled = true;
			p2Button.disabled = true;
		}
	}
})

target.addEventListener('change', () => {
	targetScore = parseInt(target.value);
	resetGame();
});

reset.addEventListener('click', resetGame);

function resetGame() {
	isGameOver = false;
	p1Display.classList.remove('has-text-success', 'has-text-danger');
	p2Display.classList.remove('has-text-success', 'has-text-danger');
	p1Button.disabled = false;
	p2Button.disabled = false;
	p1Display.innerText = 0;
	p2Display.innerText = 0;
	p1Score = 0;
	p2Score = 0;
}