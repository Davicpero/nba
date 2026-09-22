import { useState } from 'react'
import { Card } from './components/Card'
import { Header } from './components/Header'
import './App.css'
import styles from './styles/App.module.css'
import lebronImg from "./assets/lebronImg.jpg"
import curryImg from "./assets/curryImg.jpg"
import giannisImg from "./assets/giannisImg.jpg"
import nikolaImg from "./assets/nikolaImg.jpg"
import lukaImg from "./assets/lukaImg.jpg"
import tatumImg from "./assets/tatumImg.jpg"
import cperoImg from "./assets/cperoImg.png"


const JOGADORES_INICIAIS = [
  { id: 3, nome: "G. Antetokounmpo", foto: giannisImg },
  { id: 4, nome: "J. Tatum", foto: tatumImg },
  { id: 5, nome: "L. Doncic", foto: lukaImg },
  { id: 1, nome: "L. James", foto: lebronImg },
  { id: 6, nome: "N. Jokic", foto: nikolaImg },
  { id: 2, nome: "S. Curry", foto: curryImg },
  { id: 7, nome: "S. Pero", foto: cperoImg }
]

function App() {
  const [listaJogadores] = useState(JOGADORES_INICIAIS)

  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.gridJogadores}>
        {listaJogadores.map((jogador) => (
          <Card key={jogador.id} jogador={jogador} />
        ))}
      </main>
    </div>
  )
}

export default App