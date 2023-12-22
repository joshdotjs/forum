import { Toaster } from '@redwoodjs/web/toast'
import Navbar from "./ForumNavbar"

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import img from './adobe-loading-animation--rounded-7dot-5px--dark.json';

const ForumLayout = ({ children }) => {

  return <>
    <Toaster />
    <Navbar />
    {children}

    <Player
      autoplay
      loop
      // src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
      src={img}
      style={{ height: '300px', width: '300px' }}
    >
      <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>

  </>
}

export default ForumLayout