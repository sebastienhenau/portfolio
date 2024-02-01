<script lang="ts">
    import { Text } from '$components';
</script>

<Text
    class={$$props.class}
    tag="h2"
    type="title"
>
    <slot />
</Text>
