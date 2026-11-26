const playComputerButton = document.querySelector('#play-computer');
const loadingScreen = document.querySelector('#loading-screen');
const screenFade = document.querySelector('#screen-fade');
const loadingQuote = document.querySelector('.loading-quote');
const gameScreen = document.querySelector('#game-screen');

playComputerButton.addEventListener('click', () => {
    screenFade.classList.add('visible');

    setTimeout(() => {
        loadingScreen.classList.remove('hidden');

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                loadingScreen.classList.add('visible');
            });
        });

        const text = loadingQuote.textContent.trim();
        loadingQuote.textContent = '';

        let index = 0;

        setTimeout(() => {
            const typing = setInterval(() => {
                loadingQuote.textContent += text[index];
                index++;

                if (index === text.length) {
                    clearInterval(typing);
                }
            }, 120);
        }, 4000);
                // Начинаем затухание заставки
        setTimeout(() => {
            loadingScreen.classList.remove('visible');

            // Ждём завершения затухания
            setTimeout(() => {
                const mainMenu = document.querySelector('#main-menu');

                mainMenu.classList.add('hidden');
                loadingScreen.classList.add('hidden');

                gameScreen.classList.remove('hidden');
                screenFade.classList.remove('visible');

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        gameScreen.classList.add('visible');
                    });
                });
            }, 2500);

        }, 8500);

    }, 2000);
});