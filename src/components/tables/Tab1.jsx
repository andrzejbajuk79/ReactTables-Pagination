import React, {useState, useEffect} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {Modal, Button} from 'react-bootstrap'

import axios from 'axios'

// import Spinner2 from '../error/Spinner'
// import Loader from '../error/Loader'

const Tab1 = () => {
 const [players, setPlayers] = useState([])
 const [, setloading] = useState(false)
 const [modalInfo, setModalInfo] = useState([])
 const [, setShowModal] = useState(false)
 const [show, setShow] = useState(false)

 const handleClose = () => setShow(false)
 const handleShow = () => setShow(true)

 const getPlayers = async () => {
  try {
   const data = await axios.get(
    'https://nba-players.herokuapp.com/players-stats'
   )
   setPlayers(data.data)
   setloading(true)
  } catch (err) {
   console.log(err)
  }
 }

 const columns = [
  {dataField: 'name', text: 'Player name'},
  {dataField: 'points_per_game', text: 'Points per game'},
  {dataField: 'team_name', text: 'Team'},
 ]
 const rowEvents = {
  onClick: (e, row) => {
   setModalInfo(row)
   toggleTrueFalse()
  },
 }

 const toggleTrueFalse = () => {
  setShowModal(handleShow)
 }

 const ModalContent = () => {
  return (
   <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
     <Modal.Title>{modalInfo.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>fffff</Modal.Body>
    <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
      Close
     </Button>
    </Modal.Footer>
   </Modal>
  )
 }
 console.log('show', show)

 useEffect(() => {
  getPlayers()
 }, [])
 return (
  <div className="container">
   <h1>Tabela</h1>
   {show ? <ModalContent /> : null}
   <BootstrapTable
    keyField="name" //unikallne pole musi byc
    data={players}
    columns={columns}
    pagination={paginationFactory()}
    rowEvents={rowEvents}
   />
  </div>
 )
}

export default Tab1
