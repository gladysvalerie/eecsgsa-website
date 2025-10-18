import React from "react";

const Card = ({
    imageSrc,
    imageAlt = "Card image",
    title,
    description,
    children,
    width,
    height,
    className = "",
}) => {
    // Use provided dimensions or default to responsive sizing
    const cardWidth = width || "w-full";
    const cardHeight = height || "h-96";

    // Calculate media and content heights based on height prop or default
    const heightValue = typeof height === "number" ? height : 384; // 384px = h-96
    const mediaHeight = heightValue * 0.65; // Reduced to 65% to give more space for content
    console.log(heightValue);

    const contentHeight = heightValue * 0.35; // Increased to 35% for better content spacing

    // Check if width/height are Tailwind classes or pixel values
    const isTailwindWidth =
        typeof cardWidth === "string" && cardWidth.includes("w-");
    const isTailwindHeight =
        typeof cardHeight === "string" && cardHeight.includes("h-");

    return (
        <div
            className={`inline-block rounded-2xl bg-gradient-ring ${className} ${
                isTailwindWidth ? cardWidth : ""
            } ${isTailwindHeight ? cardHeight : ""}`}
            style={{
                width: isTailwindWidth
                    ? undefined
                    : typeof cardWidth === "number"
                    ? `${cardWidth}px`
                    : undefined,
                height: isTailwindHeight
                    ? undefined
                    : typeof cardHeight === "number"
                    ? `${cardHeight}px`
                    : undefined,
                padding: "2px",
            }}
        >
            {/* Main card content */}
            <div
                className="w-full h-full bg-[var(--color-primary)] rounded-2xl shadow-lg overflow-hidden flex flex-col"
                style={{
                    boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                }}
            >
                {/* 1. Image section */}
                <div
                    className="relative flex-shrink-0 p-3"
                    style={{ height: `${mediaHeight}px` }}
                >
                    {imageSrc && (
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    )}
                </div>

                {/* 2. Content section */}
                <div
                    className="flex-shrink-0 flex flex-col justify-center px-4 pt-6 pb-4"
                    style={{ height: `${contentHeight}px` }}
                >
                    {title && (
                        <h3 className="text-white text-lg font-semibold mb-2">
                            {title}
                        </h3>
                    )}

                    {description && (
                        <p className="text-white/80 text-sm leading-relaxed">
                            {description}
                        </p>
                    )}

                    {children && <div className="mt-2">{children}</div>}
                </div>
            </div>
        </div>
    );
};

export default Card;
