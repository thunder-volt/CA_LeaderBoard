import React from 'react'
import './Leaderboard.css'
import { useState } from 'react'
const Leaderboard = () => {

    const caData = [
        {
            id: 1,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 10

        },
        {
            id: 2,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 1000
        },
        {
            id: 3,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 1500
        },
        {
            id: 4,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 1
        },
        {
            id: 5,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 50
        },
        {
            id: 6,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 190
        },
        {
            id: 7,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 70
        },
        {
            id: 8,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 10000
        },
        {
            id: 9,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 130
        },
        {
            id: 10,
            name: "Akshay",
            city: "Delhi",
            college: "IITM",
            Points: 66
        },
        {
            id: 11,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 89
        },

    ]
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <div className='ld'>LEADERBOARD</div>
            {/* <div className='pg'>
                <div className='rank'>
                    <h3 className='hd'>YOUR RANK</h3>
                    <div className='data'>1000</div>
                </div>

                <div className='tsk-pnt'>
                    <h3 className='hd'>TASK</h3>
                    <h3 className='hd'>POINTS</h3>

                </div>
            </div> */}
            <div className='srch'>
                <input type="text" placeholder='Search CA' id='search' onChange={event => { setSearchTerm(event.target.value) }} />
            </div>

            <div className='tdHead'>
                <div className='a1'>Sl:</div>
                <div className='a1'>Name</div>
                <div className='a1'>City</div>
                <div className='a1'>College</div>
                <div className='a1'>Points</div>
            </div>
            {
                caData.filter((val) => {
                    if (searchTerm === '') {
                        return val;
                    }
                    else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return val;
                    }
                    else if (val.city.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return val;
                    }
                    else if (val.college.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return val;
                    }
                    else if (val.Points >= searchTerm) {
                        return val;
                    }

                }).map((curElm) => {
                    return <div className='tdRow'>
                        <div> {curElm.id}</div>
                        <div> {curElm.name}</div>
                        <div> {curElm.city}</div>
                        <div>{curElm.college}</div>
                        <div> {curElm.Points}</div>
                    </div>


                })
            }

        </>
    )
}

export default Leaderboard