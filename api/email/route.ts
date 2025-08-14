import { Resend } from "resend";
import PurchaseReceiptEmail from "./PurchaseReceiptEmail";

export async function POST(request: Request) {
  const body = await request.json();
  const { message, from, name } = body;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: `${from}`,
      to: process.env.RECIPIENT_EMAIL!,
      subject: `New Contact ${name} - Daniel's Portfolio`,
      react: PurchaseReceiptEmail(message),
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}