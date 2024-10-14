const { app, BrowserWindow, Menu } = require('electron')
const path = require('node:path')
const { autoUpdater, AppUpdater } = require('electron-updater')

//Basic flgas
autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = true;

const createWindow = () => {
    const win = new BrowserWindow({
        // icon: "public/images/logo.ico",
        minWidth: 940,
        minHeight: 500,
        width: 1280,
        height: 720,
        webPreferences: {
            // nodeIntegration: true,
            // contextIsolation: false,
        }
    });

    const url = 'http://localhost:3000';
    // const url = `file://${path.join(__dirname, '../out/index.html')}`;

    win.loadURL(url);

    // const menu = Menu.buildFromTemplate([
    //     {
    //         label: 'View',
    //         submenu: [
    //             {
    //                 label: 'Reset Zoom',
    //                 accelerator: 'CmdOrCtrl+0',
    //                 click: () => {
    //                     win.webContents.setZoomLevel(0);
    //                 }
    //             }
    //         ]
    //     }
    // ]);

    // Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    createWindow();

    autoUpdater.checkForUpdates();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});