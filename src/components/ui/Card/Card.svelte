<script lang="ts">
    import clsx from 'clsx';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
</script>

<article class={clsx('@container/card', $$props.class)}>
    <div
        class={clsx('highlight p-6', {
            'flex items-start gap-6 flex-col @550/card:flex-row': !!$$slots.image,
        })}
    >
        {#if !!$$slots.image}
            <slot name="image" />
        {/if}

        <div class="flex-1">
            {#if !!$$slots.image}
                <slot name="content" />
            {:else}
                <slot />
            {/if}
        </div>
    </div>
</article>
