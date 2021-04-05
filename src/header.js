const styles = `
    background-color: var(--blue-primary);
    color: var(--white-color);
    height: 100vh;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
`

export default function getHeader() {
    return `
        <header style='${styles}'>
            <h1>Hola, yo soy Christian!</h1>
        </header>
    `;
}