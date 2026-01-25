import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Cloud, Shield, Server, Globe } from "lucide-react";
import { useState } from "react";

type Language = 'de' | 'en';

const translations = {
  de: {
    nav: {
      back: "Zurück zur Startseite",
      getStarted: "Jetzt Starten"
    },
    header: {
      title: "Einfache, transparente Preise",
      subtitle: "Wählen Sie das Modell, das zu Ihren Sicherheitsanforderungen passt. Von sofortigem Cloud-SaaS bis zur vollen On-Premise-Kontrolle."
    },
    plans: {
      starter: {
        name: "Cloud Starter",
        desc: "Perfekt für Freelancer & kleine Teams.",
        price: "29€",
        period: "/Monat",
        cta: "Kostenlos Testen",
        features: [
          "Sicheres Cloud Hosting",
          "10 GB Speicher",
          "Bis zu 5 Benutzer",
          "Standard Verschlüsselung",
          "Email Support"
        ]
      },
      business: {
        tag: "BELIEBT",
        name: "Cloud Business",
        desc: "Für wachsende Unternehmen mit Compliance-Anforderungen.",
        price: "99€",
        period: "/Monat",
        cta: "Jetzt Starten",
        features: [
          "Sicheres Cloud Hosting",
          "1 TB Speicher",
          "Unbegrenzte Benutzer",
          "Eigenes Branding",
          "Priorisierter Support",
          "Audit Logs"
        ]
      },
      enterprise: {
        name: "On-Premise",
        desc: "Volle Kontrolle für Enterprise-Compliance.",
        price: "Individuell",
        subPrice: "Ab 499€/Monat Wartung",
        cta: "Vertrieb Kontaktieren",
        features: [
          "Installation auf Ihrem Server",
          "Ihre Infrastruktur",
          "Volle Datenkontrolle",
          "Individuelles SLA",
          "White Labeling",
          "Dedizierter Ansprechpartner"
        ]
      }
    },
    comparison: {
      saas: {
        title: "Warum Cloud SaaS?",
        desc: "Der einfachste Weg zum Start. Wir kümmern uns um Infrastruktur, Sicherheitsupdates und Backups. Sie loggen sich einfach ein und arbeiten. Perfekt für Teams ohne eigene IT-Abteilung."
      },
      onprem: {
        title: "Warum On-Premise?",
        desc: "Notwendig für strikte Compliance (z.B. Banken, Gesundheitswesen). Sie hosten die Software auf Ihren eigenen Servern. Wir liefern Updates und Support, aber die Daten verlassen niemals Ihre Kontrolle."
      }
    }
  },
  en: {
    nav: {
      back: "Back to Home",
      getStarted: "Get Started"
    },
    header: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the deployment model that fits your security needs. From instant Cloud SaaS to full On-Premise control."
    },
    plans: {
      starter: {
        name: "Cloud Starter",
        desc: "Perfect for freelancers & small teams.",
        price: "€29",
        period: "/mo",
        cta: "Start Free Trial",
        features: [
          "Secure Cloud Hosting",
          "10 GB Storage",
          "Up to 5 Users",
          "Standard Encryption",
          "Email Support"
        ]
      },
      business: {
        tag: "MOST POPULAR",
        name: "Cloud Business",
        desc: "For growing companies requiring compliance.",
        price: "€99",
        period: "/mo",
        cta: "Get Started",
        features: [
          "Secure Cloud Hosting",
          "1 TB Storage",
          "Unlimited Users",
          "Custom Branding",
          "Priority Support",
          "Audit Logs"
        ]
      },
      enterprise: {
        name: "On-Premise",
        desc: "Full control for enterprise compliance.",
        price: "Custom",
        subPrice: "Starting from €499/mo maintenance",
        cta: "Contact Sales",
        features: [
          "Self-Hosted Installation",
          "Your Infrastructure",
          "Full Data Control",
          "Custom SLA",
          "White Labeling",
          "Dedicated Account Manager"
        ]
      }
    },
    comparison: {
      saas: {
        title: "Why choose Cloud SaaS?",
        desc: "The easiest way to get started. We manage the infrastructure, security updates, and backups. You just log in and work. Perfect for teams that want zero IT overhead."
      },
      onprem: {
        title: "Why choose On-Premise?",
        desc: "Required for strict compliance (e.g., banking, healthcare). You host the software on your own servers (or private cloud). We provide the software updates and support, but data never leaves your control."
      }
    }
  }
};

export default function PricingPage() {
  const [lang, setLang] = useState<Language>('de');
  const t = translations[lang];

  const toggleLang = () => {
    setLang(l => l === 'de' ? 'en' : 'de');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Simple Header */}
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground tracking-tight font-heading">SecurePortal</span>
            </a>
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={toggleLang} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mr-2">
              <Globe size={16} />
              {lang.toUpperCase()}
            </button>
            <Link href="/">
              <a className="text-sm font-medium text-muted-foreground hover:text-primary hidden sm:inline-block">{t.nav.back}</a>
            </Link>
            <Button size="sm">{t.nav.getStarted}</Button>
          </div>
        </div>
      </nav>

      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            {t.header.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t.header.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Cloud Basic (SaaS) */}
          <div className="bg-white rounded-2xl shadow-sm border border-border p-8 flex flex-col relative hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t.plans.starter.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{t.plans.starter.desc}</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-foreground">{t.plans.starter.price}</span>
              <span className="text-muted-foreground">{t.plans.starter.period}</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {t.plans.starter.features.map((f, i) => (
                <FeatureItem key={i} text={f} />
              ))}
            </ul>
            <Button variant="outline" className="w-full">{t.plans.starter.cta}</Button>
          </div>

          {/* Card 2: Cloud Pro (SaaS) - Highlighted */}
          <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-8 flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              {t.plans.business.tag}
            </div>
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{t.plans.business.name}</h3>
              <p className="text-sm text-slate-400 mt-2">{t.plans.business.desc}</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">{t.plans.business.price}</span>
              <span className="text-slate-400">{t.plans.business.period}</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-slate-300">
              {t.plans.business.features.map((f, i) => (
                <FeatureItem key={i} text={f} dark />
              ))}
            </ul>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">{t.plans.business.cta}</Button>
          </div>

          {/* Card 3: On-Premise (Self-Hosted) */}
          <div className="bg-white rounded-2xl shadow-sm border border-border p-8 flex flex-col relative hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t.plans.enterprise.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{t.plans.enterprise.desc}</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-foreground">{t.plans.enterprise.price}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{t.plans.enterprise.subPrice}</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {t.plans.enterprise.features.map((f, i) => (
                <FeatureItem key={i} text={f} />
              ))}
            </ul>
            <Button variant="outline" className="w-full">{t.plans.enterprise.cta}</Button>
          </div>
        </div>

        {/* Comparison / FAQ Section Teaser */}
        <div className="mt-20 border-t border-border pt-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
             <div>
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <Cloud className="h-5 w-5 text-blue-600" />
                 {t.comparison.saas.title}
               </h3>
               <p className="text-muted-foreground text-sm leading-relaxed">
                 {t.comparison.saas.desc}
               </p>
             </div>
             <div>
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <Server className="h-5 w-5 text-slate-700" />
                 {t.comparison.onprem.title}
               </h3>
               <p className="text-muted-foreground text-sm leading-relaxed">
                 {t.comparison.onprem.desc}
               </p>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function FeatureItem({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <div className={`rounded-full p-1 ${dark ? 'bg-blue-500/20 text-blue-400' : 'bg-green-50 text-green-600'}`}>
        <Check className="h-3 w-3" />
      </div>
      <span className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</span>
    </li>
  );
}
