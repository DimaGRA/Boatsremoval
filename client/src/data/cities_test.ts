export interface City {
  name: string;
  lat: number;
  lon: number;
  phone?: string; // optional so you don’t have to fill it for all
}

export const allCities: City[] = [
  { name: "Pompano Beach", lat: 26.2379, lon: -80.1248, phone: "779-220-0187" },
  { name: "Fort Lauderdale", lat: 26.1224, lon: -80.1373 },
 
];
