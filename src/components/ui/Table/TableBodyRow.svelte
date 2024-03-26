<script lang="ts">
    import clsx from "clsx";
</script>

<tr class={clsx("before:content-empty", $$props.class)}>
    <slot />
</tr>
