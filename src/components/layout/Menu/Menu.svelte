<script lang="ts">
    import clsx from 'clsx';
    import { Navigation } from '$components';
</script>

<nav class={clsx('max-500:hidden', $$props.class)}>
    <Navigation class="panel p-4 900:p-6" />
</nav>
