import nodemailer from "nodemailer";

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "talknfixwireless@gmail.com";
const GMAIL_USER = process.env.GMAIL_USER ?? "";
const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD ?? "";

function getTransporter() {
  if (!GMAIL_USER || !GMAIL_PASS || GMAIL_PASS === "your_gmail_app_password_here") {
    return null; // Email not configured yet
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_PASS },
  });
}

export async function sendBookingEmail(data: {
  name: string;
  phone: string;
  email?: string;
  device: string;
  service: string;
  location: string;
  issue?: string;
}) {
  const transporter = getTransporter();
  if (!transporter) return; // silently skip if not configured

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #bc0100; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">New Booking — Talk N Fix Wireless</h1>
      </div>
      <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 140px;">Customer Name</td><td style="padding: 8px 0; font-weight: bold;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0; font-weight: bold;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
          ${data.email ? `<tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;">${data.email}</td></tr>` : ""}
          <tr><td style="padding: 8px 0; color: #666;">Device</td><td style="padding: 8px 0;">${data.device}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Service</td><td style="padding: 8px 0;">${data.service}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Location</td><td style="padding: 8px 0;">${data.location}</td></tr>
          ${data.issue ? `<tr><td style="padding: 8px 0; color: #666;">Issue</td><td style="padding: 8px 0;">${data.issue}</td></tr>` : ""}
        </table>
        <div style="margin-top: 20px; padding: 12px; background: #fff3f3; border-left: 4px solid #bc0100; border-radius: 4px;">
          <p style="margin: 0; color: #bc0100; font-weight: bold;">Action Required: Customer is expecting to walk in. Prepare for their visit.</p>
        </div>
      </div>
      <p style="color: #999; font-size: 12px; text-align: center; margin-top: 16px;">Talk N Fix Wireless · Newark & Passaic NJ · talknfixwireless.com</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Talk N Fix Wireless" <${GMAIL_USER}>`,
    to: NOTIFY_EMAIL,
    subject: `New Booking: ${data.name} — ${data.service} (${data.device})`,
    html,
  });
}

export async function sendContactEmail(data: {
  name: string;
  phone: string;
  email?: string;
  device?: string;
  location?: string;
  message: string;
}) {
  const transporter = getTransporter();
  if (!transporter) return;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #bc0100; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Message — Talk N Fix Wireless</h1>
      </div>
      <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0; font-weight: bold;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
          ${data.email ? `<tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;">${data.email}</td></tr>` : ""}
          ${data.device ? `<tr><td style="padding: 8px 0; color: #666;">Issue Type</td><td style="padding: 8px 0;">${data.device}</td></tr>` : ""}
          ${data.location ? `<tr><td style="padding: 8px 0; color: #666;">Preferred Location</td><td style="padding: 8px 0;">${data.location}</td></tr>` : ""}
        </table>
        <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e5e5;">
          <p style="margin: 0; color: #333; font-weight: bold; margin-bottom: 8px;">Message:</p>
          <p style="margin: 0; color: #555; line-height: 1.6;">${data.message}</p>
        </div>
      </div>
      <p style="color: #999; font-size: 12px; text-align: center; margin-top: 16px;">Talk N Fix Wireless · Newark & Passaic NJ · talknfixwireless.com</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Talk N Fix Wireless" <${GMAIL_USER}>`,
    to: NOTIFY_EMAIL,
    subject: `New Contact: ${data.name} — ${data.device || "General Inquiry"}`,
    html,
  });
}
