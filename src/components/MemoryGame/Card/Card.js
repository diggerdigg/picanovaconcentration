import './Card.scss';

export default function Card({ card, handleCardSelect, visibleCard, removeCard }) {
    const handleCardClick = () => {
        handleCardSelect(card);
    };

    return (
        <>
            <div className="card">
                <div className={visibleCard ? "visible" : ""}>
                    <div className={removeCard ? "removed" : ""}>
                        <img
                            className="front"
                            src={card.src}
                            alt="card front" />
                        <img
                            className="back"
                            src='/img/suspiria.png'
                            onClick={handleCardClick}
                            alt="card back" />
                    </div>
                </div>
            </div>
        </>
    )
}