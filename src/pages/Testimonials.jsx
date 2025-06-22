import React, { useState } from 'react';

const Testimonials = ({ sectionRef }) => {
  const reviews = [
    { 
      icon: "https://github.com/evilrabbit.png", 
      name: "Raaj", 
      date: "2025-06-20", 
      rating: "⭐⭐⭐⭐⭐", 
      review: "Excellent service, very professional doctors and quick response times. Highly recommend!" 
    },
    { 
      icon: "https://github.com/shadcn.png", 
      name: "Vinesh", 
      date: "2025-06-19", 
      rating: "⭐⭐⭐⭐", 
      review: "Great experience, but appointment scheduling could be improved." 
    },
    { 
      icon: "https://github.com/leerob.png", 
      name: "Chandan", 
      date: "2025-06-18", 
      rating: "⭐⭐⭐⭐⭐", 
      review: "The doctors were very knowledgeable and caring. Amazing platform!" 
    },
    { 
      icon: "https://github.com/shadcn.png", 
      name: "Nirbhay", 
      date: "2025-06-17", 
      rating: "⭐⭐⭐⭐", 
      review: "Very convenient and user-friendly platform." 
    },
    { 
      icon: "https://github.com/evilrabbit.png", 
      name: "Rajan", 
      date: "2025-06-16", 
      rating: "⭐⭐⭐⭐⭐", 
      review: "Fantastic support and quick consultations!" 
    },
    { 
      icon: "https://github.com/leerob.png", 
      name: "Sunny", 
      date: "2025-06-15", 
      rating: "⭐⭐⭐⭐", 
      review: "Good service, but could use more specialist options." 
    },
  ];

  const [selectedReview, setSelectedReview] = useState(reviews[0]);

  return (
    <section id="testimonials" ref={sectionRef} data-section="Testimonials" className="w-screen min-h-screen flex justify-center bg-sky-200 py-10 font-tinos">
      <div className="w-[90%] flex flex-col md:flex-row justify-between items-center max-w-7xl gap-6">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold py-4">
            What <span className="text-blue-600">Our Members</span> Say About Us
          </h2>
          <p className="text-wrap text-sm w-full md:w-[70%] pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe id sunt? Odio quidem nulla, labore hic inventore.
          </p>
          <div className="flex flex-row items-center md:px-5 gap-2 pl-10 py-10">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="relative group hover:z-60 cursor-pointer ml-[-20px] transition-all duration-300 ease-in-out"
                onClick={() => setSelectedReview(item)}
              >
                <img
                  src={item.icon}
                  alt={`${item.name}'s avatar`}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover"
                />
                <span className="absolute hidden group-hover:block text-gray-800 font-semibold text-sm bg-white px-2 py-1 rounded-lg left-1/2 transform -translate-x-1/2 z-60 top-[-40px]">
                  {item.name}
                </span>
              </div>
            ))}
            <span className="text-xl font-bold text-gray-600">100+ Reviews</span>
          </div>
        </div>
        {/* Right */}
        <article className="flex-1 rounded-3xl bg-[#fff] p-4 md:p-6">
          <div className="flex items-center justify-between py-5 mx-4">
            <div className="flex items-center justify-center gap-5">
              <img
                src={selectedReview.icon}
                alt={`${selectedReview.name}'s avatar`}
                className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover"
              />
              <div className="flex flex-col font-playfair">
                <span className="font-semibold text-gray-800">{selectedReview.name}</span>
                <span className="text-sm text-gray-500 font-semibold">{selectedReview.date}</span>
              </div>
            </div>
            <div>{selectedReview.rating}</div>
          </div>
          <p className="text-wrap mx-4 mt-5">{selectedReview.review}</p>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;