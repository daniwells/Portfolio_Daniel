// import { Resend } from "resend";
// import PurchaseReceiptEmail from "../email/PurchaseReceiptEmail.tsx";

// export default async function handler(req: any, res: any) {
//     if (req.method !== "POST") return res.status(405).end();
//     console.log("Recebido request:", req.body);

//     const { message, from, name } = req.body;
//     console.log(message)
//     console.log(from)
//     console.log(name)
//     const resend = new Resend(process.env.RESEND_API_KEY);
//     console.log(resend)

//     try {
//         console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPP")
//         const data = await resend.emails.send({
//             from: `${from}`,
//             to: process.env.RECIPIENT_EMAIL!,
//             subject: `New Contact ${name} - Daniel's Portfolio`,
//             react: PurchaseReceiptEmail({ message }),
//         });
//         console.log(data)
//         res.status(200).json({ success: true, data });
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ error });
//     }
// }

// const { Resend } = require("resend");
// const PurchaseReceiptEmail = require("../src/email/PurchaseReceiptEmail");

// module.exports = async function handler(req, res) {
//   if (req.method !== "POST") return res.status(405).end();

//   const { message, from, name } = req.body;
//   const resend = new Resend(process.env.RESEND_API_KEY);

//   try {
//     const data = await resend.emails.send({
//       from,
//       to: process.env.RECIPIENT_EMAIL,
//       subject: `New Contact ${name}`,
//       // react: PurchaseReceiptEmail({ message }),
//       react: "test",
//     });
//     res.status(200).json({ success: true, data });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };

import { Resend } from "resend";
// import PurchaseReceiptEmail from "../email/PurchaseReceiptEmail"


export async function POST(request: Request) {
  const body = await request.json();
  const { name, message, from } = body;

  const resend = new Resend(process.env.VITE_RESEND_API_KEY!);

  try {
    const data = await resend.emails.send({
      from,
      to: process.env.VITE_RECIPIENT_EMAIL!,
      subject: `New Contact ${name}`,
      react: "test",
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