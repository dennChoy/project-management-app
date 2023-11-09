import { useState } from "react";

export default function NewTask({onAdd}) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event){
    setEnteredTask(event.target.value);
  } 
  function handleClick(){
    onAdd(enteredTask);
    setEnteredTask('');
  }

  
  return (
    <div className="flex items-center gap-4">
      <input onChange={handleChange} type="text" value={enteredTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button onClick={handleClick} className="text-stone-400 hover:text-stone-950">Add Task</button>
    </div>
  );
}
