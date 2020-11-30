const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./to-do/to-do');


let command = argv._[0];
switch (command) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(task);
        break;

    case 'list':
        let list = toDo.getList();

        for (let task of list) {
            console.log('=========To Do============'.green);
            console.log(task.description);
            console.log('Estado:', task.complete);
            console.log('=========================='.green);
        }

        break;

    case 'update':

        let updated = toDo.update(argv.description, argv.complete);
        console.log(updated);
        break;

    case 'erase':
        let erase = toDo.erase(argv.description);
        console.log(erase);
        break;

    default:
        console.log('Comando no es reconocido')
}