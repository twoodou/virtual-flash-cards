import React from 'react';

interface FlashCardProps {
  question: string;
  answer: string;
  onClick: () => void;
  showAnswer: boolean;
}

const FlashCard: React.FC<FlashCardProps> = ({ question, answer, onClick, showAnswer }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '20px', margin: '10px', textAlign: 'center' }}>
      {showAnswer ? answer : question}
    </div>
  );
};

export default FlashCard;
