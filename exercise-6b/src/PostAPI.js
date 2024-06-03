class PostAPI {
   async getPosts(){
     //fetch the json data
     const response = await fetch(' https://jsonplaceholder.typicode.com/posts')

     //check if the response was ok
     if(!response.ok){
        const message = 'Problem getting posts: ${response.status}'
        throw new Error(message)
     }

      // convert response payload into json - store as data 
      const data = await response.json()

     //return data 
     return data 
    }
 } 

export default new PostAPI()

 

 
 