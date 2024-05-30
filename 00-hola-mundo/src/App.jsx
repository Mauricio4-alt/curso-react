import React from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"
export function App(){
    const formatUserName = <span>@mauroj-t28</span>
    
    return( <>
    <div className="app">
     <TwitterFollowCard  isfollowing={true} name="Angelica" 
     userName="Angelloves" 
     formatUserName={formatUserName}
      />
     <TwitterFollowCard  
     isfollowing={false} 
     name="Angelica" userName="Angelloves"
      formatUserName={formatUserName} 
      />
     <TwitterFollowCard  
     isfollowing={true} 
     name="Urdaneta Mauricio" userName="Mauro"
     formatUserName={formatUserName}
     />
     <TwitterFollowCard  
     isfollowing={false} 
     name="Diego Lopez" userName="sindresorhus@gmail.com"
      formatUserName={formatUserName}
      />
     <TwitterFollowCard  
     isfollowing={true} 
     name="Manuel Haylin" userName="kikobeats"
      formatUserName={formatUserName}
      />
     <TwitterFollowCard  
     isfollowing={false} 
     name="Jesus Guerra" userName="Guerra-28"
     formatUserName={formatUserName}
      />
     </div>
</>)}
