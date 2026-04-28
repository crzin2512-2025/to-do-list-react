import { useTask } from "@/contexts/TaskContext"

export const ListMap = () => {
    const taskCtx = useTask()

    return(
        <ul>
            {taskCtx?.tasks.map(item => (
                <li 
                    key={item.id}
                >
                    {item.text}
                </li>
            ))}
        </ul>
    )
}