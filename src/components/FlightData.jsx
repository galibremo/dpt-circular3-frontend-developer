import React from "react";

export default function FlightData({ fetchData }) {
  return (
    <table className="shadow-md w-full rounded-lg text-center">
      <thead>
        <tr className="bg-[#E5E7EB] text-gray-600 font-medium">
          <td className="py-2">FLIGHT</td>
          <td className="py-2">AIRCRAFT</td>
          <td className="py-2">CLASS</td>
          <td className="py-2">FARE</td>
          <td className="py-2">ROUTE</td>
          <td className="py-2">DEPARTURE</td>
          <td className="py-2">ARRIVAL</td>
          <td className="py-2"></td>
          <td className="py-2">DURATION</td>
          <td className="py-2">PRICE</td>
        </tr>
      </thead>
      {fetchData &&
        fetchData.map((data, index) => (
          <tbody
            key={index}
            className={`${
              index % 2 === 1 ? "odd-row" : "even-row"
            } text-gray-500`}
          >
            <tr className="border-b-2 border-orange-400 border-opacity-60">
              <td className="px-0 pb-1 whitespace-nowrap border-r-0">
                <p>
                  {data?.itineraries?.[0].segments?.[0]?.marketingCarrier}
                  {data?.itineraries?.[0].segments?.[0]?.flightNumber}
                </p>
                <p>
                  {data?.itineraries?.[0].segments?.[1]?.marketingCarrier}
                  {data?.itineraries?.[0].segments?.[1]?.flightNumber}
                </p>
                {data.itineraries[0].segments[2] ? (
                  <p>
                    {data?.itineraries?.[0].segments?.[2]?.marketingCarrier}
                    {data?.itineraries?.[0].segments?.[2]?.flightNumber}
                  </p>
                ) : (
                  <div className=" bg-orange-400 bg-opacity-40 h-[1px] w-full"></div>
                )}
              </td>
              <td className="px-0 pb-1 whitespace-nowrap border-r-0">
                <p>{data?.itineraries?.[0].segments?.[0]?.aircraft}</p>
                <p>{data?.itineraries?.[0].segments?.[1]?.aircraft}</p>
                {data.itineraries[0].segments[2] ? (
                  <p>{data?.itineraries?.[0].segments?.[2]?.aircraft}</p>
                ) : (
                  <div className=" bg-orange-400 bg-opacity-40 h-[1px] w-full"></div>
                )}
              </td>
              <td className="px-0 pb-1 whitespace-nowrap border-r-0">
                <p>{data?.class?.[0]?.[0]}</p>
                <p>{data?.class?.[0]?.[1]}</p>
                {data.itineraries[0].segments[2] ? (
                  <p>{data?.class?.[0]?.[2]}</p>
                ) : (
                  <div className=" bg-orange-400 bg-opacity-40 h-[1px] w-full"></div>
                )}
              </td>
              <td className="px-0 pb-1 whitespace-nowrap border-r-0">
                <p>{data?.fareBasis?.[0]?.[0]}</p>
                <p>{data?.fareBasis?.[0]?.[1]}</p>
                {data.itineraries[0].segments[2] ? (
                  <p>{data?.fareBasis?.[0]?.[2]}</p>
                ) : (
                  <div className=" bg-orange-400 bg-opacity-40 h-[1px] w-full"></div>
                )}
              </td>
              <td className="px-0 pb-1 whitespace-nowrap border-r-0">
                <p>
                  {data?.itineraries?.[0].segments?.[0]?.departure.iataCode}-
                  {data?.itineraries?.[0].segments?.[0]?.arrival.iataCode}
                </p>
                <p>
                  {data?.itineraries?.[0].segments?.[1]?.departure.iataCode}-
                  {data?.itineraries?.[0].segments?.[1]?.arrival.iataCode}
                </p>
                {data.itineraries[0].segments[2] ? (
                  <p>
                    {data?.itineraries?.[0].segments?.[2]?.departure.iataCode}
                    {data?.itineraries?.[0].segments?.[2] && "-"}
                    {data?.itineraries?.[0].segments?.[2]?.arrival.iataCode}
                  </p>
                ) : (
                  <div className=" bg-orange-400 bg-opacity-40 h-[1px] w-full"></div>
                )}
              </td>
              <td className="px-0 pb-1 whitespace-nowrap border-r-0">
                <p>{data?.itineraries?.[0].segments?.[0]?.departure.at}</p>
                <p>{data?.itineraries?.[0].segments?.[1]?.departure.at}</p>
                {data.itineraries[0].segments[2] ? (
                  <p>{data?.itineraries?.[0].segments?.[2]?.departure.at}</p>
                ) : (
                  <div className=" bg-orange-400 bg-opacity-40 h-[1px] w-full"></div>
                )}
              </td>
              <td className="px-0 pb-1 whitespace-nowrap border-r-0">
                <p>{data?.itineraries?.[0].segments?.[0]?.arrival.at}</p>
                <p>{data?.itineraries?.[0].segments?.[1]?.arrival.at}</p>
                {data.itineraries[0].segments[2] ? (
                  <p>{data?.itineraries?.[0].segments?.[2]?.arrival.at}</p>
                ) : (
                  <div className=" bg-orange-400 bg-opacity-40 h-[1px] w-full"></div>
                )}
              </td>
              <td className="px-0 pb-1 whitespace-nowrap border-r-0">
                <p>----</p>
                <p>----</p>
                {data?.itineraries?.[0].segments?.[2] ? (
                  <p>----</p>
                ) : (
                  <div className=" bg-orange-400 bg-opacity-40 h-[1px] w-full"></div>
                )}
              </td>
              <td className="px-0 pb-1 whitespace-nowrap border-r-0">
                <p>{data?.itineraries?.[0]?.duration}</p>
                <br />
                {data?.itineraries?.[0].segments?.[2] ? (
                  <br />
                ) : (
                  <div className=" bg-orange-400 bg-opacity-40 h-[1px] w-full"></div>
                )}
              </td>
              <td className="px-0 pb-0 whitespace-nowrap ">
                <p>{data.price}</p>
                <button className="text-center px-7 py-2 bg-[#2E3791] text-white rounded-[3px] uppercase">
                  select
                </button>
              </td>
            </tr>
          </tbody>
        ))}
    </table>
  );
}
