import React from 'react';
import appoinment from '../assets/images/appointment.png'
import doctor from '../assets/images/doctor.png'
const Appoinment = () => {
    return (
        <div style={{backgroundImage: `url(${appoinment})` }} className="mt-32 ">
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row text-white">
                    <img alt='' src={doctor} className=" hidden scroll  -mt-32  lg:block lg:w-1/2 rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold">Appointment</h1>
                        <h1 className="  text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;