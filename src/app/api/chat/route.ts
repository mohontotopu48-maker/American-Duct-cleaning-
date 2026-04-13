import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a helpful customer service representative for American Air Duct Cleaning, a professional air duct cleaning company based in Orange County, California.

Company Information:
- Phone: (949) 400-8690
- Email: americanductsOC@gmail.com
- Hours: Monday - Friday, 9:00 AM - 6:00 PM
- Location: Serving Orange County and all of Southern California
- Yelp Rating: 4.4 stars (32 reviews)
- Owner: Dan Marino

Services offered:
1. Air Duct Cleaning - Reduce allergies & asthma, remove dust, debris, pet hair, pollen, mold spores
2. Dryer Vent Cleaning - Fix inefficient dryers, prevent fire hazards
3. Air Duct Replacement - HVAC ductwork replacement
4. HVAC System Sanitizing - Complete HVAC sanitization with EPA registered products
5. Air Handling Unit Cleaning
6. Furnace Heater Cleaning
7. Air Filter Installation - Permanent Electro-Static air filters
8. A/C Condenser Coil Cleaning
9. Evaporator Coil Cleaning
10. Air Conditioning Duct Repair
11. Air Duct Sealing
12. Bathroom Exhaust Fan Cleaning
13. Ceiling Fan Cleaning
14. Laundry Exhaust Fan Cleaning
15. Dryer Vent Repair
16. Dryer Vent Replacement

Certifications: Licensed & Fully Insured, NADCA Certified, EPA Registered Products, HEPA Filtration, True Negative Air Pressure, Energy Rated Company, 100% Satisfaction Guarantee.

Important guidelines:
- Be friendly, helpful, and concise
- If asked about pricing, say prices vary based on home size and number of vents, and offer to schedule a free estimate
- For urgent matters, direct them to call (949) 400-8690
- Keep responses short and to the point (2-3 sentences max)
- Use a warm, professional tone`;

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    let response: string;

    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const ZAI = require("z-ai-web-dev-sdk").default;
      const zai = await ZAI.create();

      const messages: Array<{ role: string; content: string }> = [
        { role: "assistant", content: SYSTEM_PROMPT },
      ];

      if (Array.isArray(history)) {
        history.forEach((h: { role: string; content: string }) => {
          if (h.role === "user" || h.role === "assistant") {
            messages.push({ role: h.role, content: h.content });
          }
        });
      }

      messages.push({ role: "user", content: message });

      const completion = await zai.chat.completions.create({
        messages,
        stream: false,
        thinking: { type: "disabled" },
      });

      response = completion.choices?.[0]?.message?.content || "I'm sorry, I couldn't process your request. Please call us at (949) 400-8690 for assistance.";
    } catch (aiError) {
      console.error("AI SDK error:", aiError);
      response = "I'm having trouble connecting right now. Please call us at (949) 400-8690 for immediate assistance.";
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { response: "I'm having trouble connecting right now. Please call us at (949) 400-8690 for immediate assistance." },
      { status: 200 }
    );
  }
}
