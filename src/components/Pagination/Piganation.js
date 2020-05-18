import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Posts from './Posts'
import Paginator from './Paginator'

const Piganation = () => {
 const [posts, setPosts] = useState([])
 const [loading, setloading] = useState(false)
 const [currPage, setCurrPage] = useState(1)
 const [postPerPage] = useState(15)

 useEffect(() => {
  const getPosts = async () => {
   try {
    setloading(true)
    const data = await axios.get(
     'https://jsonplaceholder.typicode.com/posts' //
    )
    setPosts(data.data)
    setloading(false)
   } catch (err) {
    console.log(err)
   }
  }
  getPosts()
 }, [])

 //getCurrentPosts
 const indexOfLastPost = currPage * postPerPage //10 na 1 stronie
 const indexOfFirstPost = indexOfLastPost - postPerPage
 const getCurrentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
 //change page
 const paginate = (pageNumber) => {
  console.log('pageNumber', pageNumber)

  setCurrPage(pageNumber)
 }
 return (
  <div className="container mt-5">
   <h3 className="text-primary mb-2 text-center text-xs-center">Pagination</h3>
   <Posts posts={getCurrentPosts} loading={loading} />
   <Paginator
    paginate={paginate}
    postsPerPage={postPerPage}
    totalPosts={posts.length}
   />
  </div>
 )
}

export default Piganation
