const macbookTopCase = document.querySelector('.top-case'),
	macbook = document.querySelector('.case'),
	touchBar = document.querySelector('.touchbar'),
	screen = document.querySelector('.screen'),
	darkBackgroundLayer = document.querySelector('.layer'),
	keyboard = document.querySelector('.keyboard'),
	reflection = document.querySelector('.reflection'),
	title = document.querySelector('.title'),
	subtitle = document.querySelector('.outlink'),
	laptop = document.querySelector('.laptop')

function openTopCase() {
	macbook.style.transform = 'scale(0.8)';
	darkBackgroundLayer.style.opacity = '1';
	macbookTopCase.style.transform = 'rotateX(-10deg)';
	touchBar.style.opacity = '1';
	screen.style.opacity = '1';
	keyboard.style.opacity = '0.98';
	reflection.style.opacity = '0.4';
	title.style.color = '#FFF';
	subtitle.style.color = '#FFF';
	laptop.style.background = 'rgba(32, 42, 68, 1)';
};

function closeTopCase() {
	darkBackgroundLayer.style.opacity = '0';
	macbookTopCase.style.transform = 'rotateX(65deg)'
	touchBar.style.opacity = '0';
	screen.style.opacity = '0.0';
	keyboard.style.opacity = '0.8';
	reflection.style.opacity = '0.0';
	title.style.color = '#222';
	subtitle.style.color = '#222';
	laptop.style.background = 'rgba(229, 229, 231, 0.2)';
};

function getReady () {
	macbook.style.transform = 'scale(1)';
}

getReady();
