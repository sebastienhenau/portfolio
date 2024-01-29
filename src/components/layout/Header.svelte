<script lang="ts">
    import clsx from 'clsx';
    import { Button, ButtonIcon, ButtonText } from '$components';
    import HeaderLogo from './HeaderLogo.svelte';
</script>

<header class={clsx('flex justify-between items-center gap-6', $$props.class)}>
    <div class="flex items-center gap-5">
        <HeaderLogo />

        <p class="fg-title fgv-flat">Sébastien Henau</p>
    </div>

    <div class="flex items-center gap-5 max-500:hidden">
        <Button
            size="sm"
            variant="neutral"
        >
            <ButtonText>Search</ButtonText>

            <ButtonIcon icon={{ name: 'Search' }} />
        </Button>
    </div>
</header>
