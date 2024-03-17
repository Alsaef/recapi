import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Components/Card/Card';
import Table from '../Components/table/Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubTable from '../Components/subTable/SubTable';

const Reccapi = () => {
    const [recapies,setRecepies]=useState([])
    const [carts,setCart]=useState([])
    const [subCart,setSubCart]=useState([])
  const addToCart=(recapi)=>{
    const exist=carts.find(recapis=> recapis.recipe_id === recapi.recipe_id)
    if (exist) {
        toast.success('already Added')
    }else{
        const newCart=[...carts,recapi]
        setCart(newCart)
        console.log(newCart)
    }
  }
  const removeCart= (recipe_id,recapi) =>{
    const remaning=carts.filter(recapi => recapi.recipe_id !== recipe_id)
    setCart(remaning)
    const newCart=[...subCart,recapi]
        setSubCart(newCart)
        console.log(newCart)
    }
    useEffect(()=>{
        fetch('racipies.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setRecepies(data)
        })
    },[])
    return (
        <div className='mt-6'>
           <div className='text-center text-black'>
           <h2 className='text-3xl'>Our Recipes</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate <br /> netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
           </div>

           <div className='flex items-start justify-around mt-8'>


<div className='grid grid-cols-2 gap-3'>
{
    recapies.map(recapie=>(
       <Card key={recapie.recipe_id} recapie={recapie} addToCart={addToCart}></Card>
    ))
}
</div>

<div className='px-3 py-3 rounded-lg border-2 border-black'>
<h2 className='text-center text-3xl font-bold'>Want to cook: {carts.length}</h2>
<Table carts={carts} removeCart={removeCart}></Table>
<div className='mt-4'>
<h2 className='text-center text-3xl font-bold'>Currently cooking: {subCart.length}</h2>
<SubTable subCart={subCart}></SubTable>
</div>
</div>


           </div>
        </div>
    );
};

export default Reccapi;