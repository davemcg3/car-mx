import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <h1>Car Mx</h1>
      <Link href="/" as={process.env.BACKEND_URL + '/'}>
        <a>Home</a>
      </Link>
      &nbsp;|&nbsp;
      <Link href="/the-idea" as={process.env.BACKEND_URL + '/the-idea'}>
	<a>The Idea</a>
      </Link>
      &nbsp;|&nbsp;
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
      <br />
      Source: <a href="https://github.com/davemcg3/car-mx">This blog</a>
    </div>
  )
}

