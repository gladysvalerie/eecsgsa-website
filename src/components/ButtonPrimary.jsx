import React from "react";

const GradientRingButton = ({
    children,
    className = "",
    onClick,
    width,
    height,
    rounded = "rounded-full",
}) => {
    return (
        <div
            className={`block ${rounded} bg-gradient-ring ${className}`}
            style={{
                width: width || "fit-content",
                height: height || "auto",
                minWidth: width ? undefined : "fit-content",
                minHeight: height ? undefined : "fit-content",
                padding: "2px",
            }}
        >
            <button
                className={`w-full h-full bg-[#5A3A92] ${rounded} cursor-pointer flex items-center justify-center px-6 py-2`}
                onClick={onClick}
            >
                <span className="text-white font-medium font-inter text-sm whitespace-nowrap">
                    {children}
                </span>
            </button>
        </div>
    );
};

export default GradientRingButton;
