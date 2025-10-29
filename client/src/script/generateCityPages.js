import fs from "fs";
import path from "path";
import { allCities } from "../data/cities_test.ts";

// === CONFIG ===
const TEMPLATE_CITY = "Pompano Beach"; // base template
const TEMPLATE_FILE = "src/pages/PompanoBeach.tsx";
const OUTPUT_DIR = "src/pages/SEO";

// === MAIN ===
const templatePath = path.resolve(TEMPLATE_FILE);
const outputDir = path.resolve(OUTPUT_DIR);

if (!fs.existsSync(templatePath)) {
  console.error(`❌ Template file not found at ${templatePath}`);
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf-8");

function replaceAll(text, search, replacement) {
  return text.split(search).join(replacement);
}

for (const city of allCities) {
  const cityName = city.name;
  const safeCity = cityName.replace(/\s+/g, "-").toLowerCase();
  const exportName = cityName.replace(/\s+/g, "");

  const newFileName = `boat-removal-fl-${safeCity}.tsx`;
  const newFilePath = path.join(outputDir, newFileName);

  if (fs.existsSync(newFilePath)) {
    console.log(`⚠️ Skipped: ${newFileName} (already exists)`);
    continue;
  }

  let content = template;

  // === Replace all text occurrences of template city ===
  const cityNameLower = cityName.toLowerCase();
  const templateCityLower = TEMPLATE_CITY.toLowerCase();

  // Replace both capitalized and lowercase variants throughout file
  content = replaceAll(content, TEMPLATE_CITY, cityName);
  content = replaceAll(content, templateCityLower, cityNameLower);

  // === Update export function name ===
  content = content.replace(
    /export default function .*?\(/,
    `export default function ${exportName}(`,
  );

  // === Update <Helmet> SEO tags ===
  content = content.replace(
    /<title>.*<\/title>/,
    `<title>Boat Removal ${cityName} FL | Professional Disposal & Dismantling Services</title>`,
  );

  content = content.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="Expert boat removal services in ${cityName}, Florida. Free quotes, same-day service, eco-friendly disposal. Serving nearby areas for boats, yachts & catamarans of all sizes." />`,
  );

  content = content.replace(
    /<link\s+rel="canonical"[^>]*>/,
    `<link rel="canonical" href="https://boatsremoval.com/boat-removal-fl-${safeCity}" />`,
  );

  // === Update location-based variables ===
  // Update inside getNearbyCities() and getPhoneByCity() calls
  content = content.replace(
    /getNearbyCities\(".*?",/,
    `getNearbyCities("${cityName}",`,
  );
  content = content.replace(
    /getPhoneByCity\(".*?"\)/,
    `getPhoneByCity("${cityName}")`,
  );

  // === Write new file ===
  fs.writeFileSync(newFilePath, content, "utf-8");
  console.log(`✅ Created: ${newFileName}`);
}

console.log("🎉 All SEO city pages generated successfully!");
