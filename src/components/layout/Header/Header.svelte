<script lang="ts">
    import clsx from 'clsx';
    import { Button, ButtonIcon, ButtonText } from '$components';
    import { HeaderLogo } from './HeaderLogo';
    import { HeaderDarkModeToggle } from './HeaderDarkModeToggle';
</script>

<header class={clsx('flex justify-between items-center py-7', $$props.class)}>
    <div class="flex items-center gap-5">
        <HeaderLogo />

        <p class="font-bold leading-none text-6">Sébastien Henau</p>
    </div>

    <div class="flex items-center gap-5">
        <Button
            size="sm"
            variant="neutral"
        >
            <ButtonText>Search</ButtonText>

            <ButtonIcon icon={{ name: 'Search' }} />
        </Button>

        <HeaderDarkModeToggle />
    </div>
</header>
