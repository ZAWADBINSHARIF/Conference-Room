// external import
import { useState, useMemo, useRef, Image } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
} from "@dnd-kit/core";
import { createSnapModifier } from "@dnd-kit/modifiers";
import { useDispatch, useSelector } from "react-redux";
import { useScreenshot } from 'use-react-screenshot';

// internal import
import PlayGround from "../components/PlayGround/PlayGround";
import SideBar from "../components/SideBar";
import {
  addDraggableImg,
  setDraggableImgPosition,
  removeDraggableImg,
} from "../Store/Slices/DraggableImgSlice.js";
import { removeCharacterToPeanutGallery, setCharacterToPeanutGallery } from "../Store/Slices/PeanutGalleryImgSlice.js";
import CharactersListItem from "../components/CharacterListItem.jsx";
import DraggableImage from "../components/PlayGround/DraggableImage.jsx";
import { removeCharacter } from "../Store/Slices/CharacterImgSlice.js";
import { setOpenRemovableModal, setRemovableAreaVisibility, setRemovingCharacterId } from "../Store/Slices/RemovableAreaSlice.js";


const Hero = () => {
  const ref_of_game = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [draggable_id, setDraggable_id] = useState(null);
  const [draggable_Item_Type, setDraggable_Item_Type] = useState(null);
  const [dropCharacterPosition, setDropCharacterPosition] = useState(null);
  const [sideBarScrollPosition, setSideBarScrollPosition] = useState(null);
  const [screenShotImgSrc, takeScreenshot] = useScreenshot();

  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.character_img.data);
  const allDraggableImgs = useSelector((state) => state.draggable_img);
  const allPeanutGallery = useSelector((state) => state.peanut_gallery_img);
  const clientImgSrcName = useSelector(state => state.session_info.data.clientImgSrc).split(".")[0];

  const apiPath = import.meta.env.VITE_API;

  const styles = {
    backgroundImage: ` 
        url("${apiPath}/${clientImgSrcName}_podium_background.jpg")`
  };

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      tolerance: 5,
    },
  });


  const [gridSize] = useState(40);

  const snapToGrid = useMemo(() => createSnapModifier(gridSize), [gridSize]);

  const captureScreenShot = () => takeScreenshot(ref_of_game.current);

  const OverlayItem = () => {
    if (draggable_Item_Type === "characterFromSlideMenu") {
      return allCharacters.map((item) => {
        if (item.id == activeId) {
          return (
            // <>Character form menu</>
            <CharactersListItem
              key={item.id}
              id={item.id}
              title={item.title}
              imgFilename={item.filename}
              folderName={item.folder_name}
            />
          );
        }
      });
    } else if (draggable_Item_Type === "PlayGroundCharacter") {
      return allDraggableImgs.map((item) => {
        if (item.draggable_id == activeId) {
          return (
            <DraggableImage
              key={item.id}
              id={item.id}
              title={item.title}
              name={item.name}
              role={item.role}
              src={item.src}
              folder_name={item.folder_name}
              description={item.description}
              draggable_id={item.draggable_id}
            />
          );
        }
      });
    } else if (draggable_Item_Type === "characterFromPeanutGallery") {
      return allPeanutGallery.map((item) => {
        if (item.id == activeId) {
          return (
            <DraggableImage
              key={item.id}
              id={item.id}
              title={item.title}
              name={item.name}
              role={item.role}
              src={item.src}
              folder_name={item.folder_name}
              description={item.description}
              draggable_id={item.draggable_id}
            />
          );
        }
      });
    } else {
      return <>No Data</>;
    }
  };

  function handleAddToPlayGround(playGroundTop, playGroundLeft, new_x, new_y) {
    const character = allCharacters.find((item) => item.id === activeId);
    let imgInfo;

    if (draggable_Item_Type == 'characterFromSlideMenu') {
      imgInfo = {
        id: character.id,
        draggable_id: draggable_id,
        title: character?.title,
        name: character.name,
        role: character.role,
        src: character.filename,
        position_x: dropCharacterPosition.x + new_x - playGroundLeft || 32,
        position_y: dropCharacterPosition.y + new_y - playGroundTop - sideBarScrollPosition || 32,
        folder_name: character.folder_name,
        description: character.description,
      };
    } else if (draggable_Item_Type == 'characterFromPeanutGallery') {
      const character = allPeanutGallery.find((item) => item.id === activeId);
      imgInfo = {
        id: character.id,
        draggable_id: draggable_id,
        title: character?.title,
        name: character.name,
        role: character.role,
        src: character.src,
        position_x: dropCharacterPosition.x + new_x - playGroundLeft || 32,
        position_y: dropCharacterPosition.y + new_y - playGroundTop || 32,
        folder_name: character.folder_name,
        description: character.description,
      };

    }

    dispatch(addDraggableImg(imgInfo));

    setActiveId(null);
    setDraggable_id(null);
    setDropCharacterPosition(null);
  }

  function handleDragStart(event) {
    const { data } = event.active;

    if (data.current.type === "characterFromSlideMenu") {

      setDraggable_Item_Type("characterFromSlideMenu");
      setActiveId(data.current.characterId);
      setSelectedCharacterId(data.current.characterId);
      setDraggable_id(data.current.draggable_id);
      setDropCharacterPosition(data.current.position);

    } else if (data.current.type === "PlayGroundCharacter") {

      setDraggable_Item_Type("PlayGroundCharacter");
      setActiveId(data.current.draggable_id);
      setDraggable_id(data.current.draggable_id);

    } else if (data.current.type === "characterFromPeanutGallery") {

      setDraggable_Item_Type("characterFromPeanutGallery");
      setActiveId(data.current.characterId);
      setSelectedCharacterId(data.current.characterId);
      setDraggable_id(data.current.draggable_id);
      setDropCharacterPosition(data.current.position);

    }
  }

  function handleDragMove(event) {
    const { active } = event;

    if (active.data.current.type === "PlayGroundCharacter") {
      // const isCollisionOnRemovableArea = collisions?.find(item => item.id == "Removable");
      dispatch(setRemovableAreaVisibility(true));
    }

  }

  function handleDragEnd(event) {
    const { active, delta } = event;
    const { x: new_x, y: new_y } = delta;
    const { id } = active;
    const { top: playGroundTop, left: playGroundLeft } = event.over.rect;

    setActiveId(null);
    if (event.over.id === "Droppable") {

      dispatch(setDraggableImgPosition({ id, new_x, new_y }));

      if (activeId && draggable_id && dropCharacterPosition) {

        handleAddToPlayGround(playGroundTop, playGroundLeft, new_x, new_y);

        if (draggable_Item_Type === "characterFromSlideMenu") {
          dispatch(removeCharacter(selectedCharacterId));
        }
        else if (draggable_Item_Type === "characterFromPeanutGallery") {
          dispatch(removeCharacterToPeanutGallery(draggable_id));
        }
      }
    } else if (event.over.id === "PeanutGallery") {
      const draggableImg = allDraggableImgs.find(
        (item) => item.draggable_id == activeId
      );
      dispatch(
        setCharacterToPeanutGallery({
          id: draggableImg.id,
          title: draggableImg?.title,
          src: draggableImg.src,
          x: draggableImg.x,
          y: draggableImg.y,
          name: draggableImg.name,
          role: draggableImg.role,
          folder_name: draggableImg.folder_name,
          draggable_id: draggableImg.draggable_id,
          description: draggableImg.description,
        })
      );
      dispatch(removeDraggableImg(draggableImg.draggable_id));
    } else if (event.over.id === "Removable") {
      dispatch(setRemovingCharacterId(id));
      dispatch(setOpenRemovableModal(true));
    }

    dispatch(setRemovableAreaVisibility(false));

  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragMove={handleDragMove}
      modifiers={[snapToGrid]}
      sensors={[mouseSensor, touchSensor]}
    >
      <Row className="game" style={styles} ref={ref_of_game}>
        {/* playGround */}
        <Col xxl={11} xl={10} md={10}>
          <PlayGround />
        </Col>

        {/* SideBar */}
        <Col xxl={1} xl={2} md={2}>
          <SideBar setSideBarScrollPosition={setSideBarScrollPosition} />
        </Col>
      </Row>

      <DragOverlay
        modifiers={[snapToGrid]}
      >
        {activeId ? <OverlayItem /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Hero;
