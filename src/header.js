const header = `
    background-color: var(--blue-primary);
    background: linear-gradient(90deg, var(--blue-primary), var(--blue-variant));
    height: 100vh;
`

const container = `
    color: var(--white-color);
    height: 100vh;
    width:100%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-image: url("./cover.png");
    background-size: cover;
    background-position: center;
`;

export default function getHeader() {
    return `
        <header style='${header}' id='home'>
            <div style='${container}'>
                <h1>Hola, yo soy Christian!</h1>
                <a href='#about'><p class='arrow__down arrow__white'></p></a>
            </div>
        </header>
    `;
}