import HomeButtonRedirection from '@/components/HomeButtonRedirection';
import React from 'react';

export default function Success() {

  return (
    <>
      <div className="flex flex-col pt-10 items-center h-screen bg-gray-100">
        <div className="max-w-lg bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4 text-green-600">Great, Payment Done!</h2>
          <p className="text-gray-700 text-center">Please click on below link to explore our Other Products </p>
          <button style={{border:"1px solid black",display:"flex",justifyContent:"center",borderRadius:"5px",backgroundColor:"blue",padding:"5px",margin:"0 auto"}}><HomeButtonRedirection /> </button>
        </div>
      </div>

      {/* <div className="flex flex-col items-center  min-h-screen bg-gray-100">
        <div className="max-w-lg bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Success!</h2>
          <p className="text-gray-700 text-center">Payment Done. Explore more products.</p>
        </div>
      </div> */}

    </>
  );
}
