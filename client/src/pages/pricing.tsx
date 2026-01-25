import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, X, Server, Cloud, Shield, ArrowRight, HelpCircle } from "lucide-react";

export default function PricingPage() {
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
            <Link href="/">
              <a className="text-sm font-medium text-muted-foreground hover:text-primary">Back to Home</a>
            </Link>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the deployment model that fits your security needs. 
            From instant Cloud SaaS to full On-Premise control.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Cloud Basic (SaaS) */}
          <div className="bg-white rounded-2xl shadow-sm border border-border p-8 flex flex-col relative hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Cloud Starter</h3>
              <p className="text-sm text-muted-foreground mt-2">Perfect for freelancers & small teams.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-foreground">€29</span>
              <span className="text-muted-foreground">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <FeatureItem text="Secure Cloud Hosting" />
              <FeatureItem text="10 GB Storage" />
              <FeatureItem text="Up to 5 Users" />
              <FeatureItem text="Standard Encryption" />
              <FeatureItem text="Email Support" />
            </ul>
            <Button variant="outline" className="w-full">Start Free Trial</Button>
          </div>

          {/* Card 2: Cloud Pro (SaaS) - Highlighted */}
          <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-8 flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              MOST POPULAR
            </div>
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Cloud Business</h3>
              <p className="text-sm text-slate-400 mt-2">For growing companies requiring compliance.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">€99</span>
              <span className="text-slate-400">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-slate-300">
              <FeatureItem text="Secure Cloud Hosting" dark />
              <FeatureItem text="1 TB Storage" dark />
              <FeatureItem text="Unlimited Users" dark />
              <FeatureItem text="Custom Branding" dark />
              <FeatureItem text="Priority Support" dark />
              <FeatureItem text="Audit Logs" dark />
            </ul>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">Get Started</Button>
          </div>

          {/* Card 3: On-Premise (Self-Hosted) */}
          <div className="bg-white rounded-2xl shadow-sm border border-border p-8 flex flex-col relative hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">On-Premise</h3>
              <p className="text-sm text-muted-foreground mt-2">Full control for enterprise compliance.</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-foreground">Custom</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Starting from €499/mo maintenance</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <FeatureItem text="Self-Hosted Installation" />
              <FeatureItem text="Your Infrastructure" />
              <FeatureItem text="Full Data Control" />
              <FeatureItem text="Custom SLA" />
              <FeatureItem text="White Labeling" />
              <FeatureItem text="Dedicated Account Manager" />
            </ul>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </div>
        </div>

        {/* Comparison / FAQ Section Teaser */}
        <div className="mt-20 border-t border-border pt-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
             <div>
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <Cloud className="h-5 w-5 text-blue-600" />
                 Why choose Cloud SaaS?
               </h3>
               <p className="text-muted-foreground text-sm leading-relaxed">
                 The easiest way to get started. We manage the infrastructure, security updates, and backups. You just log in and work. Perfect for teams that want zero IT overhead.
               </p>
             </div>
             <div>
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <Server className="h-5 w-5 text-slate-700" />
                 Why choose On-Premise?
               </h3>
               <p className="text-muted-foreground text-sm leading-relaxed">
                 Required for strict compliance (e.g., banking, healthcare). You host the software on your own servers (or private cloud). We provide the software updates and support, but data never leaves your control.
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
