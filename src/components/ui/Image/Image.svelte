<script lang="ts">
    import clsx from 'clsx';
    import type { TImageAlt, TImageBorder, TImageFit, TImageSrc } from './Image.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let src: TImageSrc;
    export let border: TImageBorder = false;
    export let alt: TImageAlt = '';
    export let fit: TImageFit = 'cover';
</script>

<!-- TODO: fix flex -->
<div
    class={clsx(
        'flex',
        {
            panel: border,
        },
        $$props.class
    )}
>
    <img
        {alt}
        class={clsx('w-full', {
            'border rounded': border,
            'object-center object-cover': fit === 'cover',
            'object-center object-contain': fit === 'cover',
        })}
        {src}
    />
</div>
