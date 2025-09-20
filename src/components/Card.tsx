import React from "react";

interface CardProps {
    title: string;
    content: string;
    image: string;
    reverseOrder?: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, image, reverseOrder = false }) => (
    <div className="flex justify-center pt-8 items-center flex-col sm:flex-row  lg:gap-20">
        <div className={`justify-center items-center flex flex-col ${reverseOrder ? "sm:order-2" : "sm:order-1"}  lg:px-4`}>
            <h3>{title}</h3 >
            <div className="pt-2">{content}</div>
        </div>
        <img src={image} className={`h-80 w-80 pt-2 center sm:h-80 sm:w-auto ${reverseOrder ? "sm:order-1" : "sm:order-2"} sm:mx-4 sm:pt-4 lg:mx-16`} />


    </div>
);

export default Card;