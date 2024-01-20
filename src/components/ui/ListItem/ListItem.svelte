<script lang="ts">
    import { Icon } from '$components';
</script>

<div class="grid grid-cols-[auto_1fr] grid-rows-2-auto gap-x-3">
    <Icon
        class="col-start-1 col-end-2 row-start-1 row-end-2 self-center"
        name="ChevronRight"
    />

    <div class="col-start-2 col-end-3 row-start-1 row-end-2">
        <slot name="main" />
    </div>

    {#if $$slots.sub}
        <div class="col-start-2 col-end-3 row-start-2 row-end-3">
            <slot name="sub" />
        </div>
    {/if}
</div>
