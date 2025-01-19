import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
      
    return (
      <section className="bg-black text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/ab1.png"
              alt="Tacos"
              width={362}
              height={356}
              className="rounded-lg object-cover h-80"
            />
            <Image
              src="/images/blog1.png"
              alt="Burger"
              width={281}
              height={231}
              className="rounded-lg object-cover h-40"
            />
            <Image
              src="/images/img3.png"
              alt="Fried Chicken"
              width={244}
              height={306}
              className="rounded-lg object-cover h-40"
            />
            <Image
              src="/images/img4.png"
              alt="Cheesy Burger"
              width={221}
              height={226}
              className="rounded-lg object-cover h-30"
            />
             <Image
              src="/images/img5.png"
              alt="Burger With Fries"
              width={161}
              height={168}
              className="rounded-lg object-cover h-30"
            />
             <Image
              src="/images/img6.png"
              alt="salad"
              width={161}
              height={166}
              className="rounded-lg object-cover h-30"
            />
          </div>
  
          {/* Right - Text and Icons */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-yellow-500">
              Why Choose Us
            </h2>
            <h3 className="text-5xl font-extrabold mt-4">
              Extra <span className="text-yellow-500">Ordinary Taste</span> <br />
              And Experienced
            </h3>
            <p className="text-gray-300 mt-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
              elit augue urna, vitae feugiat pretium donec id elementum.
            </p>
  
            {/* Icons Section */}
            <div className="flex space-x-8 mt-8">
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 p-4 rounded-full">
                  <Image
                    src="/images/Hamburger.png"
                    alt="Fast Food"
                    width={102}
                    height={100}
                    className="h-8 w-8"
                  />
                </div>
                <span className="mt-2 text-white">Fast Food</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 p-4 rounded-full">
                  <Image
                    src="/images/Cookie.png"
                    alt="Lunch"
                    width={102}
                    height={100}
                    className="h-8 w-8"
                  />
                </div>
                <span className="mt-2 text-white">Lunch</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 p-4 rounded-full">
                  <Image
                    src="/images/Wine.png"
                    alt="Dinner"
                    width={102}
                    height={100}
                    className="h-8 w-8"
                  />
                </div>
                <span className="mt-2 text-white">Dinner</span>
              </div>
            </div>
  
            {/* Experience Section */}
            <div className="mt-8 text-yellow-500 text-3xl font-bold">
              <span>30+</span> <span className="text-white">Years of Experience</span>
            </div>
          </div>
        </div>
      </section>
      
  
    );
  }
  
  export default  WhyChooseUs;