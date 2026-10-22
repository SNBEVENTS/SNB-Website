import nodemailer from "nodemailer";

const TO = process.env.CONTACT_TO ?? "info@strawsnberries.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const { SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    // Fail loudly rather than telling the visitor it worked.
    console.error("Contact form: SMTP_USER or SMTP_PASS is not set.");
    return Response.json({ error: "Email is not configured." }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const company = String(body.company ?? "").trim();
  const email = String(body.email ?? "").trim();
  const eventType = String(body.eventType ?? "").trim();
  const eventDate = String(body.eventDate ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !company || !email || !eventType || !message) {
    return Response.json({ error: "Please fill in every required field." }, { status: 400 });
  }

  // Keep a lid on what a single submission can carry.
  if (message.length > 5000 || name.length > 200 || company.length > 200) {
    return Response.json({ error: "That message is too long." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["Company", company],
    ["Email", email],
    ["Event type", eventType],
    ["Event date", eventDate || "Not given"],
  ];

  try {
    await transporter.sendMail({
      from: `"SNB website enquiry" <${SMTP_USER}>`,
      to: TO,
      replyTo: `"${name}" <${email}>`,
      subject: `Website enquiry — ${name}, ${company}`,
      text: [...rows.map(([k, v]) => `${k}: ${v}`), "", "Message:", message].join("\n"),
      html: `
        <table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:4px 16px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(
                  v
                )}</strong></td></tr>`
            )
            .join("")}
        </table>
        <p style="font-family:system-ui,sans-serif;font-size:14px;margin-top:20px;white-space:pre-wrap">${escapeHtml(
          message
        )}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form: send failed.", error);
    return Response.json({ error: "Could not send the enquiry." }, { status: 502 });
  }
}
