import React from 'react'
import './Leaderboard.css'
const Leaderboard = () => {

    const caData = [
        {
            id: 1,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 100
        },
        {
            id: 2,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 100
        },
        {
            id: 3,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 100
        },
        {
            id: 4,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 100
        },
        {
            id: 5,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 100
        },
        {
            id: 6,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 100
        },
        {
            id: 7,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 100
        },
        {
            id: 8,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 100
        },
        {
            id: 9,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 100
        },
        {
            id: 10,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 100
        },
        {
            id: 11,
            name: "Akshay",
            city: "Kolkata",
            college: "IITM",
            Points: 100
        },

    ]
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
            <div className='tdHead'>
                <div className='a1'>Sl:</div>
                <div className='a1'>Name</div>
                <div className='a1'>City</div>
                <div className='a1'>College</div>
                <div className='a1'>Points</div>
            </div>
            {
                caData.map((curElm) => {
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