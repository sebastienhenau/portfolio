<script
    context="module"
    lang="ts"
>
    export type TImageSrc = string;
    export type TImageAlt = string;
    export type TImageFit = 'cover' | 'contain';
    export type TImageWidth = string | number | null;
    export type TImageHeight = string | number | null;
    export type TImageLoading = 'eager' | 'lazy';

    export interface TImageProps {
        src: TImageSrc;
        alt?: TImageAlt;
        fit?: TImageFit;
        width?: TImageWidth;
        height?: TImageHeight;
        loading?: TImageLoading;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { getContext } from 'svelte';
    import type { TPanelContext } from '$components';

    export let src: TImageSrc;
    export let alt: TImageAlt = '';
    export let fit: TImageFit = 'cover';
    export let width: TImageWidth = null;
    export let height: TImageHeight = null;
    export let loading: TImageLoading = 'eager';

    const panelContext = getContext<TPanelContext>('panel');
</script>

<img
    {alt}
    class={clsx(
        'w-full',
        {
            'object-center object-cover h-full': fit === 'cover',
            'object-center object-contain h-full': fit === 'contain',
            'rounded border border-line': panelContext,
        },
        $$props.class
    )}
    {src}
    {width}
    {height}
    {loading}
/>
