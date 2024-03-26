<script lang="ts">
    import clsx from "clsx";
    import { Text } from "$components";
</script>

<div
    class={clsx(
        "flex h-[1.25rem] w-[1.25rem] items-center justify-center rounded border border-line bg-site-base",
        $$props.class
    )}
>
    <Text tag="p" type="label" variants={["flat", "sm"]}>
        <slot />
    </Text>
</div>
