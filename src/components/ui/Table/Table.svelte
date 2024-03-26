<script lang="ts">
    import clsx from "clsx";
</script>

<div class={clsx("w-full @container/table", $$props.class)}>
    <table class="w-full">
        <slot />
    </table>
</div>
