import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ArticlesCell />

      <div
        style={{
          height: '50vh',
          // background: 'limegreen',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '10%',
        }}
      >
        <h1 className="mb-2 text-xl">TulsaForums.com</h1>
        <h1 className="mb-2">Coming Soon</h1>
        <h1 className="mb-2">Launching Jan 2024</h1>
        <h1 className="">(we will use a faster database once launched)</h1>
      </div>
    </>
  )
}

export default HomePage
