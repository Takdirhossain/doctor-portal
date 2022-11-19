
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { mainContext } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useContext(mainContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accesToken')}`
                }
            })
            const data = await res.json()
            return data
        }
        
    })
    refetch()
    console.log(bookings)
    return (
        <div>
            <h2 className='text-2xl'>My Appoinment</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr className="hover">
                                <th>{i}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                            </tr>)
                        }





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;