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
    margin-bottom: 50px;
`;

export default function getAboutMe() {
    return `
        <section id='about' style='${styles}'>
            <a href='#home'><p class='arrow__up arrow__dark'></p></a>
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
                    <p class='social__icons'>
                        <a href='https://twitter.com/ChristianECG_' target='_blank'>
                            <i class="fab fa-twitter"
                                style='background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%);'>
                            </i>
                        </a>
                        <a href='https://www.instagram.com/christianeliascg/' target='_blank'>
                            <i class="fab fa-instagram"
                                style='background-image:
                                    linear-gradient(43deg,
                                        #4158D0 0%,
                                        #C850C0 46%,
                                        #FFCC70 100%);'>
                            </i>
                        </a>
                        <a href='https://www.linkedin.com/in/christianeliascg/' target='_blank'>
                            <i class="fab fa-linkedin"
                                style='background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);'>
                            </i>
                        </a>
                        <a href='https://github.com/ChristianECG' target='_blank'>
                            <i class="fab fa-github"
                                style='background: linear-gradient(90deg, #0700b8 0%, #00ff88 100%);'>
                            </i>
                        </a>
                    </p>
                </div>
            </section>
            <a href='#talks'><p class='arrow__down arrow__dark'></p></a>
        </section>
    `;
}