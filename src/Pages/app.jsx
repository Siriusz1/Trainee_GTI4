import React from 'react';
import { Slider } from '../Components/Slider';
import Depositions from '../Components/Depositions';
import  Numbers  from '../Components/Numbers';
import Text from '../Components/Text';
function App (){
    return(
        <>bg-[#07031C]
            <div className="bg-[#07031C]">
                
                <Slider />
                <Text />
                <Depositions type={1} />
                <Numbers />
                
            </div>
        </>
    )
}

export default App;