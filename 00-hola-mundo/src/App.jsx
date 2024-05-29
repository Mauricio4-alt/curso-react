import React from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"
export function App(){
    
    return( <>
    <div className="app">
     <TwitterFollowCard isfollowing={true} name="Angelica" userName="Angelloves" />
     <TwitterFollowCard isfollowing={false} name="Angelica" userName="Angelloves" />
     <TwitterFollowCard isfollowing={true} name="Urdaneta Mauricio" userName="mauroj-28" />
     <TwitterFollowCard isfollowing={false} name="Diego Lopez" userName="sindresorhus@gmail.com" />
     <TwitterFollowCard isfollowing={true} name="Manuel Haylin" userName="Haylin-28" />
     <TwitterFollowCard isfollowing={false} name="Jesus Guerra" userName="Guerra-28" />
     </div>
     </>)}
