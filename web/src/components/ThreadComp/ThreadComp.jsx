const ThreadComp = ({ thread }) => {
  return (
    <div>
      <h2>{'ThreadComp'}</h2>
      <p>{JSON.stringify(thread)}</p>
      <p><b>Title:</b> {thread.title}</p>
      <p><b>Body:</b>  {thread.body}</p>
      <p><b>UserId:</b>  {thread.userId}</p>
      <p><b>CreatedAt:</b>  {thread.createdAt}</p>
    </div>
  )
}

export default ThreadComp
