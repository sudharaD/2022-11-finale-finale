import React from 'react'
import LeftCard from './LeftCard'
import RightCard from './RightCard'
import '../styles/App.css';

export default function App() {
    return (
        <div className="main">
            <LeftCard/>
            <RightCard/>
        </div>
    )
}
