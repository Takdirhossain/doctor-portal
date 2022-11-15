import React, { useState } from 'react';
import Appoinmentbanner from '../components/Appoinmentbanner';
import AvailableAppoinment from '../components/AvailableAppoinment';

const GetAppoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <Appoinmentbanner selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}></Appoinmentbanner>
                <AvailableAppoinment selectedDate={selectedDate}></AvailableAppoinment>
        </div>
    );
};

export default GetAppoinment;