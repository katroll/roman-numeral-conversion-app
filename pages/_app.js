import '../styles/globals.css'
import Calculator from './Calculator';

import Converter from './Converter';


function Home() {
  return (
    <div className='page-container'>
      <h1 className='page-title'>Roman Numeral Converter</h1>
      <Converter />
      <Calculator />
    </div>
  )
}

export default Home;
