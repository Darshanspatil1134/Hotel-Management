
import React  from 'react';


function Events() {
  
  const eventSpaces = [
    {
      name: "Crystal Ballroom",
      description: "Our largest and most elegant hall, perfect for grand weddings, major corporate conferences, and gala dinners. It features modern amenities and a sophisticated ambiance to make any event unforgettable.",
      image: "/CrystalBallroom.jpg"
    },
    {
      name: "Dolphin Ballroom",
      description: "A versatile space ideal for mid-sized events such as seminars, birthday parties, and cocktail receptions. The Dolphin Ballroom offers flexible seating arrangements and state-of-the-art audiovisual equipment.",
      image: "/DolphinBallroom.jpg"
    },
    {
      name: "Poolside Terrace",
      description: "An open-air venue with stunning views, perfect for lively poolside parties, informal get-togethers, and beautiful sunset receptions. Enjoy a relaxed atmosphere with a touch of luxury.",
      image: "/PoolsideTerrace.jpg"
    },
    {
      name: "Executive Boardroom",
      description: "For important business meetings and private discussions, our boardroom provides a professional and private setting with all the necessary technology to ensure a productive session.",
      image: "/ExecutiveBoardroom.jpg"
    },
    {
      name: "Garden Pavilion",
      description: "Surrounded by lush greenery, this is an enchanting spot for intimate ceremonies, photoshoots, and outdoor gatherings. The natural light and serene environment create a magical backdrop for your special moments.",
      image: "/GardenPavilion.jpg"
    },
    {
      name: "Rooftop Lounge",
      description: "Host an exclusive event with panoramic views of the city. The Rooftop Lounge is perfect for cocktail hours, product launches, and private celebrations under the stars.",
      image: "/RooftopLounge.jpg"
    }
  ];

  return (
    <div className="bg-white text-white font-sans">
      
      <div className="relative h-screen bg-cover bg-center flex items-center justify-center text-white">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          src="/eventpage.mp4" 
          autoPlay 
          loop 
          muted 
        />
        
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wide">
            EVENTS
          </h1>
          <p className="mt-4 text-xl md:text-2xl italic text-gray-200">
            Create unforgettable moments with our exceptional venues.
          </p>
        </div>
      </div>


      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-teal-700 font-bold mb-4 italic">Your perfect venue awaits</h2>
          <p className="text-gray-600  max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to large-scale celebrations, our diverse event spaces are designed to meet every need. Our dedicated team will ensure a flawless execution of your event, leaving you free to enjoy the moment.
          </p>
        </div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventSpaces.map((event, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <img 
                src={event.image} 
                alt={event.name} 
                className="w-full h-56 object-cover" 
                // Add onerror fallback to prevent broken images
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/374151/E5E7EB?text=Image+Not+Found"}}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-teal-400">{event.name}</h3>
                <p className="text-gray-300 leading-relaxed">{event.description}</p>
           
                <button className="mt-4 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors duration-200">
                  Learn More ;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}

export default Events;