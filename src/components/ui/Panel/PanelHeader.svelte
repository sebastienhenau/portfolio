<script lang="ts">
    import clsx from 'clsx';
    import { Text } from '$components';
</script>

<Text
    class={clsx('px-4 900:px-6 py-2 border-b border-line', $$props.class)}
    type="title-3"
>
    <slot />
</Text>
