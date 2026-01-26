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
    
    // Construct email content
    const subject = encodeURIComponent(`Anfrage via SafeDocs Portal: ${title}`);
    const body = encodeURIComponent(
      `Name / Firma: ${(document.getElementById('name') as HTMLInputElement).value}\n` +
      `E-Mail: ${(document.getElementById('email') as HTMLInputElement).value}\n\n` +
      `Nachricht:\n${(document.getElementById('message') as HTMLTextAreaElement).value}`
    );

    // Open default email client
    window.location.href = `mailto:info@safedocsportal.com?subject=${subject}&body=${body}`;

    setLoading(false);
    onOpenChange(false);
    toast({
      title: "E-Mail-Programm geöffnet",
      description: "Bitte senden Sie die vorbereitete E-Mail ab, um uns zu kontaktieren.",
    });
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
