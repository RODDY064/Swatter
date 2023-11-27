const service: string[] = [
  "Interior Design Consultation",
  "Wide Range of Furniture Styles",
  "Room Furniture Sets",
  "Home Renovation Coordination",
  "Delivery and Installation",
  'Virtual Showroom'
];

export default function Service() {
  return (
    <div className="w-[100%] md:w-[95%] h-[12rem] md:h-[16rem]  bg-gradient-to-r from-sea to-white/70 rounded-[20px] ml-[-15px] z-10 shadow-card p-3 overflow-hidden my-2">
      <h2 className="font-bold text-lg text-teal-950/80">Our Service</h2>
      <ul className="w-full font-medium text-teal-950/70 my-4 list-disc mx-4 max-sm:text-sm">
        {service.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
