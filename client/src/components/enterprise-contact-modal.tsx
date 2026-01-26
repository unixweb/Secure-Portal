import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface EnterpriseContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  buttonText?: string;
}

export function EnterpriseContactModal({ 
  open, 
  onOpenChange,
  title = "Enterprise Anfrage",
  description = "Interessiert an On-Premise oder einem individuellen Paket? Erzählen Sie uns kurz von Ihrem Anwendungsfall.",
  buttonText = "Anfrage senden"
}: EnterpriseContactModalProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate Brevo API call
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast({
        title: "Anfrage über Brevo gesendet!",
        description: "Wir haben Ihre Nachricht erhalten und melden uns in Kürze.",
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name / Firma</Label>
            <Input id="name" required placeholder="Muster GmbH" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">E-Mail</Label>
            <Input id="email" type="email" required placeholder="kontakt@firma.de" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Nachricht</Label>
            <Textarea 
              id="message" 
              required 
              placeholder="Ihre Nachricht an uns..." 
              className="min-h-[100px]"
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Wird gesendet..." : buttonText}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
