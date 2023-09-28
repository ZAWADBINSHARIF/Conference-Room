// enternal import
import { Button, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

// internal import 
import CharactersListItem from "./CharacterListItem"
import { fetchAllCharacters } from "../Store/Slices/CharacterImgSlice.js"
import { fetchAllTables } from "../Store/Slices/TableImgSlice.js"
import TableListItem from "./TableListItem"
import { removeAllDraggableImg, saveHistoryThunk } from "../Store/Slices/DraggableImgSlice"
import { removeTable, saveTableThunk } from "../Store/Slices/SaveTableSlice"

const SideBar = () => {

  const dispatch = useDispatch()
  const allCharacters = useSelector(state => state.character_img.data)
  const tableFileName = useSelector(state => state.save_table[0]?.filename)
  const allTables = useSelector(state=> state.table_img.data)
  const [flagName, setFlagName] = useState('TABLES') // *** It decides which images are shown


  function handleSaveData() {
    dispatch(saveHistoryThunk())
    dispatch(saveTableThunk(tableFileName))
  }

  function handleRemoveAllData() {
    dispatch(removeAllDraggableImg([]))
    dispatch(removeTable([]))
  }

  const MenuListItem = () => {
    if (flagName === 'CHARACTERS') {
      return (
        allCharacters.map((item) => (
          <CharactersListItem
            key={item.id}
            id={item.id}
            name={item.name}
            imgFilename={item.filename}
            folderName={item.folder_name}
          />
        ))
      )
    } else if (flagName === 'TABLES') {
      return (
        allTables.map(item => (
          <TableListItem
            key={item.id}
            id={item.id}
            imgFilename={item.filename}
          />
        ))
      )
    }
  }

  useEffect(() => {
    dispatch(fetchAllCharacters())
    dispatch(fetchAllTables())
  }, [dispatch])

  return (
    <menu className="SideBar">

      <section className="menuBar py-5">
        <Row className="
        px-2
        gap-2"
        >
          <Col>
            <Button
              className="menuButton"
              onClick={()=> handleSaveData()}
            >Save</Button>
          </Col>

          <Col>
            <Button
              className="menuButton"
              onClick={()=> handleRemoveAllData()}
            >Delete</Button>
          </Col>

          <Col>
            <Button
              className="menuButton"
              onClick={() => setFlagName('CHARACTERS')}
            >Characters
            </Button>
          </Col>

          <Col>
            <Button
              className="menuButton"
              onClick={() => setFlagName('TABLES')}
            >Tables
            </Button>
          </Col>

        </Row>
      </section>
      <div className="MenuList d-flex flex-column gap-3">

        <MenuListItem/>

      </div>
    </menu>
  )
}
export default SideBar