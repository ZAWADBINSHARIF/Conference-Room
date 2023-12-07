// external import
import { useState } from "react";
import { Col, Row } from 'react-bootstrap';
import { DndContext, DragOverlay, MouseSensor, TouchSensor, useSensor } from "@dnd-kit/core";
import { useDispatch, useSelector } from 'react-redux';

// internal import
import PlayGround from '../components/PlayGround/PlayGround';
import SideBar from '../components/SideBar';
import PeanutGallery from '../components/PeanutGallery';
import { addDraggableImg, setDraggableImgPosition } from "../Store/Slices/DraggableImgSlice.js";
import CharactersListItem from "../components/CharacterListItem.jsx";

const Hero = () => {
    const [activeId, setActiveId] = useState(null);
    const [draggable_id, setDraggable_id] = useState(null);
    const [dropCharacterPosition, setDropCharacterPosition] = useState(null);

    const dispatch = useDispatch();
    const allCharacters = useSelector(state => state.character_img.data);

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

    const OverlayItem = () => (

        allCharacters.map((item) => {
            if (item.id == activeId) {
                return (<CharactersListItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    role={item.role}
                    imgFilename={item.filename}
                    folderName={item.folder_name}
                    description={item.description}
                />);
            }
        })
    );

    function handleAddToPlayGround(playGroundTop, playGroundLeft, new_x, new_y) {
        const character = allCharacters.find((item) => item.id === activeId);
        const imgInfo = {
            id: character.id,
            draggable_id: draggable_id,
            name: character.name,
            role: character.role,
            src: character.filename,
            position_x: dropCharacterPosition.x + new_x - playGroundLeft,
            position_y: dropCharacterPosition.y + new_y - playGroundTop,
            folder_name: character.folder_name,
            description: character.description
        };

        dispatch(addDraggableImg(imgInfo));

        setActiveId(null);
        setDraggable_id(null);
        setDropCharacterPosition(null);
    }

    function handleDragStart(event) {
        const { data } = event.active;
        if (data.current.type === "characterFromSlideMenu") {
            setActiveId(data.current.characterId);
            setDraggable_id(data.current.draggable_id);
            setDropCharacterPosition(data.current.position);
        }
    }

    function handleDragEnd(event) {
        const { active, delta } = event;
        const { x: new_x, y: new_y } = delta;
        const { id } = active;
        const { top: playGroundTop, left: playGroundLeft } = event.over.rect;

        setActiveId(null);
        dispatch(setDraggableImgPosition({ id, new_x, new_y }));
        if (activeId && draggable_id && dropCharacterPosition) {
            handleAddToPlayGround(playGroundTop, playGroundLeft, new_x, new_y);
        }

    }

    return (
        <DndContext
            onDr
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            sensors={[mouseSensor, touchSensor]}
        >
            <Row>
                {/* playGround */}
                <Col xxl={11} xl={10} md={10}>
                    <PeanutGallery />
                    <PlayGround />
                </Col>

                {/* SideBar */}
                <Col xxl={1} xl={2} md={2}>
                    <SideBar />
                </Col>
            </Row>

            <DragOverlay>
                {activeId ?
                    (<OverlayItem />)
                    : null}
            </DragOverlay>

        </DndContext>
    );
};

export default Hero;