import styles from "./Keyboard.module.css"

const KEYS = [
  "a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", 
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
}

const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter, disabled = false}: KeyboardProps) => {
  return (
    <div className="grid grid-cols-auto-fit-46px md:grid-cols-auto-fit-75px gap-2">
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button key={key}
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}
            max-md:text-2xl`}
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard