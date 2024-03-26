<script lang="ts">
    import clsx from "clsx";
</script>

<ul class={clsx("flex flex-wrap gap-4", $$props.class)}>
    <slot />
</ul>
