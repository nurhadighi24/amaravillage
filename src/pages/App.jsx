import Card from "@/components/card";
import Footer from "@/components/footer";
import { IoLogoWhatsapp } from "react-icons/io";
import React from "react";
import ReactWhatsapp from "react-whatsapp";

export default function App() {
  return (
    <div className="">
      <div>
        <img
          src="/header.jpg"
          alt="header"
          className="w-[55rem] h-[50rem] m-auto rounded-xl shadow-2xl"
        />
      </div>
      <div className="md:flex items-center justify-between gap-5 my-20 mx-5">
        <div className="bg-white px-6 py-4 rounded-lg shadow-lg md:w-1/2">
          <p style={{ whiteSpace: "pre-wrap" }}>
            <strong>
              2 Jutaan / Bulan punya Rumah Cluster ada Fasilitas Kolam Renang &
              Dekat Stasiun 🚇
            </strong>
            {"\n"}
            🏡 <strong>Cluster ALAMANDA</strong>
            {"\n"}
            🏡 <strong>AMARA VILLAGE</strong>
            {"\n\n"}
            <strong>Tersedia Type 2 & 3 Kamar Tidur</strong>
            {"\n"}✅ Cicilan Mulai 2 Jutaan / Bulan{"\n"}✅ Cashback 10 Juta
            {"\n"}✅ Free Biaya KPR 10 Juta{"\n"}✅ Free Biaya Surat², SHM
            {"\n\n"}
            <strong>Akses Terbaik</strong>
            {"\n"}
            🚇 5 Menit ke Stasiun Parung Panjang{"\n"}
            🛣 15 Menit ke TOL Legok BSD{"\n"}
            🛒 25 Menit ke AEON Mall BSD
          </p>
        </div>
        <div className="bg-white px-6 py-4 rounded-lg shadow-lg md:w-1/2 mt-5">
          <p style={{ whiteSpace: "pre-wrap" }}>
            <strong>Cicilan 2 Juta-an ✨ AMARA VILLAGE✨</strong>
            {"\n\n"}
            Saat ini, millenials sudah dapat miliki hunian yang hanya selangkah
            ke <strong>AMARA EAST PARK 😍</strong>
            {"\n\n"}
            <strong>
              Berikut ini pilihan tipe rumah di ✨ CLUSTER ALAMANDA ✨
            </strong>
            {"\n"}
            🏡 Tipe 31/60{"\n"}
            🏡 Tipe 39/72{"\n"}
            🏡 Tipe 46/72
            {"\n\n"}
            Tunggu apa lagi? Segera miliki hunian di ✨CLUSTER ALAMANDA✨{"\n"}
            Amara Village dan nikmati <strong>AMARA EAST PARK</strong> lebih
            dekat bersama keluarga!
            {"\n\n"}
            <strong>Atau kunjungi Marketing Office:</strong>
            {"\n"}
            Jl. Raya Dago, Kabasiran, Kec. Parung Panjang, Bogor, Jawa Barat
            16360
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 gap-4">
        <Card image="/tipe31.jpg" tipe="TIPE 31" />
        <Card image="/tipe39.jpg" tipe="TIPE 39" />
        <Card image="/tipe46.jpg" tipe="TIPE 46" />
      </div>
      <img
        src="/siteplan.jpg"
        alt=""
        className="m-auto md:w-[50rem] md:h-[50rem]"
      />
      <Footer />
      <div className="relative group">
        <ReactWhatsapp
          number="+6285183182797"
          message="Hi, saya dapat info dari amaravillage.com, saya tertarik dengan perumahan nya. Mohon info lengkapnya."
        >
          <IoLogoWhatsapp className="text-green-600 text-6xl fixed top-3 right-3 outline cursor-pointer" />
          <span className="fixed top-8 right-20 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat sekarang!
          </span>
        </ReactWhatsapp>
      </div>
    </div>
  );
}
