// ---------------------------------------------------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------------------------------------------------
export type TImageSrc = string;
export type TImageAlt = string;
export type TImageBorder = boolean;
export type TImageFit = 'cover' | 'contain';

export interface TImage {
    src: TImageSrc;
    alt?: TImageAlt;
    border?: TImageBorder;
    fit?: TImageFit;
}
