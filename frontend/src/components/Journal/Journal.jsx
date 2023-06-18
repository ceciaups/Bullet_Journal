import Header from '../../components/Header'
import './Journal.css'

export default function Journal() {
  return (
    <div id="journal">
      <Header />
      <main id="book">
        <div id="left-page"></div>
        <div id="right-page"></div>
      </main>
    </div>
  )
}