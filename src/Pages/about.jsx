import React from 'react';
import Banner from '../Components/Banner';
import { Services } from '../Components/Services';


function About (){
    return(
        <>
            <div className="bg-[#07031C]">
                <Banner />
                <Services />
            </div>
        </>
    )
}

export default About;