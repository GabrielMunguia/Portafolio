const BASE_URL = 'https://munguia-rest.herokuapp.com/api'; 

export const getPresentation=async()=>{
    const res = await fetch(`${BASE_URL}/presentation`);
    const data = await res.json();
    return data;
}

