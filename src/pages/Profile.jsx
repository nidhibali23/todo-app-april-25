import React, { useContext, useEffect } from 'react'
import AuthContext from '../auth/AuthContext';
import { convertBase64, formatDate } from '../helper';
import { useState } from 'react';

const init = {
    fullname: "",
    dob: "",
    designation: "",
    gender: "female"
}
const Profile = () => {
    const { user, fetchUserDetails, userDetails, updateUser } = useContext(AuthContext);
    const [editUser, setEditUser] = useState(false);
    const [formData, setFormData] = useState(init);

    const handleImage = async (e) => {
        let file = e.target.files[0];
        const fileString = await convertBase64(file);
        const formData = { id: user.id, imageurl: fileString }
        updateUser(formData)
    }

    const handleEdit = () => {
        setEditUser(!editUser);
    }
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            userid: user.id

        }));
    };

    const saveUser = () => {
        updateUser(formData);
    }

    useEffect(() => {
        if (userDetails) {
            setFormData(userDetails)
        }
    }, [userDetails])


    useEffect(() => {
        if (user) {
            fetchUserDetails(user.id)

        }
    }, [user]
    )
    return (
        <div className='container mt-5'>
            <div className='bg-primary text-white p-3'>
                <div className='row align-items-center'>
                    {
                        userDetails &&
                        <>
                            <div className='col-lg-2 text-center'>
                                <img src={userDetails.imageurl ? userDetails.imageurl : ""}
                                    className='border border-2 img-fluid rounded-circle ' style={{ width: 200, height: 200 }} />
                                <input type="file" onChange={handleImage} />
                            </div>
                            <div className='col-lg-9'>
                                <h5>{userDetails.fullname}</h5>
                                <p>{userDetails.email}</p>
                                {
                                    userDetails.designation &&
                                    <p>{userDetails.designation}</p>
                                }
                                {
                                    userDetails.dob &&
                                    <p>
                                        {formatDate(userDetails.dob)}
                                    </p>
                                }
                                <button onClick={handleEdit} className='btn btn-info'>Edit</button>
                                {
                                    editUser &&
                                    <div className='py-3'>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <label className='form-label'>Fullname</label>
                                                <input type="text" name='fullname' className='form-control' onChange={handleChange} value={formData?.fullname} />
                                            </div>

                                            <div className='col-lg-6'>
                                                <label className='form-label'>Designation</label>
                                                <input type="text" name='designation' className='form-control' onChange={handleChange} value={formData?.designation} />
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <label className='form-label'>Date of Birth</label>
                                                <input type="date" name='dob' className='form-control' onChange={handleChange} value={formData?.dob} />
                                            </div>

                                            <div className='col-lg-6'>
                                                <label className='form-label'>Gender</label>
                                                <input type="radio" name='gender' onChange={handleChange} value="male" />Male
                                                <input type="radio" name='gender' onChange={handleChange} value="female" />Female
                                            </div>
                                        </div>
                                        <button onClick={saveUser} className='btn btn-info'>Save</button>
                                    </div>
                                }
                                <div></div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;