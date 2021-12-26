window.addEventListener('DOMContentLoaded', () => {

    console.log('Common.js loaded ✔')

    let numObj = {
        num: 0,
        operator: ''
    }

    function quitApp() {

        document.querySelector('.closeButton').addEventListener('click', event => {
            console.log('click')
            window.close()
        })
    }
    setTimeout(quitApp, 2000)

    function logicButton() {
        let i = 0;
        let button = document.querySelectorAll('.button-win');

        while (i < 10) {
            let textButton = button[i].innerText
            button[i].addEventListener('click', () => {
                let inputText = document.querySelector('.testInput.quest')
                inputText.append(textButton)
            })
            ++i
        }



    }
    setTimeout(logicButton, 2000)

    function operatorButton () {
        let button = document.querySelectorAll('.button-win-op');

        document.querySelector('.clearInput').addEventListener('click', event => {
            numObj.num = 0
            document.querySelector('.testInput.answer').innerText = ''
        })

        button.forEach(el => {
            el.addEventListener('click' , event => {

                let inputText = document.querySelector('.testInput.quest').innerText

                switch (event.target.innerText) {

                    case '+':
                        if (document.querySelector('.testInput.answer').innerText){
                            numObj.num =  numObj.num + Number(inputText)
                            numObj.operator = event.target.innerText
                            document.querySelector('.testInput.quest').innerText = ''
                            document.querySelector('.testInput.answer').innerText = numObj.num.toString()
                            console.log(event.target.innerText, numObj.num)
                        } else {
                            numObj.num =  numObj.num + Number(inputText)
                            numObj.operator = event.target.innerText
                            document.querySelector('.testInput.quest').innerText = ''
                            document.querySelector('.testInput.answer').innerText = numObj.num.toString()
                            console.log(event.target.innerText, numObj.num)
                        }
                    return true;

                    case '-':
                        numObj.num = numObj.num - Number(inputText)
                        document.querySelector('.testInput.quest').innerText = ''
                        document.querySelector('.testInput.answer').innerText = numObj.num.toString()
                        console.log(event.target.innerText, numObj.num)
                    return true;

                    case `'|'`:
                        numObj.num = numObj.num / Number(inputText)
                        document.querySelector('.testInput.quest').innerText = ''
                        document.querySelector('.testInput.answer').innerText = numObj.num.toString()
                        console.log(event.target.innerText, numObj.num)
                    return true;

                    case `X`:
                        numObj.num = numObj.num * Number(inputText)
                        document.querySelector('.testInput.quest').innerText = ''
                        document.querySelector('.testInput.answer').innerText = numObj.num.toString()
                        console.log(event.target.innerText, numObj.num)
                    return true;

                    case '=':
                        if (document.querySelector('.testInput.answer').innerText){
                            document.querySelector('.testInput.answer').innerText = document.querySelector('.testInput.answer').innerText
                        }

                    return true;
                }
            })
        })
    }
    setTimeout(operatorButton, 2000)

    function mainLogic () {

        let inputText = document.getElementsByClassName('testInput')[0].innerText

        inputText.split(`+ X - '/'`)
    }

});