


const ConnectionBox = ({data}) => {
   const {firstName,lastName,photoUrl} = data;
  return (
    <div className="flex justify-between w-1/2 mx-auto bg-base-300 px-5 py-5 rounded-lg my-4 mt-8">
    <div className="">
      <img
        className="w-28 h-28 rounded-full object-fill"
        alt="user-image"
        src={photoUrl}
      />
    </div>
    <div>
      <h2>
        {" "}
        {firstName} {lastName}
      </h2>
      
    </div>
    <div className="flex flex-col">
      
    </div>
  </div>
  )
}

export default ConnectionBox
