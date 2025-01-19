'use client';

import React from 'react';
import Image from 'next/image';

const MeetOurChef = () => {
  return (
    <div className="container">
      <h2 className="heading">Chefs</h2>
      <h3 className="subheading">Meet Our Chef</h3>
      <div className="card-container">
        {chefData.map((chef, index) => (
          <div key={index} className="card">
            <Image 
              src={chef.image} 
              alt={`Chef ${chef.name}`} 
              className="image" 
              width={250} 
              height={200} 
            />
            <div className="info">
              <h4 className="name">{chef.name}</h4>
              <p className="role">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="see-more">
        <button className="button">See More</button>
      </div>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 50px 20px;
          background-color: #000;
          color: #fff;
          font-family: 'Arial', sans-serif;
        }

        .heading {
          font-size: 3rem;
          margin-bottom: 10px;
          color: #ffa500;
          font-weight: bold;
        }

        .subheading {
          font-size: 1.8rem;
          margin-bottom: 40px;
          color: #fff;
        }

        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          padding: 0 20px;
        }

        .card {
          background-color: #1a1a1a;
          border-radius: 10px;
          overflow: hidden;
          text-align: center;
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .image {
          object-fit: cover;
        }

        .info {
          padding: 20px;
        }

        .name {
          margin: 0 0 10px;
          font-size: 1.5rem;
          color: #ffa500;
          font-weight: bold;
        }

        .role {
          margin: 0;
          font-size: 1rem;
          color: #ccc;
        }

        .see-more {
          margin-top: 40px;
        }

        .button {
          padding: 12px 30px;
          font-size: 1rem;
          color: #fff;
          background-color: #ffa500;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
        }

        .button:hover {
          background-color: #e59400;
          transform: translateY(-3px);
        }
      `}</style>
    </div>
  );
};

const chefData = [
  {
    name: 'D. Eastwood',
    role: 'Chief Chef',
    image: '/images/Card 1.png',
  },
  {
    name: 'D. Scoriesh',
    role: 'Assistant Chef',
    image: '/images/Card 2.png',
  },
  {
    name: 'M. William',
    role: 'Advertising Chef',
    image: '/images/Card 3.png',
  },
  {
    name: 'W. Readfroad',
    role: 'Chef',
    image: '/images/Card 4.png',
  },
];

export default MeetOurChef;
