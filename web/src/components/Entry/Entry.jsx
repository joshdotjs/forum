import { truncate, formatDate, formatTime } from "src/lib/formatters"

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
        <p
          className="border-gray-800 border-r-2"
          style={{
            padding: '0.5rem',
            gridRow: '1 / -1',
            minWidth: '120px',
          }}
        >
          {/* — {truncate(entry.user?.name, 50)} */}
          <span className="hidden lg:inline">— </span>
          {/* <span className="inline sm:hidden">{truncate('01234567890123456789', 10)}</span> */}
          {/* <span className="hidden sm:inline md:hidden">{truncate('01234567890123456789', 12)}</span> */}
          {/* <span className="hidden md:inline lg:hidden">{truncate('01234567890123456789', 16)}</span> */}
          {/* <span className="hidden lg:inline">{truncate('01234567890123456789', 20)}</span> */}
          <span className="inline sm:hidden">{truncate(entry.user.name, 10)}</span>
          <span className="hidden sm:inline md:hidden">{truncate(entry.user.name, 12)}</span>
          <span className="hidden md:inline lg:hidden">{truncate(entry.user.name, 16)}</span>
          <span className="hidden lg:inline">{truncate(entry.user.name, 20)}</span>

        </p>

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
