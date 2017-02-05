import { app, BrowserWindow } from 'electron';
import CONST from '../utils/constants';

let appWindow;

app.on('ready', () => {
    appWindow = appWindow = new BrowserWindow({ width: 1280, height: 720 })
    appWindow.loadURL(`file://${__dirname}${CONST.ENTRY_HTML_PATH}`);
    appWindow.openDevTools();
});

app.on('window-all-closed', () => {
    if (process.platform != 'darwin')
        app.quit()
});