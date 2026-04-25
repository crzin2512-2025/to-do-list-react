import { TaskReducer, TaskAction } from "@/reducers/TaskReducer";
import { createContext, ReactNode, useContext, useReducer } from "react";
import { Task } from "@/types/Task";

type TaskContextType = {
    tasks: Task[];
    dispatch: React.Dispatch<TaskAction>;
}

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children } : { children: ReactNode}) => {
    const [tasks, dispatch] = useReducer(TaskReducer, [])

    return(
        <TaskContext.Provider value={{ tasks, dispatch}}>{children}</TaskContext.Provider>
    );
}

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }
    return context;
}