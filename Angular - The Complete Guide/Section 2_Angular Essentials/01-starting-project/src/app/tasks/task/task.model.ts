interface Task {
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string
}

interface NewTaskData {
    title: string;
    summary: string;
    date: string;
}

export { Task, NewTaskData }