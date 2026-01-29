import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL
console.log(BASE_URL,'BASE')

export const submitFormData = async (data) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/api/items`,
            data,

        )
        return response.data;
    } catch (err) {
        console.log(err, 'errorotoo')
    }

}



export const getItems = async({page=1, limit=10})=>{
    try{

        const response = await axios.get(
            `${BASE_URL}/api/items?page=${page}&limit=${limit}`,
        );
console.log(response.data.items, "gagahgshj")
        return response.data;

    }
    catch(err){
        console.log(err,"error")
    }
}

export const addToWishlist = async(data)=>{
    try{
        const response= await axios.post(
            `${BASE_URL}/api/wishlist`,
            data,
        )

        return response.data;
    }catch(err){
        console.log(err, 'errortoo')
    }
}

export const getWishlistItems = async()=>{
    try{
        const response = await axios.get(
            `${BASE_URL}/api/wishlist`,
        );

        console.log(response.data,'bfebfue')
        return response.data;
    }catch(err){
        console.log(err, "error")
    }
}

export const loginFormData = async(data)=>{
    const response = await axios.post(
        `${BASE_URL}/api/auth/login`,
        data
    );
    console.log(response.data, "vhfgfhjgfj")
    return response.data;
};


export const signupFormData = async(data)=>{
    const response = await axios.post(
        `${BASE_URL}/api/auth/signup`,
        data
    );
    console.log(response.data, "bhjvhvgc")
    return response.data;
};

