import React, { useState } from 'react';
import { specialityData } from '../assets/assets';

const Map = () => {
  const [area, setArea] = useState('');
  const [speciality, setSpeciality] = useState('');
  
  // Sample data for demonstration
  const sampleResults = [
    { id: 1, name: 'Dr. John Smith', speciality: 'Cardiologist', area: 'Downtown', distance: '2.5 miles', rating: 4.8 },
    { id: 2, name: 'Dr. Emily Johnson', speciality: 'Cardiologist', area: 'Westside', distance: '5.2 miles', rating: 4.9 },
    { id: 3, name: 'Dr. Michael Brown', speciality: 'Dermatologist', area: 'Downtown', distance: '1.8 miles', rating: 4.7 }
  ];
  
  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would trigger an API call to search for doctors
    console.log(`Searching for ${speciality} in ${area}`);
    // For demo purposes, we'll just show sample results
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Find Doctors Near You</h1>
      
      {/* Search Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Search for Doctors</h2>
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">Area/City</label>
            <input
              type="text"
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Enter area or city"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="speciality" className="block text-sm font-medium text-gray-700 mb-1">Doctor Speciality</label>
            <div className="relative">
              <select
                id="speciality"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              >
                <option value="">Select a speciality</option>
                {specialityData.map((spec, index) => (
                  <option key={index} value={spec.speciality}>
                    {spec.speciality}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <button 
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
            >
              Search Doctors
            </button>
          </div>
        </form>
      </div>
      
      {/* Map container */}
      <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden mb-8" style={{ height: '400px' }}>
        {/* Placeholder for map - in a real app, you would integrate with Google Maps or another mapping service */}
        <div className="w-full h-full flex items-center justify-center bg-blue-50">
          <div className="text-center">
            <div className="text-5xl mb-4">🗺️</div>
            <h2 className="text-2xl font-semibold mb-2">Interactive Map</h2>
            <p className="text-gray-600 mb-4">
              This is where the interactive map would be displayed.
            </p>
            <p className="text-sm text-gray-500">
              In a real implementation, this would show clinic locations and directions.
            </p>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
        <div className="space-y-4">
          {sampleResults.map((doctor) => (
            <div key={doctor.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.speciality}</p>
                  <p className="text-gray-500 text-sm">{doctor.area} • {doctor.distance}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="font-medium">{doctor.rating}</span>
                  </div>
                  <button className="mt-2 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium py-1 px-3 rounded transition duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Main Clinic</h3>
          <p className="text-gray-600 mb-2">📍 123 Medical Center Drive</p>
          <p className="text-gray-600 mb-2">🏙️ Healthville, HV 12345</p>
          <p className="text-gray-600 mb-2">📞 (555) 123-4567</p>
          <p className="text-gray-600">🕒 Mon-Fri: 8am-6pm, Sat: 9am-3pm</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Downtown Branch</h3>
          <p className="text-gray-600 mb-2">📍 456 Downtown Plaza</p>
          <p className="text-gray-600 mb-2">🏙️ Healthville, HV 12345</p>
          <p className="text-gray-600 mb-2">📞 (555) 987-6543</p>
          <p className="text-gray-600">🕒 Mon-Fri: 7am-9pm, Sat-Sun: 8am-5pm</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Westside Office</h3>
          <p className="text-gray-600 mb-2">📍 789 Westside Avenue</p>
          <p className="text-gray-600 mb-2">🏙️ Healthville, HV 12345</p>
          <p className="text-gray-600 mb-2">📞 (555) 456-7890</p>
          <p className="text-gray-600">🕒 Mon-Fri: 8am-5pm</p>
        </div>
      </div>

      {/* Directions section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Getting Here</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">By Car</h3>
            <p className="text-gray-600">
              From downtown: Take Main Street north for 3 miles, turn left on Medical Drive. 
              The clinic will be on your right, marked with a blue sign.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Public Transit</h3>
            <p className="text-gray-600">
              Bus routes 15 and 22 stop directly in front of our Main Clinic. 
              The nearest subway station is Health Center Station (Line 3), a 5-minute walk away.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Parking</h3>
            <p className="text-gray-600">
              Free parking is available in our lot behind the building. 
              Valet parking is available at the front entrance during business hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;