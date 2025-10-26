interface apiProps{
    endpoint:string,
    option?:RequestInit
}
const API = async({endpoint,option}:apiProps)=>{
       try {
         const url = `https://hospital-backend-fmzr.onrender.com/api/${endpoint}`
         const res = await fetch(url,option)
         const data = await res.json()
         if(!res.ok){
             
             console.log(data.message||'something went wrong');
            
             
             throw new Error(data.message)
         }

         return data
       } catch (error) {
        throw error
        
       }
}

export default API