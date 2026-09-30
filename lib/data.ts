export const nav = [
  { label: "Models", href: "/models" },
  { label: "Charging", href: "/charging" },
  { label: "Technology", href: "/technology" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "About Us", href: "/about" },
  { label: "Support", href: "/support" },
];

export type Model = {
  slug: string;
  name: string;
  tagline: string;
  type: string;
  image: string;
  gallery: string[];
  range: number;
  accel: number;
  drive: string;
  topSpeed: number;
  battery: number;
  charge: string;
  seats: number;
  price: number;
  popular?: boolean;
  description: string;
  highlights: { title: string; text: string }[];
};

export const models: Model[] = [
  {
    slug: "voltx-s",
    name: "VoltX S",
    tagline: "Compact. Agile. Efficient.",
    type: "Sedan",
    image: "/images/sedan-white.jpg",
    gallery: ["/images/sedan-white.jpg", "/images/sedan-teal.jpg", "/images/public-charging.jpg"],
    range: 420,
    accel: 6.1,
    drive: "RWD",
    topSpeed: 190,
    battery: 68,
    charge: "10–80% in 22 min",
    seats: 5,
    price: 38900,
    description:
      "The VoltX S is the smart everyday sedan: nimble in the city, relaxed on the highway, and remarkably efficient everywhere in between.",
    highlights: [
      { title: "City-smart footprint", text: "Tight turning circle and 360° cameras make parking effortless." },
      { title: "Class-leading efficiency", text: "Just 13.9 kWh/100 km thanks to a slippery 0.21 Cd body." },
      { title: "Minimalist cabin", text: "A 15.6\" floating display and vegan materials throughout." },
    ],
  },
  {
    slug: "voltx-x",
    name: "VoltX X",
    tagline: "Versatile. Powerful. Smart.",
    type: "SUV",
    image: "/images/suv-white.jpg",
    gallery: ["/images/suv-white.jpg", "/images/tech-crossover.jpg", "/images/solar-charging.jpg"],
    range: 620,
    accel: 4.2,
    drive: "AWD",
    topSpeed: 210,
    battery: 100,
    charge: "10–80% in 18 min",
    seats: 7,
    price: 56900,
    popular: true,
    description:
      "Room for seven, range for days. The VoltX X pairs dual-motor performance with a flexible cabin built for families and adventurers alike.",
    highlights: [
      { title: "Up to 620 km range", text: "WLTP-certified range to go further on a single charge." },
      { title: "800V architecture", text: "Add 300 km of range in about 12 minutes on ultra-fast chargers." },
      { title: "Seven real seats", text: "Fold-flat third row and 2,100 L of cargo space." },
    ],
  },
  {
    slug: "voltx-gt",
    name: "VoltX GT",
    tagline: "Performance. Redefined.",
    type: "Grand Tourer",
    image: "/images/gt-white.jpg",
    gallery: ["/images/gt-white.jpg", "/images/gt-black.jpg", "/images/fast-charging.jpg"],
    range: 560,
    accel: 3.4,
    drive: "AWD",
    topSpeed: 260,
    battery: 95,
    charge: "10–80% in 18 min",
    seats: 4,
    price: 79900,
    description:
      "Sculpted by the wind and tuned on the track. The VoltX GT delivers supercar acceleration with grand-touring comfort.",
    highlights: [
      { title: "3.4s 0–100 km/h", text: "Tri-motor torque vectoring puts 820 hp to the road." },
      { title: "Adaptive air suspension", text: "Lowers at speed for stability and rises for comfort." },
      { title: "Carbon aero package", text: "Active rear wing and underbody diffuser." },
    ],
  },
  {
    slug: "voltx-t",
    name: "VoltX T",
    tagline: "Built Tough. Charged Up.",
    type: "Pickup",
    image: "/images/truck.jpg",
    gallery: ["/images/truck.jpg", "/images/fast-charging.jpg", "/images/solar-charging.jpg"],
    range: 540,
    accel: 4.5,
    drive: "AWD",
    topSpeed: 200,
    battery: 123,
    charge: "10–80% in 25 min",
    seats: 5,
    price: 64900,
    description:
      "An exoskeleton body, 5,000 kg towing and a power outlet for everything. The VoltX T is the electric workhorse that never quits.",
    highlights: [
      { title: "5,000 kg towing", text: "Confidently haul trailers, boats and campers." },
      { title: "Vehicle-to-load", text: "11 kW of onboard power for tools, camping or your home." },
      { title: "All-terrain ready", text: "Up to 400 mm of ground clearance with adaptive air suspension." },
    ],
  },
];

export const getModel = (slug: string) => models.find((m) => m.slug === slug);

export const testimonials = [
  {
    quote:
      "The VoltX X changed the way I think about electric cars. Incredible range, super fast charging, and a joy to drive.",
    name: "Alex P.",
    initials: "AP",
  },
  {
    quote:
      "Sleek design, cutting-edge tech, and sustainability that actually makes a difference. I'm proud to drive VoltX.",
    name: "Sofia L.",
    initials: "SL",
  },
  {
    quote: "Charging is effortless and the performance is next level. VoltX GT is simply in a class of its own.",
    name: "Daniel K.",
    initials: "DK",
  },
  {
    quote: "We took our VoltX T across three countries with zero range anxiety. The charging network is everywhere.",
    name: "Marcus O.",
    initials: "MO",
  },
  {
    quote: "Over-the-air updates keep making my car better. It honestly feels new every few months.",
    name: "Priya R.",
    initials: "PR",
  },
  {
    quote: "Booking a test drive took two minutes and I drove home in my VoltX S a week later. Seamless.",
    name: "Chen W.",
    initials: "CW",
  },
];

export const footerLinks = [
  {
    title: "Models",
    links: [
      { label: "VoltX S", href: "/models/voltx-s" },
      { label: "VoltX X", href: "/models/voltx-x" },
      { label: "VoltX GT", href: "/models/voltx-gt" },
      { label: "VoltX T", href: "/models/voltx-t" },
      { label: "Compare Models", href: "/models#compare" },
    ],
  },
  {
    title: "Charging",
    links: [
      { label: "Home Charging", href: "/charging#home" },
      { label: "Public Network", href: "/charging#network" },
      { label: "Charging App", href: "/charging#app" },
      { label: "Charging Map", href: "/charging#map" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "SmartDrive OS", href: "/technology#os" },
      { label: "Battery & Powertrain", href: "/technology#battery" },
      { label: "Safety", href: "/technology#safety" },
      { label: "Over-the-Air Updates", href: "/technology#ota" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "/newsroom" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Warranty", href: "/support#warranty" },
      { label: "Contact Us", href: "/contact" },
      { label: "Book a Service", href: "/support#service" },
    ],
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
