const {app, BrowserWindow} = require('electron')
const path = require('path')

// Абсолютный путь до директории \ файла
const pathDir = path.join(__dirname, 'index.html')
const pathMedia = path.join(__dirname, 'media')
const pathJs = path.join(__dirname, 'js')

function createWindow() {

    let win = new BrowserWindow({
        width: 320,
        height: 450,
        webPreferences: {
            frame: false,
            devTools: true,
            preload: path.join(pathJs, 'preload.js'),

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
