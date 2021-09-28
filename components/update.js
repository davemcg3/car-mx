export default function update({ title="", text, author, date }) {
  return (
    <div>
      {title !== "" ? `<h3>title</h3>` : ``}
      {text}
      <div>
        <small>{author} {date}</small>
      </div>
    </div>
  )
}
