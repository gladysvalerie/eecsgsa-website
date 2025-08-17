import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
    return (
        <section className="bg-black py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8">
                    {/* Heading */}
                    <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
                        Contact us to inquire.
                    </h2>

                    {/* Form */}
                    <div className="w-full max-w-2xl">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
