import { useCallback, useEffect, useState } from "react"
import words from './utils/wordList.json'
import { Hangman, Keyboard, Word } from "./components"

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isLoser, isWinner])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key);
    }
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#282828] flex items-center justify-center">
      <div className="w-full md:w-1/2 flex flex-col gap-8 mx-auto items-center justify-center px-6">
        <div className="text-2xl text-center text-white font-semibold">
          {isWinner && "Winner! -Refresh to try again"}
          {isLoser && "Nice Try -Refresh to try again"}
        </div>

        <Hangman guesses={incorrectLetters.length}/>
        <Word guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser} />
        <div className="self-stretch">
          <Keyboard activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
            inactiveLetters={incorrectLetters} 
            addGuessedLetter={addGuessedLetter}
            disabled={isWinner || isLoser}
          />
        </div>
      </div>
    </div>
  )
}

export default App
