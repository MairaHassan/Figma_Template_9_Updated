"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../components/Footer";

interface Checkout {
  id: number;
  img: string;
  title: string;
  weg: string;
  price: string;
}

export default function CheckoutPage() {
  const data: Checkout[] = [
    { id: 1, img: "/images/chick.png", title: "Chicken Tikka Kabab", weg: "150 gm net", price: "50$" },
    { id: 2, img: "/images/chick.png", title: "Chicken Tikka Kabab", weg: "150 gm net", price: "50$" },
    { id: 3, img: "/images/chick.png", title: "Chicken Tikka Kabab", weg: "150 gm net", price: "50$" },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const subtotal = data.reduce((sum, item) => sum + parseFloat(item.price), 0);
  const discount = 0.25 * subtotal; // 25% discount
  const tax = 0.1 * subtotal; // 10% tax
  const total = (subtotal - discount + tax).toFixed(2);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePlaceOrder = () => {
    if (
      !formData.firstName ||
      !formData.email ||
      !formData.phone ||
      !formData.address1
    ) {
      alert("Please fill in all required fields!");
      return;
    }
    setIsOrderPlaced(true); // Order is placed, update state
  };
  
  // Inside the button:
  <button
    onClick={handlePlaceOrder}
    className={`w-full mt-6 px-6 py-3 ${
      isOrderPlaced ? 'bg-gray-400' : 'bg-yellow-500'
    } text-white rounded-md shadow-sm text-sm font-medium`}
    disabled={isOrderPlaced} // Disable button after placing order
  >
    {isOrderPlaced ? "Order Placed" : "Place an Order"}
  </button>
  return (
    <>
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg_cover.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Checkout Page</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Checkout
          </p>
        </div>
      </section>
      <div className="lg:max-w-[1920px] w-full px-auto gap-2">
        <div className="lg:max-w-[1320px] w-full flex lg:px-16 flex-col lg:flex-row py-24">
          {/* Shipping Address */}
          <div className="lg:max-w-[872px] md:px-16 px-4 w-full h-auto">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="w-full gap-2 flex md:flex-row flex-col px-0">
              {/* First Name */}
              <div className="md:w-1/2 px-4 w-full">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              {/* Last Name */}
              <div className="md:w-1/2 px-4 w-full">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            {/* Email & Phone */}
            <div className="flex flex-col my-4 gap-4 md:flex-row">
              <div className="md:w-1/2 px-4 w-full">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div className="md:w-1/2 px-4 w-full">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
          </div>
          {/* Order Summary */}
          <div className="flex-1">
            <div className="py-8 px-6 relative mx-auto lg:max-w-[424px] w-full rounded-lg border-2 border-gray-300">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-6 gap-3 w-full">
                {data.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center w-full">
                    <div className="relative w-[82px] h-[88px]">
                      <Image src={item.img} alt={item.title} fill className="rounded-md object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.weg}</p>
                      <p className="text-sm text-gray-500">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 w-full space-y-6 border-t pt-4">
                <div className="flex justify-between text-sm"><span>Subtotal</span><span>{subtotal}$</span></div>
                <div className="flex justify-between text-sm"><span>Discount</span><span>-{discount}$</span></div>
                <div className="flex justify-between text-sm"><span>Tax</span><span>+{tax}$</span></div>
                <div className="flex justify-between border-t pt-2"><span>Total</span><span>{total}$</span></div>
              </div>
              <button
                onClick={handlePlaceOrder}
                className="w-full mt-6 px-6 py-3 bg-yellow-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
