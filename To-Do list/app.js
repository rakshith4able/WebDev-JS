let input = '';
const todo = ['Have Breakfast'];
while (input !== 'quit' && input !== 'q') {
    if (input == 'list') {
        console.log('******************************');
        for (let i = 0; i < todo.length; i++)
            console.log(`${i} - ${todo[i]}`);
        console.log('******************************');
    }
    else if (input == 'new') {
        let newtodo = prompt("Enter new todo");
        todo.push(newtodo);
        console.log(`Added ${newtodo} to the todo list`);
    }
    else if (input == 'del') {
        let index = parseInt(prompt("Enter the index of to do to delete"));
        if (!Number.isNaN(index)) {

            let deleted = todo.splice(index, 1);
            if (deleted != '')
                console.log(`Removed ${deleted} from todo  `);

        }
        else
            console.log("Enter valid index");
    }
    input = prompt("What would you like to do?");
}
console.log("OK! You can close the app!");