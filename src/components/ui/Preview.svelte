<script
    context="module"
    lang="ts"
>
    import type { TImageProps } from '$components';

    export type TPreviewImage = TImageProps;

    export interface TPreviewProps {
        image?: TPreviewImage;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { Image, Panel } from '$components';

    export let image: TPreviewImage;
</script>

<article class={clsx('@container/item', $$props.class)}>
    <div
        class={clsx('relative group', {
            'flex gap-6 items-start flex-col @550/item:flex-row': !!image,
        })}
    >
        <div
            class="absolute -inset-4 group-hover:opacity-100 opacity-0 bg-gradient-striped pointer-events-none z-0 rounded transition-opacity"
        />

        {#if !!image}
            <!-- TODO: fix flex issue -->
            <Panel class="z-10 w-full max-h-[15rem] @550/item:max-h-auto @550/item:max-w-[9.5rem] flex">
                <Image {...image} />
            </Panel>

            <div class="w-full @550-item:w-auto @550/item:flex-1 z-10">
                <slot />
            </div>
        {:else}
            <slot />
        {/if}
    </div>
</article>
