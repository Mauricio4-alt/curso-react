import React from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"
export function App(){
    
  const formatUserName = (userName)=> `@${userName}`
    return( <>
    <div className="app">
     <TwitterFollowCard  isfollowing={true}  
      userName="Angelloves" 
      formatUserName={formatUserName}
      >Ana Mujica</TwitterFollowCard>

     <TwitterFollowCard  
     isfollowing={false} 
     
      formatUserName={formatUserName}
      >Angela</TwitterFollowCard>
     <TwitterFollowCard  
     isfollowing={true} 
    userName="Mauro"
     formatUserName={formatUserName}
     >Diego Puertas </TwitterFollowCard>
     <TwitterFollowCard  
     isfollowing={false} 
      userName="sindresorhus@gmail.com"
      formatUserName={formatUserName}
      >Andres lozano</TwitterFollowCard>
     <TwitterFollowCard  
     isfollowing={true} 
      userName="kikobeats"
      formatUserName={formatUserName}
      >
        Andres gomez
      </TwitterFollowCard>
     <TwitterFollowCard  
     isfollowing={false} 
     userName="Guerra-28"
     formatUserName={formatUserName}
      
      >
        Angel Guerra
      </TwitterFollowCard>
     </div>
</>)}
