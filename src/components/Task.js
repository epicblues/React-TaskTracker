import React from 'react'
import {FaTimes} from 'react-icons/fa'





function Task({task,onDelete, onToggle}) {

    return (
        <div className={task.reminder ? "task reminder" : "task"} onDoubleClick={() => {onToggle(task.id)}}>
            <h3>{task.text} <FaTimes onClick={() => {onDelete(task.id)}} style={{color:'red',cursor:'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

Task.defaultProps = {
    task : {
        text : "To Do Default",
        day : "April 30th at 12:00pm",
        reminder : false
    }
   
}

export default Task
