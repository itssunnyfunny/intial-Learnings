

function Card({
    btntext = 'Data layer',
    btncolor = 'bg-blue-100',
    content = 'Unify all content',

}) {
  return (
    <>
     <div>
      <div className=" border-2 shadow-md  pl-5 pt-4 p-8 text-start max-w-sm rounded-xl"> 
      <div><button className={` rounded-full  px-2 py-1 mb-3 ${btncolor}`} >{btntext}</button></div>
      <div className=" text-3xl font-bold">{content}</div>
      <div className={` my-4`}>Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Temporibus iste omnis similique dolore facilis
          eveniet itaque quo reprehenderit sed ea nesciunt optio eum illum non
           nisi, mollitia modi qui voluptas.</div>
      <div className=" underline text-md font-semibold"><link rel="stylesheet" href="" />learn more about connect </div>
      </div>
     </div>
    </>
  )
}

export default Card