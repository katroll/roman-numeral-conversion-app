import '../styles/globals.css'

import Converter from './Converter';


function Home() {
  return (
    <div className='page-container'>
      <h1 className='page-title'>Roman Numeral Converter</h1>
      <Converter />
    </div>
  )
}

export default Home;
