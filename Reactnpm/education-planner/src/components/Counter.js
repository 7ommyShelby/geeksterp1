import { prettyDOM } from '@testing-library/react';
import React, { useState } from 'react'

const Counter = () => {

    const [timer, setTimer] = useState(0);

    function add() {
        setTimer(timer + 1)
    }
    function sub() {
        setTimer(timer - 1)
    }
    function reset() {
        setTimer(0)
    }




    // button.addEventListner('click', add)

    const [students, setStud] = useState([])


    console.log(timer);
    return (
        <div>
            <h1>{timer}</h1>

            {students.map((e) => {
                return (
                    <p>{e}</p>
                )
            })}

            <h1></h1>
            <button onClick={(e) => {
                if (students.includes('ankit')) {
                    setStud((e) => {
                        let data = [...e, 'vibbhakar']
                        console.log(data)
                        return data;
                    })
                } 
                    setStud([...students, 'ankit'])
                

                // setStud((previousState)=>{
                //     console.log(previousState)
                //     return [...previousState, "ankit"];
                // })

            }}>add students</button>


            <button onClick={add}>Add</button>
            <button onClick={sub}>Sub</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter
