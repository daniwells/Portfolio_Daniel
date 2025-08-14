import { Resend } from "resend";
// import PurchaseReceiptEmail from "../email/PurchaseReceiptEmail"

export async function POST(request: Request) {
  const body = await request.json();
  const { name, message, from } = body;

  const resend = new Resend(process.env.RESEND_API_KEY!);

  try {
    const data = await resend.emails.send({
      from,
      to: process.env.RECIPIENT_EMAIL!,
      subject: `New Contact ${name}`,
      react: message,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}