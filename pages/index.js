import Link from 'next/link'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Header />

      <h2>Updates</h2>
      <div>
        <p>Check out&nbsp;
        <Link href="/the-idea" as={process.env.BACKEND_URL + '/the-idea'}>
          <a>The Idea</a>
        </Link>
        &nbsp;to get a sense of what I'm building.<br />
        <small>davemcg3 20210926</small></p>
      </div>
    </div>
  )
}

