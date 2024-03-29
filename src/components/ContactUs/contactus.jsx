import React, { useState } from 'react';
import contact from '../../assets/contact.jpg';
import contact2 from '../../assets/contact2.jpg';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='flex items-center'>
            <div className='contact-icon mr-4 size-'>
                <img src={contact} alt="Logo" />
            </div>

            <div className="bg-white min-h-screen flex justify-between items-center flex-grow max-w-md">
                <div className="bg-gray-300 p-8 rounded-md shadow-md w-full">
                    <h1 className="text-4xl font-bold mb-4">Tell us your problem..</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" required />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
                    </form>
                </div>
            </div>

            <div className='contact-icon mr-4'>
                <img src={contact2} alt="Logo2" />
            </div>
        </div>
    );
}

export default ContactUs;
