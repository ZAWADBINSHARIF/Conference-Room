import { useDraggable } from '@dnd-kit/core';
import { CSS } from "@dnd-kit/utilities";
import { useRef } from 'react';

const PeanutCharacterImg = ({ src, item }) => {

    const characterRef = useRef();

    const { attributes, listeners, setNodeRef, transform, isDragging } =
        useDraggable({
            id: item.draggable_id,
            data: {
                type: "characterFromPeanutGallery",
                characterId: item.id,
                draggable_id: item.draggable_id,
                position: {
                    x: characterRef.current?.offsetLeft,
                    y: characterRef.current?.offsetTop,
                },
            },
        });

    const style = {
        transform: CSS.Translate.toString(transform),
        cursor: isDragging ? "grabbing" : "grab",
    };

    return (
        <div
            style={style}
            ref={setNodeRef}
        >
            <div ref={characterRef} >
                <div
                    {...attributes}
                    {...listeners}
                >
                    <img
                        src={src}
                        width={75}
                    />
                </div>
            </div>
        </div>
    );
};

export default PeanutCharacterImg;