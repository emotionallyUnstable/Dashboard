import './App.css'

import SettingsList from './Components/SettingsList';
import RavenueLine from './Components/RavenueLine';
import ActiveUsersBar from './Components/ActiveUsersBar';


//h-screen border-1

function App() {
 
  return (

    <>
    <div className=''>
    <div className='flex gap-2'>
      <div className='border-1 h-[201px] border-red-800'><SettingsList /></div>
      <div className='border-1 h-[201px] border-red-800'><RavenueLine /> </div>
      <div className='border-1 h-[201px] border-red-800'><ActiveUsersBar /></div>
    </div>
    </div>
    </>
  )
}

export default App;
