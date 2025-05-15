import React, { useState } from 'react';
import image from '../assets/image.png';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);


    const [profileData, setProfileData] = useState({
        name: 'Nidhi',
        dob: '23/09/2000',
        gender: 'Female',
        contact: '+91-9999656565',
        role: 'Front-end Developer',
    });


    const [formData, setFormData] = useState({ ...profileData });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleEditClick = () => {
        setFormData({ ...profileData });
        setIsEditing(true);
    };


    const handleUpdateClick = () => {
        setProfileData({ ...formData });
        setIsEditing(false);
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="bg-dark text-white p-5 rounded" style={{ width: '90%', maxWidth: '1100px' }}>
                <div className="text-center">
                    <img
                        src={image}
                        alt="Profile"
                        className="rounded-circle mb-3"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                    <h4 className="bold">{profileData.name}</h4>
                    <p>{profileData.dob}</p>
                    <p>{profileData.gender}</p>
                    <p>{profileData.contact}</p>
                    <p>{profileData.role}</p>
                    {!isEditing && (
                        <button className="btn btn-light btn-sm" onClick={handleEditClick}>
                            Edit Profile
                        </button>
                    )}
                </div>


                {isEditing && (
                    <div className="mt-5">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <label className="form-label text-white">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label text-white">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label text-white">Date of Birth</label>
                                <input
                                    type="text"
                                    name="dob"
                                    className="form-control"
                                    value={formData.dob}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label text-white">Date of Birth</label>
                                <input
                                    type="text"
                                    name="dob"
                                    className="form-control"
                                    value={formData.dob}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label text-white">Contact</label>
                                <input
                                    type="text"
                                    name="contact"
                                    className="form-control"
                                    value={formData.contact}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label text-white">Contact</label>
                                <input
                                    type="text"
                                    name="contact"
                                    className="form-control"
                                    value={formData.contact}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <button className="btn btn-info text-white" onClick={handleUpdateClick}>Update Profile</button>
                        </div>



                    </div>
                )
                }
            </div >
        </div >
    );
};

export default Profile;
