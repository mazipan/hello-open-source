const argv = process.argv[2]

const print = console.log

function retrieveData (name) {
  let file = require(`./peoples/${name}.js`)
  return file
}

print(retrieveData(argv))

<script>

