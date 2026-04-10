import Button from "./Button"
import { FaArrowRight } from "react-icons/fa";

type TextInputProps = {
  darkMode: boolean;
  placeHolderText?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}



export default function TextInput ({darkMode, placeHolderText, value, onChange, onSubmit} : TextInputProps): React.ReactNode {
  const style = `
      relative z-0
      px-6 py-3
      w-full
      rounded-2xl border border-white/20
      text-white font-bold
      
      backdrop-blur-2xl
      shadow-xl
      
      focus:border-white/30 focus:outline-none
      hover:cursor-pointer  transition-all duration-300
      active:scale-[0.98] hover:scale-[1.02]
      relative overflow-hidden

      ${darkMode ? 'bg-black/15 hover:bg-black/20 focus:bg-black/25' : 'bg-white/10 hover:bg-white/15 focus:bg-white-20'}
`

  return(
    <div className="flex flex-row items-stretch">
      <div className="relative w-64 rounded-2xl mr-1">
        <div className="
          z-10
          pointer-events-none
          rounded-2xl
          absolute inset-0
          bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.35),rgba(255,255,255,0)_60%)]
          opacity-70
        " />
          <input type="text" className={style} value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={(e) => {if(e.key === "Enter") onSubmit(value)}} placeholder={placeHolderText ? placeHolderText : 'Enter text...'} />
      </div>
      <Button darkMode={darkMode} onClick={() => onSubmit(value)}><FaArrowRight size={20} /></Button>
    </div>
  )
};