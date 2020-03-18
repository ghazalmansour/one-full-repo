import React from 'react';


export default function Home({home}) {
    return (
        <div className = "home">
             {home.title} 
             {home.price}
        </div>
    )
}