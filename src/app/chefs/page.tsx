import Common from "../components/Common";
import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
interface Chef {
  id: number;
  img: string;
  name: string;
  title: string;
}

const ChefPage = () => {
  const chefData: Chef[] = [
    {
      id: 1,
      img: "/images/Chef 1.png",
      name: "Tahmina Rumi",
      title: "Chef",
    },
    {
      id: 2,
      img: "/images/Chef 2.png",
      name: "Jorina Begum",
      title: "Chef",
    },
    {
      id: 3,
      img: "/images/Chef 3.png",
      name: "M.Mohammad",
      title: "Chef",
    },
    {
      id: 4,
      img: "/images/Chef 4.png",
      name: "Munna Kathy",
      title: "Chef",
    },
    {
      id: 5,
      img: "/images/Chef 5.png",
      name: "Tahmina Rumi",
      title: "Chef",
    },
    {
      id: 6,
      img: "/images/Chef 6.png",
      name: "Bisnu devgon",
      title: "Chef",
    },
    {
      id: 7,
      img: "/images/Chef 7.png",
      name: "Motin Molladsf",
      title: "Chef",
    },
    {
      id: 8,
      img: "/images/Chef 8.png",
      name: "William Rumi",
      title: "Chef",
    },
    {
      id: 9,
      img: "/images/Chef 9.png",
      name: "Kets william roy",
      title: "Chef",
    },
    {
      id: 10,
      img: "/images/Chef 10.png",
      name: "Mahmud kholil",
      title: "Chef",
    },
    {
      id: 11,
      img: "/images/Chef 11.png",
      name: "Ataur Rahman",
      title: "Chef",
    },
    {
      id: 12,
      img: "/images/Chef 12.png",
      name: "Monalisa holly",
      title: "Chef",
    },
  ];
  return (
    <div className="md:mx-w-[1920px] w-full">
      <Common title="Our Chef"  subtitle="Chef"/>
      <div className="md:mx-w-[1320px] px-8">
        <div className="grid gap-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center items-center my-12">
          {chefData.map((item, index) => (
            <div key={index} className="w-full mx-w-[312px] mx-auto p-4 bg-white shadow-lg">
                <Image src={item.img} 
                alt={item.title} 
                width={312} 
                height={380} 
                className="w-full mb-4 rounded-lg object-cover" />
                <h2 className="text-center font-bold text-[20px]">{item.name}</h2>
                <p className="text-center font-[400px] text-[14px]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChefPage;
