/*{
  import React, { useEffect, useState } from 'react'
import { Wrapper } from './CardStyled'
import { getItems } from '../../api/form'

const Card =() => {

const[item, setItem] = useState([])

useEffect(()=>{
getItemsData()

},[])

const getItemsData = async()=>{
    try{
        const items = await getItems()
        setItem(items)
    }
    catch(err){
        console.log(err, 'error')
    }
}

useEffect(()=>{
    console.log(item, 'items')
},[item])



  return (
   <>
               {item?.map((items)=>(

    <Wrapper key={items._id}>
                

        <div className='container1'>
            <div><img src={items.imageUrl} alt='image'  /></div>
        </div>
        <div className='container2'>
            <div className='box'>{items.name}</div>
            <div className='box'>{items.rating}</div>
            <div className='box'>{items.description}</div>

        </div>
        
    ))
         </Wrapper>
              ))}
   </>
  )
 }

 export default Card
}
*/


import React, { useEffect } from 'react'
import { Wrapper } from './CardStyled'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../../redux/itemsSlice'
import { wishlistItems } from '../../redux/wishlistSlice'
import PriceFilter from '../Filter/PriceFilter'

const Card = () => {

  const dispatch = useDispatch()    
  //dispatch is a function     👉 You use it to send actions to Redux
  const item = useSelector((state) => state.items.items)
  /*       state → entire Redux store
  state.items → items slice
state.items.items → array of items from backend

👉 item becomes:

[
  { _id, name, imageUrl, rating, description },
  ...
]      */

  const filters = useSelector((state)=> state.items.filters);

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

/*   Calls Redux
Redux calls backend
Backend sends items
Redux saves items in store

🧠 This runs once when page opens   */

  useEffect(() => {
    console.log(item, 'items')
  }, [item])

  const handleAddCart=(itemId)=>{
    const payload={
      itemId: itemId
    }
dispatch(wishlistItems(payload))  
}

const filteredItems =
   
    
      item?.filter((product) =>{
         if (filters.prices.length === 0) return true
         return filters.prices.some(
            (range) =>
              product.price >= range.min &&
              product.price < range.max
          )})
      
        .filter((product)=>{
          if(!filters.rating) return true;
          console.log("efbbeufbue")
          return product.rating >= filters.rating
        
        }
      
      )

      .filter((product)=>{
          if(!filters.category) return true;
          return product.category.toLowerCase().includes(filters.category.toLowerCase())
        
        }
      
      )
console.log(filteredItems,'filtereditems')
  return (
    <>
    <PriceFilter />
      {filteredItems?.map((items) => (

        <Wrapper key={items._id}>
        <div className='card'>

          <div className='container1'>
            <div>
              <img src={items.imageUrl} alt='image' width={250} />
            </div>
          </div>

          <div className='container2'>
            <div className='box'>Name: {items.name}</div>
            <div className='box'>Description: {items.description}</div>
            <div className='box'>Rating: {items.rating}</div>
            <div className='box'>Category: {items.category}</div>
            <div className='box'>Price: {items.price}</div>
            <button className='btn' onClick={()=>handleAddCart(items._id)}>Add to Wishlist</button>
          </div>
</div>
        </Wrapper>
      ))}
    </>
  )
}

export default Card

 /*  Key Mental Model 🧠

 _id is where the data comes from
itemId is what we call it when we send it
so _id===itemId 

| Name     | Who decides it | Where                      |
| -------- | -------------- | -------------------------- |
| `_id`    | Database       | Backend response           |
| `itemId` | API contract   | Frontend → Backend request |


Backend sends → items._id
Frontend reads → items._id
Frontend renames → itemId
Frontend sends → { itemId }
Backend receives → req.body.itemId

✔️ You are sending the ID using the name you choose (itemId)
✔️ Backend does not care what the original field was called
✔️ Backend only cares about what key it receives in request body

Backend owns data values, frontend follows API key names.

payload = { itemId }

🧠 Mental model
useDispatch → send actions
useSelector → read state


*/