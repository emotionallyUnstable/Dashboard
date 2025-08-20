


function SettingsList() {
 

  return (
    
    <>
        <div className="flex flex-col gap-1.5">
            <button className="cursor-pointer rounded-xl bg-linear-to-r from-indigo-800 via-violet-500 to-indigo-800 border-black hover:border-pink-400 text-white hover:text-pink-300 py-[0.6em] px-[1.2em] border-1 bg-rgb(100,77,98)">Dashboard</button>
            <button className="cursor-pointer rounded-xl bg-linear-to-r from-indigo-800 via-violet-500 to-indigo-800 border-black hover:border-pink-400 text-white hover:text-pink-300 py-[0.6em] px-[1.2em] border-1">Reports</button>
            <button className="cursor-pointer rounded-xl bg-linear-to-r from-indigo-800 via-violet-500 to-indigo-800 border-black hover:border-pink-400 text-white hover:text-pink-300 py-[0.6em] px-[1.2em] border-1">Settings</button>
            <button className="cursor-pointer rounded-xl bg-linear-to-r from-indigo-800 via-violet-500 to-indigo-800 border-black hover:border-pink-400 text-white hover:text-pink-300 py-[0.6em] px-[1.2em] border-1">Logout</button>
        </div>      
    </>
  )
}

export default SettingsList;
