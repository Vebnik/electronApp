const {app, BrowserWindow} = require('electron')

let win;

function createWindow() {

    win = new BrowserWindow({
        width: 700,
        height: 500
    });

    win.loadURL('https://www.google.ru', {})
        .then(the => console.log('-------- Load Url'))

    win.webContents.openDevTools()

    win.on(`closed`, event => {
        win = null
        console.log('-------- Closed process')
    })
}

app.on(`ready`, event => {
    createWindow();
    console.log('-------- Init window')
})

