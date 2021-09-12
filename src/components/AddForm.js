import React from 'react'
import { useState } from 'react'


function AddForm({onAdd}) {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(!text) {
            alert('Fill Out Task')
            return;
        } else if(!day) {
            alert('Fill Out Day & Time')
            return;
        }

        onAdd({text,day,reminder});
        setText('');
        setDay('');
        setReminder(false);
    }
    
    return (
        <form className="add-form" 
        onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text"  placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text"  placeholder="Write Out Day" value={day} onChange={e => setDay(e.target.value)} />
            </div>
            <div className="form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox"  checked={reminder} onChange={e => setReminder(e.target.checked)}/>
            </div>
            <div className="form-control">
                <button className="btn btn-block">Save Task</button>
            </div>
        </form>
    )
}

export default AddForm
