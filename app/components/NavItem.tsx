type ButtonProps = {
  darkMode: boolean;
  active: boolean;
  text: string;
  linkTo: string;
}

export default function NavItem ({darkMode, active, text, linkTo} : ButtonProps): React.ReactNode {
  const style = `
      flex items-center justify-center
      px-6 py-3
      size-full
      rounded-2xl
      text-white font-bold
      
      backdrop-blur-2xl
      shadow-2xl
      hover:cursor-pointer  transition-all duration-300
      active:scale-[0.98] hover:scale-[1.02]
      relative overflow-hidden

      ${darkMode ? 'bg-black/15 hover:bg-black/20' : 'bg-white/10 hover:bg-white/15'}
      ${active ? 'border-2 border-white/70' : 'border border-white/20'}
`

  return(
    <li className="mx-2 my-2">
      <a className={style} href={linkTo} target="_blank">{text}</a>
    </li>
  )
};