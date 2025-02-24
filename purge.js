const path = require('node:path')
const fs = require('node:fs')

const namesToRemove = process.argv.slice(2)

const peoplesPath = path.join(__dirname, 'people')

if (!namesToRemove.length) {
  fs.readdirSync(peoplesPath).forEach((file) => {
    if (file.indexOf('mazipan.js') < 0) {
      try {
        fs.unlinkSync(path.join(peoplesPath, file))
        console.log(`Success deleting file: ${file}`)
      } catch (_e) {
        console.error(`Error deleting file: ${file}`)
      }
    }
  })

  fs.writeFile(
    `${peoplesPath}/LAST_UPDATE`,
    `${new Date().toISOString()}`,
    (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log('File "LAST_UPDATE" is updated successfully.')
      }
    },
  )
} else {
  namesToRemove.forEach((name) => {
    try {
      fs.unlinkSync(path.join(peoplesPath, `${name}.js`))
    } catch (_e) {
      console.error(`Error deleting file for name: ${name}`)
    }
  })
}
