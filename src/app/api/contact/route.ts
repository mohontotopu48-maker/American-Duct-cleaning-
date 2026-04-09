import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Name, phone, and service are required." },
        { status: 400 }
      );
    }

    const contact = await db.quoteRequest.create({
      data: {
        name: name.trim(),
        phone: phone.trim(),
        email: email?.trim() || null,
        service: service.trim(),
        message: message?.trim() || null,
        status: "contact",
      },
    });

    return NextResponse.json(
      { success: true, id: contact.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
