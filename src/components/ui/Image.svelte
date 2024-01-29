<script
    context="module"
    lang="ts"
>
    export type TImagePropSrc = string;
    export type TImagePropAlt = string;
    export type TImagePropFit = 'cover' | 'contain';

    export interface TImageProps {
        src: TImagePropSrc;
        alt?: TImagePropAlt;
        fit?: TImagePropFit;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';

    export let src: TImagePropSrc;
    export let alt: TImagePropAlt = '';
    export let fit: TImagePropFit = 'cover';
</script>

<!-- TODO: fix flex -->
<div class={clsx($$props.class)}>
    <img
        {alt}
        class={clsx('w-full', {
            'object-center object-cover': fit === 'cover',
            'object-center object-contain': fit === 'cover',
        })}
        {src}
    />
</div>
