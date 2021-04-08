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

const link = `
    color: #f5f5f5;
    text-decoration: none;
    margin-bottom: 1rem;
`;

function getTalk(title, id_video) {
    return `
        <a
            href='https://youtu.be/${id_video}'
            target='_blank'
            style='${link}'
            class='talk'>
            &#8227; ${title}
        </a>
    `
}

function getTalks() {
    return `
        ${getTalk('Juguetes para hackers y makers','cuGrSembV8s')}
        ${getTalk('Análisis de la pandemia Covid-19 en México aplicando modelos de M.L.','mF4yEaIo_Bw')}
        ${getTalk('Importancia del diseño en el desarrollo web','ANvHZzmmnss')}
    `
}

export default function getTalksSection() {
    return `
        <section id='talks' style='${talks_id}'>
            <a href='#about'><p class='arrow__up arrow__white'></p></a>
            <h4 style='margin-bottom: 1rem;'>Charlas cool que he dado</h4>
            ${getTalks()}
            <a href='#talks'><p class='arrow__down arrow__white'></p></a>
        </section>
    `;
}