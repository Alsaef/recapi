import React from 'react';

const Table = (props) => {
  const {carts,removeCart}=props
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
        carts.map(cart=>(
          <tr className="bg-base-200 mt-2">
           <td>{cart.recipe_name}</td>
        <td>{cart.prepare_time}</td>
        <td>{cart.Calories}</td>
        <td><button onClick={()=>removeCart(cart.recipe_id,cart)} className="py-2 px-2 bg-green-500 rounded-lg font-semibold">Preparing</button></td>
        </tr>
        ))
       }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Table;