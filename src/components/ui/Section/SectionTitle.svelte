<script lang="ts">
    import { Text } from '$components';
</script>

<Text
    class={$$props.class}
    type="title-2"
    useHeadingsContext
>
    <slot />
</Text>
