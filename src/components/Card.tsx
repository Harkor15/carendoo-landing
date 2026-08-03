import React from "react";

interface CardProps {
  title: string;
  content: string;
  image: string;
  reverseOrder?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  image,
  reverseOrder = false,
}) => (
  <div className="w-full max-w-5xl my-6 sm:my-10 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6">
    <div
      className={`w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left ${
        reverseOrder ? "sm:order-2" : "sm:order-1"
      }`}
    >
      <h3 className="text-center sm:text-left">{title}</h3>
      <p className="mt-3 text-secondary text-base sm:text-lg leading-relaxed text-center sm:text-left">
        {content}
      </p>
    </div>
    <div
      className={`w-full sm:w-1/2 flex justify-center items-center ${
        reverseOrder ? "sm:order-1" : "sm:order-2"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="h-64 sm:h-80 md:h-96 w-auto object-contain max-w-full"
      />
    </div>
  </div>
);

export default Card;