export default function TestimonialCard({ text, name }) {
  return (
    <div className="testimonial-card">
      <div className="stars">★★★★★</div>
      <p>{text}</p>
      <div className="client-name">- {name}</div>
    </div>
  );
}
