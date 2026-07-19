'use client';

import { useState } from 'react';

const reasonsFr = [
  { value: '', label: 'Sélectionnez un motif', disabled: true },
  { value: 'consultation', label: 'Consultation / Bilan dentaire' },
  { value: 'detartrage', label: 'Détartrage (nettoyage)' },
  { value: 'carie', label: 'Carie / Plombage (obturation)' },
  { value: 'extraction', label: 'Extraction dentaire' },
  { value: 'devitalisation', label: 'Dévitalisation (traitement de canal)' },
  { value: 'implant', label: 'Implant dentaire' },
  { value: 'prothese', label: 'Prothèse (couronne, bridge, dentier)' },
  { value: 'blanchiment', label: 'Blanchiment dentaire' },
  { value: 'orthodontie', label: 'Orthodontie (appareil dentaire)' },
  { value: 'gencives', label: 'Soin des gencives' },
  { value: 'urgence', label: 'Urgence dentaire (douleur, traumatisme)' },
  { value: 'autre', label: 'Autre' },
];

const reasonsAr = [
  { value: '', label: 'اختر السبب', disabled: true },
  { value: 'consultation', label: 'استشارة / فحص أسنان' },
  { value: 'detartrage', label: 'تنظيف الأسنان (إزالة الجير)' },
  { value: 'carie', label: 'تسوس / حشو (ترميم)' },
  { value: 'extraction', label: 'خلع الأسنان' },
  { value: 'devitalisation', label: 'علاج العصب (قناة الجذر)' },
  { value: 'implant', label: 'زراعة الأسنان' },
  { value: 'prothese', label: 'تركيبات (تاج، جسر، طقم أسنان)' },
  { value: 'blanchiment', label: 'تبييض الأسنان' },
  { value: 'orthodontie', label: 'تقويم الأسنان' },
  { value: 'gencives', label: 'علاج اللثة' },
  { value: 'urgence', label: 'حالة طوارئ (ألم، إصابة)' },
  { value: 'autre', label: 'أخرى' },
];

const labelsFr = {
  title: 'Envoyez-nous un message',
  name: 'Nom complet',
  namePlaceholder: 'Ex: Mohammed Belouizdad',
  phone: 'Numéro de téléphone',
  phonePlaceholder: 'Ex: 07 76 66 67 66',
  email: 'Adresse Email',
  emailPlaceholder: 'Ex: Mohammed-Belouizdad@email.com',
  reason: 'Objectif du rendez-vous',
  message: 'Votre message ou motif de consultation',
  messagePlaceholder: 'Ex: Bonjour, je souhaite prendre rendez-vous pour un détartrage...',
  submit: 'Envoyer la demande',
  sending: 'Envoi en cours...',
  success: 'Merci pour votre message ! Notre équipe vous contactera dans les plus brefs délais.',
  error: 'Une erreur est survenue. Veuillez réessayer.',
};

const labelsAr = {
  title: 'أرسل لنا رسالة',
  name: 'الاسم الكامل',
  namePlaceholder: 'مثال: محمد بلويزداد',
  phone: 'رقم الهاتف',
  phonePlaceholder: 'مثال: 07 76 66 67 66',
  email: 'البريد الإلكتروني',
  emailPlaceholder: 'مثال: Mohammed-Belouizdad@email.com',
  reason: 'هدف الموعد',
  message: 'رسالتك أو سبب الاستشارة',
  messagePlaceholder: 'مثال: مرحبًا، أود حجز موعد لتنظيف الأسنان...',
  submit: 'إرسال الطلب',
  sending: 'جاري الإرسال...',
  success: 'شكرًا لرسالتكم! سيتواصل معكم فريقنا في أقرب وقت ممكن.',
  error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
};

export default function ContactForm({ lang = 'fr' }) {
  const isAr = lang === 'ar';
  const labels = isAr ? labelsAr : labelsFr;
  const reasons = isAr ? reasonsAr : reasonsFr;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', reason: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      backgroundColor: 'var(--bg-color)',
      padding: '2.5rem',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
    }}>
      <h3 style={{ marginBottom: '1.5rem' }}>{labels.title}</h3>

      {status === 'success' && (
        <div className="form-success">{labels.success}</div>
      )}
      {status === 'error' && (
        <div className="form-error">{labels.error}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{labels.name}</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder={labels.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">{labels.phone}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder={labels.phonePlaceholder}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{labels.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder={labels.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reason">{labels.reason}</label>
          <select
            id="reason"
            name="reason"
            required
            value={formData.reason}
            onChange={handleChange}
          >
            {reasons.map((r) => (
              <option key={r.value} value={r.value} disabled={r.disabled}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">{labels.message}</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder={labels.messagePlaceholder}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn"
          style={{ width: '100%', fontSize: '1.1rem', padding: '14px' }}
          disabled={loading}
        >
          {loading ? labels.sending : labels.submit}
        </button>
      </form>
    </div>
  );
}
