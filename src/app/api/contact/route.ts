import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, type } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // On Vercel (serverless), save to database if available
    // Otherwise return success for the demo
    try {
      const { db } = await import("@/lib/db");
      await db.contactSubmission.create({
        data: {
          name,
          email,
          phone: phone || null,
          service: service || null,
          message: message || null,
          type: type || "contact",
        },
      });
    } catch {
      // Database not available on Vercel - submission logged for demo
      console.log("Contact submission received:", { name, email, phone, service, message, type });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We will get back to you shortly.",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
