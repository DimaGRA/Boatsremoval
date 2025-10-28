import React from "react";
import { boatImages } from "../data/boatImages"

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

// Deterministic pseudo-random generator
function seededRandom(seed: number) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export default function RandomBoatGallery({ cityName, count = 3 }: Props) {
  const seed = stringToSeed(cityName);

  // Use seeded random to select consistent images
  const selectedIndexes: number[] = [];
  const total = boatImages.length;

  while (selectedIndexes.length < count && selectedIndexes.length < total) {
    const randomIndex = Math.floor(seededRandom(seed + selectedIndexes.length) * total);
    if (!selectedIndexes.includes(randomIndex)) {
      selectedIndexes.push(randomIndex);
    }
  }

  const selectedImages = selectedIndexes.map((i) => boatImages[i]);

  return (
    <section className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {selectedImages.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={img.src}
              alt={`${img.alt} in ${cityName}, Florida`}
              loading="lazy"
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
            <p className="text-sm text-muted-foreground mt-3 text-center max-w-sm">
              {img.caption} in {cityName}, Florida
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
