const fs = require('fs');

let lisToDoTask = [];

const saveDB = () => {
    let data = JSON.stringify(lisToDoTask);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Could not save de Data', err);
        console.log('The file has ben saved!')
    })
}

const loadDB = () => {

    try {
        lisToDoTask = require('../db/data.json');

    } catch (error) {
        lisToDoTask = [];
    }


}

const create = (description) => {

    loadDB();

    let toDo = {
        description,
        complete: false,
    };

    lisToDoTask.push(toDo);
    saveDB();
    return toDo;
}

const getList = () => {
    loadDB();
    return lisToDoTask;
}

const update = (description, complete = true) => {
    loadDB();

    let index = lisToDoTask.findIndex(tarea => tarea.description === description);

    if (index >= 0) {
        lisToDoTask[index].complete = complete;
        saveDB();
        return true
    } else {
        return false;
    }
}

const erase = (description) => {
    loadDB();
    let newListToDoTask = lisToDoTask.filter(tarea => {
        return tarea.description != description
    });


    if (lisToDoTask.length === newListToDoTask) {
        return false;
    } else {
        lisToDoTask = newListToDoTask;
        saveDB();
        return true;
    }

}

module.exports = {
    create,
    saveDB,
    getList,
    update,
    erase
}