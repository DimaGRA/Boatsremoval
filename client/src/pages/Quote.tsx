import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const boatSizes = [
  "5ft - 10ft",
  "10ft - 15ft", 
  "15ft - 20ft",
  "20ft - 25ft",
  "25ft - 35ft",
  "35ft - 45ft",
  "45ft +"
];

const engineTypes = [
  "Inboard",
  "Outboard",
  "Sail",
  "Trolling Motor",
  "Other"
];

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export default function Quote() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    boatSize: "",
    engineType: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "Florida",
    zipCode: "",
    phone: "",
    email: "",
    images: [] as File[]
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 3);
      setFormData({ ...formData, images: filesArray });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 1 hour with your boat removal quote.",
    });
    setLocation('/');
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 md:pt-24 pb-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => setLocation('/')}
            className="mb-6"
            data-testid="button-back-home"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Boat Removal Price Quote</CardTitle>
              <CardDescription className="text-base mt-4">
                <strong>Whether we're paying you for a boat, or you're paying us to remove a boat - many factors are considered, and all included in the price:</strong>
              </CardDescription>
              <CardDescription className="text-sm mt-2">
                To Include: Boat Age, Boat Condition, Extraction Difficulty, Hauling Difficulty, Demolition Costs, Waste Fees. 
                If applicable: Resale Costs (Title / Notary, Boat Detailing, Boat Storage).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm text-muted-foreground">Step 1 of 2</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          data-testid="input-first-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                          data-testid="input-last-name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="boatSize">Boat Size *</Label>
                      <Select value={formData.boatSize} onValueChange={(value) => setFormData({ ...formData, boatSize: value })}>
                        <SelectTrigger id="boatSize" data-testid="select-boat-size">
                          <SelectValue placeholder="Select boat size" />
                        </SelectTrigger>
                        <SelectContent>
                          {boatSizes.map((size) => (
                            <SelectItem key={size} value={size}>{size}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="engineType">Engine Type (Optional)</Label>
                      <Select value={formData.engineType} onValueChange={(value) => setFormData({ ...formData, engineType: value })}>
                        <SelectTrigger id="engineType" data-testid="select-engine-type">
                          <SelectValue placeholder="Select engine type" />
                        </SelectTrigger>
                        <SelectContent>
                          {engineTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      type="button" 
                      onClick={handleNext} 
                      className="w-full bg-primary text-primary-foreground"
                      disabled={!formData.firstName || !formData.lastName || !formData.boatSize}
                      data-testid="button-next"
                    >
                      Next
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <Button type="button" variant="ghost" onClick={handleBack} data-testid="button-back">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <p className="text-sm text-muted-foreground">Step 2 of 2</p>
                    </div>

                    <div className="space-y-2">
                      <Label>Address Where Boat Is Located? *</Label>
                      <Input
                        placeholder="Address Line 1"
                        value={formData.addressLine1}
                        onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                        required
                        data-testid="input-address-line1"
                      />
                      <Input
                        placeholder="Address Line 2"
                        value={formData.addressLine2}
                        onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                        data-testid="input-address-line2"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          required
                          data-testid="input-city"
                        />
                        <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                          <SelectTrigger data-testid="select-state">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {states.map((state) => (
                              <SelectItem key={state} value={state}>{state}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          placeholder="Zip Code"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          required
                          data-testid="input-zip"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        data-testid="input-phone"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Best email for receiving boat removal contract, invoices or sales receipts"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        data-testid="input-email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="images">Boat Images (Optional)</Label>
                      <Input
                        id="images"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        data-testid="input-images"
                      />
                      <p className="text-xs text-muted-foreground">
                        Accelerate the boat removal process by adding 1-3 images of the boat you want removed.
                      </p>
                      {formData.images.length > 0 && (
                        <p className="text-sm text-foreground">{formData.images.length} image(s) selected</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground" 
                      size="lg"
                      data-testid="button-submit-quote"
                    >
                      Get Prices
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
