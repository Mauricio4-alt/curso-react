import "./App.css"
export function App(){
    return <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            alt="imagen " 
            src="https://unavatar.io/readcv/elenatorro" 
            className="tw-followCard-avatar" 
            />
            <div className="tw-followCard-info">
                <strong >Angelica Molina</strong>
                <span className="tw-followCard-infoUserName">@Angelica</span>
            </div>

        </header>
            <aside className="tw-followCard-button">
                <button className="tw-followCard-button">Seguir</button>
            </aside>
    </article>
    
}
