import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { nombre, email, telefono, startup, monto, mensaje } = await req.json()

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'smanzofigueroa@gmail.com',
    subject: `Nuevo interesado en invertir: ${nombre}`,
    html: `
      <h2>Nuevo contacto de DeepRound</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Startup:</strong> ${startup}</p>
      <p><strong>Monto:</strong> ${monto}</p>
      <p><strong>Mensaje:</strong> ${mensaje}</p>
    `
  })

  return NextResponse.json({ ok: true })
}