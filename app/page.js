import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Slider from '@/components/Slider';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

export default function HomePage() {
  return (
    <>
      <Header lang="fr" />

      <HeroSection lang="fr" />

      {/* Slider Section */}
      <Slider lang="fr" />

      {/* Services Section */}
      <section className="container py-4">
        <div className="text-center">
          <h2>Notre Expertise Professionnelle</h2>
          <p style={{ color: 'var(--text-light)' }}>
            Une gamme complète de soins dentaires pour toute la famille.
          </p>
        </div>
        <div className="services-grid">
          <ServiceCard
            icon="✨"
            title="Esthétique Dentaire"
            description="Blanchiment, facettes et alignement pour retrouver un sourire éclatant et naturel."
          />
          <ServiceCard
            icon="🛡️"
            title="Soins Préventifs"
            description="Détartrage, bilan complet et conseils pour prévenir l'apparition de caries."
          />
          <ServiceCard
            icon="🦷"
            title="Implantologie"
            description="Remplacement de dents manquantes avec des implants durables et de haute qualité."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-4">
        <div className="container">
          <div className="text-center">
            <h2>Ce que disent nos patients</h2>
            <p>La satisfaction de nos patients est notre plus grande récompense.</p>
          </div>
          <div className="testimonials-grid">
            <TestimonialCard
              text="Un professionnalisme exceptionnel. L'équipe est très rassurante, le matériel est moderne et je n'ai ressenti aucune douleur pendant les soins."
              name="Karima M."
            />
            <TestimonialCard
              text="Accueil très chaleureux. Le cabinet est d'une propreté impeccable. On m'a tout expliqué en détail avant l'intervention. Je recommande vivement !"
              name="Salah L."
            />
            <TestimonialCard
              text="Enfin j'ai retrouvé le sourire ! Le blanchiment dentaire a fait des miracles et le docteur a été très à l'écoute de mes besoins."
              name="Amira K."
            />
          </div>
        </div>
      </section>

      <Footer lang="fr" />
    </>
  );
}
