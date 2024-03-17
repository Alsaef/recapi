import React from 'react';

const SubTable = (props) => {
  const {subCart}=props
    return (
        <div>
            <div className="overflow-x-auto">
           
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
       {
        subCart.map(cart=>(
          <tr className="bg-base-200 mt-2">
           <td>{cart.recipe_name}</td>
        <td>{cart.prepare_time}</td>
        <td>{cart.Calories}</td>
        </tr>
        ))
       }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default SubTable;