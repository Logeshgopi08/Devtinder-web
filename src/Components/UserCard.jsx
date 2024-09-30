/* eslint-disable react/prop-types */

const UserCard = ({user})=>{
    const {firstName, lastName,age,photoUrl,gender,About,skills} = user;
    
    

    return (
        <div >
      <div className="card bg-base-300 w-80  shadow-xl ">
        <figure>
          <img className="w-full h-96"
            src={photoUrl}
            alt="img"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName +" " +lastName}</h2>
          <p>{age}</p><p>{gender}</p>
          <p>{About}</p>
          <p>{skills}</p>
          <div className="card-actions justify-end py-2">
            <button className="btn btn-secondary">Ignore</button>
            <button className="btn btn-primary">Interested</button>
          </div>
        </div>
      </div>
      
    </div>
    );
}

export default UserCard;