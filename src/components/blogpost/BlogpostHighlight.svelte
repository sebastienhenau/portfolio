<script lang="ts">
    import clsx from 'clsx';
    import { Highlight, Text } from '$components';
</script>

<Highlight class={clsx('blog-post-highlight p-4 700:p-6', $$props.class)}>
    <Text>
        <slot />
    </Text>
</Highlight>
