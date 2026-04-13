"use client";

import { useState } from "react";
import { X, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
}

const serviceOptions = [
  "Air Duct Cleaning",
  "HVAC System Cleaning",
  "Dryer Vent Cleaning",
  "Mold Remediation",
  "Air Quality Testing",
  "Commercial Cleaning",
  "Other",
];

export function QuoteDialog({
  open,
  onOpenChange,
  defaultService,
}: QuoteDialogProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "quote" }),
      });
      if (res.ok) {
        toast.success("Quote request sent! We'll contact you soon.");
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          message: "",
        });
        onOpenChange(false);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white p-0 overflow-hidden">
        <DialogHeader className="bg-brand-navy text-white px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-lg font-bold">
                Get Your Free Quote
              </DialogTitle>
              <DialogDescription className="text-white/70 text-sm mt-1">
                Fill in the form below and we&apos;ll get back to you within 1 hour.
              </DialogDescription>
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
              <Send className="w-5 h-5 text-brand-orange" />
            </div>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="quote-name">Full Name *</Label>
            <Input
              id="quote-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Smith"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quote-email">Email *</Label>
              <Input
                id="quote-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-phone">Phone</Label>
              <Input
                id="quote-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="(714) 555-0192"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quote-service">Service *</Label>
              <Select
                value={form.service}
                onValueChange={(val) =>
                  setForm({ ...form, service: val })
                }
              >
                <SelectTrigger id="quote-service">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-date">Preferred Date</Label>
              <Input
                id="quote-date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="quote-message">Message</Label>
            <Textarea
              id="quote-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your needs..."
              rows={3}
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold py-3 rounded-lg transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Submit Quote Request"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
