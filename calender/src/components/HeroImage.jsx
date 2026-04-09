import React from "react";

const monthImages = [
  "https://plus.unsplash.com/premium_vector-1710758152337-0be0daebf144?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",

  "https://plus.unsplash.com/premium_vector-1764706144639-8a34d76301ed?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",

  "https://plus.unsplash.com/premium_vector-1721831119386-6f86835797ae?q=80&w=1019&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",

  "https://plus.unsplash.com/premium_vector-1767752529514-2aed06976bcf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",

  "https://plus.unsplash.com/premium_vector-1771383572953-2fbc1d98ea4f?q=80&w=1010&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",

  "https://plus.unsplash.com/premium_vector-1734476097438-f788419c3c76?q=80&w=1011&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",

  "https://plus.unsplash.com/premium_vector-1711987695426-a91b64baf5a3?q=80&w=939&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",

  "https://plus.unsplash.com/premium_vector-1711987542095-e3e5f24f6b2a?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",

  "https://plus.unsplash.com/premium_vector-1758413504164-db3fafe2173a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",

  "https://plus.unsplash.com/premium_vector-1759765886995-d19c852b0dc8?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",

  "https://plus.unsplash.com/premium_vector-1764244978893-248c6814dd1f?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",

  "https://plus.unsplash.com/premium_vector-1709299689737-3bddaa02fa7e?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function HeroImage({ month, year }) {
  return (
    <div className="relative w-full md:w-2/5 h-64 md:h-[480px] overflow-hidden flex-shrink-0">
      <img
        src={monthImages[month]}
        alt={monthNames[month]}
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute bottom-0 right-0 bg-pink-600 text-white px-6 py-3">
        <p className="text-xs font-light tracking-widest">{year}</p>
        <p className="text-2xl font-black uppercase tracking-wider">
          {monthNames[month]}
        </p>
      </div>
    </div>
  );
}
