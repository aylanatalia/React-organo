import Colaborador from '../Colaborador';
import './Time.css'
import hexToRgba from 'hex-to-rgba'; 

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {

    return ( // não se usa if no jsx
        colaboradores.length > 0 && <section className='time' style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6')}}>
            <input type='color' className='input-cor' value={time.corPrimaria} onChange={evento => mudarCor(evento.target.value, time.nome)} />
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador corDeFundo={time.cor} key={indice} colaborador={colaborador} aoDeletar={aoDeletar} />
                })}
            </div>
        </section>
    )
}

export default Time;