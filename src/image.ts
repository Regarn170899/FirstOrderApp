import { Image } from "react-grid-gallery";
import item1 from "./assets/img/item1.svg"
import item2 from "./assets/img/AboutPhoto.png"
import item3 from "./assets/img/headerLogo.svg"
import item4 from "./assets/img/item4.svg"
import item5 from "./assets/img/item5.svg"
import item6 from "./assets/img/item6.svg"
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
        width: 350,
        height: 468,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item6}`,
        original: `${item6}`,
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item5}`,
        original: `${item5}`,
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item2}`,
        original: `${item2}`,
        width: 350,
        height: 468,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item4}`,
        original: `${item4}`,
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item2}`,
        original: `${item2}`,
        width: 350,
        height: 468,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item3}`,
        original: `${item3}`,
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item2}`,
        original: `${item2}`,
        width: 350,
        height: 468,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item3}`,
        original: `${item3}`,
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item2}`,
        original: `${item2}`,
        width: 350,
        height: 468,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item2}`,
        original: `${item2}`,
        width: 350,
        height: 468,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },{
        src: `${item2}`,
        original: `${item2}`,
        width: 350,
        height: 468,
        caption: "After Rain (Jeshu John - designerspics.com)",
    }
];