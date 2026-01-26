import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  FileText, 
  Users, 
  Lock, 
  ArrowRight, 
  CheckCircle2,
  Menu,
  X,
  Globe,
  Server,
  Key,
  Mail,
  Activity,
  Zap,
  Shield,
  Eye,
  FileWarning,
  Layers,
  ChevronDown,
  ChevronUp,
  Share2,
  Cloud,
  Bell,
  UploadCloud,
  UserCheck
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "@/lib/language-context";
import { EnterpriseContactModal } from "@/components/enterprise-contact-modal"; // Import Contact Modal

// Import generated assets
import heroImage from "@assets/generated_images/secure_digital_document_transfer_visualization_with_padlocks_and_floating_files..png";
import logoIcon from "@assets/new_logo/favicon.svg";

// Custom Accordion Component to avoid Radix UI issues with React 19
function SimpleAccordion({ items }: { items: { q: string, a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border-b border-border pb-4">
          <button 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="flex w-full items-center justify-between py-2 text-left text-sm font-medium hover:text-primary transition-colors"
          >
            {item.q}
            {openIndex === idx ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pt-2 text-sm text-muted-foreground">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// Translation Configuration
type Language = 'de' | 'en';

const translations = {
  de: {
    nav: {
      features: "Funktionen",
      security: "Sicherheit",
      howItWorks: "So funktioniert's",
      pricing: "Preise",
      getStarted: "Jetzt Starten"
    },
    hero: {
      badge: "Für Unternehmen mit hohen Sicherheitsansprüchen",
      title: "Sicherer Dokumentenaustausch für",
      titleHighlight: "Moderne Unternehmen",
      subtitle: "Das sichere Portal für Firmen und Selbstständige. Verwalten Sie Kontakte, tauschen Sie sensible Verträge aus und bearbeiten Sie Rechnungen mit moderner, authentifizierter Verschlüsselung.",
      ctaPrimary: "Kostenlos Testen",
      ctaSecondary: "Demo Buchen"
    },
    features: {
      headline: "Alles was Sie brauchen für sicheres Management",
      subheadline: "Gebaut für Kunden, Rechnungen und sensible Verträge. Erleben Sie den neuen Standard in der sicheren Kommunikation.",
      items: [
        {
          title: "AES-256-GCM Verschlüsselung",
          desc: "Alle Dateien werden mit AES-256-GCM verschlüsselt gespeichert und übertragen. Schutz für Daten im Ruhezustand und bei der Übertragung."
        },
        {
          title: "JWT Authentication",
          desc: "Sicheres Login-System mit Access & Refresh Tokens. Session Management mit Redis für höchste Sicherheit."
        },
        {
          title: "Email Self-Service",
          desc: "Passwort-Reset, Benachrichtigungen und SMTP Integration. Alles automatisiert mit deutschen Templates."
        },
        {
          title: "Audit Logging",
          desc: "Komplette Nachverfolgung aller Aktionen. Login, Upload, Download, Delete mit IP & Zeitstempel."
        },
        {
          title: "Rate Limiting",
          desc: "Redis-basierter Schutz vor Brute-Force und DDoS-Angriffen. Ihre Daten bleiben verfügbar und sicher."
        },
        {
          title: "Input Validation",
          desc: "Zod-basierte Validierung für maximale Datensicherheit. Deutsche Fehlermeldungen und Type-safe Schemas."
        }
      ]
    },
    security: {
      headline: "Wie wir Sicherheit umsetzen",
      subheadline: "Sicherheit ist bei SafeDocs Portal kein nachträgliches Feature. Sie ist Bestandteil der Architektur – von der ersten Zeile Code bis zum Betrieb.",
      items: [
        {
          title: "Verschlüsselung als Fundament",
          desc: "AES-256-GCM für gespeicherte Daten, TLS für Übertragung und authentifizierte Verschlüsselung gegen Manipulation."
        },
        {
          title: "Zugriffsschutz & Identitäten",
          desc: "2FA (TOTP), kurzlebige Tokens und strikte rollenbasierte Berechtigungen sorgen für eindeutige Zuordenbarkeit."
        },
        {
          title: "Gesicherter Datei-Upload",
          desc: "Isolierter Virenscan bei jedem Upload. Infizierte Dateien werden sofort blockiert, bevor sie das System erreichen."
        },
        {
          title: "Nachvollziehbarkeit",
          desc: "Lückenlose Audit-Logs für Login, Uploads und Löschungen. Jeder Eintrag mit Zeitstempel und Kontext."
        },
        {
          title: "Schutz vor Missbrauch",
          desc: "Aktiver Schutz durch Rate Limiting gegen Brute-Force sowie strikte Input-Validierung auf allen Schnittstellen."
        },
        {
          title: "Klare Systemtrennung",
          desc: "Frontend, Backend, Scan-Services und Datenhaltung sind strikt getrennt. Ein Fehler kompromittiert nicht das Gesamtsystem."
        }
      ]
    },
    howItWorks: {
      headline: "So funktioniert's",
      subheadline: "Einfach, sicher und bidirektional. Der Standard für den Datenaustausch.",
      tabs: {
        firmToClient: "Daten Senden",
        clientToFirm: "Daten Empfangen"
      },
      firmToClient: [
        {
          title: "Upload",
          desc: "Dateien per Drag & Drop hochladen. Automatischer Virenscan und Verschlüsselung im Browser.",
          code: "encrypting file... 100%"
        },
        {
          title: "Sicherheit",
          desc: "Datei wird mit AES-256 verschlüsselt auf deutschen Servern gespeichert. Schlüssel bleiben getrennt.",
          code: "AES-256-GCM verified"
        },
        {
          title: "Teilen",
          desc: "Sicheren Link generieren (optional mit Passwort & Ablaufdatum) und an den Empfänger senden.",
          code: "link generated: secure.portal/..."
        }
      ],
      clientToFirm: [
        {
          title: "Zugang",
          desc: "Empfänger erhält einen sicheren Upload-Link. Kein komplizierter Account oder Login notwendig.",
          code: "access token verified"
        },
        {
          title: "Sicherer Upload",
          desc: "Empfänger lädt Dokumente hoch. Client-Side Encryption verschlüsselt Daten noch im Browser.",
          code: "client-side encryption: active"
        },
        {
          title: "Empfang",
          desc: "Automatische Benachrichtigung an Sie. Dokumente stehen sofort sicher bereit.",
          code: "notification sent: new_file"
        }
      ]
    },
    faq: {
      headline: "Technische FAQ",
      subheadline: "Antworten für kritische Kunden und IT-Sicherheitsbeauftragte.",
      items: [
        {
          q: "Wie sind meine Daten verschlüsselt?",
          a: "Alle Daten werden mit AES-256-GCM verschlüsselt gespeichert und ausschließlich verschlüsselt übertragen (Files at Rest & in Transit)."
        },
        {
          q: "Wer kann auf meine Dokumente zugreifen?",
          a: "Nur berechtigte Benutzer innerhalb Ihres Kontextes. Zugriffe sind rollenbasiert und nachvollziehbar."
        },
        {
          q: "Werden hochgeladene Dateien geprüft?",
          a: "Ja. Jeder Upload wird automatisch in einer isolierten Umgebung auf Schadsoftware geprüft, bevor er weiterverarbeitet wird."
        },
        {
          q: "Was passiert bei einem Virusfund?",
          a: "Die Datei wird blockiert, gekennzeichnet und nicht freigegeben. Administratoren erhalten einen entsprechenden Hinweis."
        },
        {
          q: "Gibt es Audit-Logs?",
          a: "Ja. Alle sicherheitsrelevanten Aktionen (Login, Zugriff, Löschung) werden protokolliert und sind einsehbar."
        },
        {
          q: "Kann ich Sicherheitsmaßnahmen prüfen?",
          a: "Ja. Die eingesetzten Mechanismen sind transparent beschrieben und für Audits geeignet."
        }
      ]
    },
    cta: {
      headline: "Bereit, vertrauliche Daten",
      headlineBold: "digital sicher zu übertragen – so, wie Sie es sich schon immer gewünscht haben?",
      subheadline: "Die ideale Lösung für Steuerberater, Kanzleien, Rechtsanwälte, Notare, IT-Dienstleister und KMU mit sensiblen Daten.",
      primary: "Kostenlos Starten",
      secondary: "Vertrieb Kontaktieren",
      disclaimer: "Keine Kreditkarte nötig · 14 Tage testen · Jederzeit kündbar"
    },
    trust: {
      headline: "Vertraut von Unternehmen aus",
      industries: ["Finanzdienstleistung", "Beratung", "IT & Technologie", "Gesundheitswesen"]
    },
    footer: {
      desc: "Sicherer Dokumentenaustausch für moderne Unternehmen. Gebaut für Vertrauen, Geschwindigkeit und Compliance.",
      product: "Produkt",
      legal: "Rechtliches",
      rights: "Alle Rechte vorbehalten."
    }
  },
  en: {
    nav: {
      features: "Features",
      security: "Security",
      howItWorks: "How it Works",
      pricing: "Pricing",
      getStarted: "Get Started"
    },
    hero: {
      badge: "For Companies with High Security Standards",
      title: "Secure Document Exchange for",
      titleHighlight: "Modern Business",
      subtitle: "The secure portal for companies and professionals. Manage contacts, exchange sensitive contracts, and handle invoices with modern, authenticated encryption.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Book Demo"
    },
    features: {
      headline: "Everything you need to manage documents securely",
      subheadline: "Built for customers, invoices, and sensitive contracts. Experience the new standard in secure communication.",
      items: [
        {
          title: "AES-256-GCM Encryption",
          desc: "All files secured with AES-256-GCM encryption. Protected at rest & in transit."
        },
        {
          title: "JWT Authentication",
          desc: "Secure login system with Access & Refresh Tokens. Session Management with Redis."
        },
        {
          title: "Email Self-Service",
          desc: "Password reset, notifications, and SMTP integration. Fully automated with localized templates."
        },
        {
          title: "Audit Logging",
          desc: "Complete tracking of all actions. Login, upload, download, delete with IP & timestamp."
        },
        {
          title: "Rate Limiting",
          desc: "Redis-based protection against brute-force and DDoS attacks. Keeping your data safe and available."
        },
        {
          title: "Input Validation",
          desc: "Zod-based validation for maximum data integrity. Type-safe schemas and clear error messages."
        }
      ]
    },
    security: {
      headline: "How we implement Security",
      subheadline: "Security is not an afterthought. It is part of the architecture – from the first line of code to operation.",
      items: [
        {
          title: "Encryption as Foundation",
          desc: "AES-256-GCM for stored data, TLS for transmission, and authenticated encryption against manipulation."
        },
        {
          title: "Access Control & Identities",
          desc: "2FA (TOTP), short-lived tokens, and strict role-based permissions ensure clear accountability."
        },
        {
          title: "Secure File Upload",
          desc: "Isolated virus scan for every upload. Infected files are blocked immediately before reaching the system."
        },
        {
          title: "Traceability",
          desc: "Complete audit logs for login, uploads, and deletions. Every entry with timestamp and context."
        },
        {
          title: "Abuse Protection",
          desc: "Active protection via rate limiting against brute-force and strict input validation on all interfaces."
        },
        {
          title: "Clear System Separation",
          desc: "Frontend, backend, scan services, and data storage are strictly separated. One error does not compromise the whole system."
        }
      ]
    },
    howItWorks: {
      headline: "How it Works",
      subheadline: "Simple, secure, and bidirectional. The standard for document exchange.",
      tabs: {
        firmToClient: "Send Data",
        clientToFirm: "Receive Data"
      },
      firmToClient: [
        {
          title: "Upload",
          desc: "Upload files via Drag & Drop. Automatic virus scan and client-side encryption.",
          code: "encrypting file... 100%"
        },
        {
          title: "Security",
          desc: "File is stored encrypted with AES-256 on secure servers. Keys remain separate.",
          code: "AES-256-GCM verified"
        },
        {
          title: "Share",
          desc: "Generate secure link (optional with password & expiration) and send to recipient.",
          code: "link generated: secure.portal/..."
        }
      ],
      clientToFirm: [
        {
          title: "Access",
          desc: "Recipient receives secure upload link. No complex account or login required.",
          code: "access token verified"
        },
        {
          title: "Secure Upload",
          desc: "Recipient uploads documents. Client-side encryption secures data in the browser.",
          code: "client-side encryption: active"
        },
        {
          title: "Receive",
          desc: "Automatic notification to you. Documents are immediately available securely.",
          code: "notification sent: new_file"
        }
      ]
    },
    faq: {
      headline: "Technical FAQ",
      subheadline: "Answers for critical customers and IT security officers.",
      items: [
        {
          q: "How is my data encrypted?",
          a: "All data is stored encrypted with AES-256-GCM and transmitted exclusively encrypted (Files at Rest & in Transit)."
        },
        {
          q: "Who can access my documents?",
          a: "Only authorized users within your context. Access is role-based and traceable."
        },
        {
          q: "Are uploaded files checked?",
          a: "Yes. Every upload is automatically checked for malware in an isolated environment before processing."
        },
        {
          q: "What happens if a virus is found?",
          a: "The file is blocked, flagged, and not released. Administrators receive a notification."
        },
        {
          q: "Are there audit logs?",
          a: "Yes. All security-relevant actions (login, access, deletion) are logged and viewable."
        },
        {
          q: "Can I verify security measures?",
          a: "Yes. The mechanisms used are transparently described and suitable for audits."
        }
      ]
    },
    cta: {
      headline: "Ready to transfer confidential data",
      headlineBold: "digitally and securely – just the way you always wanted?",
      subheadline: "The ideal solution for tax advisors, law firms, lawyers, notaries, IT service providers, and SMEs with sensitive data.",
      primary: "Get Started for Free",
      secondary: "Contact Sales",
      disclaimer: "No credit card required · 14-day free trial · Cancel anytime"
    },
    trust: {
      headline: "Trusted by Companies in",
      industries: ["Financial Services", "Consulting", "IT & Technology", "Healthcare"]
    },
    footer: {
      desc: "Secure document exchange for the modern enterprise. Built for trust, speed, and compliance.",
      product: "Product",
      legal: "Legal",
      rights: "All rights reserved."
    }
  }
};

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language: lang, toggleLanguage: toggleLang } = useLanguage();
  const [activeFlow, setActiveFlow] = useState<'firmToClient' | 'clientToFirm'>('firmToClient');
  const [, setLocation] = useLocation();
  const [demoOpen, setDemoOpen] = useState(false); // Demo Modal State

  const t = translations[lang];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featureIcons = [
    <Lock className="h-6 w-6 text-primary" />,
    <Key className="h-6 w-6 text-accent" />,
    <Mail className="h-6 w-6 text-indigo-500" />,
    <FileText className="h-6 w-6 text-green-500" />,
    <Activity className="h-6 w-6 text-orange-500" />,
    <CheckCircle2 className="h-6 w-6 text-primary" />
  ];

  const securityIcons = [
    <Lock className="h-6 w-6" />,
    <Users className="h-6 w-6" />,
    <FileWarning className="h-6 w-6" />,
    <Eye className="h-6 w-6" />,
    <Shield className="h-6 w-6" />,
    <Layers className="h-6 w-6" />
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <a 
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <img src={logoIcon} alt="SafeDocs Portal Logo" className="h-8 w-8 object-contain" />
                <span className="text-xl font-bold text-foreground tracking-tight font-heading">SafeDocs Portal</span>
              </a>
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t.nav.features}</a>
              <a href="#security" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t.nav.security}</a>
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t.nav.howItWorks}</a>
              <Link href="/pricing">
                <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t.nav.pricing}</a>
              </Link>
              
              <button onClick={toggleLang} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <Globe size={16} />
                {lang.toUpperCase()}
              </button>

              <Button 
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                onClick={() => setLocation("/pricing")}
              >
                {t.nav.getStarted}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleLang} className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
                <Globe size={16} />
                {lang.toUpperCase()}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-foreground">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-border p-4 absolute w-full"
          >
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-base font-medium text-foreground">{t.nav.features}</a>
              <a href="#security" className="text-base font-medium text-foreground">{t.nav.security}</a>
              <a href="#how-it-works" className="text-base font-medium text-foreground">{t.nav.howItWorks}</a>
              <a href="#pricing" className="text-base font-medium text-foreground">{t.nav.pricing}</a>
              <div className="pt-4 flex flex-col gap-2">
                <Button 
                  className="w-full bg-primary text-white"
                  onClick={() => setLocation("/pricing")}
                >
                  {t.nav.getStarted}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-[0.4]" />
        
        {/* Abstract Shapes */}
        <div className="absolute top-20 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-12">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-4xl flex flex-col items-center"
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                {t.hero.badge}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1] max-w-5xl text-balance">
                {t.hero.title} <span className="text-gradient inline-block">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 h-12 px-8 text-base"
                  onClick={() => setLocation("/pricing")}
                >
                  {t.hero.ctaPrimary} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-12 px-8 text-base border-primary/20 text-primary hover:bg-primary/5"
                  onClick={() => setDemoOpen(true)}
                >
                  {t.hero.ctaSecondary}
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative w-full max-w-5xl mt-8"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 glass-card p-2">
                <img 
                  src={heroImage} 
                  alt="Secure Portal Dashboard" 
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-10 border-y border-border/40 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">{t.trust.headline}</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {t.trust.industries.map((industry) => (
              <span key={industry} className="text-xl md:text-2xl font-bold font-heading text-slate-500">{industry}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">{t.features.headline}</h2>
            <p className="text-lg text-muted-foreground">
              {t.features.subheadline}
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {t.features.items.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="group p-8 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 border border-slate-100 shadow-sm">
                  {featureIcons[idx]}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">{t.howItWorks.headline}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.howItWorks.subheadline}
            </p>
            
            {/* Flow Toggle */}
            <div className="inline-flex p-1 bg-slate-200 rounded-lg">
              <button
                onClick={() => setActiveFlow('firmToClient')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeFlow === 'firmToClient' 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.howItWorks.tabs.firmToClient}
              </button>
              <button
                onClick={() => setActiveFlow('clientToFirm')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeFlow === 'clientToFirm' 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.howItWorks.tabs.clientToFirm}
              </button>
            </div>
          </div>

          <div className="relative min-h-[400px]">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlow}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-3 gap-12 relative z-10"
              >
                {t.howItWorks[activeFlow].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-24 h-24 rounded-2xl bg-white shadow-xl border border-border flex items-center justify-center mb-8 relative z-20 group">
                      <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Icons for Firm to Client */}
                      {activeFlow === 'firmToClient' && (
                        <>
                          {idx === 0 && <Cloud className="h-10 w-10 text-primary" />}
                          {idx === 1 && <ShieldCheck className="h-10 w-10 text-primary" />}
                          {idx === 2 && <Share2 className="h-10 w-10 text-primary" />}
                        </>
                      )}

                      {/* Icons for Client to Firm */}
                      {activeFlow === 'clientToFirm' && (
                        <>
                          {idx === 0 && <UserCheck className="h-10 w-10 text-primary" />}
                          {idx === 1 && <UploadCloud className="h-10 w-10 text-primary" />}
                          {idx === 2 && <Bell className="h-10 w-10 text-primary" />}
                        </>
                      )}
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-4 border-slate-50">
                        {idx + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 max-w-xs min-h-[5rem] flex items-center justify-center">{step.desc}</p>
                    
                    {/* Tech Detail Code Snippet */}
                    <div className="w-full max-w-xs bg-slate-900 rounded-lg p-3 text-left shadow-lg">
                      <div className="flex gap-1.5 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <code className="text-xs font-mono text-green-400 block">
                        &gt; {step.code}
                      </code>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Security Architecture Section */}
      <section id="security" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.security.headline}</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {t.security.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.security.items.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="mb-4 text-primary">
                  {securityIcons[idx]}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.faq.headline}</h2>
            <p className="text-muted-foreground">{t.faq.subheadline}</p>
          </div>

          <SimpleAccordion items={t.faq.items} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-foreground leading-tight">
            {t.cta.headline} <span className="text-primary block mt-2">{t.cta.headlineBold}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t.cta.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 h-14 px-10 text-lg rounded-full text-white"
              onClick={() => setLocation("/pricing")}
            >
              {t.cta.primary}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-10 text-lg rounded-full border-primary/20 hover:bg-primary/5 bg-transparent"
              onClick={() => setLocation("/pricing")} // Contact Sales links to pricing page for contact
            >
              {t.cta.secondary}
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">{t.cta.disclaimer}</p>
        </div>
      </section>

      {/* Demo Booking Modal */}
      <EnterpriseContactModal 
        open={demoOpen} 
        onOpenChange={setDemoOpen}
        title="Live-Demo buchen"
        description="Lernen Sie SafeDocs in einer persönlichen Session kennen. Wir zeigen Ihnen, wie Sie Ihren Workflow sicherer machen."
        buttonText="Demo anfragen"
      />

      {/* Footer */}
      <footer className="bg-white border-t border-border pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logoIcon} alt="SafeDocs Portal Logo" className="h-6 w-6 object-contain" />
                <span className="text-lg font-bold font-heading">SafeDocs Portal</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t.footer.desc}
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">{t.footer.product}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary">{t.nav.features}</a></li>
                <li><a href="#security" className="hover:text-primary">Security</a></li>
                <li><Link href="/pricing"><a className="hover:text-primary">{t.nav.pricing}</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.legal}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/legal"><a className="hover:text-primary">Privacy Policy</a></Link></li>
                <li><Link href="/legal"><a className="hover:text-primary">Terms of Service</a></Link></li>
                <li><Link href="/legal"><a className="hover:text-primary">Impressum</a></Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} SafeDocs Portal. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}