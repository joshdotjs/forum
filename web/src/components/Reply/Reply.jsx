const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Reply = ({ reply }) => {
  return (
    <div>
      <h2>{reply.name}</h2>
      <time dateTime={reply.createdAt}>{formattedDate(reply.createdAt)}</time>
      <p>{reply.body}</p>
    </div>
  )
}

export default Reply
