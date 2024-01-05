<script lang="ts">
    import HeaderLogo from './HeaderLogo';
    import HeaderNavigation from './HeaderNavigation';
    import HeaderDarkModeToggle from './HeaderDarkModeToggle';
    import HeaderHamburgerMenu from './HeaderHamburgerMenu';
</script>

<header
    class="py-7 col-start-1 col-end-2 row-start-1 row-end-2 1000:sticky 1000:top-0 1000:self-start max-1000:flex max-1000:items-center gap-4 700:gap-7 1000:grid 1000:grid-cols-[1fr_auto]"
>
    <div class="1000:start-col-1 1000:end-col-2 1000:row-start-1 1000:row-end-2 flex-1 flex items-center gap-4">
        <HeaderLogo />

        <div class="space-y-2">
            <p class="font-bold leading-none">Sébastien Henau</p>

            <p class="max-500:hidden font-semibold text-3 leading-none text-site-contrast-2">
                Front-end lead at Little Miss Robot
            </p>
        </div>
    </div>

    <HeaderNavigation />

    <HeaderDarkModeToggle />

    <HeaderHamburgerMenu />
</header>
