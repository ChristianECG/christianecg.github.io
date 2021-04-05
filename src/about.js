const styles = `
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const subtitle = `
    color: #7d7d7d;
`;

const content = `
    display: grid;
    grid-template-columns: 12rem auto;
`;

const profile = `
    width: 11rem;
    margin-top: 1rem;
    border: var(--black-color) 3px solid;
    border-radius: 50%;
    align-self: flex-start;
`;

const arrow = `
    border: solid var(--black-color);
    border-width: 0 5px 5px 0;
    padding: 10px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    margin-top: 50px;
`;

export default function getAboutMe() {
    return `
        <section id='about' style='${styles}'>
            <section class='img-text' style='${content}'>
                <div>
                    <center>
                        <img src='./profile.png' style='${profile}'>
                    </center>
                </div>
                <div style='padding-left:1rem'>
                    <h3>Christian Elías Cruz González</h3>
                    <h6 style='${subtitle}'>
                        Software developer | DSC Lead at Google | Unrecognized Writer
                    </h6>
                    <p>
                        Soy un desarrollador de software full-stack, trabajando en
                        lenguajes como Java, PHP, Kotlin y Python. En general,
                        admiro a la gente que insiste en encontrar formas de
                        emocionarse.
                    </p>
                    <p>
                        Soy estudiante de 6to semestre de Ing. en Tecnologías de la
                        Información y Comunicaciones en ITSOEH, desarrollador
                        backend. Amante de los gatos y el buen café.
                    </p>
                </div>
            </section>
            <a href='#about'><p style='${arrow}'></p></a>
        </section>
    `;
}