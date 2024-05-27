type WordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
}

const Word = ({guessedLetters, wordToGuess, reveal = false}: WordProps) => {
  return (
    <div className="flex gap-1 text-5xl md:text-8xl font-bold uppercase font-mono">
        {wordToGuess.split("").map((letter, index) => (
            <span key={index} className="border-b-[.1em] border-white">
                <span className={`${guessedLetters.includes(letter) || reveal ? 'visible' : 'invisible'}
                  ${!guessedLetters.includes(letter) && reveal ? 'text-red-500' : 'text-white'}`}
                >
                  {letter}
                </span>
            </span>
        ))}
    </div>
  )
}

export default Word