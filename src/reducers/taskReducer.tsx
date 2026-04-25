


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


export type TaskAction = AddAction | ToggleAction | DeleteAction;

export const TaskReducer = (state: Task[], action: TaskAction) => {
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