import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/aylanatalia" target="_blank">
                        <img src="./imagens/github.png" alt="Gitbub" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/aylanatalia/" target="_blank">
                        <img src="./imagens/linkedin.png" alt="Linkedin" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape