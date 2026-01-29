import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { createItem } from '../../redux/itemsSlice';
import { Wrapper } from './Form1Styled';


const Form1 = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    rating: "",
    file: null,
    category: "",
    price: ""
  });

  const handleChange = (e) => { 
    const{name, value} = e.target
    if(name==="price" && Number(value)<=0){
      return;
    }  // save whatever the user typed into formData
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {     // Save the selected image file in memory
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };


  const handleSubmit =(e) => {
    e.preventDefault();

    console.log("Form Data:");
    console.log("File:", formData.file);
    console.log("Name:", formData.name);
    console.log("Rating:", formData.rating);
    console.log("Description:", formData.desc);
    console.log("Category", formData.category);
    console.log("Price", formData.price)

    const data = new FormData();
    data.append("image", formData.file);
    data.append("name", formData.name);
    data.append("description", formData.desc);
    data.append("rating", formData.rating);
    data.append("category", formData.category)
    data.append('price', formData.price)

     dispatch(createItem(data));

    alert("Form submitted successfully");

      setFormData({
        name: "",
        desc: "",
        rating: "",
        file: null,
        category: "",
        price: ""
      });
    };

  return (
    <Wrapper>
    <div className='form'>
    <form onSubmit={handleSubmit}>
      <input type="file"
       name="file" onChange={handleFileChange} />
      <br /><br />

      <input
      className='input'
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />
      <br /><br />

      <input
       className='input'
        type="text"
        name="desc"
        placeholder="Type Description here"
        value={formData.desc}
        onChange={handleChange}
      />
      <br /><br />

      <input
       className='input'
        type="number"
        name="rating"
        placeholder="Enter rating"
        value={formData.rating}
        onChange={handleChange}
      />
      <br /><br />

      <input
       className='input' 
      type='text'
      name='category'
      placeholder='Type your category here...'
      value={formData.category}
      onChange={handleChange} 
      />

      <br /><br />

      <input
       className='input'
        type="number"
        name="price"
        placeholder="Enter price"
        value={formData.price}
        min="1"
        onChange={handleChange}
      />
      <br /><br />

      <button
       className='btn'
        type="submit">Submit</button>
    </form>
    </div>
    </Wrapper>
  );
};

export default Form1;


/*
What new FormData() is??
FormData is a built-in Web API used to construct a special object that represents form data exactly the way a browser sends it to a server.

data.append("image", formData.file);
This means:

“Add a field called image and attach this file object to it”

What it looks like internally (conceptually)
multipart/form-data
-------------------
image: (binary image file)
name: "iPhone"
description: "Good phone"
rating: "4"
category: "Electronics"
price: "500"


This is exactly what backend file upload middleware expects.
*/
