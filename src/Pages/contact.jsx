import React from 'react';
import Banner from '../Components/Banner';
import Form from '../Components/Form';
import { Sedes } from '../Components/Sedes';
function Contact (){
    return(
        <>
            <div className="bg-[#07031C]">
                <Form />
                <Sedes />
            </div>
        </>
    )
}

export default Contact;