<script lang="ts">
    import clsx from "clsx";
    import { Text } from "$components";
</script>

<Text class={clsx("border-b border-line px-4 py-2 900:px-6", $$props.class)} type="title-3">
    <slot />
</Text>
