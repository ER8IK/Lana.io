import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { fullname, message } = await request.json();

  if (!fullname || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  // создаём SMTP транспорт
  const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: 465,
    secure: true, // TLS
    auth: {
      user: "resend",
      pass: process.env.RESEND_API_KEY, // ключ Resend
    },
  });

  // отправляем письмо
  await transporter.sendMail({
    from: "no-reply@circuitlabs.io",
    to: "lana@circuitlabs.io",
    subject: `New message from ${fullname}`,
    text: `Name: ${fullname}\nMessage:\n${message}`,
  });

  return new Response(JSON.stringify({ ok: true }));
}
