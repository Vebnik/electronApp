const {app, BrowserWindow} = require('electron')
const path = require('path')

// Абсолютный путь до директории \ файла
const pathDir = path.join(__dirname, 'index.html')
const pathMedia = path.join(__dirname, 'media')

function createWindow() {

    let win = new BrowserWindow({
        width: 280,
        height: 430,
        resizable: false,
        frame: false,
        hasShadow: true,
        webPreferences: {
            nodeIntegration: true,
            devTools: false,
            preload: path.join(__dirname, 'common.js'),
        }
    });

    win.loadFile(pathDir)
        .then(() => console.log('Load file: ok'))
        .catch(err => console.log(err))

    win.on(`closed`, () => {
        app.quit()
        console.log('Closed process')
    })

    win.setIcon(path.join(pathMedia, 'mailservice.png'))
}
app.on(`ready`, () => {
    createWindow();
    console.log('Init window')
})
