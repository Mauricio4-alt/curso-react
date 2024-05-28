

export function TwitterFollowCard({userName,name,isfollowing}){
const imageSrc = `https://unavatar.io/readcv/${userName}`
    return <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            alt="imagen " 
            src= {imageSrc}
            className="tw-followCard-avatar" 
            />
            <div className="tw-followCard-info">
                <strong > {name} </strong>
                <span className="tw-followCard-infoUserName">@{name}</span>
            </div>

        </header>
            <aside className="tw-followCard-button">
                <button className="tw-followCard-button">Seguir</button>
            </aside>
    </article>
    
}