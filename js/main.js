window.addEventListener('DOMContentLoaded', (e) => {
    localStorage.clear()
    e.preventDefault()
    // Variables
    const continueBtn = document.querySelector('.Continue')
    const beginBtn = document.querySelector('.begin-btn')
    const newGameBtn = document.querySelector('.New-game')
    const rightPage = document.querySelector('.right-page')
    const input = document.querySelector(('.input'))
    const form = document.querySelector('.form')
    const xNum = document.querySelector('.x-num')
    let attempts = document.querySelector('.attempts')
    const icon = document.querySelector('.fa-caret-right')
    const leftPage = document.querySelector('.left-page')
    const maxBall = document.querySelector('.max-ball')
    const exitBtn = document.querySelector('.exit-btn')
    const mainMenu = document.querySelector('.mainmenu-btn')
    let count = 0
    attempts.value = 5
    attempts.value > 0
    // Davom etish tugmasi
    beginBtn.addEventListener('click', () => {
        icon.classList.toggle('rotate-90')
        newGameBtn.classList.toggle('hidden')
        continueBtn.classList.toggle('hidden')
    })

    continueBtn.addEventListener('click', () => {
        rightPage.classList.remove('hidden')
        leftPage.classList.add('hidden')
        maxBall.textContent = localStorage.getItem('MaxBall')
        let num = Math.floor(Math.random() * 21)

        // Forma submit bo'lish holati
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            
            const check = input.value == num
            if (check) {
                count++
                input.value = ''
                num = Math.floor(Math.random() * 21)
                xNum.textContent = 'Topildiiii !'
                xNum.setAttribute('class', 'text-4xl text-green-400')
                attempts.value = 5
                attempts.textContent = attempts.value
                maxBall.textContent = count
                localStorage.setItem('MaxBall', maxBall.textContent)
            } else {
                if (attempts.value >= 0) {
                    let b = +attempts.value--
                    if (attempts.textContent != -1) {
                        attempts.textContent = --b
                    }

                }
                xNum.setAttribute('class', 'text-4xl text-red-400')
                if (input.value > num) {
                    xNum.textContent = 'Katta'
                }
                else if (input.value < num) {
                    xNum.textContent = 'Kichik'
                }
                if (attempts.value < 0) {
                    xNum.textContent = 'Yutqazdingiz!'
                    location.reload(true);
                }

                input.value = ''
            }
        })
    })
    newGameBtn.addEventListener('click', () => {
        maxBall.textContent = 0;
        localStorage.clear()
        rightPage.classList.remove('hidden')
        leftPage.classList.add('hidden')

        let num = Math.floor(Math.random() * 21)
        // Forma submit bo'lish holati
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            if (input.value == num) {

                maxBall.textContent = 0
                count++
                input.value = ''
                num = Math.floor(Math.random() * 21)
                xNum.textContent = 'Yutdingiz'
                xNum.setAttribute('class', 'text-4xl text-green-400')
                attempts.value = 5
                maxBall.textContent = localStorage.getItem('MaxBall')


            } else {
                if (attempts.value >= 0) {
                    let b = +attempts.value--
                    attempts.textContent = --b
                }
                xNum.setAttribute('class', 'text-4xl text-red-400')
                if (input.value > num) {
                    xNum.textContent = 'Katta'
                }
                else if (input.value < num) {
                    xNum.textContent = 'Kichik'
                }
                if (attempts.value < 0) {
                    xNum.textContent = 'Yutqazdingiz!'
                    location.reload(true);
                }

                input.value = ''
            }
            maxBall.textContent = localStorage.clear()
        })
    })

    maxBall.textContent = localStorage.getItem('MaxBall')

    // Bosh menyuga qaytish tugmasi
    mainMenu.addEventListener('click', (e) => {
        const answer = confirm("Bosh menyuga qaytmoqchimisiz?");
        if (answer) {
            rightPage.classList.add('hidden');
            leftPage.classList.remove('hidden');
            location.reload(true)
        }

    })

    // Chiqish tugmasi
    exitBtn.addEventListener('click', () => {
        const answer = confirm("O'yindan chiqishni xohlaysizmi?");
        if (answer) {
            close();
        }
    })
})