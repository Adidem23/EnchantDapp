import {Routes,Route} from 'react-router-dom';
import ComposeAll from './Components/ComposeAll';
import Demo from './Components/Demo';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' Component={ComposeAll} />
      <Route path='/dlink' Component={Demo} />
    </Routes>
  
    </>
  )
}

export default App