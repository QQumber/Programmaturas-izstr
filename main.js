const { app, Menu, Tray } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const kill = require('tree-kill');

let tray = null;
let frontendProcess = null;
let backendProcess = null;

function createTray() {
    const iconPath = path.join(__dirname, 'icon.png');
    tray = new Tray(iconPath);

    tray.setToolTip('Servers are starting...');

    const contextMenu = Menu.buildFromTemplate([
        { label: 'Quit', click: () => quitApp() }
    ]);

    tray.setContextMenu(contextMenu);
}

function updateTray() {
    if (frontendProcess && backendProcess) {
        const frontendStatus = frontendProcess.exitCode === null ? 'Running' : 'Stopped';
        const backendStatus = backendProcess.exitCode === null ? 'Running' : 'Stopped';
        tray.setToolTip(`Frontend: ${frontendStatus}\nBackend: ${backendStatus}`);
    }
}

function runServers() {
    frontendProcess = spawn('npm', ['run', 'dev'], { cwd: path.join(__dirname, 'autoweb'), shell: true });
    frontendProcess.stdout.on('data', (data) => console.log(`Frontend: ${data}`));
    frontendProcess.stderr.on('data', (data) => console.error(`Frontend Error: ${data}`));
    frontendProcess.on('close', (code) => {
        console.log(`Frontend exited with code ${code}`);
        updateTray();
    });

    backendProcess = spawn('npm', ['run', 'dev'], { cwd: path.join(__dirname, 'backend'), shell: true });
    backendProcess.stdout.on('data', (data) => console.log(`Backend: ${data}`));
    backendProcess.stderr.on('data', (data) => console.error(`Backend Error: ${data}`));
    backendProcess.on('close', (code) => {
        console.log(`Backend exited with code ${code}`);
        updateTray();
    });

    updateTray();
}

function quitApp() {
    if (frontendProcess) {
        kill(frontendProcess.pid, 'SIGTERM', (err) => {
            if (err) console.error(`Error killing frontend process: ${err}`);
            else console.log('Frontend process killed successfully.');
        });
    }

    if (backendProcess) {
        kill(backendProcess.pid, 'SIGTERM', (err) => {
            if (err) console.error(`Error killing backend process: ${err}`);
            else console.log('Backend process killed successfully.');
        });
    }

    // Aizver Electron aplikāciju pēc mazas aizkaves
    setTimeout(() => {
        app.quit();
    }, 1000);
}

app.whenReady().then(() => {
    createTray();
    runServers();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        quitApp();
    }
});
