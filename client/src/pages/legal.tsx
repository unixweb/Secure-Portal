import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground tracking-tight font-heading">SafeDocs Portal</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={16} />
              Back to Home
            </a>
          </Link>
        </div>
      </nav>

      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto prose prose-slate">
        <h1>Rechtliche Hinweise / Legal</h1>
        
        <section className="mb-12">
          <h2>Impressum</h2>
          <p>
            <strong>SafeDocs Portal GmbH</strong><br />
            Musterstraße 123<br />
            10115 Berlin<br />
            Deutschland
          </p>
          <p>
            <strong>Geschäftsführer:</strong> Max Mustermann<br />
            <strong>Registergericht:</strong> Amtsgericht Berlin-Charlottenburg<br />
            <strong>Registernummer:</strong> HRB 123456
          </p>
          <p>
            <strong>Kontakt:</strong><br />
            E-Mail: kontakt@safedocsportal.com<br />
            Telefon: +49 (0) 30 12345678
          </p>
        </section>

        <section>
          <h2>Datenschutzerklärung (Privacy Policy)</h2>
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
          </p>
          <h3>Datenspeicherung</h3>
          <p>
            Wir speichern Daten ausschließlich verschlüsselt (AES-256-GCM). Schlüssel und Daten werden getrennt voneinander auf Servern in Deutschland gehostet.
          </p>
          <h3>Kontakt mit uns</h3>
          <p>
            Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </section>
      </main>
    </div>
  );
}
