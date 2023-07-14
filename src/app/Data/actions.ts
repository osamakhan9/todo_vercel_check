// bellow this variable is used for find index of the array. When you update an data then this data will not change index in that array.
let titleForUpdate: string | null = null;

const addTask = (item: {}) => {
        let storedTask = [];
        const getItemsFromStorage = localStorage.getItem('tasks');
        if (getItemsFromStorage) {
                storedTask = JSON.parse(getItemsFromStorage);
        }

        storedTask.push(item);
        localStorage.setItem('tasks', JSON.stringify(storedTask));
}


// This function find out the target task which you want to update
const getSingleTask = (title: string) => {
        const getItemsFromStorage = localStorage.getItem('tasks');
        if (getItemsFromStorage) {
                titleForUpdate = title
                const storedTask = JSON.parse(getItemsFromStorage);
                const found = storedTask.find((task: any) => task.title === title)
                return found
        }
}

const editAndUpdate = (task: {}) => {
        let storedTask = [];
        const getItemsFromStorage = localStorage.getItem('tasks');
        if (getItemsFromStorage) {
                storedTask = JSON.parse(getItemsFromStorage);
        }
        const index = storedTask.map((object: any) => object.title).indexOf(titleForUpdate);
        storedTask.splice(index, 1, task);
        localStorage.setItem('tasks', JSON.stringify(storedTask));
}

const deleteTask = (title: string) => {
        let remainingTasks = [];
        const getItemsFromStorage = localStorage.getItem('tasks');
        if (getItemsFromStorage) {
                const storedTask = JSON.parse(getItemsFromStorage);
                remainingTasks = storedTask.filter((task: any) => task.title !== title)
        }
        localStorage.setItem('tasks', JSON.stringify(remainingTasks));
        return true;
}

export { addTask, deleteTask, getSingleTask, editAndUpdate };