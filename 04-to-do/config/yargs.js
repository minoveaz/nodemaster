const description = {
    demand: true,
    alias: 'd',
    desc: 'Task description'
};

const complete = {
    default: true,
    alias: 'c',
    desc: 'Chek a task when is done or pending'
};

const argv = require('yargs')
    .command('create', 'create an Element to Do', {
        description
    })
    .command('update', 'Update Task status', {
        description,
        complete
    })
    .command('erase', 'delete an Element to Do', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}