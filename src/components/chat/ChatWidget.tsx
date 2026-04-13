"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageCircle,
  X,
  Send,
  Loader2,
  Bot,
  User,
} from "lucide-react";
import type { PageHash } from "@/lib/useHashRouter";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatWidgetProps {
  navigate: (page: PageHash) => void;
}

const MAX_MESSAGES = 20;

const quickActions = [
  { label: "Get a Quote", message: "I'd like to get a free estimate for air duct cleaning." },
  { label: "Our Services", message: "What services do you offer?" },
  { label: "Pricing", message: "How much does air duct cleaning cost?" },
  { label: "Schedule", message: "How do I schedule a cleaning appointment?" },
];

export function ChatWidget({ navigate }: ChatWidgetProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! 👋 Welcome to American Air Duct Cleaning. How can I help you today? Feel free to ask about our services, pricing, or scheduling.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleQuickAction = (message: string) => {
    if (message.toLowerCase().includes("quote") || message.toLowerCase().includes("estimate")) {
      setOpen(false);
      navigate("contact");
      return;
    }
    if (message.toLowerCase().includes("services")) {
      setOpen(false);
      navigate("services");
      return;
    }
    handleSend(message);
  };

  const handleSend = async (customMessage?: string) => {
    const text = customMessage || input.trim();
    if (!text || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage].slice(-MAX_MESSAGES);

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const history = updatedMessages
        .slice(0, -1)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });

      const data = await res.json();

      if (data.response) {
        const assistantMessage: Message = {
          role: "assistant",
          content: data.response,
        };
        setMessages((prev) =>
          [...prev, assistantMessage].slice(-MAX_MESSAGES)
        );
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please call us at (949) 400-8690 or try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white shadow-lg shadow-brand-orange/30 flex items-center justify-center transition-colors"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md p-0 h-[520px] flex flex-col gap-0 overflow-hidden rounded-xl">
          <DialogTitle className="sr-only">Chat with American Air Duct Cleaning</DialogTitle>
          {/* Chat Header */}
          <div className="bg-brand-navy px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-orange flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  American Air Duct Cleaning
                </p>
                <p className="text-gray-400 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Online — We typically reply instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === "user"
                        ? "bg-brand-navy"
                        : "bg-brand-orange"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Bot className="w-3.5 h-3.5 text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-brand-navy text-white rounded-br-md"
                        : "bg-gray-100 text-brand-dark rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex items-center gap-1">
                      <Loader2 className="w-4 h-4 text-brand-muted animate-spin" />
                      <span className="text-brand-muted text-sm">
                        Typing...
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Quick Actions */}
          {messages.length <= 2 && !loading && (
            <div className="px-4 pb-2 flex-shrink-0">
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => handleQuickAction(action.message)}
                    className="px-3 py-1.5 text-xs font-medium bg-brand-orange/10 text-brand-orange rounded-full hover:bg-brand-orange/20 transition-colors"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t flex-shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                disabled={loading}
                className="flex-1 h-10 text-sm"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || loading}
                className="h-10 w-10 bg-brand-orange hover:bg-brand-orange-hover text-white flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
            <p className="text-center text-[10px] text-brand-muted mt-1.5">
              Call us at{" "}
              <a href="tel:9494008690" className="text-brand-orange hover:underline">
                (949) 400-8690
              </a>{" "}
              for immediate assistance
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
