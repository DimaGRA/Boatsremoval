import { allCities } from "@/data/cities";

/**
 * Returns the phone number for a given city.
 * Falls back to default if not found.
 */
export function getPhoneByCity(cityName?: string): string {
  const defaultPhone = "754-224-8555";
  if (!cityName) return defaultPhone;

  const clean = cityName.trim().toLowerCase();

  const city = allCities.find(
    (c) => c.name.trim().toLowerCase() === clean
  );

  if (!city) {
    console.warn(`⚠️ City not found in list: "${cityName}"`);
  }

  return city?.phone || defaultPhone;
}
