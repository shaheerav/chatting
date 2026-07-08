import { useEffect } from 'react';
import './App.css'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'


function App() {
  useEffect(() => {
    fetch("https://chatting-m56z.onrender.com/chat")
      .then(res => res.json())
      .then(data => console.log("Backend response:", data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <header>
        <Show when="signed-out">
          <SignInButton mode='modal'/>
          <SignUpButton mode='modal'/>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
      
    </div>
  )
}

export default App
