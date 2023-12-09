import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'
import LocationsCell from 'src/components/LocationsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.jsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
      </p>

      <hr />

      <div>
        Article Cell:
        <ArticlesCell />
      </div>

      <hr />

      <div>
        Locations Cell:
        <LocationsCell />
      </div>
    </>
  )
}

export default HomePage
