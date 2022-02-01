import { useEffect, useState } from 'react';
import Card from './Card/Card';
import './MemoryGame.scss';

const cardMix = [
    { "src": "/img/banana.jpg" },
    { "src": "/img/cherry.jpg" },
    { "src": "/img/lemon.jpg" },
    { "src": "/img/melon.jpg" },
    { "src": "/img/orange.jpg" },
    { "src": "/img/plum.jpg" },
    { "src": "/img/7.jpg" },
    { "src": "/img/BAR.jpg" }
];

export default function MemoryGame() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [clearedCards, setClearedCards] = useState([]);
    const [firstChoice, setFirstChoice] = useState(null);
    const [secondChoice, setSecondChoice] = useState(null);
    const [victory, setVictory] = useState(false);

    const shuffleCards = () => {
        const shuffled = [...cardMix, ...cardMix]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffled);
        setTurns(0);
    };

    const handleCardSelect = (card) => {
        firstChoice ? setSecondChoice(card) : setFirstChoice(card);
    };

    useEffect(() => {
        if (firstChoice && secondChoice) {
            if (firstChoice.src === secondChoice.src) {
                setClearedCards(prevCards => [...prevCards, firstChoice]);
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === firstChoice.src) {
                            return { ...card, matched: true, remove: true };
                        } else {
                            return card;
                        }
                    })
                })
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1200);
            }
        }
    }, [firstChoice, secondChoice]);

    const resetTurn = () => {
        setFirstChoice(null);
        setSecondChoice(null);
        setTurns(prevTurns => prevTurns + 1);
    };

    const handleRestart = () => {
        shuffleCards();
        setClearedCards([]);
        setVictory(false);
    };

    useEffect(() => {
        shuffleCards();
    }, []);

    useEffect(() => {
        const checkCompletion = () => {
            if (clearedCards.length === cardMix.length) {
                setVictory(true);
            }
        };

        checkCompletion();
    }, [clearedCards]);

    return (
        <>
            <div className="game">
                <h1>Concentration Game</h1>

                <div className="game-grid">
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            card={card}
                            handleCardSelect={handleCardSelect}
                            visibleCard={card === firstChoice || card === secondChoice || card.matched}
                            removeCard={card.remove}
                        />
                    ))}
                </div>
                <span className={victory ? "congratulations visible" : "congratulations"}>
                    Congratulations! You've won the memory game. Total moves used: {turns}
                </span>
                <button className={victory ? "newgame visible" : "newgame"} onClick={handleRestart}>New Game</button>
            </div>
        </>
    )
}