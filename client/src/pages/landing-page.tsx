import { Link } from "wouter";
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
  Zap
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

// Import generated assets
import heroImage from "@assets/generated_images/secure_digital_document_transfer_visualization_with_padlocks_and_floating_files..png";
import logoIcon from "@assets/generated_images/minimalist_secure_shield_icon..png";

// Translation Configuration
type Language = 'de' | 'en';

const translations = {
  de: {
    nav: {
      features: "Funktionen",
      howItWorks: "So funktioniert's",
      pricing: "Preise",
      login: "Anmelden",
      getStarted: "Jetzt Starten"
    },
    hero: {
      badge: "Enterprise-Grade Sicherheit",
      title: "Sicherer Dokumentenaustausch für",
      titleHighlight: "Moderne Unternehmen",
      subtitle: "Das sichere Portal für Firmen und Unternehmer. Verwalten Sie Mandanten, tauschen Sie sensible Verträge aus und bearbeiten Sie Rechnungen mit militärischer Verschlüsselung.",
      ctaPrimary: "Kostenlos Testen",
      ctaSecondary: "Demo Buchen",
      trust: "Vertraut von 500+ Unternehmen"
    },
    features: {
      headline: "Alles was Sie brauchen für sicheres Management",
      subheadline: "Gebaut für Mandanten, Rechnungen und sensible Verträge. Erleben Sie den neuen Standard in der sicheren Kundenkommunikation.",
      items: [
        {
          title: "AES-256-GCM Verschlüsselung",
          desc: "Alle Dateien werden mit militärischer Verschlüsselung gesichert. Files at Rest & in Transit geschützt."
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
    cta: {
      headline: "Bereit für das Upgrade?",
      subheadline: "Schließen Sie sich tausenden Unternehmen an, die SecurePortal für den sicheren Austausch nutzen.",
      primary: "Kostenlos Starten",
      secondary: "Vertrieb Kontaktieren",
      disclaimer: "Keine Kreditkarte nötig · 14 Tage testen · Jederzeit kündbar"
    },
    footer: {
      desc: "Sicherer Dokumentenaustausch für moderne Unternehmen. Gebaut für Vertrauen, Geschwindigkeit und Compliance.",
      product: "Produkt",
      company: "Firma",
      legal: "Rechtliches",
      rights: "Alle Rechte vorbehalten."
    }
  },
  en: {
    nav: {
      features: "Features",
      howItWorks: "How it Works",
      pricing: "Pricing",
      login: "Login",
      getStarted: "Get Started"
    },
    hero: {
      badge: "Enterprise-Grade Security",
      title: "Secure Document Exchange for",
      titleHighlight: "Modern Business",
      subtitle: "The secure portal for companies and entrepreneurs. Manage clients, exchange sensitive contracts, and handle invoices with bank-level encryption.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Book Demo",
      trust: "Trusted by 500+ companies"
    },
    features: {
      headline: "Everything you need to manage documents securely",
      subheadline: "Built for mandants, invoices, and sensitive contracts. Experience the new standard in secure client communication.",
      items: [
        {
          title: "AES-256-GCM Encryption",
          desc: "All files secured with military-grade encryption. Files protected at rest & in transit."
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
    cta: {
      headline: "Ready to upgrade your client experience?",
      subheadline: "Join thousands of businesses using SecurePortal to safely exchange millions of documents every month.",
      primary: "Get Started for Free",
      secondary: "Contact Sales",
      disclaimer: "No credit card required · 14-day free trial · Cancel anytime"
    },
    footer: {
      desc: "Secure document exchange for the modern enterprise. Built for trust, speed, and compliance.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      rights: "All rights reserved."
    }
  }
};

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('de'); // Default to German

  const t = translations[lang];

  const toggleLang = () => {
    setLang(l => l === 'de' ? 'en' : 'de');
  };

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

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img src={logoIcon} alt="SecurePortal Logo" className="h-8 w-8 object-contain" />
              <span className="text-xl font-bold text-foreground tracking-tight font-heading">SecurePortal</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t.nav.features}</a>
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t.nav.howItWorks}</a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t.nav.pricing}</a>
              
              <button onClick={toggleLang} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <Globe size={16} />
                {lang.toUpperCase()}
              </button>

              <Button variant="ghost" className="text-sm font-medium">{t.nav.login}</Button>
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">{t.nav.getStarted}</Button>
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
              <a href="#how-it-works" className="text-base font-medium text-foreground">{t.nav.howItWorks}</a>
              <a href="#pricing" className="text-base font-medium text-foreground">{t.nav.pricing}</a>
              <div className="pt-4 flex flex-col gap-2">
                <Button variant="outline" className="w-full">{t.nav.login}</Button>
                <Button className="w-full bg-primary text-white">{t.nav.getStarted}</Button>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                {t.hero.badge}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1] max-w-4xl text-balance">
                {t.hero.title} <span className="text-gradient block sm:inline">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 h-12 px-8 text-base">
                  {t.hero.ctaPrimary} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 text-primary hover:bg-primary/5">
                  {t.hero.ctaSecondary}
                </Button>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-slate-200" />
                  ))}
                </div>
                <p>{t.hero.trust}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 glass-card p-2">
                <img 
                  src={heroImage} 
                  alt="Secure Portal Dashboard" 
                  className="rounded-xl w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
                />
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-10 border-y border-border/40 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Logos */}
            {['Acme Corp', 'GlobalBank', 'TechFlow', 'SecureChain', 'DataGuard'].map((logo) => (
              <span key={logo} className="text-xl md:text-2xl font-bold font-heading text-slate-400">{logo}</span>
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

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">{t.cta.headline}</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            {t.cta.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-10 text-lg rounded-full">
              {t.cta.primary}
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/20 hover:bg-white/10 hover:text-white text-white bg-transparent">
              {t.cta.secondary}
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-400">{t.cta.disclaimer}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={logoIcon} alt="SecurePortal Logo" className="h-6 w-6 object-contain" />
                <span className="text-lg font-bold font-heading">SecurePortal</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t.footer.desc}
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">{t.footer.product}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">{t.nav.features}</a></li>
                <li><a href="#" className="hover:text-primary">Security</a></li>
                <li><a href="#" className="hover:text-primary">{t.nav.pricing}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.legal}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary">Impressum</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} SecurePortal. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}