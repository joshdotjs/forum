import dayjs from "dayjs"

const formatDate     = (date_time) => date_time.format('YYYY-MM-DD');
// const formatTime     = (date_time) => date_time.format('HH:mm:ssZ');
const formatTime     = (date_time) => date_time.format('h:mm:ss a');
// const formatDateTime = (date, time) => `${formatDate(date)} ${formatTime(time)}`;

// const formattedDate = (datetime) => {
//   const parsedDate = new Date(datetime)
//   const month = parsedDate.toLocaleString('default', { month: 'long' })
//   const time = dayjs(datetime).format('h:mm:ss a')
//   return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()} | ${time}`
// }
const formattedDate = (datetime) => {
  const date_time = dayjs(datetime)
  const date = formatDate(date_time)
  const time = formatTime(date_time)
  return `${date} | ${time}`
}

const Entry = ({ entry }) => {
  return (
    <>
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
        <p style={{ border: 'solid black 1px', padding: '0.5rem', gridRow: '1 / -1' }}>— {entry.user?.name}</p>
        <div style={{ border: 'solid black 1px', padding: '0.5rem' }}>
          {entry?.title && <p style={{ border: 'solid black 1px', padding: '0.5rem' }}><b>Title:</b> {entry.title}</p> }
          <p style={{ border: 'solid black 1px', padding: '0.5rem' }}>{formattedDate(entry.createdAt)}</p>
        </div>

        <p style={{ border: 'solid black 1px', padding: '0.5rem' }}>{entry.body}</p>
      </div>
    </>
  )
}

export default Entry
