// web/app/components/ContactForm.tsx

"use client"; // Bu bir client component çünkü kullanıcı etkileşimi var.

import { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [status, setStatus] = useState(''); // Form durumunu tutmak için (gönderiliyor, başarılı, hatalı)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending'); // Durumu 'gönderiliyor' yap

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success'); // Başarılıysa durumu güncelle
        (event.target as HTMLFormElement).reset(); // Formu sıfırla
      } else {
        setStatus('error'); // Hatalıysa durumu güncelle
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <div className="contact-form-container">
      <h3>Bize Ulaşın</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Adınız Soyadınız</label>
          <input type="text" id="name" name="name" required placeholder="Örn: Ahmet Yılmaz" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefon</label>
          <input type="tel" id="phone" name="phone" required placeholder="Örn: 555 123 4567" />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-posta</label>
          <input type="email" id="email" name="email" required placeholder="Örn: ornek@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mesajınız</label>
          <textarea id="message" name="message" required placeholder="Konu hakkında kısaca bilgi veriniz..."></textarea>
        </div>
        <div className="kvkk-group">
          <input type="checkbox" id="kvkk" name="kvkk" required />
          <label htmlFor="kvkk">
            <Link href="/kvkk" target="_blank">Kişisel Verilerin Korunması Kanunu</Link> kapsamında aydınlatma metnini okudum ve onaylıyorum.
          </label>
        </div>
        
        <button type="submit" className="btn" style={{width: '100%'}} disabled={status === 'sending'}>
          {status === 'sending' ? 'Gönderiliyor...' : 'Mesajı Gönder'}
        </button>

        {/* Kullanıcıya Geri Bildirim Alanı */}
        {status === 'success' && <p style={{color: 'green', textAlign: 'center', marginTop: '15px'}}>Mesajınız başarıyla gönderildi. Teşekkürler!</p>}
        {status === 'error' && <p style={{color: 'red', textAlign: 'center', marginTop: '15px'}}>Bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>}
      </form>
    </div>
  );
}