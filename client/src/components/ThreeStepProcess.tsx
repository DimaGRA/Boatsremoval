import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ThreeStepProcess() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            OUR SIMPLE 3-STEP PROCESS
          </h2>
          <p className="text-lg text-orange-600">
            Fast and hassle-free boat removal
          </p>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Call us or fill out our online form with details about your boat and location.
                Photos help us give faster quotes.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <CardTitle>Get Your Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Receive a free, no-obligation quote — usually within 1 hour.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
         <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <CardTitle>We Remove It</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We schedule a convenient time and handle hauling, disposal, and paperwork.
                Your property is clean in no time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
