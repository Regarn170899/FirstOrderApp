import { Image } from "react-grid-gallery";
import item1 from "./assets/img/item1.svg"
import item2 from "./assets/img/item2.svg"
export interface CustomImage extends Image {
    original: string;
}

export const images: CustomImage[] = [
    {
        src: `${item1}`,
        original: `${item1}`,
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item2}`,
        original: `${item2}`,
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item2}`,
        original: `${item2}`,
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item2}`,
        original: `${item2}`,
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item2}`,
        original: `${item2}`,
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    }
];