type SVG_PNG = {
    svg: string,
    png: string,
}

export interface CardInterface {
    code: string,
    image: string,
    images: SVG_PNG,
    suit: string,
    value: string,
}