import React from 'react'
import data from '../assets/data.json'

function Timeline() {
    return (
        <div id='timeline'>
            <div className="timeline-box">
                {
                    data.projects.map((item, index) => {
                        return (
                            <TimelineItem
                                heading={item.title}
                                text={item.date}
                                index={index}
                                key={item.title} />
                        )
                    })}
            </div>
        </div>
    )
}

function TimelineItem({ heading, text, index }) {
    return (
        <div className={`TimelineItem
         ${index % 2 === 0 ? "left-timeline" : "right-timeline"}`}>
            <div className='heading-text'>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
        </div >
    )
}

export default Timeline
