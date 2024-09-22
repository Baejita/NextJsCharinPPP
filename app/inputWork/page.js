import React from "react";
import { Input } from "@nextui-org/input";

export default function InputPage() {
  return (
    <div className="flex-grow text-center p-10 mb-80">
      <h3 className="text-2xl">
        แบบกรอกข้อมูลลงพื้นที่ของ สส.ชริน วงศ์พันธ์เที่ยง เขต 2 พระนครศรีอยุธยา
      </h3>

      <Input
        isRequired
        type="email"
        label="Email"
        defaultValue="junior@nextui.org"
        className="max-w-xs"
      />
    </div>
  );
}
