import React from "react";
import ContactForm from "../../components/ContactForm";

const FormSection = () => {
    return (
        <section className="bg-black py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6">
                
                {/* Heading */}
                <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
                    Email Us
                </h2>
                <p className="text-white/70 text-center max-w-xl">
                    Send us your inquiry and we'll get back to you soon.
                </p>

                {/* Form */}
                <div className="w-full max-w-2xl">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>

    );
};

export default FormSection;
