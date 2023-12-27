import {Routes,Route} from 'react-router-dom';
import ComposeAll from './Components/ComposeAll';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' Component={ComposeAll} />
    </Routes>
  
    </>
  )
}

export default App