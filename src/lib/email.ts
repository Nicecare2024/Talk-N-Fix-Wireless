import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.NOTIFY_EMAIL ?? "talknfixwireless@gmail.com";
// Resend free tier requires sending FROM a verified domain or onboarding@resend.dev
const FROM = "Talk N Fix Wireless <onboarding@resend.dev>";

export async function sendBookingEmail(data: {
  name: string;
  phone: string;
  email?: string;
  device: string;
  service: string;
  location: string;
  issue?: string;
}) {
  if (!process.env.RESEND_API_KEY) return;

  await resend.emails.send({
    from: FROM,
    to: TO,
    subject: `New Booking: ${data.name} — ${data.service} (${data.device})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px;">
        <div style="background: #bc0100; padding: 20px 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 800;">New Booking — Talk N Fix Wireless</h1>
        </div>
        <div style="background: white; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e5e5;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; color: #888; font-size: 13px; width: 130px;">Customer</td>
              <td style="padding: 10px 0; font-weight: 700; font-size: 15px;">${data.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; color: #888; font-size: 13px;">Phone</td>
              <td style="padding: 10px 0; font-weight: 700;"><a href="tel:${data.phone}" style="color: #bc0100;">${data.phone}</a></td>
            </tr>
            ${data.email ? `<tr style="border-bottom: 1px solid #f0f0f0;"><td style="padding: 10px 0; color: #888; font-size: 13px;">Email</td><td style="padding: 10px 0;">${data.email}</td></tr>` : ""}
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; color: #888; font-size: 13px;">Device</td>
              <td style="padding: 10px 0;">${data.device}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; color: #888; font-size: 13px;">Service</td>
              <td style="padding: 10px 0; font-weight: 600;">${data.service}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; color: #888; font-size: 13px;">Location</td>
              <td style="padding: 10px 0;">${data.location}</td>
            </tr>
            ${data.issue ? `<tr><td style="padding: 10px 0; color: #888; font-size: 13px;">Issue</td><td style="padding: 10px 0;">${data.issue}</td></tr>` : ""}
          </table>
          <div style="margin-top: 20px; padding: 14px 16px; background: #fff3f3; border-left: 4px solid #bc0100; border-radius: 6px;">
            <p style="margin: 0; color: #bc0100; font-weight: 700; font-size: 14px;">Action Required: Customer is expecting to walk in. Prepare for their visit.</p>
          </div>
        </div>
        <p style="color: #aaa; font-size: 11px; text-align: center; margin-top: 16px;">Talk N Fix Wireless &middot; Newark & Passaic NJ &middot; talknfixwireless.com</p>
      </div>
    `,
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
  if (!process.env.RESEND_API_KEY) return;

  await resend.emails.send({
    from: FROM,
    to: TO,
    subject: `New Contact: ${data.name} — ${data.device || "General Inquiry"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px;">
        <div style="background: #bc0100; padding: 20px 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 800;">New Contact Message — Talk N Fix Wireless</h1>
        </div>
        <div style="background: white; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e5e5;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; color: #888; font-size: 13px; width: 130px;">Name</td>
              <td style="padding: 10px 0; font-weight: 700; font-size: 15px;">${data.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; color: #888; font-size: 13px;">Phone</td>
              <td style="padding: 10px 0; font-weight: 700;"><a href="tel:${data.phone}" style="color: #bc0100;">${data.phone}</a></td>
            </tr>
            ${data.email ? `<tr style="border-bottom: 1px solid #f0f0f0;"><td style="padding: 10px 0; color: #888; font-size: 13px;">Email</td><td style="padding: 10px 0;">${data.email}</td></tr>` : ""}
            ${data.device ? `<tr style="border-bottom: 1px solid #f0f0f0;"><td style="padding: 10px 0; color: #888; font-size: 13px;">Issue Type</td><td style="padding: 10px 0;">${data.device}</td></tr>` : ""}
            ${data.location ? `<tr style="border-bottom: 1px solid #f0f0f0;"><td style="padding: 10px 0; color: #888; font-size: 13px;">Location</td><td style="padding: 10px 0;">${data.location}</td></tr>` : ""}
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 8px; border: 1px solid #eee;">
            <p style="margin: 0 0 8px; color: #333; font-weight: 700; font-size: 13px;">Message:</p>
            <p style="margin: 0; color: #555; line-height: 1.6; font-size: 14px;">${data.message}</p>
          </div>
        </div>
        <p style="color: #aaa; font-size: 11px; text-align: center; margin-top: 16px;">Talk N Fix Wireless &middot; Newark & Passaic NJ &middot; talknfixwireless.com</p>
      </div>
    `,
  });
}
