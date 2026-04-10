import type { Route } from "./+types/home";
import { useState } from "react";

import NavBar from "../components/NavBar";
import NavItem from "../components/NavItem"
import Button from "../components/Button";
import TextInput from "../components/TextInput";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Components" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // for button
  const handleClick = () => {
    console.log('click')
  }

  // for text input
  const [text, setText] = useState("")

  const handleTextSubmit = (text: string) => {
    if(text.length > 0){
      console.log(text)
      setText("")
    }
  }

  return(
    <>
      <NavBar darkMode={false}>
        <NavItem darkMode={false} active={true} text={"Home"} linkTo={"https://www.youtube.com"} />
        <NavItem darkMode={false} active={false} text={"Projects"} linkTo={"https://www.youtube.com"} />
        <NavItem darkMode={false} active={false} text={"Resume"} linkTo={"https://www.youtube.com"} />
      </NavBar>
      <NavBar darkMode={true}>
        <NavItem darkMode={true} active={true} text={"Home"} linkTo={"https://www.youtube.com"} />
        <NavItem darkMode={true} active={false} text={"Projects"} linkTo={"https://www.youtube.com"} />
        <NavItem darkMode={true} active={false} text={"Resume"} linkTo={"https://www.youtube.com"} />
      </NavBar>

      <main>
        <div className="h-dvh flex flex-col items-center justify-around my-4">
          <div>
            <Button darkMode={false} onClick={handleClick}>Submit</Button>
            <Button darkMode={true} onClick={handleClick}>Submit</Button>
          </div>

          <div>
            <TextInput darkMode={false} value={text} onChange={setText} onSubmit={handleTextSubmit} />
            <TextInput darkMode={true} value={text} onChange={setText} onSubmit={handleTextSubmit} />
          </div>

        </div>
      </main>
    </>
    
  );
}
