import React from 'react';

function Contact() {
  return (
    <div className="bg-white text-gray-800">
      
   <div className="relative h-screen bg-cover bg-center flex items-center justify-center text-white">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          src="/contact.mov" 
          autoPlay 
          loop 
          muted 
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <h1 className="relative text-4xl font-bold text-white px-6 py-2 rounded">
          Contact Crest !
        </h1>
      </div>

      
      <section className="max-w-6xl mx-auto px-6 py-12 ">
        <div className="bg-blue-950 hover:bg-teal-700 text-white p-8 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <h2 className="text-3xl  font-bold italic  mb-4">We’ll love to hear from you!</h2>
          <p className="text-lg italic mb-6">
            Whether you have questions, feedback, or booking inquiries, feel free to reach out. Our team is always here to help make your stay exceptional.
          </p>
        </div>
        

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div>
           
            <div className=" bg-blue-950  text-white p-6 hover:bg-teal-700 rounded-lg shadow-md mb-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Hotel Address</h3>
              <p className="mb-4">
                Crest The Grand Hotel of Dreams, near K.K. Wagh College, Hirawadi, Nashik, India - 422009, India.
              </p>
            </div>
            
            <div className="bg-blue-950  text-white p-6 hover:bg-teal-700 rounded-lg shadow-md mb-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <p className="mb-4">+91-783623444</p>
            </div>

            <div className="bg-blue-950  text-white p-6 hover:bg-teal-700 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p className="mb-4">Crestdarrit@gmail.com</p>
            </div>
          </div>

          
          <div>
            <h3 className="text-2xl  text-blue-950 italic font-semibold mb-4">Send us a Message</h3>
            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded border border-b-cyan-950 transition-all duration-300 ease-in-out focus:border-teal-600 focus:ring focus:ring-teal-200 focus:ring-opacity-50 hover:shadow-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded border border-b-cyan-950 transition-all duration-300 ease-in-out focus:border-teal-600 focus:ring focus:ring-teal-200 focus:ring-opacity-50 hover:shadow-lg"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="p-3 rounded border border-b-cyan-950 transition-all duration-300 ease-in-out focus:border-teal-600 focus:ring focus:ring-teal-200 focus:ring-opacity-50 hover:shadow-lg"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-teal-700 font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      
      <section className="bg-teal-600 hover:bg-blue-950 text-white text-center py-12 px-6">
        <div className="max-w-xl mx-auto p-8 rounded-lg shadow-md bg-white text-gray-800 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <h4 className="text-2xl font-semibold mb-4">Plan Your Visit to Nashik</h4>
          <p className="mb-6 text-lg">We're just one message away. Let's make your stay unforgettable.</p>
          <button className="bg-sky-950 text-white px-6 py-2 font-semibold rounded hover:bg-teal-700 transition-all duration-300 ease-in-out hover:scale-110">
            Book Your Room
          </button>
        </div>
      </section>
    </div>
  );
}

export default Contact;