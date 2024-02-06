<script lang="ts">
    import { Text } from '$components';
</script>

<Text
    class="text-inherit whitespace-nowrap"
    tag="span"
    type="action"
    variants={['flat']}
>
    <slot />
</Text>
