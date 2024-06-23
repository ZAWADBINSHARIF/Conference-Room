// enternal import
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// internal import 
import CharactersListItem from "./CharacterListItem";
import { fetchAllCharacters } from "../Store/Slices/CharacterImgSlice.js";
import { setGamePlayTime } from "../Store/Slices/SessionSlice.js";
import EndGameLogo from '../assets/end_game_btn_logo.png';



const SideBar = ({ setSideBarScrollPosition }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allCharacters = useSelector(state => state.character_img.data);
    const draggableImgs = useSelector(state => state.draggable_img);

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const [scrollTop, setScrollTop] = useState(0);

    const MenuListItem = () => (

        allCharacters.map((item) => (
            <CharactersListItem
                key={item.id}
                id={item.id}
                title={item.title}
                name={item.name}
                role={item.role}
                imgFilename={item.filename}
                folderName={item.folder_name}
                description={item.description}
            />
        ))
    );


    function handleOnScroll(event) {
        setScrollTop(event.currentTarget.scrollTop);
    }

    function handleEndGame() {
        if (!draggableImgs.length) return toast.info("At least make one Ally");
        navigate('/result');
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => prev + 1);

            if (seconds === 59) {
                setMinutes(prev => prev + 1);
                setSeconds(0);
            }

        }, 1000);

        dispatch(setGamePlayTime(`${minutes}:${seconds}`));

        return () => clearInterval(timer);
    }, [dispatch, minutes, seconds]);

    useEffect(() => {
        setSideBarScrollPosition(scrollTop);
    }, [scrollTop, setSideBarScrollPosition]);

    useEffect(() => {
        dispatch(fetchAllCharacters());
    }, [dispatch]);

    return (
        <menu
            className="SideBar text-center d-flex flex-column me-4 gap-2"
            style={{ display: allCharacters.length != 0 ? 'flex' : "none" }}>

            <div>
                <div className="digital-time">
                    {`${minutes}m:${seconds}s`}
                </div>
            </div>


            <div className="EndButtonLogo ">
                <img src={EndGameLogo} width={115} onClick={handleEndGame} />
            </div>

            <div className="MenuList" onScroll={handleOnScroll}>

                <MenuListItem />

            </div>
        </menu>
    );
};
export default SideBar;