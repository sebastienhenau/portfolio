<script
    context="module"
    lang="ts"
>
    export type TImageSrc = string;
    export type TImageAlt = string;
    export type TImageFit = 'cover' | 'contain';

    export interface TImageProps {
        src: TImageSrc;
        alt?: TImageAlt;
        fit?: TImageFit;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';

    export let src: TImageSrc;
    export let alt: TImageAlt = '';
    export let fit: TImageFit = 'cover';
</script>

<img
    {alt}
    class={clsx(
        'w-full',
        {
            'object-center object-cover': fit === 'cover',
            'object-center object-contain': fit === 'contain',
        },
        $$props.class
    )}
    {src}
/>
