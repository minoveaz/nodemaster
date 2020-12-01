const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Direction of the city to require the weather status',
        demand: true
    }
}).argv;

console.log(argv.direction);