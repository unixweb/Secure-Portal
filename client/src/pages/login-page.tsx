import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowLeft,
  Lock,
  Mail,
  Loader2
} from "lucide-react";

import logoIcon from "@assets/generated_images/minimalist_secure_shield_icon..png";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      setLocation("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background font-sans flex overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-[0.4]" />
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Zurück zur Startseite
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <img src={logoIcon} alt="SecurePortal Logo" className="h-10 w-10 object-contain" />
            <span className="text-2xl font-bold text-foreground tracking-tight font-heading">SecurePortal</span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Willkommen zurück</h1>
            <p className="text-muted-foreground">
              Melden Sie sich an, um auf Ihre sicheren Dokumente zuzugreifen.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail Adresse</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@firma.de" 
                  className="pl-9 h-11 bg-white/50 backdrop-blur-sm border-border focus:border-primary/50 focus:ring-primary/20 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Passwort</Label>
                <a href="#" className="text-sm font-medium text-primary hover:underline">
                  Passwort vergessen?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="pl-9 h-11 bg-white/50 backdrop-blur-sm border-border focus:border-primary/50 focus:ring-primary/20 transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Angemeldet bleiben
              </Label>
            </div>

            <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 text-base" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Wird angemeldet...
                </>
              ) : (
                "Anmelden"
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2 mb-2">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              <span className="font-medium text-foreground">Sichere 256-bit Verschlüsselung</span>
            </div>
            <p>Ihre Verbindung ist sicher und geschützt.</p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-slate-900 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay" />
        
        <div className="relative z-20 max-w-lg px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="mb-8 inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl">
              <ShieldCheck className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Enterprise Security Standard</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Verlassen Sie sich auf unsere zertifizierte Sicherheitsarchitektur. Wir schützen Ihre sensibelsten Daten mit modernster Technologie.
            </p>
            
            <div className="mt-12 grid grid-cols-2 gap-4 text-left">
              {[
                "End-to-End Verschlüsselung",
                "2-Faktor Authentifizierung",
                "ISO 27001 Zertifiziert",
                "DSGVO Konform"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}