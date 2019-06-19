import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import {List, Header, Segment, Button} from 'semantic-ui-react'; 
import BlogForm from './BlogForm'


const Blogs = (props) => {

  const [blogs, setBlogs] = useState([]); 
  const [showForm, setShowForm] = useState(false); 


  useEffect(() => {
    axios.get("/api/blogs")
    .then(res => {
      setBlogs(res.data)
    })
    .catch( err => {
      console.log(err)
    })
  }, [])


// const addBlog = (blog) => setBlogs([ ...blogs, blog, ]);



 const renderBlogs = () => {
    // const {blogs} = this.state; 
    return blogs.map(blog => 
        <Segment key={blog.id}>
          <List.Header as="h3">{blog.title}</List.Header>
          <List.Description>{blog.body}</List.Description>
        </Segment>
      )
  }

  return (
     <>
        <Header as="h1" style={{padding: '20px 0'}}>My Blogs</Header>
        <br/>
        {showForm && <BlogForm toggleForm={setShowForm} add={(blog) => setBlogs([ ...blogs, blog, ])} />}
        <Button onClick={() => setShowForm(!showForm)}>
          { showForm ? "Close Form" : "Show Form"}
        </Button>
        <List>
          {renderBlogs()}
        </List>
      </>
  )
}

export default Blogs; 


// export class Blogs extends Component {
//   // state is always going to be an object. although the key value pairs don't have to be, but the state does
//   state = {
//     blogs: []
//   }

//   componentDidMount() {
//     axios.get("/api/blogs")
//     .then(res => {
//       this.setState({blogs: res.data})
//     })
//     .catch( err => {
//       console.log(err)
//     })
//   }

//   // if you don't have a key, react can give it a key using the index while it is looping. You'd pass in two arguments, what you're looping through and the index, but it is not recommended because if you change the order of your items, it could mess up the index and your application

//   renderBlogs = () => {
//     const {blogs} = this.state; 
//     return blogs.map(blog => 
//         <Segment key={blog.id}>
//           <List.Header as="h3">{blog.title}</List.Header>
//           <List.Description>{blog.body}</List.Description>
//         </Segment>
//       )
//   }

//   render() {
//     return (
//       <>
//         <Header as="h1" style={{padding: '20px 0'}}>My Blogs</Header>
//         <br/>
//         <List>
//           {this.renderBlogs()}
//         </List>
//       </>
//     )
//   }
// }

// export default Blogs; 
