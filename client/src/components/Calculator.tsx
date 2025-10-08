import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Calculator() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const validFiles = fileArray.filter(file => {
        const isImage = file.type.startsWith('image/');
        const isUnder10MB = file.size <= 10 * 1024 * 1024;
        return isImage && isUnder10MB;
      });

      if (validFiles.length !== fileArray.length) {
        toast({
          title: "Some files were not added",
          description: "Only images under 10MB are allowed",
          variant: "destructive",
        });
      }

      const newFiles = [...selectedFiles, ...validFiles].slice(0, 4);
      setSelectedFiles(newFiles);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (selectedFiles.length === 0) {
      toast({
        title: "No images selected",
        description: "Please select at least one image of your boat",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Images submitted!",
      description: `${selectedFiles.length} image(s) sent. We'll get back to you soon with a quote.`,
    });
    
    console.log('Submitted boat images:', selectedFiles);
    setSelectedFiles([]);
  };

  return (
    <section id="calculator" className="py-16 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-calculator-title">
            For the Fastest Quote, Send us Boat Images
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-calculator-subtitle">
            Upload photos of your boat to receive a detailed quote
          </p>
        </div>

        <Card className="border-2">
          <CardContent className="pt-8 space-y-6">
            {/* Upload Area */}
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileSelect}
                className="hidden"
                id="boat-images"
                data-testid="input-boat-images"
              />
              <label
                htmlFor="boat-images"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-md cursor-pointer hover-elevate active-elevate-2 bg-muted/50"
                data-testid="label-upload-area"
              >
                <div className="flex flex-col items-center justify-center text-center p-6">
                  <div className="mb-4 p-4 bg-primary/10 rounded-full">
                    <Upload className="h-12 w-12 text-primary" />
                  </div>
                  <p className="mb-2 text-lg font-semibold text-foreground">
                    Click to upload boat images
                  </p>
                  <p className="text-sm text-muted-foreground">
                    or drag and drop
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    PNG, JPG up to 10MB (max 4 images)
                  </p>
                </div>
              </label>
            </div>

            {/* Selected Files Preview */}
            {selectedFiles.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground">
                  Selected Images ({selectedFiles.length}/4)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="relative group bg-muted rounded-md overflow-hidden"
                      data-testid={`preview-image-${index}`}
                    >
                      <div className="aspect-square flex items-center justify-center p-4">
                        <ImageIcon className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() => removeFile(index)}
                          data-testid={`button-remove-${index}`}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs p-2 truncate">
                        {file.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              className="w-full"
              size="lg"
              onClick={handleSubmit}
              disabled={selectedFiles.length === 0}
              data-testid="button-submit-images"
            >
              <Upload className="mr-2 h-5 w-5" />
              Submit Images for Quote
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              Our team will review your images and send you a detailed quote within 24 hours
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
