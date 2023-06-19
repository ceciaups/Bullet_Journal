import Header from '../Header'
import './User.css'

export default function Error() {
  return (
    <div id="user">
      <Header />
      <h2>Error: Failed to connect the database</h2>
    </div>
  )
}