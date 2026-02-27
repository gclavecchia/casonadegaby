import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nombre, email, telefono, mensaje } = req.body;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'gclavecchia@gmail.com',
    subject: 'Nueva consulta - La Casona de Gaby',
    html: `
      <h2>Nueva consulta desde la web</h2>
      <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Teléfono:</b> ${telefono}</p>
      <p><b>Mensaje:</b> ${mensaje}</p>
    `,
  });

  return res.status(200).json({ success: true });
}
```

Después en Vercel → **Settings → Environment Variables** agregás:
```
RESEND_API_KEY = re_8tvViMfy_9hUV1ogE9oTPjX2LvZgr4Ghn