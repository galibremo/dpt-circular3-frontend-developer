import axios from "axios";
import React, { useState } from "react";
import FlightData from "./components/FlightData";

export default function App() {
  const [type, setType] = useState("oneWay");
  const [fetchData, setFetchData] = useState(null);
  const [fetchMessage, setFetchMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("../data/LHR_CDG_ADT1_TYPE_1.txt");
      if (res.status === 200) {
        setFetchData(res.data.flightOffer);
        setFetchMessage(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="border border-b-1 shadow-sm">
        <h1 className="text-xl font-bold max-w-7xl mx-auto">Master Price</h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center py-5">
            <input
              className={`px-2 border border-r-0 border-[#2E3791] font-semibold cursor-pointer w-[120px] ${
                type === "roundTrip" ? "bg-[#2E3791] text-white" : " bg-white"
              }`}
              type="button"
              id="roundTrip"
              value="Round Trip"
              onClick={() => setType("roundTrip")}
            />
            <input
              className={`px-2 border border-[#2E3791] font-semibold cursor-pointer w-[120px] ${
                type === "oneWay" ? "bg-[#2E3791] text-white" : " bg-white"
              }`}
              type="button"
              id="oneWay"
              value="One Way"
              onClick={() => setType("oneWay")}
            />
            <input
              className={`px-2 border border-l-0 border-[#2E3791] font-semibold cursor-pointer w-[120px] ${
                type === "multiCity" ? "bg-[#2E3791] text-white" : " bg-white"
              }`}
              type="button"
              id="multiCity"
              value="Multi City"
              onClick={() => setType("multiCity")}
            />
          </div>
          <div className="border border-x-0 py-3 border-[#2563EB] grid grid-cols-1 lg:flex gap-5">
            <div className="flex gap-2 ">
              <input
                className="p-1 border shadow-sm w-[120px]"
                type="text"
                id=""
                placeholder="LHR"
              />
              <input
                className="p-1 border shadow-sm w-[120px]"
                type="text"
                id=""
                placeholder="CDG"
              />
              <input
                className="p-1 border shadow-sm w-[120px]"
                type="date"
                id=""
              />
            </div>
            <div className="flex gap-2">
              <select className="p-1 border shadow-sm w-[120px]">
                <option>Day - </option>
              </select>
              <select className="p-1 border shadow-sm w-[120px]">
                <option>Day + </option>
              </select>
              <select className="p-1 border shadow-sm w-[120px]">
                <option>Any time</option>
              </select>
            </div>
            <span className="block">+</span>
            <div className="flex gap-2">
              <select className="p-1 border shadow-sm w-[120px]">
                <option>ADT </option>
              </select>
              <select className="p-1 border shadow-sm w-[120px]">
                <option>1</option>
              </select>
            </div>
            <span className="block">+</span>
          </div>
          <div className="w-full border border-b border-x-0 border-t-0 border-[#2563EB] py-4 flex flex-col gap-3 lg:flex-row justify-between">
            <div className="font-semibold flex items-center gap-2">
              <input type="checkbox" /> Extra Options
            </div>
            <div className="flex gap-2 font-semibold items-center">
              <input type="radio" name="radio" value="Environment" />
              Environment
              <input type="radio" name="radio" value="Dummy" /> Dummy
              <input type="radio" name="radio" value="PDT" /> PDT
            </div>
            <div>
              <input
                className="px-4 py-1 border bg-[#2E3791] text-white rounded-md text-sm"
                type="submit"
                value="SEARCH"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
      {fetchData && <p>{fetchMessage}</p>}
      <br />
      <FlightData fetchData={fetchData} />
    </div>
  );
}
