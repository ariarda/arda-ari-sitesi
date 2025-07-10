// app/components/ClientScripts.tsx

"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS stillerini import ediyoruz

export default function ClientScripts() {
  useEffect(() => {
    // 1. Animasyon kütüphanesini başlat
    AOS.init({ 
      duration: 800, 
      once: true 
    });

    // 2. Mobil menü işlevselliği
    const mobileMenu = document.querySelector('.mobile-menu');
    const navUl = document.querySelector('nav ul');
    if (mobileMenu && navUl) {
      const mobileMenuIcon = mobileMenu.querySelector('i');
      const mobileMenuHandler = () => {
        navUl.classList.toggle('active');
        const isActive = navUl.classList.contains('active');
        mobileMenu.setAttribute('aria-expanded', String(isActive));
        if (mobileMenuIcon) {
          mobileMenuIcon.classList.toggle('fa-times', isActive);
          mobileMenuIcon.classList.toggle('fa-bars', !isActive);
        }
      };
      mobileMenu.addEventListener('click', mobileMenuHandler);

      // Linklere tıklandığında menüyü kapat
      document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
          if (navUl.classList.contains('active')) {
            mobileMenuHandler();
          }
        });
      });
    }

    // 3. Sayfa kaydırıldığında header'a gölge ekle
    const header = document.querySelector('header');
    if(header) {
      const scrollHandler = () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
      };
      window.addEventListener('scroll', scrollHandler);
      // Temizlik fonksiyonu
      return () => window.removeEventListener('scroll', scrollHandler);
    }
    
    // 4. Çerez uyarısı işlevselliği
    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner) {
        const acceptBtn = cookieBanner.querySelector('.accept-btn');
        const rejectBtn = cookieBanner.querySelector('.reject-btn');
        if (!localStorage.getItem('cookieConsent')) {
            setTimeout(() => { cookieBanner.style.display = 'block'; }, 2000);
        }
        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'accepted');
                cookieBanner.style.display = 'none';
            });
        }
        if (rejectBtn) {
            rejectBtn.addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'rejected');
                cookieBanner.style.display = 'none';
            });
        }
    }

  }, []);

  return null; // Bu bileşen ekrana hiçbir şey çizmez, sadece script çalıştırır.
}