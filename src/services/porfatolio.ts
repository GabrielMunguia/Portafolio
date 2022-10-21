const BASE_URL = 'https://munguia-rest.herokuapp.com/api'; 

export const getPresentation=async()=>{
    const res = await fetch(`${BASE_URL}/presentation`);
    const data = await res.json();
    return data;
}


export const getCharacteristics=async()=>{
    const res = await fetch(`${BASE_URL}/about`);
    const data = await res.json();
    return data;
}

export const getTechnologies= async()=>{
    const res = await fetch(`${BASE_URL}/technologies`);
    const data = await res.json();
    return data;
}



export const getProjects=async()=>{
    const res = await fetch(`${BASE_URL}/projects`);
    const data = await res.json();
    return data;
}