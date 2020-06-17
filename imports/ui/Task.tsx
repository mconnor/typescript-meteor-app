import React from 'react'

type taskObj = {
        _id: number;
        text: string;
}

type Props = {
    task: taskObj;

}

const Task:React.FC<Props> = ( { task } ) => {
    return (
        <div>
            
            <li>{task.text}</li>
      
        </div>
    )
}

export default Task
