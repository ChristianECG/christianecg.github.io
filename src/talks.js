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

const video = `
    width: 400px;
    height: 40vh;
    max-width: 100vw;
`;

function getTalk(title, id_video) {
    return `
        <article class='slide'>
            <center>
                <h6>${title}</h6><br>
                <iframe
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
                </iframe>
            </center>
        </article>
    `
}

function getTalks() {
    let talks = `
        ${getTalk('Juguetes para hackers y makers','cuGrSembV8s')}
        ${getTalk('Importancia del diseño en el desarrollo web','ANvHZzmmnss')}
        ${getTalk('Análisis de la pandemia Covid-19 en México aplicando modelos de M.L.','mF4yEaIo_Bw')}
    `

    return talks + talks;
}

export default function getTalksSection() {
    return `
        <section id='talks' style='${talks_id}'>
            <a href='#about'><p class='arrow__up arrow__white'></p></a>
            <h4 style='margin-bottom: 1rem'>Charlas cool que he dado</h4>
            <section class='slider'><section class='slide-track'>
                ${getTalks()}
            </section></section>
            <a href='#talks'><p class='arrow__down arrow__white'></p></a>
        </section>
    `;
}