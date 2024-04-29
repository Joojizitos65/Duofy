export default () => {
    return(
        <>
            <header className="header-home">
                <img src=".\src\assets\notification.png" alt="" />
                <div className="container-search">
                    <input type="text" name="search" id="search-input" placeholder="Pesquisar..." />
                    <img src=".\src\assets\lupa.png" alt="lupa-search" />
                </div>
                <img src=".\src\assets\avatar.png" alt="profile-icon" id="pfp"/> {/* colocar use navigate depois no 'profile-icon','notification-nav'*/}
            </header>
        </>
    )
}