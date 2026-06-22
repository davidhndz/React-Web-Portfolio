import { meCards } from '../data/portfolioData';

function MeStrip({ card, isLast }) {
  const reversed = card.photoSide === 'right';

  return (
    <div className={`me-strip${reversed ? ' me-strip--reversed' : ''}${isLast ? ' me-strip--last' : ''}`}>
      <div className="me-photo">
        <img src={card.img} alt={card.imgAlt} />
        <span className="me-photo-tag">{card.photoTag}</span>
      </div>
      <div className="me-strip-text">
        <p className="me-strip-label">{card.label}</p>
        <h3 className="me-strip-heading">
          {card.heading.split('\n').map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </h3>
        <p className="me-strip-body">{card.text}</p>
      </div>
    </div>
  );
}

export default function MeSection() {
  return (
    <div id="me" className="me-wrap">
      <div className="me-eyebrow-bar">
        <span>&gt; me</span>
      </div>
      {meCards.map((card, index) => (
        <MeStrip
          key={card.id}
          card={card}
          isLast={index === meCards.length - 1}
        />
      ))}
    </div>
  );
}
