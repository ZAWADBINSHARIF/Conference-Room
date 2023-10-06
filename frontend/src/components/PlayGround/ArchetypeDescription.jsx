import { useSelector } from "react-redux";

const ArchetypeDescription = () => {
    const description = useSelector(state => state.character_img.achetypeDescriptionText)
    
    const style = {
        "display": description ? "inline" : 'none'
    }

    return (
        <div className="ArchetypeDescription" style={style}>{description}</div>
    )
}
export default ArchetypeDescription