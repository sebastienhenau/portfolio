<script lang="ts">
    import clsx from "clsx";
</script>

<li class={clsx("inline-flex", $$props.class)}>
    <slot />
</li>
