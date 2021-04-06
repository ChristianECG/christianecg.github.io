const talks_id = `
    background-color: var(--blue-variant);
    color: var(--white-color);
    min-height: 100vh;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const talks = `
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 3rem;
`;

const talk = `
    width: 100%;
    max-width: 500px;
    min-width: 100px;
    margin-bottom: 1rem;
`;

const video = `
    width: 95%;
    height: 300px;
`;

function getTalk(title, id_video) {
    return `
        <article style='${talk}'>
            <center><h6>${title}</h6></center>
            <center><iframe
                style='${video}'
                src="https://www.youtube.com/embed/${id_video}"
                frameborder="0"
                allow="
                    accelerometer;
                    autoplay;
                    clipboard-write;
                    encrypted-media;
                    gyroscope;
                    picture-in-picture"
                allowfullscreen
            >
            </iframe></center>
        </article>
    `
}

export default function getTalksSection() {
    return `
        <section id='talks' style='${talks_id}'>
            <a href='#about'><p class='arrow__up arrow__white'></p></a>
            <h3>Charlas cool que he dado<br></h3>
            <section style='${talks}'>
                ${getTalk('Juguetes para hackers y makers','cuGrSembV8s')}
                ${getTalk('Importancia del diseño en el desarrollo web','ANvHZzmmnss')}
                ${getTalk('Análisis de la pandemia Covid-19 en México aplicando modelos de M.L.','mF4yEaIo_Bw')}
            </section>
            <a href='#talks'><p class='arrow__down arrow__white'></p></a>
        </section>
    `;
}