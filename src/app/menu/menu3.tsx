import React from "react";
import Image from "next/image";

const Menu3 = () => {
  const stats = [
    {
      image: "/images/Professional Chefs.png", // Path to the chef icon image
      label: "Professional Chefs",
      value: "420",
    },
    {
      image: "/images/Items Of Food.png", // Path to the food item icon image
      label: "Items Of Food",
      value: "320",
    },
    {
      image: "/images/Years Of Experience.png", // Path to the experience icon image
      label: "Years Of Experience",
      value: "30+",
    },
    {
      image: "/images/Happy Customers.png", // Path to the happy customer icon image
      label: "Happy Customers",
      value: "220",
    },
  ];

  return (
    <div className="bg-black text-white mt-6 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-4">
              <Image
                src={stat.image}
                alt={stat.label}
                width={64} // Adjust width
                height={64} // Adjust height
                className="rounded-md"
              />
            </div>
            <p className="text-lg font-medium">{stat.label}</p>
            <h2 className="text-3xl font-bold">{stat.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu3;
