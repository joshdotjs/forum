const ThreadComp = ({ thread }) => {
  return (
    <>
      <h2 style={{
        color: 'red',
        fontSize: '20px',
        fontWeight: 'bold',
      }}>{'ThreadComp'}</h2>
      <div
        style={{
          border: '1px solid red',
          padding: '10px',
        }}
      >

        {/* <p>{JSON.stringify(thread)}</p> */}
        <p><b>Title:</b> {thread.title}</p>
        <p><b>Body:</b>  {thread.body}</p>
        <p><b>UserId:</b>  {thread.userId}</p>
        <p><b>CreatedAt:</b>  {thread.createdAt}</p>
        <p><b>User:</b>  {thread.user.name}</p>
      </div>
    </>
  )
}

export default ThreadComp
