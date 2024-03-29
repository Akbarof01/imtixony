import { useState } from "react"


function TodoInp() {
    const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }
  
    return (
        <div className='container'>
            <div className="input_box">
                <input className="INPUT" type="text" placeholder='Add a new task' />
                <button className="plus" onClick={increment}>
                    +
                </button>
            </div>
            <div className="Task_container">
                <h3 className="Task">Tasks to do - {counter}</h3>
            </div>
        </div>
    )
}

export default TodoInp
