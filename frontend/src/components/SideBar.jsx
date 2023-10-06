// enternal import
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

// internal import 
import CharactersListItem from "./CharacterListItem"
import { fetchAllCharacters } from "../Store/Slices/CharacterImgSlice.js"
import { fetchAllTables } from "../Store/Slices/TableImgSlice.js"

const SideBar = () => {

  const dispatch = useDispatch()
  const allCharacters = useSelector(state => state.character_img.data)

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
    <menu className="SideBar" style={{ display: allCharacters.length != 0 ? 'flex' : "none" }}>

      <div className="MenuList d-flex flex-column me-4">

        <MenuListItem />

      </div>
    </menu>
  )
}
export default SideBar