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
`

const arrow = `
    border: solid var(--white-color);
    border-width: 0 5px 5px 0;
    padding: 10px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    margin-top: 50px;
`;

export default function getHeader() {
    return `
        <header style='${header}'>
            <div style='${container}'>
                <h1>Hola, yo soy Christian!</h1>
                <a href='#about'><p style='${arrow}'></p></a>
            </div>
        </header>
    `;
}