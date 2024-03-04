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

<article class={clsx('@container/preview', $$props.class)}>
    <div
        class={clsx('relative', {
            'flex gap-6 items-start flex-col @550/preview:flex-row': !!image,
        })}
    >
        {#if !!image}
            <Panel class="w-full @550/preview:w-[9.5rem] @550/preview:h-[9.5rem] @550/preview:aspect-square">
                <Image
                    {...image}
                    fit="cover"
                    width="152"
                    height="152"
                />
            </Panel>

            <div class="w-full @550-item:w-auto @550/preview:flex-1 z-10">
                <slot />
            </div>
        {:else}
            <slot />
        {/if}
    </div>
</article>
