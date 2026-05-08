import { useScrollReveal } from '../hooks/useScrollReveal';
import { meCards } from '../data/portfolioData';

/**
 * MeCard
 * A single "about me" card with a text block and a photo.
 * Even-indexed cards reverse their row direction (matching .me-card:nth-child(2)).
 * The useScrollReveal hook adds the "show" class when the card enters the viewport,
 * triggering the slide-in CSS transition.
 */
function MeCard({ card, index }) {
  const ref = useScrollReveal();

  // Alternate layout: even cards flip the image/text order
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`me-card ${card.animation}`}
      style={isReversed ? { flexDirection: 'row-reverse' } : {}}
    >
      <div className="me-text">
        <p>{card.text}</p>
      </div>
      <div className="me-img">
        <img src={card.img} alt={card.imgAlt} />
      </div>
    </div>
  );
}

/**
 * MeSection
 * Renders the "Me" heading and all MeCard instances.
 */
export default function MeSection() {
  return (
    <>
      <h2 id="me" className="section-title">Me</h2>
      <div className="hero-me">
        {meCards.map((card, index) => (
          <MeCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </>
  );
}
