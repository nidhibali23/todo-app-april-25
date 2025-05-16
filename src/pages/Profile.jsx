import React, { useContext, useEffect } from 'react'
import AuthContext from '../auth/AuthContext';
import { convertBase64 } from '../helper';

const Profile = () => {
    const { user, fetchUserDetails, userDetails, updateUser } = useContext(AuthContext);

    const handleImage = async (e) => {
        let file = e.target.files[0];
        const fileString = await convertBase64(file);
        const formData = { id: user.id, imageurl: fileString }
        updateUser(formData)
    }


    useEffect(() => {
        if (user) {
            fetchUserDetails(user.id)
        }
    }
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
                                <button>Edit</button>
                            </div>
                        </>
                    }

                </div>
            </div>
        </div>
    )
}

export default Profile;