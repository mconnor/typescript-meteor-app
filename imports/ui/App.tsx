import React, { useState } from 'react';
import Task from './Task';

 export const App = () => {

    // const getTasks = () => {
    //     return [
    //         { _id: 1, text: 'This is task 1' },
    //         { _id: 2, text: 'This is task 2' },
    //         { _id: 3, text: 'This is task 3' },
    //     ];
    // }
    const [theTasks] = useState([
        { _id: 1, text: 'This is task 1' },
        { _id: 2, text: 'This is task 2' },
        { _id: 3, text: 'This is task 3' },
    ])

    // const renderTasks = () => {
    //     return theTasks.map((task) => (
    //         <Task key={task._id} task={task} />
    //     ));
    // }



    return (
        <div className="container">
            <header>
                <h1>Todo List</h1>
            </header>

            <ul>
                {theTasks.map((task) => (
                    <Task key={task._id} task={task} />
                  
                ))}
            </ul>
        </div>
    )
};
export default App


// import React from 'react';

// export const App = () => (
//   <div>
//     <h1>Welcome to Meteor!</h1>

//   </div>
// );

