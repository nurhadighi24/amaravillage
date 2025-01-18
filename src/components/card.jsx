import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";

export default function Card({ image, tipe }) {
  return (
    <div className="md:w-[36rem] rounded-xl shadow-xl my-5 mx-5 bg-white">
      <ReactWhatsapp
        number="+6281310112429"
        message="Hi dari amaravillage.com
Saya tertarik perumahan nya. Mohon info lengkapnya"
      >
        <div className="bg-white hover:bg-blue-200 transition rounded-xl">
          <img src={image} alt="gambar tipe rumah" className="rounded-xl" />
          <p className="font-bold text-3xl py-5">{tipe}</p>
        </div>
      </ReactWhatsapp>
    </div>
  );
}
