import dayjs from "dayjs"

const formatDate     = (date_time) => dayjs(date_time).format('YYYY-MM-DD');
const formatTime     = (date_time) => dayjs(date_time).format('h:mm:ss a');

const Entry = ({ entry }) => {
  return (
    <>
      <div
        className="border-gray-800 border-b-2"
        style={{
          // border: '1px solid red',
          padding: '10px',
          display: 'grid',
          gridTemplateColumns: '1fr 3fr',
          gridTemplateRows: 'auto 1fr',
        }}
      >

        {/* <p>{JSON.stringify(entry)}</p> */}
        <p className="border-gray-800 border-r-2" style={{ padding: '0.5rem', gridRow: '1 / -1' }}>— {entry.user?.name}</p>

        <div style={{ padding: '0.5rem' }}>
          {entry?.title && <p className="mb-2"><b>Title:</b> {entry.title}</p> }
          <p style={{ opacity: '0.4'}}><span>{formatDate(entry.createdAt)}</span> <span className="mx-2">|</span> <span>{formatTime(entry.createdAt)}</span></p>
        </div>

        <p style={{ padding: '0.5rem' }}>{entry.body}</p>
      </div>
    </>
  )
}

export default Entry
