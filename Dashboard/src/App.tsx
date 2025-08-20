import './App.css'

import SettingsList from './Components/SettingsList';
import RavenueLine from './Components/RavenueLine';
import ActiveUsersBar from './Components/ActiveUsersBar';
import TaskBoard from './Components/TaskBoard';
import CryptoLine from './Components/CryptoLine';

//h-screen border-1

function App() {
 
  return (

    <>
    <div className='flex border-1 max-w-[1200px]'>
    <div className='flex flex-wrap gap-2'>
      <div className='border-1 h-[201px] border-red-800'><SettingsList /></div>
      <div className='border-1 h-[201px] border-red-800'><RavenueLine /> </div>
      <div className='border-1 h-[201px] border-red-800'><ActiveUsersBar /></div>
      <div className='border-1 h-[201px] border-red-800'><TaskBoard /></div>

      <div className='border-1 h-[201px] border-red-800'><CryptoLine /></div>
    </div>
    </div>
    </>
  )
}

export default App;
