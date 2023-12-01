const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 768,
        height: 560
    });

    win.loadURL('http://localhost:5173/');
    // before:
    // win.loadFile('../client/src/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== "darwin") app.quit();
});
