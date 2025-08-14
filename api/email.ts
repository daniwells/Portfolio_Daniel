import { Resend } from "resend";
import PurchaseReceiptEmail from "../src/email/PurchaseReceiptEmail";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") return res.status(405).end();

  const { message, from, name } = req.body;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: `${from}`,
      to: process.env.RECIPIENT_EMAIL!,
      subject: `New Contact ${name} - Daniel's Portfolio`,
      react: PurchaseReceiptEmail({ message }),
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error });
  }
}