import React from 'react';
import doctor1 from '../../../images/Doctors/1.jpg';
import doctor2 from '../../../images/Doctors/2.jpg';
import doctor3 from '../../../images/Doctors/3.jpg';
import doctor4 from '../../../images/Doctors/4.jpg';
import doctor5 from '../../../images/Doctors/5.jpg';
import doctor6 from '../../../images/Doctors/6.jpg';
import doctor7 from '../../../images/Doctors/7.jpg';
import doctor8 from '../../../images/Doctors/8.jpg';
import doctor9 from '../../../images/Doctors/9.jpg';
import './Experts.css';

import Expert from '../Expert/Expert';


const experts = [
    {
        img: doctor1,
        name: 'Julia Walker',
        expertize: 'Cardiologists'
    },
    {
        img: doctor2,
        name: 'Dr. John Anderson',
        expertize: 'Emergency Medicine Specialists'
    },
    {
        img: doctor3,
        name: 'Dr. Zakaria Smith',
        expertize: 'Nephrologists'
    },
    {
        img: doctor4,
        name: 'Dr. Mia Anderson',
        expertize: 'Psychiatrists'
    },
    {
        img: doctor5,
        name: 'Dr. A B John',
        expertize: 'Ophthalmology'
    },
    {
        img: doctor6,
        name: 'Dr. Razzak khan',
        expertize: 'Hand Surgery'
    },
    {
        img: doctor7,
        name: 'Dr. Fara Khan',
        expertize: 'Psychiatrists'
    },
    {
        img: doctor8,
        name: 'Dr. Watson',
        expertize: 'Medicine'
    },
    {
        img: doctor9,
        name: 'Dr. Zasia Kaif',
        expertize: 'Dentistry/ Periodontics'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
           <h2 className="text-primary mt-5 mb-5">Available Doctors</h2> 
           <div className="row ">
               {
                   experts.map(expert =><Expert
                   key={expert.name}
                   expert={expert}
                   ></Expert>)
               }
            
        </div>

        </div>
        
    );
};

export default Experts;