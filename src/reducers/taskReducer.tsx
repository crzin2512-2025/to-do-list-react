import { Task } from "@/types/Task";



type AddAction = {
    type: 'add',
    payload: {
        text: string;
    }
}

type ToggleAction = {
    type: 'toggle',
    payload: {
        id: number;
        completed: boolean;
    }
}

type DeleteAction = {
    type: 'delete',
    payload: { id: number }
}


export type TaskAction = AddAction | ToggleAction | DeleteAction;

export const TaskReducer = (state: Task[], action: TaskAction) => {
    switch (action.type) {
        case 'add':
            return [...state, {
                id: Date.now(),
                text: action.payload.text,
                completed: false
            }]
        case 'toggle':
            return state.map((task) =>
                task.id === action.payload.id
                    ? { ...task, completed: !task.completed }
                    : task
            );
        case 'delete':
            return state.filter((task) => task.id !== action.payload.id);
        default:
            return state;
    }
}