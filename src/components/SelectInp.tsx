"use client";
import { useRoom } from "@/store/useStore";
import React from "react";
import Select from "react-select";

function SelectInp() {
  const setRoom=useRoom((state:any)=>state.setRoom);
  function handleChange(e: any) {
    setRoom(e.value);
  }

  const options = [
    { value: "living room", label: "Living Room" },
    { value: "bedroom", label: "Bedroom" },
    { value: "bathroom", label: "Bathroom" },
    { value: "kitchen", label: "Kitchen" },
  ];
  return (
    <div className="w-full">
      <Select onChange={handleChange} options={options} defaultValue={options[0]} />
    </div>
  );
}

export default SelectInp;