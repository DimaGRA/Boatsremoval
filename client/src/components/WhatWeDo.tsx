import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash, Ship, WavesArrowUp } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= TITLE ================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            WHAT WE DO
          </h2>
           
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Junk Boat Removal */}
          <Link href="/junk-boat-removal">
            <a className="block">
              <Card className="text-center border-4 border-orange-600 rounded-xl h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition">
                <CardHeader>
                  <Trash className="mx-auto h-12 w-12 text-primary mb-4" />
                  <CardTitle>Junk Boat Removal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Removal of old, abandoned, or unusable boats from yards,
                    marinas, docks, and private property.
                  </p>
                </CardContent>
              </Card>
            </a>
          </Link>

          {/* Salvage Boat Removal */}
          <Link href="/salvage-boat-removal">
            <a className="block">
              <Card className="text-center border-4 border-orange-600 rounded-xl h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition">
                <CardHeader>
                  <Ship className="mx-auto h-12 w-12 text-primary mb-4" />
                  <CardTitle>Salvage Boat Removal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Safe and legal removal of damaged or wrecked boats after
                    storms, accidents, or insurance claims.
                  </p>
                </CardContent>
              </Card>
            </a>
          </Link>

          {/* Sunken Boat Removal */}
          <Link href="/sunken-boat-removal">
            <a className="block">
              <Card className="text-center border-4 border-orange-600 rounded-xl h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition">
                <CardHeader>
                  <WavesArrowUp className="mx-auto h-12 w-12 text-primary mb-4" />
                  <CardTitle>Sunken Boat Removal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professional recovery and disposal of partially or fully
                    sunken boats from waterways and marinas.
                  </p>
                </CardContent>
              </Card>
            </a>
          </Link>

        </div>

        {/* More Services Button */}
        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" className="bg-primary text-white hover:bg-orange-600">
              More Services
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
