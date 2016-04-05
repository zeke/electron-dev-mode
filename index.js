'use strict'

class ElectronEnv {
  get development () {
    return !!this.execPath().match(/[\\\/]electron-prebuilt[\\\/]/)
  }

  get release () {
    return !this.development
  }

  execPath () {
    return process.execPath
  }
}

module.exports = new ElectronEnv()
