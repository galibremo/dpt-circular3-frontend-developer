import React from "react";
import { Table } from "flowbite-react";

export default function FlightData({ data }) {
  console.log(data);
  return (
    <div>
      <Table hoverable className="shadow-md">
        <Table.Head className="bg-[#E5E7EB]">
          <Table.HeadCell>FLIGHT</Table.HeadCell>
          <Table.HeadCell>AIRCRAFT</Table.HeadCell>
          <Table.HeadCell>CLASS</Table.HeadCell>
          <Table.HeadCell>FARE</Table.HeadCell>
          <Table.HeadCell>ROUTE</Table.HeadCell>
          <Table.HeadCell>DEPARTURE</Table.HeadCell>
          <Table.HeadCell>ARRIVAL</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>DURATION</Table.HeadCell>
          <Table.HeadCell>PRICE</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          <Table.Row className="text-center">
            <Table.Cell>
              {data?.itineraries?.[0].segments?.[0]?.marketingCarrier}
              {data?.itineraries?.[0].segments?.[0]?.flightNumber}
              <br />
              {data?.itineraries?.[0].segments?.[1]?.marketingCarrier}
              {data?.itineraries?.[0].segments?.[1]?.flightNumber}
              <br />
              {data?.itineraries?.[0].segments?.[2]?.marketingCarrier}
              {data?.itineraries?.[0].segments?.[2]?.flightNumber}
              <br />
            </Table.Cell>
            <Table.Cell>
              {data?.itineraries?.[0].segments?.[0]?.aircraft}
              <br />
              {data?.itineraries?.[0].segments?.[1]?.aircraft}
            </Table.Cell>
            <Table.Cell>
              {data?.class?.[0]?.[0]}
              <br />
              {data?.class?.[0]?.[1]}
            </Table.Cell>
            <Table.Cell>
              {data?.fareBasis?.[0]?.[0]}
              <br />
              {data?.fareBasis?.[0]?.[1]}
            </Table.Cell>
            <Table.Cell>
              {data?.itineraries?.[0].segments?.[0]?.departure.iataCode}-
              {data?.itineraries?.[0].segments?.[0]?.arrival.iataCode}
              <br />
              {data?.itineraries?.[0].segments?.[1]?.departure.iataCode}-
              {data?.itineraries?.[0].segments?.[1]?.arrival.iataCode}
            </Table.Cell>
            <Table.Cell>
              {data?.itineraries?.[0].segments?.[0]?.departure.at}
              <br />
              {data?.itineraries?.[0].segments?.[1]?.departure.at}
            </Table.Cell>
            <Table.Cell>
              {data?.itineraries?.[0].segments?.[0]?.arrival.at}
              <br />
              {data?.itineraries?.[0].segments?.[1]?.arrival.at}
            </Table.Cell>
            <Table.Cell>----</Table.Cell>
            <Table.Cell>{data?.itineraries?.[0]?.duration}</Table.Cell>
            <Table.Cell>
              {data.price}
              <br />
              <button className="text-center px-5 py-2 bg-[#2E3791] text-white rounded-[3px]">
                select
              </button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
