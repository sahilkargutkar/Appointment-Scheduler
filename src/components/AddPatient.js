import React, { useRef } from 'react'
import base from '../api/base'

const AddPatient = () => {

    const nameRef=useRef();
    const typeRef=useRef();
    const phoneRef=useRef();
    const statusRef=useRef();
    const dateRef=useRef();

    const addPatient = (e) =>{

        e.preventDefault();
        const Name = nameRef.current.value;
        const Type = typeRef.current.value;
        const Phone = phoneRef.current.value;
        const Date = dateRef.current.value;
        const Status = statusRef.current.value;

        base('patients').create(
            {Name,Phone,Type,Date,Status},
            function(err,record){
                if(err){
                    console.error(err);
                    return;
                }
                prompt(record.getId());
            }
        )
    }


    return (
        <div className="mt-5 card p-5 form-add">
            <h4 className="mb-5">Add Patient</h4>
            <form>
                <div className="mb-3">
                    <label className="form-label text-start d-block">
                        Patient Name
                    </label>
                    <input  type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" ref={nameRef}/>

                </div>
                <div className="mb-3">
                    <label className="form-label text-start d-block">
                        Type
                    </label>
                    <input type="text" className="form-control" id="exampleTitle" ref={typeRef}/>
                </div>
                <div className="mb-3">
                    <label className="form-label text-start d-block">
                        Date
                    </label>
                    <input type="date" className="form-control" id="exampleTitle" ref={dateRef}/>

                </div>
                <div className="mb-3">
                    <label className="form-label text-start d-block">
                        Phone
                    </label>
                    <input type="number" className="form-control" id="exampleInput" ref={phoneRef}/>
                </div>
                <div className="mb-3">
                    <label className="form-label text-start d-block">
                        Status
                    </label>
                    <input type="text" className="form-control" id="exampleTitle" ref={statusRef}/>
                </div>
                <button onClick={addPatient} type="submit" className="mt-4 btn btn-primary d-block">
                    Add Patient
                </button>

            </form>
        </div>
    )
}

export default AddPatient
