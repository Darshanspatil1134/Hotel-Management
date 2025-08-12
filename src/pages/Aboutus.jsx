import React from 'react';

function AboutUs() {
  return (
    <div className="bg-white text-red-50">
      
      
      <div className="relative h-screen bg-cover bg-center flex items-center justify-center text-white">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          src="/aboutus.mp4" 
          autoPlay 
          loop 
          muted 
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <h1 className="relative text-4xl font-bold text-white px-6 py-2 rounded">
          About Crest Hotels
        </h1>
      </div>
      <br />

     
      <section className="max-w-6xl rounded-4xl bg-blue-950 mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold italic mb-4">Welcome to Crest Hotels</h2>
        <p className="text-lg italic leading-relaxed mb-6">
          At Crest’s Hotels, we blend luxury with comfort to offer you an unforgettable hospitality experience. Located in the heart of Goa, our hotels are the epitome of elegance and warmth, catering to business and leisure travelers alike.
        </p>
        <p className="text-lg leading-relaxed">
          With well-appointed rooms, world-class amenities, and exceptional service, we promise a stay that feels just like home — only better.
        </p>
      </section>
<br />
      
      <section className="bg-gray-100 rounded-4xl py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          
          
          <div className="p-8 rounded-lg hover:bg-teal-700 shadow-md bg-sky-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:rotate-2">
            <h3 className="text-2xl font-semibold  mb-2">Our Vision</h3>
            <p>
              To become the leading name in the Indian hospitality industry, offering unparalleled luxury, comfort, and personalized experiences to all our guests.
            </p>
          </div>

        
          <div className="p-8 hover:bg-teal-700 rounded-lg shadow-md bg-sky-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-rotate-2">
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p>
              To provide exceptional hospitality by blending traditional Goan charm with modern amenities and a customer-centric approach.
            </p>
          </div>
        </div>
      </section>
      <br />

      
      <section className="py-12 rounded-4xl  bg-cyan-950 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold  mb-6 text-center">Why Choose Crest's Hotels?</h3>
        <ul className="grid sm:grid-cols-2  lg:grid-cols-3 gap-6 text-lg">
          
        
          <li className="bg-sky-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-rotate-2  hover:bg-teal-700 p-4 rounded shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:-translate-y-1">✓ Prime Location in Nashik</li>
          <li className=" bg-sky-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-rotate-2 hover:bg-teal-700 p-4 rounded shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:-translate-y-1">✓ Luxurious Rooms & Suites</li>
          <li className="bg-sky-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-rotate-2 hover:bg-teal-700 p-4 rounded shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:-translate-y-1">✓ Multi-Cuisine Restaurants</li>
          <li className="bg-sky-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-rotate-2 hover:bg-teal-700 p-4 rounded shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:-translate-y-1">✓ Swimming Pool & Spa</li>
          <li className="bg-sky-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-rotate-2 hover:bg-teal-700 p-4 rounded shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:-translate-y-1">✓ Personalized Service</li>
          <li className="bg-sky-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-rotate-2 hover:bg-teal-700 p-4 rounded shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:-translate-y-1">✓ Great Value Packages</li>
        </ul>
      </section>
      <br />

      
      <section className="bg-sky-900 hover:bg-teal-700 text-white text-center py-12 px-6">
        <h4 className="text-2xl font-semibold mb-4">Experience the Best of Goa with Crest</h4>
        <p className="mb-6 text-lg">Book your stay now and enjoy exclusive deals, comfort, and unmatched hospitality.</p>
        <button className="bg-white text-black px-6 py-2 font-semibold rounded hover:bg-gray-200">
          Book Now
        </button>
      </section>
    </div>
  );
}

export default AboutUs;