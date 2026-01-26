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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLTextAreaElement).value,
      subject: `Anfrage via SafeDocs Portal: ${title}`
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Anfrage gesendet!",
          description: "Wir haben Ihre Nachricht erhalten und melden uns in Kürze.",
        });
        onOpenChange(false);
      } else {
        throw new Error(data.error || 'Fehler beim Senden');
      }
    } catch (error) {
      toast({
        title: "Fehler",
        description: error instanceof Error ? error.message : "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
