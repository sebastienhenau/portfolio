<script lang="ts">
    import clsx from 'clsx';
</script>

<tbody class={clsx('before:content-empty before:block before:h-5', $$props.class)}>
    <slot />
</tbody>
