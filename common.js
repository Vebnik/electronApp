window.addEventListener('DOMContentLoaded', () => {

    console.log('Common.js loaded ✔')


    function quitApp() {

        document.querySelector('.closeButton').addEventListener('click', event => {
            console.log('click')
            window.close()
        })
    }
    setTimeout(quitApp, 1000)


    function logicButton() {
        let buttonNum = document.querySelectorAll('.button-win');

        buttonNum.forEach(el => {
            el.addEventListener('click', () => {
                let inputText = document.querySelector('.testInput.quest')
                inputText.value += el.innerText
            })
        })

        let resultButton = document.querySelector('.result')

        resultButton.addEventListener('click', event => {
            let inputText = document.querySelector('.testInput.quest')
            let outputText = document.querySelector('.testInput.answer')

            if (inputText.value !== ''){

                try {
                    let results = eval(inputText.value)
                    outputText.innerText = `${results.toFixed(2)}`
                } catch {
                    outputText.innerText = 'Error'
                }

                inputText.value = ''
            } else if (inputText.value === '') {
                outputText.innerText = 'No number!'
            }
        })
    }
    setTimeout(logicButton, 1000)

});