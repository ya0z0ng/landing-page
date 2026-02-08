import type { APIRoute } from "astro";
import { Resend } from "resend";
import { SITE } from "../../consts";

export const prerender = false;
export const POST: APIRoute = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const formData = await request.formData();
  const firstName = formData.get("firstName")?.toString() || "匿名";
  const email = formData.get("email")?.toString();
  const phoneNumber = formData.get("phoneNumber")?.toString();
  const message = formData.get("mensaje")?.toString();

  if (!email || !message) {
    return new Response("缺少必要字段", { status: 400 });
  }

  const resend = new Resend(import.meta.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: "Noreply <noreply@sjczc.com>",
    to: [SITE.email],
    template: {
      id: "sjczc",
      variables: {
        firstName,
        email,
        phoneNumber,
        message,
        date: new Date().toLocaleString(),
      },
    },
  });

  if (error) {
    return new Response("failed", { status: 500 });
  }

  return new Response("success", { status: 200 });
};
