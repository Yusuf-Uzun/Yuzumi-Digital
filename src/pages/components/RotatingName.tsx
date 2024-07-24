import React, { useState, useEffect } from 'react';
import styles from '@/styles/RotatingName.module.css';


const words = ["INSPIRE", "ATTRACTS", "EMPOWER", "INNOVATE", "PERFORM", "SHINE"];

const RotatingName: React.FC = () => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isHidden, setIsHidden] = useState(false); // Zustand für das Ausblenden
    const [fadeIn, setFadeIn] = useState(true); // Zustand für das Einblenden

    useEffect(() => {
        let wordIndex = 0;
        const intervalId = setInterval(() => {
            setIsHidden(true); // Text ausblenden
            setTimeout(() => {
                wordIndex = (wordIndex + 1) % words.length;
                setCurrentWord(words[wordIndex]);
                setIsHidden(false); // Text wieder sichtbar machen
                setFadeIn(true); // Zustand zum Einblenden aktivieren
            }, 1000); // Wartezeit bis die Animationen abgeschlossen sind (1s für fadeOut)
        }, 4000); // Intervall erhöht, um Zeit für den Übergang zu geben

        return () => clearInterval(intervalId);
    }, []);

    // Wenn der Text nicht versteckt ist, aktivieren wir die fadeIn-Animation
    useEffect(() => {
        if (!isHidden) {
            setFadeIn(true);
        }
    }, [isHidden]);

    // Rücksetzen der fadeIn-Animation nach dem Einblenden
    useEffect(() => {
        if (!fadeIn) {
            setFadeIn(false);
        }
    }, [fadeIn]);

    return (
        <>
            <h1 className={styles.futuristicH1}>
                <span>WEBSITES WHICH</span>
                <br />
                <span className={`${isHidden ? styles.hidden : styles.fadeIn}`}>
                    {currentWord}
                </span>
            </h1>
        </>
    );
};

export default RotatingName;
