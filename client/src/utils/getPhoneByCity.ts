import { allCities } from "@/data/cities";

/**
 * Returns the phone number for a given city.
 * Falls back to default if not found.
 */
export function getPhoneByCity(cityName?: string): string {
  const defaultPhone = "779-220-0187";

  if (!cityName) return defaultPhone;

  const city = allCities.find(
    (c) => c.name.toLowerCase() === cityName.toLowerCase()
  );

  return city?.phone || defaultPhone;
}
