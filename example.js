const env = require('./')

env.development
// returns `true` if path contains /electron-prebuilt/

env.release
// returns `true` unless path contains /electron-prebuilt/

app.on('ready', function() {
  if (env.development) mainWindow.webContents.openDevTools()
})
