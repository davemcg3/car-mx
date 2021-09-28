import Link from 'next/link'

export default {
  "title": "",
  "text": <div>Check out&nbsp;
  <Link href="/the-idea" as={process.env.BACKEND_URL + '/the-idea'}>
<a>The Idea</a>
</Link>
&nbsp;to get a sense of what I'm building.</div>,
  "author": "davemcg3",
  "date": "20210926"
}
