import React, { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Outer container with gradient ring */}
            <div className="rounded-2xl bg-gradient-ring p-[2px]">
                {/* Inner wrapper with black background */}
                <div className="bg-black rounded-2xl p-6">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >
                        {/* Name fields - side by side */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="firstName"
                                    className="text-white text-sm font-medium"
                                >
                                    *First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white text-black rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5A3A92] focus:outline-none"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="lastName"
                                    className="text-white text-sm font-medium"
                                >
                                    *Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white text-black rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5A3A92] focus:outline-none"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>

                        {/* Email field */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="email"
                                className="text-white text-sm font-medium"
                            >
                                *Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white text-black rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5A3A92] focus:outline-none"
                                placeholder="Enter your email address"
                            />
                        </div>

                        {/* Message field */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="message"
                                className="text-white text-sm font-medium"
                            >
                                *Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-white text-black rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5A3A92] focus:outline-none resize-none"
                                placeholder="Enter your message"
                            />
                        </div>

                        {/* Submit button */}
                        <div className="flex justify-center mt-6">
                            <ButtonPrimary width="140px" height="44px">
                                Submit
                            </ButtonPrimary>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
