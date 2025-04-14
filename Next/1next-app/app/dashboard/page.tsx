import React from 'react'


function page() {
  return (
    <div className=' min-h-screen min-w-full bg-slate-50 text-black p-2 px-6 overflow-auto scrollbar-hide '>

        <nav className='fixed top-0 left-0 w-full bg-slate-50 z-30 p-2 px-6 border-b-2 ' >
            <div className=' flex  justify-between    mb-2 pb-3  '>

                <div className='flex justify-around gap-3 items-center ml-3'>
                <div className=' border-2 border-gray-500  py-1 px-2 rounded-full text-xs opacity-60'> @ </div> 
                <div className=' font-bold text-xl font-sef'><span className=' text-yellow-400 font-extrabold '>#</span> tiimi</div>
                <div className=' opacity-15'>|</div>
                <div className=' text-base font-semibold'>Create Job</div>
                </div> 
                
                <div className='flex  gap-2 items-center justify-center '> 
                <Ctmbutton children='preview' border='border-2' logo='#'/>
                 <Ctmbutton border='border-2' logo='@'/> <span className=' opacity-15 text-2xl font-semibold'>|</span>
                 <Ctmbutton logo='?' bg='bg-black'  txtcolor='text-white'/>
                </div>
            </div>
        </nav>
       
      <div className='mt-20 grid grid-cols-8 p-6 overflow-y-auto scrollbar-hide mb-10 '>
        <div className=' col-span-1 border-2 '>sidebar</div>
        <div className='col-span-7  ml-10 '>

          <div className='flex justify-between items-center'>

            <div className=' text-xl font-semibold  flex flex-col gap-5'>Create Score Card   <span className=' text-xs opacity-55 -mt-5'>Add a score card to determine the base of condidate evaluation</span> </div>
            
            
            <div><Ctmbutton logo='{}' children='Generate' border='border-2 border-blue-500' /></div>
          </div>
           <div className='    mt-6'>
            <RenderCards >
             
            </RenderCards>

            <RenderCards children='Screening' bg='bg-purple-500' />
           
           </div>
        
           
         </div>
      </div>

      
    <div className='fixed bottom-0 left-0 w-full bg-slate-50 border-t-2 p-3 flex justify-between '>
        <div>cancel</div>
        <div> two btn</div>
    </div>
    </div>
  )
}

export function Ctmbutton({
  children = '' ,
  logo = '',
  border = 'none',
  bg = '',
  txtcolor = '',
  rounded = 'rounded-lg'
  
   
 }) {
    return <div>
        <button className={`${border} ${bg} opacity-80 py-1 px-2 text-sm font-semibold  gap-2 ${txtcolor} ${rounded} `}>
         {logo}  {children}
        </button>
    </div>
}

export function RenderCards({
  children = 'Applying Period',
  bg = 'bg-orange-600'
}) {
  return   <div className=' mt-6 '>
     <div className=' bg-gray-200 rounded-xl  p-4 '>
      <div className=' flex justify-between mb-5'>
         <Ctmbutton children={children} txtcolor='text-white' bg={bg} rounded='rounded-full'/> 
         <Ctmbutton  children='Add score card' logo='+' border='border-2' bg='bg-slate-50 border-gray-300'/> </div>

      <div className=' overflow-x-auto  flex space-x-4 scrollbar-hide '>
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
    
      
    </div>
  
   </div>
 </div>
}

export function Card() {
   return <div >
     <div className=' bg-slate-50 min-w-80 rounded-lg border-2 border-gray-300 p-5'>

<div className='flex justify-between'>

  <div className=' text-sm font-semibold'>Reserch Experience </div>
  <div className=' flex gap-2'> <span className=' text-xs font-semibold text-gray-400 '>Enabled</span>
  <div className=' min-w-6 min-h-1 bg-black rounded-full flex items-center justify-end '>
    <div className=' min-w-3 min-h-1 bg-slate-50 rounded-full'></div> </div>
    </div>
</div>
<div className=' text-xs font-semibold  text-gray-600 '>
  Referns to the condidate's practical involvement in research activities.
</div>

<div className=' flex justify-between items-center mt-24 '>
 <div> <div> <span className=' text-gray-400 font-semibold'>Minimum score</span> 
  </div>

  <div className=' flex items-center gap-2'>
    <div>
      <span className=' text-yellow-400'>*</span></div>
  
   <div className=' text-sm font-semibold underline '>3 rating</div>
  </div>
  </div>
  <div> <button className=' bg-black rounded-full text-sm py-2 px-4 text-white font-bold'>/</button></div>
</div>
</div>
   </div>
}



export default page