import './GameEnd.css'

const GameEnd = ({retry, score}) => {
  return (
    <div>
      <h2>Fim de jogo!</h2>
      <h2>A sua pontução foi <span>{score}</span></h2>
      <button onClick={retry}>Voltar por começo</button>
    </div>
  )
}

export default GameEnd