<script lang="ts">
    import clsx from 'clsx';
    import { Image } from '$components';
    import type { TItemImage } from './Item.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    // TODO: undefined typescript
    export let image: TItemImage = undefined;
</script>

<!-- TODO: change name Item -->
<article class={clsx('@container/item', $$props.class)}>
    <div
        class={clsx('relative group', {
            'flex gap-6 items-start flex-col @550/item:flex-row': !!image,
        })}
    >
        <div
            class="absolute -inset-4 group-hover:opacity-100 opacity-0 bg-gradient-striped pointer-events-none z-0 rounded-lg transition-opacity"
        />

        {#if !!image}
            <Image
                {...image}
                class="z-10 w-full max-h-[15rem] @550/item:max-h-auto @550/item:max-w-[9.5rem]"
            />

            <div class="w-full @550-item:w-auto @550/item:flex-1 z-10">
                <slot />
            </div>
        {:else}
            <slot />
        {/if}
    </div>
</article>
