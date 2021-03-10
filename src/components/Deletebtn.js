import React from 'react'
import base from '../api/base'

const Deletebtn = ({patientID}) => {

    const deletePatient =() =>{
        base('patients').destroy(patientID,function(err,deletePatient) {
            if(err){
                console.log(err);
                return
            }
            prompt('Deleted Record',deletePatient.id)

        })
    }

    return (
        <div className="">
            <button type="button" onClick={deletePatient} className="btn btn-warning">
                <i className="bi bi-archive-fill"></i>

            </button>
        </div>
    )
}

export default Deletebtn
