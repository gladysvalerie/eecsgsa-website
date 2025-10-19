import React from "react";

const Card = ({
  imageSrc,
  imageAlt = "Card image",
  title,
  description,
  children,
  width = "w-full",
  height = "h-96",
  className = "",
}) => {
  // Check if width/height are Tailwind classes or pixel values
  const isTailwindWidth = typeof width === "string" && width.includes("w-");
  const isTailwindHeight = typeof height === "string" && height.includes("h-");

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-ring ${className} ${
        isTailwindWidth ? width : ""
      } ${isTailwindHeight ? height : ""}`}
      style={{
        width:
          !isTailwindWidth && typeof width === "number"
            ? `${width}px`
            : undefined,
        height:
          !isTailwindHeight && typeof height === "number"
            ? `${height}px`
            : undefined,
      }}
    >
      {/* Background image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Text overlay */}
      <div className="absolute bottom-0 w-full p-6 text-white z-10">
        {title && (
          <h3 className="text-2xl font-semibold mb-2 drop-shadow-md">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-white/90 text-base leading-relaxed drop-shadow-sm">
            {description}
          </p>
        )}
        {children && <div className="mt-3">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
