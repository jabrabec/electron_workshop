// to install:
// npm install --save electron

const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow;

app.on('ready', () => {
    const index = path.join(__dirname, 'index.html')
    // eg /c/Users/Jennifer/../index.html
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file:///${index}`);
    // loadURL ('file:///c/Users/Jennifer/../index.html')
});

// felixrieseberg/electron-code-editor
