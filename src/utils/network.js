

export const getApiResource = async (url) =>{
    try{
    const res = await fetch(url);
    
    if(!res.ok){
        console.error('Could not fetch.', res.status);
        return false;
    }
    return await res.json();
    }
        catch(error){
            console.error('Could not fetch.', error.message);
            return false;
        }
}
// (async() => {
//     const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//     console.log(body);
// })();

// export const getApiResource = (url) =>{
//     fetch(url)
//         .then(response => response.json())
//         .then(body=> console.log(body))
//         .catch(error=> console.log(error.message))
// }

// export const getApiResource = async (url) =>{
//     const res = fetch(url);
//     const body = res.json;

//     console.log(res, body);

//     fetch(url)
//         .then(res=> res.json())
//         .then(body => console.log(body))
//         .catch(error => console.log(error.message))
// }

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
//     .then (body => console.log(body))

  