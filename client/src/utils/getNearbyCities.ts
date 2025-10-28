import { allCities, City } from "@/data/cities";

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3958.8; // radius of Earth in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function getNearbyCities(centerCity: string, radiusMiles: number): (City & { distance: number })[] {
  const base = allCities.find((c) => c.name.toLowerCase() === centerCity.toLowerCase());
  if (!base) return [];

  const withDistances = allCities
    .filter((c) => c.name !== base.name)
    .map((c) => ({
      ...c,
      distance: getDistance(base.lat, base.lon, c.lat, c.lon)
    }))
    .filter((c) => c.distance <= radiusMiles)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 60); // limit to 60 closest

  return withDistances;
}
