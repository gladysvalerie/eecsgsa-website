import React from "react";

const SquareImageCard = ({
    size = "250px",
    width,
    height,
    imageSrc,
    imageAlt = "Card image",
    caption,
    button,
    type = "primary",
    className = "",
}) => {
    // Use width/height if provided, otherwise fall back to size for square
    const cardWidth = width || size;
    const cardHeight = height || size;

    return (
        <div
            className={`inline-block rounded-2xl bg-gradient-ring ${className}`}
            style={{
                width: cardWidth,
                height: cardHeight,
                padding: "2px",
            }}
        >
            {/* Main card content */}
            <div className="relative w-full h-full bg-[#5A3A92] rounded-2xl overflow-hidden">
                {/* Image */}
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-white/10 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">
                            Image placeholder
                        </span>
                    </div>
                )}

                {/* Secondary type overlay */}
                {type === "secondary" && (
                    <div className="absolute inset-0 rounded-2xl bg-[#5A3A92]/35" />
                )}

                {/* Caption based on type */}
                {caption && (
                    <>
                        {type === "primary" ? (
                            /* Primary: bottom-aligned caption with gradient background */
                            <div className="absolute bottom-0 w-full p-2 text-center text-xs text-white">
                                <div className="w-full h-full bg-gradient-to-b from-transparent via-black/40 to-black/70 absolute inset-0 rounded-b-2xl" />
                                <div className="relative z-10">{caption}</div>
                            </div>
                        ) : (
                            /* Secondary: centered caption */
                            <div className="absolute inset-0 grid place-items-center p-4 text-white text-center">
                                {caption}
                            </div>
                        )}
                    </>
                )}

                {/* Button overlay */}
                {button && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                        {button}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SquareImageCard;
