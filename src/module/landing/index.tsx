import React, { useState, useEffect } from 'react';
import { Tooltips } from 'compfest-silicon';

export const Landing: React.FC = () => {

    const [data, setData] = useState<boolean>(false);
    
    return (
        <div>

            <h1 style={{
                color: 'white'
            }}>Test</h1>

            <h1 style={{
                color: 'white'
            }}>Test</h1>
            

            <h1 style={{
                color: 'white'
            }}>Test</h1>
            
            <Tooltips
                id='tooltip'
                text='Tooltip'
                children={<div>Tooltip</div>}
            />            
        </div>
    )
}