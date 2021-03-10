import React, { useEffect, useState } from 'react'
import base from '../api/base'
import Patient from './Patient'
import AddPatient from './AddPatient'


const Home = () => {

    const [patients,setPatients] = useState([]);

    useEffect(()=>{
        base('patients').select({view:'Grid view'}).eachPage((records,fetchNextPage) =>{
            setPatients(records);
            fetchNextPage();
        });


    },[])


    return (
        <div className="Home">
            <h3 className="app-heading mb-5 mt-4 fw-bolder">
            Appointment Scheduler
            </h3>
            <div className="row">
                {patients.length > 0 ? (
                    <>
                    {patients.map((e) =>(<Patient key={e.id} patient={e} />))}
                
                    </>

                ):(
                    <div className="spinner-border mx-auto text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}


            </div>
           
              <div>
                  <AddPatient />
                  
            </div> 
        </div>
    )
}

export default Home
