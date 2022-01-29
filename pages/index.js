import Poster from './components/Poster/Poster'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import Movies from './components/Movies/Movies'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <Header />
     <Poster/>
     <Input />
     <Movies />
    </div>
  )
}
