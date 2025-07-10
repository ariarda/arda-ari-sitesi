// web/app/api/contact/route.ts

import { createClient } from 'next-sanity';
import { NextResponse } from 'next/server';

// Sanity'e veri yazmak için özel, güvenli bir client oluşturuyoruz.
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: false,
  // DİKKAT: Bu token, sadece veri yazma iznine sahip olmalı ve güvenli tutulmalıdır.
  token: process.env.SANITY_API_WRITE_TOKEN,
});

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    // Sanity'e gönderilecek belgeyi hazırlıyoruz.
    const doc = {
      _type: 'contactMessage', // 1. Adımda oluşturduğumuz şemanın adı
      name,
      phone,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    // Belgeyi Sanity'e oluşturması için gönderiyoruz.
    await client.create(doc);

    return NextResponse.json({ success: true, message: 'Mesajınız başarıyla gönderildi!' });
  } catch (error) {
    console.error('Mesaj gönderme hatası:', error);
    return NextResponse.json({ success: false, message: 'Bir hata oluştu, lütfen tekrar deneyin.' }, { status: 500 });
  }
}