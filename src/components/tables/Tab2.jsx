import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
import ExportToExcel from './ExportToexcel'

const Tab2 = () => {
 const [posts, setPosts] = useState([])
 const [, setloading] = useState(false)
 const getPosts = async () => {
  try {
   const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
   setPosts(data.data)
   setloading(true)
  } catch (err) {
   console.log(err)
  }
 }
 const deleteRow = (id) => {
  const index = posts.findIndex((post) => {
   return post.id === id
  })
 }
 const columns = [
  {
   Header: 'User Id',
   accessor: 'userId',
   style: {textAlign: 'center'},
   width: 100,
   maxWidth: 100,
   minWidth: 100,
  },
  {
   Header: 'ID',
   accessor: 'id',
   style: {textAlign: 'center'},
   width: 100,
   maxWidth: 100,
   minWidth: 100,
  },
  {Header: 'Title', accessor: 'title', sortable: false, filterable: false},
  {Header: 'Content', accessor: 'body', sortable: false, filterable: false},
  {
   Header: 'Actions',
   Cell: (props) => {
    return (
     <button
      className="btn btn-sm btn-danger"
      onClick={() => {
       deleteRow(props.original.id)
      }}
     >
      Delete
     </button>
    )
   },
   sortable: false,
   filterable: false,
   width: 100,
   maxWidth: 100,
   minWidth: 100,
  },
 ]

 useEffect(() => {
  getPosts()
 }, [])
 return (
  <div>
   <h2> Tabela 2</h2>
   <ReactTable
    defaultPageSize={7}
    columns={columns}
    showPagination={false}
    filterable
    noDataText={'Brak wyników'}
    data={posts}
   ></ReactTable>
  </div>
 )
}

export default Tab2
