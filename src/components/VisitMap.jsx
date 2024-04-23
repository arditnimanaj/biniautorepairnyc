import React from "react";

function VisitMap() {
  return (
    <div className="flex flex-col gap-6">
      <div className="">
        <h1 className="text-gray-600">No appointment required</h1>
        <h1 className=" text-3xl text-rose-900 font-bold uppercase">
          Visit US
        </h1>
      </div>
      <div className="w-full px-10 py-10">
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          title="map"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=BiniAutoRepairINC,%2010%20Eastman%20Pl,%20Yonkers,%20NY%2010701,%20United%20States+(Bini%20Autorepair%20INC)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>
    </div>
  );
}

export default VisitMap;
