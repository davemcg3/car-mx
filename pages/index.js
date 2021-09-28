import Header from '../components/header'
import Update from '../components/update'
import Update20210926 from '../updates/20210926.js'
import Update20210927 from '../updates/20210927.js'

export default function Home() {
    return (
    <div>
      <Header />

      <h2>Updates</h2>
      <hr />
      {Update(Update20210927)}
      <hr />
      {Update(Update20210926)}
      <hr />
    </div>
  )
}

