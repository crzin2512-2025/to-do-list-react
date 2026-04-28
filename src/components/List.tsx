import { useContext, useState } from "react"
import { ListMap } from "./ListMap"
import { useTask } from "@/contexts/TaskContext"

export const List = () => {
    const taskCtx = useTask();
    const [input, setInput] = useState('')

    const handleKeyUpAction = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            if(input.trim() !== ''){
                taskCtx?.dispatch({
                    type: 'add', 
                    payload: {
                        text: input
                    }
                })
                setInput('')
            }
        }
    }

    return (
        <div className="w-screen h-screen bg-indigo-800 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-3  px-9 py-5">
                <h1 className="font-bold text-3xl mx-auto">TO-DO</h1>
                <input
                    type="text"
                    className="bg-white rounded-md text-black w-full px-4 py-2 outline-none text-sm"
                    placeholder="Digite a task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyUp={handleKeyUpAction}
                />
                <button className="px-4 py-3 w-30 mx-auto bg-white text-black text-sm rounded-md">Adicionar</button>
            </div>
            <div>
                <ListMap />
            </div>
        </div>
    )
}