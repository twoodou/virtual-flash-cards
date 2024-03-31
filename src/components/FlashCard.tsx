import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';

interface FlashCardProps {
  question: string;
  answer: string;
  onClick: () => void;
  showAnswer: boolean;
}

const FlashCard: React.FC<FlashCardProps> = ({ question, answer, onClick, showAnswer }) => {
  // Converts Markdown to HTML and sanitizes it
  const createMarkup = (markdownContent: string) => {
    const rawMarkup = marked(markdownContent);
    const sanitizedMarkup = DOMPurify.sanitize(rawMarkup);
    return { __html: sanitizedMarkup };
  };

  return (
    <div onClick={onClick} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '20px', margin: '10px', textAlign: 'center' }}>
      <div dangerouslySetInnerHTML={createMarkup(showAnswer ? answer : question)} />
    </div>
  );
};

export default FlashCard;