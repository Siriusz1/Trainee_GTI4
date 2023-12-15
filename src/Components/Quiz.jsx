import React, { useState } from 'react';

function Quiz() {
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [alternativeCount, setAlternativeCount] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  });
  const [selectedAlternative, setSelectedAlternative] = useState(null);
  const [choiceMade, setChoiceMade] = useState(false);
  const mostClickedAlternatives = getMostClickedAlternatives(alternativeCount);

  const buttonClickAnswer = (alternative) => {
    setAlternativeCount((prevCounts) => ({
      ...prevCounts,
      [selectedAlternative]: prevCounts[selectedAlternative] - 1, 
      [alternative]: prevCounts[alternative] + 1, 
    }));
    setSelectedAlternative(alternative);
    setChoiceMade(true);
  };

  const buttonClick = () => {
    const answer = currentQuestion + 1;
    if (answer < questions.length) {
      setCurrentQuestion(answer);
      if (choiceMade) {
        setAlternativeCount((prevCounts) => ({
          ...prevCounts,
          [selectedAlternative]: prevCounts[selectedAlternative] + 1,
        }));
      }
      setChoiceMade(false);
      setSelectedAlternative(null);
    } else {
      setShowScore(true);
      if (choiceMade) {
        setAlternativeCount((prevCounts) => ({
          ...prevCounts,
          [selectedAlternative]: prevCounts[selectedAlternative] + 1,
        }));
      }
    }
  };

  function getMostClickedAlternatives(alternativeCount) {
    let mostClickedAlternative = [];
    let maxCount = -1;

    for (const alternative in alternativeCount) {
      if (alternativeCount.hasOwnProperty(alternative)) {
        const count = alternativeCount[alternative];

        if (count > maxCount) {
          maxCount = count;
          mostClickedAlternative = [alternative];
        } else if (count === maxCount) {
          mostClickedAlternative.push(alternative);
        }
      }
    }

    return mostClickedAlternative;
  }

  const questions = [
    {
      questionText: 'Com quantos paus se faz uma canoa?',
      answerOptions: [
        { answerText: '5', isCorrect: false, alternative: 'A' },
        { answerText: '2', isCorrect: false, alternative: 'B' },
        { answerText: '1', isCorrect: true, alternative: 'C' },
        { answerText: '10', isCorrect: false, alternative: 'D' },
      ],
    },
    {
      questionText: 'Quais as chances do criador deste site entrar para a GTI?',
      answerOptions: [
        { answerText: 'Todas as Chances', isCorrect: false, alternative: 'A' },
        { answerText: 'Com certeza entra', isCorrect: true, alternative: 'B' },
        { answerText: 'Já está é Dentro', isCorrect: false, alternative: 'C' },
        { answerText: 'Só não entra se não quiser', isCorrect: false, alternative: 'D' },
      ],
    },
    {
      questionText:
        'Qual a probabilidade de um jovem que trabalha e estuda na Universidade Federal do Ceará surtar nos meses de Novembro e Dezembro?',
      answerOptions: [
        { answerText: '100%', isCorrect: true, alternative: 'A' },
        { answerText: '70%', isCorrect: false, alternative: 'B' },
        { answerText: '20%', isCorrect: false, alternative: 'C' },
        { answerText: '99%', isCorrect: false, alternative: 'D' },
      ],
    },
  ];

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-[40%] h-auto border border-gray-500'>
        {showScore ? (
          <div className='text-center'>
            <p className='text-3xl font-bold mb-4 text-white'>Você Pontuou: </p>
            {mostClickedAlternatives.length === 1 ? (
              <p className='text-white'>Mais clicada: {mostClickedAlternatives[0]}</p>
            ) : (
              <p className='text-white'>Empate entre: {mostClickedAlternatives.join(', ')}</p>
            )}
          </div>
        ) : (
          <>
            <div className='text-center border border-gray-500'>
              <p className='text-xl font-bold bg-white text-black w-[40px] h-[40px] flex justify-center items-center mx-auto my-[2%] rounded-md'>
                {currentQuestion + 1}
              </p>
              <p className='text-2xl text-white mb-[2%]'>{questions[currentQuestion].questionText}</p>
            </div>
            <div className='flex flex-col items-center'>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  onClick={() => buttonClickAnswer(answerOption.alternative)}
                  className={`w-full border border-gray-500 text-white font-bold py-2 px-4 mb-2 ${
                    selectedAlternative === answerOption.alternative ? 'bg-[#601E8F]' : ''
                  } hover:bg-[#601E8F] focus:bg-[#601E8F]`}
                >
                  {answerOption.alternative}) {answerOption.answerText}
                </button>
              ))}
              {choiceMade && (
                <button onClick={buttonClick} className='w-full border border-gray-500 text-white font-bold py-2 px-4 mb-2 rounded-md'>
                  PRÓXIMO
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
