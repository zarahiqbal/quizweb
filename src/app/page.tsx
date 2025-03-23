"use client";
import { useState } from "react";

const wordSets = [
  [
    { word: "accommodate", correct: false, correctSpelling: "accommodate" },
    { word: "definately", correct: true, correctSpelling: "d-e-f-i-n-i-t-e-l-y" },
    { word: "receive", correct: false, correctSpelling: "receive" },
    { word: "occasionally", correct: false, correctSpelling: "occasionally" },
  ],
  [
    { word: "professor", correct: false, correctSpelling: "professor" },
    { word: "Janitor", correct: false, correctSpelling: "janitor" },
    { word: "Sorceror", correct: true, correctSpelling: "s-o-r-c-e-r-e-r" },
    { word: "Traitor", correct: false, correctSpelling: "traitor" },
  ],
  [
    { word: "millennium", correct: false, correctSpelling: "millennium" },
    { word: "Dilemma", correct: false, correctSpelling: "dilemma" },
    { word: "Tommorrow", correct: true, correctSpelling: "t-o-m-o-r-r-o-w" },
    { word: "Dumbbell", correct: false, correctSpelling: "dumbbell" },
  ],
  [
    { word: "weird", correct: false, correctSpelling: "weird" },
    { word: "neice", correct: true, correctSpelling: "n-i-e-c-e" },
    { word: "fiesty", correct: false, correctSpelling: "fiesty" },
    { word: "Geisha", correct: false, correctSpelling: "Giesha" },
  ],
  [
    { word: "Awful", correct: false, correctSpelling: "Awful" },
    { word: "Greatful", correct: true, correctSpelling: "G-r-a-t-e-f-u-l" },
    { word: "Lawful", correct: false, correctSpelling: "Lawful" },
    { word: "Successful", correct: false, correctSpelling: "Successful" },
  ],
  [
    { word: "Parliament", correct: false, correctSpelling: "Parliament" },
    { word: "Hierarchy", correct: false, correctSpelling: "Hierarchy" },
    { word: "Twelfth", correct: false, correctSpelling: "Twelfth" },
    { word: "Bouyant", correct: true, correctSpelling: "B-u-o-y-a-n-t" },
  ],
  [
    { word: "contraversy", correct: true, correctSpelling: "c-o-n-t-r-o-v-e-r-s-y" },
    { word: "conscious", correct: false, correctSpelling: "conscious" },
    { word: "consensus", correct: false, correctSpelling: "consensus" },
    { word: "congratulate", correct: false, correctSpelling: "congratulate" },
  ],
   [
    { word: "malleable", correct: false, correctSpelling: "malleable" },
    { word: "Adviseable", correct: true, correctSpelling: "A-d-v-i-s-a-b-l-e" },
    { word: "Permeable", correct: false, correctSpelling: "Permeable" },
    { word: "Traceable", correct: false, correctSpelling: "Traceable" },
  ],
   [
    { word: "Definate", correct: true, correctSpelling: "D-e-f-i-n-i-t-e" },
    { word: "Original", correct: false, correctSpelling: "Original" },
    { word: "Religious", correct: false, correctSpelling: "Religious" },
    { word: "Tyranny", correct: false, correctSpelling: "Tyranny" },
  ],
   [
    { word: "possession", correct: false, correctSpelling: "possession" },
    { word: "Dissimilar", correct: false, correctSpelling: "Dissimilar" },
    { word: "passtime", correct: true, correctSpelling: "p-a-s-t-i-m-e" },
    { word: "misspell", correct: false, correctSpelling: "misspell" },
  ],
   [
    { word: "Dilemma", correct: false, correctSpelling: "Dilemma" },
    { word: "upholstry", correct: true, correctSpelling: "u-p-h-o-l-s-t-e-r-y" },
    { word: "prophery", correct: false, correctSpelling: "prophery" },
    { word: "humorous", correct: false, correctSpelling: "humorous" },
  ],
     [
    { word: "gauge", correct: true, correctSpelling: "g-u-a-g-e" },
    { word: "guarantee", correct: false, correctSpelling: "guarantee" },
    { word: "annual", correct: false, correctSpelling: "annual" },
    { word: "mobile", correct: false, correctSpelling: "mobile" },
  ],
   [
    { word: "Dueling", correct: false, correctSpelling: "dueling" },
    { word: "Affluence", correct: false, correctSpelling: "affluence" },
    { word: "Amatuer", correct: true, correctSpelling: "A-m-a-t-e-u-r" },
    { word: "barbecue", correct: false, correctSpelling: "barbecue" },
  ],
   [
    { word: "beginning", correct: false, correctSpelling: "beginning" },
    { word: "drunkenness", correct: false, correctSpelling: "durnkenness" },
    { word: "annually", correct: false, correctSpelling: "annually" },
    { word: "innoculate", correct: true, correctSpelling: "i-n-o-c-u-l-a-t-e" },
  ],
   [
    { word: "Independant", correct: true, correctSpelling: "I-n-d-e-p-e-n-d-e-n-t" },
    { word: "Flamboyant", correct: false, correctSpelling: "Flamboyant" },
    { word: "Predominant", correct: false, correctSpelling: "Predominant" },
    { word: "Participant", correct: false, correctSpelling: "Participant" },
  ],
   [
    { word: "Reminisce", correct: false, correctSpelling: "Reminisce" },
    { word: "Minister", correct: false, correctSpelling: "Minister" },
    { word: "Diminish", correct: false, correctSpelling: "Diminish" },
    { word: "Miniture", correct: true, correctSpelling: "M-i-n-i-a-t-u-r-e" },
  ],
[
    { word: "Audience", correct: false, correctSpelling: "Audience" },
    { word: "Obedience", correct: false, correctSpelling: "Obedience" },
    { word: "Convenience", correct: false, correctSpelling: "Convenience" },
    { word: "Allegience", correct: true, correctSpelling: "A-l-l-e-g-i-a-n-c-e" },
  ],
  [
    { word: "Relevent", correct: true, correctSpelling: "R-e-l-e-v-a-n-t" },
    { word: "Coherent", correct: false, correctSpelling: "Coherent" },
    { word: "Prudent", correct: false, correctSpelling: "Prudent" },
    { word: "Circumvent", correct: false, correctSpelling: "Circumvent" },
  ],
  [
    { word: "Succeed", correct: false, correctSpelling: "Succeed" },
    { word: "Proceed", correct: false, correctSpelling: "Proceed" },
    { word: "Preceed", correct: true, correctSpelling: "P-r-e-c-e-d-e" },
    { word: "Exceed", correct: false, correctSpelling: "Exceed" },
  ],
  [
    { word: "Margarita", correct: false, correctSpelling: "Margarita" },
    { word: "Mojito", correct: false, correctSpelling: "Mojito" },
    { word: "Mimosa", correct: false, correctSpelling: "Mimosa" },
    { word: "Daquiri", correct: true, correctSpelling: "D-a-i-q-u-i-r-i" },
  ],
];

export default function Quiz() {
  const [setIndex, setSetIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [correctSpelling, setCorrectSpelling] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(false);

  const currentWords = wordSets[setIndex];
  const misspelledWord = currentWords.find((word) => word.correct);

  const handleAnswer = (word: { word: string; correct: boolean; correctSpelling: string }) => {
    if (disabled) return;
    setSelectedWord(word.word);
    setDisabled(true);
    setCorrectSpelling(misspelledWord ? misspelledWord.correctSpelling : null);
    if (word.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (setIndex + 1 < wordSets.length) {
      setSetIndex(setIndex + 1);
      setSelectedWord(null);
      setCorrectSpelling(null);
      setDisabled(false);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-4 text-black">
      {finished ? (
        <h1 className="text-2xl font-bold text-black">
          Quiz Over! Your Score: {score}/{wordSets.length}
        </h1>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h1 className="text-xl font-bold mb-4 text-black">Spot the Misspelled Word Quiz</h1>
          <p className="text-lg mb-4 text-black">Which of these words is misspelled?</p>
          <div className="grid grid-cols-2 gap-4">
            {currentWords.map((word, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(word)}
                disabled={disabled}
                className={`px-4 py-2 rounded-lg text-lg font-semibold text-black ${selectedWord === word.word ? (word.correct ? "bg-green-500" : "bg-red-500") : "bg-gray-200"} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {word.word}
              </button>
            ))}
          </div>
          {correctSpelling && (
            <p className="mt-4 text-lg font-semibold text-black">
              The correct spelling is: <span className="text-blue-500 font-bold">{correctSpelling}</span>
            </p>
          )}
          <button
            onClick={handleNext}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
