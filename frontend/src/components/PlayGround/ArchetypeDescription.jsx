import { useSelector } from "react-redux";

const ArchetypeDescription = () => {
    const description = useSelector(state => state.character_img.achetypeDescriptionText);

    const style = {
        "display": description ? "inline" : 'none',
        "background": "rgba(0, 0, 0, 0.30)"
    };

    return (
        <div className="ArchetypeDescription position-absolute" style={style}>{description}</div>
    );
};
export default ArchetypeDescription;