import React, { useState, } from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";
import {useFormInput} from '../hooks/useFormInput'; 

const BlogForm = (props) => {
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  
  const title = useFormInput("");
  const body = useFormInput("");
  

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // }

  // const handleBodyChange = (e) => {
  //   setBody(e.target.value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post("/api/blogs", { title, body, })
    axios.post("/api/blogs", {  title: title.value, body: body.value})
      .then( res => {
        props.add(res.data);
        props.toggleForm();
      })
  }

return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Title"
            placeholder="Title"
            name="title"
            required
            // when we spread this on the form, we are just creating a value and onChange that is taken from the hook. 
            {...title}
            // onChange={(e) => setTitle(e.target.value)}
            // value={title}
          />
          <Form.Input
            label="Body"
            placeholder="Body"
            name="body"
            required
            {...body}
            // onChange={(e) => setBody(e.target.value)}
            // value={body}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </>
  )
}

export default BlogForm;

// export class BlogForm extends Component {
//   state = {
//     title: "", 
//     body: ""
//   }

//   handleSubmit = (e) => {
//     e.preventDefault(); 
//     axios.post("/api/blogs", {...this.state}) 
//     .then(res => {
//       this.props.add(res.data) //will update the state 
//       this.props.toggleForm(); //will close the form after creation 
//     })

//   }; 

//   handleChange = (e, {name, value}) => {
//     this.setState({[name]: value, })
//   }

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Form.Group widths="equal"> 
//           <Form.Input
//             label="Title"
//             placeholder="Title"
//             name="title"
//             required 
//             onChange={this.handleChange}
//             value={this.state.title}
//           />
//           <Form.Input
//             label="Body"
//             placeholder="Body"
//             name="body"
//             required 
//             onChange={this.handleChange}
//             value={this.state.body}
//           />
//         </Form.Group>
        
//       </Form>
//     )
//   }
// }

// export default BlogForm
