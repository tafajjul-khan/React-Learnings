import { useState } from "react";

import React from 'react'

function Card() {
    const [color, setColor] = useState("olive ")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                
                <button 
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "green"}}
                 onClick={() => setColor("green")}
                >red</button>
                
                <button 
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "blue"}}
                 onClick={() => setColor("blue")}
                >red</button>
                
                <button 
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "purple"}}
                 onClick={() => setColor("purple")}
                >red</button>
                
                <button 
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "yellow"}}
                 onClick={() => setColor("yellow")}
                >red</button>
                
                <button 
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "pink"}}
                 onClick={() => setColor("pink")}
                >red</button>
                
                <button 
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "red"}}
                 onClick={() => setColor("red")}
                >red</button>
                
                <button 
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "black"}}
                onClick={() => setColor("black")}
                >red</button>

            </div>
        </div>
    </div>
  )
}

export default Card