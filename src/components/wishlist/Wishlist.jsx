import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist } from "../../redux/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlistState = useSelector((state) => state.wishlist);


  const {
    wishlist = [],
    loading = false,
    error = null,
  } = wishlistState || {};

 


  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  useEffect(()=>{
    console.log(wishlist,'bdbffbufuefbeuf')

  })


  if (loading) return <h2>Loading wishlist...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>

      {wishlist.length === 0 && <p>No items in wishlist</p>}

        {wishlist.map((wish) => (
          <div key={wish.id}>
          <div className="wishlist-card">
          <div className="container1">
          <div>
            <img
              src={wish.item.imageUrl}
              alt={wish.item.name}
              width={200}
            />
            </div>
            </div>
            <div className="container2">
            <div>Name: {wish.item.name}</div>
            <div>Rating: {wish.item.rating}</div>
            <div>Desc: {wish.item.description}</div>
            <div>Price: {wish.item.price}</div>
            <div>Category: {wish.item.category}</div>
            </div>
          </div>
          </div>
        ))}
    </div>
  );
};

export default Wishlist;
