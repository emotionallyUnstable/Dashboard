import { useState } from "react"

type Task = {
    text: string;
    color: string;
}


function TaskBoard() {
const [inputValue, setInputValue] = useState("");
const [addTasks, setAddTasks] = useState<Task[]>([])

const handleClick = (color: string) => {
    setAddTasks([...addTasks, { text: inputValue, color }]);
    setInputValue("");
}

    return (

        <>
        <div>
            <p className="text-pink-100">Tasks</p>
            <div className="flex gap-1">
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="text-pink-200" type="text" placeholder="Type your task..." />
                <button onClick={() => handleClick("green")} className="border-1 border-green-600 bg-green-600 p-[6.5px] rounded-2xl cursor-pointer"></button>
                <button onClick={() => handleClick("yellow")} className="border-1 border-yellow-600 bg-yellow-600 p-[6.5px] rounded-2xl cursor-pointer"></button>
                <button onClick={() => handleClick("red")} className="border-1 border-red-600 bg-red-600 p-[6.5px] rounded-2xl cursor-pointer"></button>
            </div>
                {addTasks.slice(-5).map((task, index) => (
                    <li className="truncate max-w-[250px]" style={{ color: task.color }} key={index}>
                        {task.text}
                    </li>
                ))}
        </div>
        </>

    )
}

export default TaskBoard;