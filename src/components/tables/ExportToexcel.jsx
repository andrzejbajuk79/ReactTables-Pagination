import React, {Component} from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

class ExportToExcel extends Component {
 constructor(props) {
  super(props)
 }

 render() {
  return (
   <div>
    <ReactHTMLTableToExcel
     id="test-table-xls-button"
     className="download-table-xls-button"
     table="table-to-xls"
     filename="tablexls"
     sheet="tablexls"
     buttonText="Download as XLS"
    />
    <table id="table-to-xls" hidden="true">
     <thead>
      <tr>
       <th>User id</th>
       <th>Id</th>
       <th>Title</th>
       <th>Content</th>
      </tr>
     </thead>
     <tbody>
      {this.props.posts.map((post) => {
       return (
        <tr key={post.id}>
         <td>{post.userId}</td>
         <td>{post.id}</td>
         <td>{post.title}</td>
         <td>{post.body}</td>
        </tr>
       )
      })}
     </tbody>
    </table>
   </div>
  )
 }
}

export default ExportToExcel
