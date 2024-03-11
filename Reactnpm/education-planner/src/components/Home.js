import React, { useEffect, useState } from 'react'
import './home.css'


const Home = () => {

    const [state, setState] = useState([]);

    const [input, setInput] = useState("");

    const [hours, sethours] = useState("");


    function info() {

        if (input == "" || hours == "") {
            alert("provide data");
            return;
        } else {

            let obj = { "name": input, "hours": Number(hours) };

            setState((e) => {
                localStorage.setItem("name", JSON.stringify([...e, obj]))
                return [...e, obj]
            });

            setInput("");
            sethours("");
        }

    }
    function add(x) {
        setState((e) => {
            let arr = [...e];
            arr[x].hours++;
            localStorage.setItem("name", JSON.stringify(arr))
            return arr
        })

    }
    function sub(x) {

        let arr = [...state];

        if (arr[x].hours > 0) {
            arr[x].hours--;
            setState(() => {
                localStorage.setItem("name", JSON.stringify(arr))
                return arr
            })
        }
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("name")) == null) {
            return setState([])
        }
        setState(() => {
            return JSON.parse(localStorage.getItem("name"))
        })
    }, [])


    return (
        <main>
            <div className='plan'>
                <h1>Geekster Education Planner</h1>

                <div className="input">
                    <input onChange={(e) => {
                        setInput(e.target.value)
                    }} type="text" id="sub" value={input} placeholder='Subject' />

                    <input onChange={(e) => {
                        sethours(e.target.value)
                    }} type="number" id="hrs" value={hours} placeholder='Hours' />

                    <button onClick={info}>Add</button>

                </div>
                <div className="display">
                    {state.map((e, idx) => {
                        return (
                            <div className='task' key={"a" + idx}>
                                <p>Sub :{e.name}</p>
                                <p>Time :{e.hours}hrs</p>

                                <div className="btn">
                                    <button className='plus' onClick={() => { add(idx) }}>+</button>
                                    <button className='minus' onClick={() => { sub(idx) }}>-</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                    <button onClick={() => {
                        localStorage.clear()
                    }}>Clear All</button>
            </div>
        </main>
    )
}

export default Home
