/* eslint-disable react/prop-types */

const UserCard = ({user})=>{
   console.log(user);
    const {firstName, lastName,} = user;

    return (
        <div >
      <div className="card bg-base-300 w-80  shadow-xl ">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName +" " +lastName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
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