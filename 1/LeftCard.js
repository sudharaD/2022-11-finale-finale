import React from 'react'

export default function LeftCard() {
    return (
        <div className="leftCard">
            <img src="https://www.xda-developers.com/files/2021/04/Horizon-Zero-Dawn-Complete-Edition-1.jpg" alt="horizon"/>
            <div className="text">
                <button> Play Now</button>
                <h1>Horizon Zero Dawn</h1>
                <p>Horizon Zero Dawn is a 2017 action role-playing game developed by Guerrilla Games and published
                     by Sony Interactive Entertainment. The plot follows Aloy, a young hunter in a world overrun by machines,
                    who sets out to uncover her past.
                </p>
            </div>
            <div className="bottom">
                <div className="d1">
                    <h2>4<br/> Reads</h2>
                </div>
                <div className="d2">
                     <h2>7152<br/> Views</h2>
                </div>
                <div className="d3">
                    <h2>15 Comments</h2>
                </div>      
            </div>
        </div>
    )
}
