<script lang="ts">
    import clsx from "clsx";
</script>

<div class={clsx("grid grid-cols-[0.625rem_1fr] grid-rows-1", $$props.class)}>
    <div class="col-start-1 col-end-2 row-start-1 row-end-2 w-border justify-self-center rounded bg-line" />

    <ul class="col-span-full row-start-1 row-end-2 space-y-6">
        <slot />
    </ul>
</div>
