<script lang="ts">
    import clsx from 'clsx';
    import { Image } from '$components';
    import type { TCardImage } from './Card.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let image: TCardImage = undefined;
</script>

<article class={clsx('@container/card', $$props.class)}>
    <div
        class={clsx(
            'relative p-6 @550/card:p-7',
            {
                'flex items-start @550/card:items-stretch gap-5 @550/card:gap-7 flex-col @550/card:flex-row': !!image,
            },
            $$props.wrapperClass
        )}
    >
        <div
            class="absolute inset-0 z-0 bg-accent border border-border-alt rounded-lg translate-x-3 translate-y-3 pointer-events-none"
        />

        <div class="absolute inset-0 z-0 bg-site-background border border-border-alt rounded-lg pointer-events-none" />

        {#if !!image}
            <!-- TODO: update once tailwind supports max-width container queries -->
            <div class="z-10 flex items-stretch gap-5 w-full @550/card:flex @550/card:flex-col @550/card:w-auto">
                <Image
                    {...image}
                    class="min-w-[7rem] max-w-[7rem] w-full"
                />

                <div class="bg-gradient-striped flex-1" />
            </div>
        {/if}

        <div class="relative z-10">
            <slot />
        </div>
    </div>
</article>
