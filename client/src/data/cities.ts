export interface City {
  name: string;
  lat: number;
  lon: number;
  county?: string; // optional county name
  phone?: string; // optional so you don’t have to fill it for all
}

export const allCities: City[] = [
  { name: "Pompano Beach", lat: 26.2379, lon: -80.1248, county: "Broward", phone: "779-220-0187" },
  { name: "Fort Lauderdale", lat: 26.1224, lon: -80.1373 },
  { name: "Deerfield Beach", lat: 26.3184, lon: -80.0996 },
  { name: "Boca Raton", lat: 26.3683, lon: -80.1289, county: "Palm Beach", phone: "561-220-0187" },
  { name: "Coral Springs", lat: 26.2712, lon: -80.2706 },
  { name: "Coconut Creek", lat: 26.2518, lon: -80.1789 },
  { name: "Margate", lat: 26.2445, lon: -80.2064 },
  { name: "Tamarac", lat: 26.2129, lon: -80.2498 },
  { name: "Hollywood", lat: 26.0112, lon: -80.1495 },
  { name: "Dania Beach", lat: 26.0523, lon: -80.1439 },
  { name: "Pembroke Pines", lat: 26.0031, lon: -80.2239 },
  { name: "Miramar", lat: 25.9873, lon: -80.2323 },
  { name: "Weston", lat: 26.1004, lon: -80.3998 },
  { name: "Delray Beach", lat: 26.4615, lon: -80.0728 },
  { name: "Boynton Beach", lat: 26.5318, lon: -80.0905 },
  { name: "Lake Worth Beach", lat: 26.6179, lon: -80.0720 },
  { name: "Wellington", lat: 26.6618, lon: -80.2684 },
  { name: "West Palm Beach", lat: 26.7153, lon: -80.0534 },
  { name: "Miami Gardens", lat: 25.9420, lon: -80.2456 },
  { name: "North Miami Beach", lat: 25.9331, lon: -80.1625 },
  { name: "Miami", lat: 25.7617, lon: -80.1918 },
  { name: "Atlantis", lat: 26.5906, lon: -80.1000, county: "Palm Beach", phone: "754-224-8555" },
  
];
