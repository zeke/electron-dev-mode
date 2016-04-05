const tape = require('tape')
const env = require('./')
const sinon = require('sinon')

tape('electron-shortcut-normalizer', function (test) {

  sinon.stub(env, 'execPath', function() {
    return '/Users/zeke/electron/electron-api-demos/node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron'
  })

  test.ok(env.development, 'env.development is true if process.execPath contains `electron-prebuilt`')
  test.notOk(env.release, 'env.release is false if process.execPath contains `electron-prebuilt`')

  env.execPath.restore()
  sinon.stub(env, 'execPath', function() {
    return '/Applications/Electron.app/Contents/MacOS/Electron'
  })

  test.notOk(env.development, 'env.development is false if process.execPath does not contain `electron-prebuilt`')
  test.ok(env.release, 'env.release is true if process.execPath does not contain `electron-prebuilt`')

  test.end()
})
