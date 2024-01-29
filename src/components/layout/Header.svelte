<script lang="ts">
    import clsx from 'clsx';
    import HeaderLogo from './HeaderLogo.svelte';
</script>

<header class={clsx('flex justify-between items-center gap-6', $$props.class)}>
    <div class="flex items-center gap-5">
        <HeaderLogo />

        <p class="fg-title fgv-flat">Sébastien Henau</p>
    </div>
</header>
