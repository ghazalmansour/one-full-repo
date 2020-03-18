import React from 'react';
import Typography from '@material-ui/core/Typography';


import Home from './Home';


export default function Homes({homes}) {
    return (
        <div className="homes">
            <Typography variant="h1">
                MY HOME
            </Typography>
            {
                homes.map(
                    home => <Home home={home}/>
                )
            }
        </div>
    )
}