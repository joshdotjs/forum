const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Entry = ({ entry }) => {
  return (
    <div
      style={{
        border: '1px solid red',
        padding: '10px',
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gridTemplateRows: 'auto 1fr',
      }}
    >

      {/* <p>{JSON.stringify(entry)}</p> */}
      <p style={{ border: 'solid black 1px', padding: '0.5rem', gridRow: '1 / -1' }}><b>User:</b>  {entry.user?.name}</p>
      <div style={{ border: 'solid black 1px', padding: '0.5rem' }}>
        {entry?.title && <p style={{ border: 'solid black 1px', padding: '0.5rem' }}><b>Title:</b> {entry.title}</p> }
        <p style={{ border: 'solid black 1px', padding: '0.5rem' }}>{formattedDate(entry.createdAt)}</p>
      </div>

      <p style={{ border: 'solid black 1px', padding: '0.5rem' }}><b>Body:</b>  {entry.body}</p>
    </div>
  )
}

export default Entry
