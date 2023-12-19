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
          display: 'grid',
          gridTemplateColumns: '1fr 3fr',
          gridTemplateRows: '1fr 1fr',
        }}
      >

        {/* <p>{JSON.stringify(thread)}</p> */}
        <p style={{ border: 'solid black 1px', padding: '0.5rem', gridRow: '1 / -1' }}><b>User:</b>  {thread.user.name}</p>
        <div style={{ border: 'solid black 1px', padding: '0.5rem' }}>
          <p style={{ border: 'solid black 1px', padding: '0.5rem' }}><b>Title:</b> {thread.title}</p>
          <p style={{ border: 'solid black 1px', padding: '0.5rem' }}><b>CreatedAt:</b>  {thread.createdAt}</p>
        </div>

        <p style={{ border: 'solid black 1px', padding: '0.5rem' }}><b>Body:</b>  {thread.body}</p>
      </div>
    </>
  )
}

export default ThreadComp
