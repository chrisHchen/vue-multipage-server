const path = require('path')
const fs = require('fs')
const glob = require('glob')

module.exports = function (
  exceptList
) {
    let entries = {}
    let folders = []

    glob.sync('src/entry/**/*.js').forEach(file => {

        // console.log(file)
        if(folders.indexOf(file) === -1){
            folders.push(file)
        }
    })
    folders.forEach(file => {
        const filename = path.basename(file, '.js')
        // console.log(filename)
        entries[filename] = file
    })

    return entries
}
