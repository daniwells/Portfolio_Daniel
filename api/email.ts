import { Resend } from "resend";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, message, email } = body;

  const resend = new Resend(process.env.VITE_RESEND_API_KEY!);

  try {
    const data = await resend.emails.send({
      from: process.env.VITE_SENDER_EMAIL!,
      to: process.env.VITE_RECIPIENT_EMAIL!,
      subject: `New Contact (${name} - ${email})`,
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