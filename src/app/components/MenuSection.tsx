import React from "react";
import Image from "next/image";

const MenuSection = () => {
  const menuItems = [
    {
      title: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.55",
      image: "/images/meat_balls.png",
    },
    {
      title: "Burger",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.55",
      image: "/images/img4.png",
    },
    {
      title: "Fresh Bread",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.55",
      image: "/images/fresh_bread.png",
    },
    {
      title: "Glow Cheese",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.55",
      image: "/images/glow_cheese.png",
    },
    {
      title: "Italian Pizza",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.55",
      image: "/images/italian_pizza.png",
    },
    {
      title: "Coffee",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.55",
      image: "/images/coffee1.png",
    },
    {
      title: "Sandwich",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.55",
      image: "/images/sandwich.png",
    },
    {
      title: "Beef Burger",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.55",
      image: "/images/blog1.png",
    },
  ];

  return (
    <div className="bg-black text-white py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold italic text-yellow-500">Choose & pick</h3>
        <br />
        <h2 className="text-4xl font-extrabold">
          <span className="text-yellow-500">Fr</span>om Our Menu
        </h2>
      </div>

      {/* Menu Categories Section */}
      <div className="bg-black text-white py-6">
        <div className="flex flex-row justify-center space-x-32 text-lg">
          <button className="text-yellow-500 font-bold">Breakfast</button>
          <button className="hover:text-yellow-500">Lunch</button>
          <button className="hover:text-yellow-500">Dinner</button>
          <button className="hover:text-yellow-500">Dessert</button>
          <button className="hover:text-yellow-500">Drink</button>
          <button className="hover:text-yellow-500">Snack</button>
          <button className="hover:text-yellow-500">Soups</button>
        </div>
        <br />

        <div className="relative container mx-auto flex flex-col lg:flex-row lg:items-center px-6">
          {/* Central Image with Leaves */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
            {/* Decorative Leaves */}
            <Image
              src="/images/salad_cover.png" // Replace with your decorative image
              alt="Decorative Leaves"
              width={500}
              height={500}
              className="absolute z-0"
            />
            {/* Central Dish Image */}
            <Image
              src="/images/salad.png" // Replace with your central dish image
              alt="Salad"
              width={300}
              height={300}
              className="z-10"
            />
          </div>

          {/* Menu Items */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-900 p-4 rounded-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="ml-4 flex-1">
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                  <div className="text-yellow-500 font-bold text-lg">
                    ${item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
