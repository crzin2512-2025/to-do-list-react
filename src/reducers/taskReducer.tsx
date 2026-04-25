import { stat } from "fs";
import { text } from "stream/consumers";


type AddAction = {
    type: 'add',
    payload: {
        id: number,
        text: string;
        completed: boolean
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


type TaskAction = AddAction | ToggleAction | DeleteAction;

const taskReducer = (state: task[], action: TaskAction) => {
    switch (action.type) {
        case 'add':
            return [...state, {
                id: state.length,
                text: action.payload.text,
                completed: action.payload.completed
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