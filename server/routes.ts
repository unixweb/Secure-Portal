import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import * as brevo from '@getbrevo/brevo';

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact Form API Route
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message, subject } = req.body;

      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Alle Felder sind erforderlich" });
      }

      // Initialize Brevo API
      const apiInstance = new brevo.TransactionalEmailsApi();
      apiInstance.setApiKey(
        brevo.TransactionalEmailsApiApiKeys.apiKey,
        process.env.BREVO_API_KEY || ""
      );

      // Send email via Brevo
      const sendSmtpEmail = new brevo.SendSmtpEmail();
      sendSmtpEmail.subject = subject || "Neue Anfrage über SafeDocs Portal";
      sendSmtpEmail.htmlContent = `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name/Firma:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;
      sendSmtpEmail.sender = { 
        name: "SafeDocs Portal", 
        email: "info@safedocsportal.com" 
      };
      sendSmtpEmail.to = [{ 
        email: "jh@unixweb.de", 
        name: "SafeDocs Team" 
      }];
      sendSmtpEmail.replyTo = { 
        email: email, 
        name: name 
      };

      await apiInstance.sendTransacEmail(sendSmtpEmail);

      res.json({ success: true, message: "E-Mail erfolgreich gesendet" });
    } catch (error) {
      console.error("Brevo API Error:", error);
      res.status(500).json({ 
        error: "Fehler beim Senden der E-Mail",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  return httpServer;
}
