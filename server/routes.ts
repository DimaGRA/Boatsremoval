import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { quoteSchema } from "@shared/schema";
import { sendQuoteEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote submission endpoint
  app.post("/api/quote", async (req, res) => {
    try {
      // Validate request body
      const validatedData = quoteSchema.parse(req.body);
      
      // Send email notification
      await sendQuoteEmail(validatedData);
      
      res.json({ 
        success: true, 
        message: "Quote request submitted successfully" 
      });
    } catch (error) {
      console.error('Quote submission error:', error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to submit quote request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
