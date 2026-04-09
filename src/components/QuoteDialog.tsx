"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function QuoteDialog({
  open,
  onOpenChange,
  defaultService,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    if (open) {
      setForm((f) => ({
        ...f,
        service: defaultService || "",
        name: "",
        phone: "",
        email: "",
        message: "",
      }));
    }
  }, [open, defaultService]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      toast.error("Please fill in your name, phone, and select a service.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success("Quote request submitted! We'll contact you within 24 hours.");
        setForm({ name: "", phone: "", email: "", service: "", message: "" });
        onOpenChange(false);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-6 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-navy">
            Get Your Free Quote
          </DialogTitle>
          <DialogDescription className="text-brand-muted">
            Fill in the details and we&apos;ll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="q-name">Full Name *</Label>
            <Input
              id="q-name"
              placeholder="John Smith"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="q-phone">Phone Number *</Label>
            <Input
              id="q-phone"
              type="tel"
              placeholder="(714) 555-0123"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="q-email">Email</Label>
            <Input
              id="q-email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="q-service">Service Needed *</Label>
            <Select
              value={form.service}
              onValueChange={(val) => setForm({ ...form, service: val })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Air Duct Cleaning">Air Duct Cleaning</SelectItem>
                <SelectItem value="Dryer Vent Cleaning">Dryer Vent Cleaning</SelectItem>
                <SelectItem value="HVAC System Cleaning">HVAC System Cleaning</SelectItem>
                <SelectItem value="Mold Inspection & Removal">Mold Inspection &amp; Removal</SelectItem>
                <SelectItem value="Indoor Air Quality Testing">Indoor Air Quality Testing</SelectItem>
                <SelectItem value="General Inspection">General Inspection</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="q-msg">Additional Details</Label>
            <Textarea
              id="q-msg"
              placeholder="Tell us about your needs..."
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold py-3 text-base"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Request Free Quote"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
