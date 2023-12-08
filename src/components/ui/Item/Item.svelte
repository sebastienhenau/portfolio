<script lang="ts">
    import clsx from 'clsx';
    import { Image } from '$components';
    import type { TItemImage } from './Item.types';

    // -------------------------------------------------------------------------
    // Props
    // -------------------------------------------------------------------------
    // TODO: undefined typescript
    export let image: TItemImage = undefined;
</script>

<!-- TODO: change name Item -->
<article
    class={clsx(
        'relative p-7 group item',
        {
            'item-with-image item-with-image-gap flex items-start gap-item-image-to-content-spacing': !!image,
        },
        $$props.class
    )}
>
    <div
        class="absolute inset-0 group-hover:opacity-100 opacity-0 bg-gradient-striped pointer-events-none z-0 rounded-tr-lg rounded-br-lg transition-opacity"
    />

    {#if !!image}
        <Image
            {...image}
            class="z-10 w-full item-image-max-w"
        />

        <div class="flex-1 z-10">
            <slot />
        </div>
    {:else}
        <slot />
    {/if}
</article>
