import React from "react";
import { boatImages } from "../data/boatImages";

interface Props {
  cityName: string;
  count?: number; // default 3
}

// Simple hash generator from string → number
function stringToSeed(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

// Deterministic pseudo-random generator (stable)
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function RandomBoatGallery({ cityName, count = 3 }: Props) {
  const safeCityName = cityName.trim() || "Florida";
  const seed = stringToSeed(safeCityName);

  const total = boatImages.length;
  const selectedIndexes: number[] = [];
  const used = new Set<number>();

  // Safety: limit iterations to prevent infinite loops
  let attempts = 0;
  while (
    selectedIndexes.length < Math.min(count, total) &&
    attempts < total * 2
  ) {
    const randomIndex = Math.floor(
      seededRandom(seed + attempts + selectedIndexes.length) * total
    );
    if (!used.has(randomIndex)) {
      used.add(randomIndex);
      selectedIndexes.push(randomIndex);
    }
    attempts++;
  }

  const selectedImages = selectedIndexes.map((i) => boatImages[i]);

  if (selectedImages.length === 0) {
    return (
      <section className="py-12 bg-background text-center text-muted-foreground">
        <p>No images available for {safeCityName}.</p>
      </section>
    );
  }

  return (
    <section className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {selectedImages.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={img.src}
              alt={`${img.alt} in ${safeCityName}, Florida`}
              loading="lazy"
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
            <p className="text-sm text-muted-foreground mt-3 text-center max-w-sm">
              {img.caption} in {safeCityName}, Florida
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
