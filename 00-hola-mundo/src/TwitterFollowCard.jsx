export function TwitterFollowCard({formatUserName,userName="userUnkown",children,isfollowing}){
const imageSrc = `https://unavatar.io/${userName}`

return <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            alt="imagen " 
            src= {imageSrc}
            className="tw-followCard-avatar" 
            />
            <div className="tw-followCard-info">
                <strong > {children} </strong>
                <span className="tw-followCard-infoUserName">{userName}</span>
            </div>

        </header>
            <aside className="tw-followCard-button">
                <button className="tw-followCard-button">Seguir</button>
            </aside>
    </article>
}


    