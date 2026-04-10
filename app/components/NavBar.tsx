type NavProps = {
  darkMode: boolean;
  children: React.ReactNode;
}

export default function NavBar ({darkMode, children} : NavProps): React.ReactNode {
  const style = `
      grid grid-cols-3 items-center
      px-6 py-3
      mx-2 my-4
      rounded-2xl border border-white/20
      text-white font-bold
      
      backdrop-blur-2xl
      shadow-xl
      transition-all duration-300
      relative overflow-hidden

      ${darkMode ? 'bg-black/15 hover:bg-black/20' : 'bg-white/10 hover:bg-white/15'}
`

  return(
    <nav className={style}>
      <div className="flex items-center">
        <img className="w-16 rounded-2xl" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.usab.com%2Fimgproxy%2FzhHZWpTrgXdGp5oUz9lieE2RAuXRO6utvaCJwy_w5UE%2Frs%3Afit%3A3000%3A0%3A0%3Ag%3Ace%2FaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvZGJkOTVjZWUtNDBlOS00MjBlLWEzZjAtMGI2M2Q3MDczMTk3LmpwZw.png&f=1&nofb=1&ipt=a6042e51582abc0ced1abfe0c7271596d830467eebf61e57efed460fcb0f8a8b"></img>
        <h1 className="ml-4 h-full text-2xl align-middle">Brand Name</h1>
      </div>
      <span className="absolute inset-0
          rounded-2xl
          bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.35),rgba(255,255,255,0)_60%)]
          opacity-70" />
      <ul className="w-full flex flex-row justify-center">
        {children}
      </ul>
    </nav>
  )
};