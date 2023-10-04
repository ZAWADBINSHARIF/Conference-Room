// enternal import
import { Button, Row, Col } from "react-bootstrap"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

// internal import 
import CharactersListItem from "./CharacterListItem"
import { fetchAllCharacters } from "../Store/Slices/CharacterImgSlice.js"
import { fetchAllTables } from "../Store/Slices/TableImgSlice.js"
import { removeAllDraggableImg, saveHistoryThunk } from "../Store/Slices/DraggableImgSlice"
import { removeTable, saveTableThunk } from "../Store/Slices/SaveTableSlice"

const SideBar = () => {

  const dispatch = useDispatch()
  const allCharacters = useSelector(state => state.character_img.data)
  const tableFileName = useSelector(state => state.save_table[0]?.filename)

  function handleSaveData() {
    dispatch(saveHistoryThunk())
    dispatch(saveTableThunk(tableFileName))
  }

  function handleRemoveAllData() {
    dispatch(removeAllDraggableImg([]))
    dispatch(removeTable([]))
  }

  const MenuListItem = () => (
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
              onClick={() => handleSaveData()}
            >Save</Button>
          </Col>

          <Col>
            <Button
              className="menuButton"
              onClick={() => handleRemoveAllData()}
            >Delete</Button>
          </Col>

        </Row>
      </section>
      <div className="MenuList d-flex flex-column">

        <MenuListItem />

      </div>
    </menu>
  )
}
export default SideBar