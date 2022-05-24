import { useState } from "react"

const initialTask = null;
function ToDo() {
    const [ task, setTask ] = useState(initialTask);
    const [ list, setList ] = useState([]);

    function saveHandler(task) {
        setList([...list, task])
        setTask(initialTask)
    }

    function removeItem(e) {
        for(let i = 0; i < list.length; i++) {
            if(i === +e.target.id) setList(list.splice(i-1, 1))
        }
    console.log(list);

    }

    return (
        <div className="container">
            <div className="lists">
                {list.map((item, index) => <div key={index} id={index}>
                    {item}
                    <button id={index} onClick={(e) => removeItem(e)}>x</button>
                </div>)}
            </div>
            <div>
                <label htmlFor="listItem">Task</label>
                <input type='text' id="listItem" onChange={e => setTask(e.target.value)} value={!task ? '' : task} />
                <button onClick={() => saveHandler(task)}>Add</button>
            </div>
        </div>
    )
}

export default ToDo;