type ButtonProps = {
  darkMode: boolean;
  children?: React.ReactNode;
  onClick: () => void;
}

export default function Button ({darkMode, onClick, children} : ButtonProps): React.ReactNode {
  const style = `
      px-6 py-3
      w-fit
      rounded-2xl border border-white/20
      text-white font-bold
      
      backdrop-blur-2xl
      shadow-xl
      hover:cursor-pointer  transition-all duration-300
      active:scale-[0.98] hover:scale-[1.02]
      relative overflow-hiddden

      ${darkMode ? 'bg-black/15 hover:bg-black/20' : 'bg-white/10 hover:bg-white/15'}
`

  return(
    <div className="mb-2">
     <button onClick={onClick} className={style}>
      <span className="absolute inset-0
          rounded-2xl
          bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.35),rgba(255,255,255,0)_60%)]
          opacity-70" />
      <span className="relative">{children}</span>
      </button>
    </div>
  )
};