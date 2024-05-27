const HEAD = (
    <div className="absolute w-[30px] md:w-[60px] h-[30px] md:h-[60px] top-[25px] md:top-[50px] right-[-12px] md:right-[-25px] 
        rounded-full border-[5px] md:border-[10px] border-white" />
)

const BODY = (
    <div className="absolute w-[5px] md:w-[10px] h-[50px] md:h-[100px] top-[55px] md:top-[110px] right-0 bg-white" />
)

const RIGHT_ARM = (
    <div className="absolute w-[45px] md:w-[90px] h-[5px] md:h-[10px] top-[70px] md:top-[140px] right-[-45px] md:right-[-90px]
     bg-white rotate-[-30deg] origin-bottom-left" />
)

const LEFT_ARM = (
    <div className="absolute w-[45px] md:w-[90px] h-[5px] md:h-[10px] top-[70px] md:top-[140px] right-[4.5px] md:right-[9px]
     bg-white rotate-[30deg] origin-bottom-right" />
)

const RIGHT_LEG = (
    <div className="absolute w-[45px] md:w-[90px] h-[5px] md:h-[10px] top-[100px] md:top-[200px] right-[-40px] md:right-[-80px]
     bg-white rotate-[60deg] origin-bottom-left" />
)

const LEFT_LEG = (
    <div className="absolute w-[45px] md:w-[90px] h-[5px] md:h-[10px] top-[100px] md:top-[200px] right-0
     bg-white rotate-[-60deg] origin-bottom-right" />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanProps = {
    guesses: number;
}

const Hangman = ({guesses}: HangmanProps) => {
  return (
    <div className='relative'>
        {BODY_PARTS.slice(0, guesses)}
        <div className="absolute h-[25px] md:h-[50px] w-[5px] md:w-[10px] bg-white top-0 right-0" />
        <div className="h-[5px] md:h-[10px] w-[100px] md:w-[200px] bg-white ml-[60px] md:ml-[120px]" />
        <div className="h-[200px] md:h-[400px] w-[5px] md:w-[10px] bg-white ml-[60px] md:ml-[120px]" />
        <div className="h-[5px] md:h-[10px] w-[125px] md:w-[250px] bg-white" />
    </div>
  )
}

export default Hangman