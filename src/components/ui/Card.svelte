<script lang="ts">
    import clsx from "clsx";
</script>

<article class={clsx("@container/card", $$props.class)}>
    <div
        class={clsx("rounded bg-gradient-striped p-6", {
            "flex flex-col items-start gap-6 @550/card:flex-row": !!$$slots.image,
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
