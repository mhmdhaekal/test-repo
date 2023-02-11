import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'compfest-silicon';



export const Landing: React.FC = () => {

    const [data, setData] = useState<boolean>(false);

    
    
    return (
        <div>

        <Button onClick={() => setData(true)}>Click Me</Button>
        <Modal
        title='Modal Title'
        acceptButton='Accept'
        cancelButton='Cancel'
        onClose={() => setData(false)}
        isDisplayed={data}
        />
          
        </div>
    )
}