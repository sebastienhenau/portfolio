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
    import { getContext } from 'svelte';
    import type { TPanelContext } from '$components';

    export let src: TImageSrc;
    export let alt: TImageAlt = '';
    export let fit: TImageFit = 'cover';

    const panelContext = getContext<TPanelContext>('panel');
</script>

<img
    {alt}
    class={clsx(
        'w-full',
        {
            'object-center object-cover': fit === 'cover',
            'object-center object-contain': fit === 'contain',
            'rounded border border-line': panelContext,
        },
        $$props.class
    )}
    {src}
/>
