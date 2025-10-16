import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Upload, Image as ImageIcon, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Could not get canvas context'));
            return;
          }

          const MAX_WIDTH = 1920;
          const MAX_HEIGHT = 1920;
          
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height = (height * MAX_WIDTH) / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = (width * MAX_HEIGHT) / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              if (blob) {
                const compressedFile = new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now(),
                });
                resolve(compressedFile);
              } else {
                reject(new Error('Compression failed'));
              }
            },
            'image/jpeg',
            0.8
          );
        };
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
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

      try {
        const compressedFiles = await Promise.all(
          validFiles.map(file => compressImage(file))
        );
        const newFiles = [...selectedFiles, ...compressedFiles].slice(0, 4);
        setSelectedFiles(newFiles);
      } catch (error) {
        console.error('Image compression error:', error);
        toast({
          title: "Image Processing Failed",
          description: "Please try different images.",
          variant: "destructive",
        });
      }
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Convert images to base64
      const imagePromises = selectedFiles.map(file => {
        return new Promise<{ filename: string; content: string }>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = reader.result as string;
            const base64Content = base64.split(',')[1];
            resolve({
              filename: file.name,
              content: base64Content,
            });
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      const images = await Promise.all(imagePromises);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          images: images.length > 0 ? images : undefined,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Request Received!",
          description: "We'll contact you within 1 hour.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSelectedFiles([]);
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Get In Touch & Send Boat Images
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-contact-subtitle">
            For the fastest quote, send us your boat images along with your contact details!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      data-testid="input-phone"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your boat and location..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="boat-images">Boat Images (Optional)</Label>
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
                      className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-border rounded-md cursor-pointer hover-elevate active-elevate-2 bg-muted/50"
                      data-testid="label-upload-area"
                    >
                      <div className="flex flex-col items-center justify-center text-center p-4">
                        <div className="mb-2 p-3 bg-primary/10 rounded-full">
                          <Upload className="h-8 w-8 text-primary" />
                        </div>
                        <p className="mb-1 text-sm font-semibold text-foreground">
                          Click to upload boat images
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PNG, JPG up to 10MB (max 4 images)
                        </p>
                      </div>
                    </label>

                    {selectedFiles.length > 0 && (
                      <div className="mt-3 space-y-2">
                        <p className="text-sm font-semibold text-foreground">
                          Selected Images ({selectedFiles.length}/4)
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {selectedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="relative group bg-muted rounded-md overflow-hidden"
                              data-testid={`preview-image-${index}`}
                            >
                              <div className="aspect-square flex items-center justify-center p-2">
                                <ImageIcon className="h-8 w-8 text-muted-foreground" />
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
                              <p className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs p-1 truncate">
                                {file.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                    <Upload className="mr-2 h-5 w-5" />
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3" data-testid="info-phone">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:+17792200187" className="text-muted-foreground hover:text-primary">
                        779-220-0187
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="info-email">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:quote@boatsremoval.com" className="text-muted-foreground hover:text-primary">
                        quote@boatsremoval.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="info-location">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Service Areas</p>
                      <p className="text-muted-foreground">Florida</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="info-hours">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p className="text-muted-foreground">24/7 Emergency Service</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-2">Quick Response Guarantee</h3>
                <p className="text-primary-foreground/90">
                  We respond to all inquiries within 1 hour during business hours. Same-day service available for urgent removals!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}