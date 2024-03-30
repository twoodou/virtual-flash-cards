import { useState, useEffect } from "react";
import "./App.css";
import FlashCard from "./components/FlashCard";

interface FlashCardData {
  id: string;
  question: string;
  answer: string;
  category: string;
}

function App() {
  const [flashCards, setFlashCards] = useState<FlashCardData[]>([]);
  const [showAnswer, setShowAnswer] = useState<boolean[]>([]);

  useEffect(() => {
    fetch("/flashCards.json")
      .then((response) => response.json())
      .then(setFlashCards);
  }, []);

  const toggleAnswer = (index: number) => {
    const updatedShowAnswer = [...showAnswer];
    updatedShowAnswer[index] = !updatedShowAnswer[index];
    setShowAnswer(updatedShowAnswer);
  };

  return (
    <div>
      {flashCards.map((card, index) => (
        <FlashCard
          key={card.id}
          question={card.question}
          answer={card.answer}
          showAnswer={!!showAnswer[index]}
          onClick={() => toggleAnswer(index)}
        />
      ))}
    </div>
  );
}

export default App;
