'use strict'

const http = require('http')
const progress = require('child_process')

exports.description = function() {
    'Mac软件'
}

exports.issue = function () {
}

exports.log = function () {
}

exports.install = function () {
    let src = 'https://download.revealapp.com/Reveal.app.zip'
    src = 'http://m6.pc6.com/xuh6/revealapp24.zip'
    const file = src.split('/').pop()
    const name = file.split('.').slice(0, -1).join('.')
    const app = '/Applications/Reveal.app'
    progress.exec('rm -fr ~/Downloads/' + file, function(error, stdout, stderr) {
        console.log(error,stdout,stderr)
        progress.exec('wget -P ~/Downloads ' + src, function(error, stdout, stderr) {
            console.log(error,stdout,stderr)
            progress.exec('unzip -d ~/Downloads ~/Downloads/' + file, function(error, stdout, stderr) {
                console.log(error,stdout,stderr)
                progress.exec('mv ~/Downloads/' + name + '/Reveal.app' + ' /Applications', function(error, stdout, stderr) {
                    console.log(error,stdout,stderr)
                })
            })
        })
    })
    const ip = '192.168.2.119'
    const framework = '~/Library/Application\\ Support/Reveal/RevealServer/iOS/RevealServer.framework'
    const path = '/Library/Frameworks'
    progress.exec(`scp -r ${framework} root@${ip}:${path}`, function(error, stdout, stderr) {
        console.log(error,stdout,stderr)
    })
}

exports.uninstall = function () {
}

exports.run = function () {
}