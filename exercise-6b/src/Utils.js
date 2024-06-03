export function createPostEl(post){
    // create  postEL  (div)
    const postEl = document.createElement('div')
    //add className 'post-entry'
    postEl.className = 'post-entry anim-in'

    // insert HTML into the postEL (div)
    postEl.innerHTML = `
    <h2>${capitalize(post.title)}</h2>
    <p>${truncate (post.body, 5)}</p>
    <sl-button>Read more</sl-button>
    `
    //get read more link
    const readMoreBtn = postEl.querySelector( 'sl-button')
    // listen for click 
    readMoreBtn.addEventListener('click', () => {
      // create an <sl-dialog>
      const dialogEl = document.createElement('sl-dialog')

      // set the label attribute 
      dialogEl.setAttribute('label', capitalize(post.title))

      // insert HTML inside (innerHTML)
      dialogEl.innerHTML = `
      <p>${post.body}</p>`
      
      // append <sl-dialog> document.body 
      document.body.append(dialogEl)

      // show dialog 
      setTimeout(() =>{
        dialogEl.show()
      },10)
     

      // remove the dialog after hidden
      dialogEl.addEventListener('sl-after-hide', () => {
        dialogEl.remove()
      })
    })

    return postEl
}

export function capitalize(string){
  if (typeof string !== 'string') return''
  return string.charAt(0).toUpperCase() + string.slice(1)
}
 
export function truncate(string, numWords){
  let truncatedString = string.split(" ").splice(0, numWords).join(" ")
  truncatedString += '...'
  return truncatedString

}