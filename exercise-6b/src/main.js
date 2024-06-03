
import PostAPI from './PostAPI.js'
import { createPostEl } from './Utils.js'

// get posts btn 
const getpostsBtn = document.querySelector('.get-posts-btn')
getpostsBtn.addEventListener('click', async () => {

    // get posts using the getPosts function
    try{
        //show "loading" inside the resultEl 
        //get resultEl
        const resultEl = document.querySelector('#result')
        // insert "loading"
        resultEl.innerHTML = '<sl-spinner style="font-size: 3em; --track-width:6px;"></sl-spinner> '

        //get posts
        const posts = await PostAPI. getPosts()
        console.log(posts)
        // remove loading text from resultEl
        resultEl.innerHTML = ''

        // loop through each post in posts 
        posts.forEach(post => {
            //create postEl (div)
            const postEl = createPostEl(post)
            // appened (insert) into the #result div 
            resultEl.append(postEl)
            // animate postEls
            gsap. fromTo('.anim-in' , {opacity: 0, y: -5}, {opacity: 1, y: 0, ease: "power2.out", duration: 1, stagger: 0.2})
        })
    }catch(err){
        alert(err)
    }
    
})

