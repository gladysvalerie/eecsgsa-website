import React from "react";

const Card = ({
    imageSrc,
    imageAlt = "Card image",
    title,
    description,
    children,
    width = 320,
    height = 480,
    className = "",
}) => {
    const mediaHeight = height * 0.65;
    const contentHeight = height * 0.35;
    const imageInset = 12;

    return (
        <div
            className={`inline-block rounded-2xl bg-gradient-ring ${className}`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                padding: "2px",
            }}
        >
            {/* Main card content */}
            <div
                className="w-full h-full bg-[var(--color-primary)] rounded-2xl shadow-lg overflow-hidden"
                style={{
                    boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                }}
            >
                {/* Top media section - 65% of card height */}
                <div
                    className="relative"
                    style={{ height: `${mediaHeight}px` }}
                >
                    {imageSrc && (
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="absolute object-cover rounded-xl"
                            style={{
                                top: `${imageInset}px`,
                                left: `${imageInset}px`,
                                width: `calc(100% - ${imageInset * 2}px)`,
                                height: `calc(100% - ${imageInset * 2}px)`,
                            }}
                        />
                    )}
                </div>

                {/* Bottom content section - 35% of card height */}
                <div
                    className="p-4 flex flex-col justify-center"
                    style={{ height: `${contentHeight}px` }}
                >
                    {title && (
                        <h3 className="text-white text-lg font-semibold mb-2">
                            {title}
                        </h3>
                    )}

                    {description && (
                        <p className="text-white/80 text-sm leading-relaxed mb-6">
                            {description}
                        </p>
                    )}

                    {children && <div>{children}</div>}
                </div>
            </div>
        </div>
    );
};

export default Card;
