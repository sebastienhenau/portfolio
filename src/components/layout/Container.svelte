<div class="container flex-1 pt-5 900:py-7 max-900:px-5">
    <slot />
</div>

<style lang="postcss">
    /* TODO: px to rem */
    .container {
        --container-w: 49.5rem;
        --container-menu-w: 12rem;
        --container-px: theme('spacing.5');
        --container-gap-x: theme('spacing.7');
        --container-gap-y: theme('spacing.7');
        --container-cols: theme('gridTemplateColumns.1');
        --container-rows: [header-start] auto [header-end main-start] 1fr [main-end menu-start] auto [menu-end];

        display: grid;
        row-gap: var(--container-gap-y);
        grid-template-columns: var(--container-cols);
        grid-template-rows: var(--container-rows);

        @media screen('500') {
            --container-rows: [header-start] auto [header-end menu-start] auto [menu-end main-start] 1fr [main-end];
        }

        @media screen('700') {
            --container-px: theme('spacing.8');
        }

        @media screen('900') {
            --container-rows: [header-start] auto [header-end menu-start main-start] auto [menu-end] 1fr [main-end];
            --container-cols: [px-start] var(--container-px) [fill-start] minmax(0rem, 1fr) [menu-start]
                var(--container-menu-w) [menu-end spacing-start] var(--container-gap-x) [spacing-end main-start]
                calc(
                    min(
                        var(--container-w),
                        100% - var(--container-menu-w) - var(--container-gap-x) - (var(--container-px) * 2)
                    )
                )
                [main-end offset-start] minmax(0rem, calc(var(--container-menu-w) + var(--container-gap-x)))
                [offset-end] minmax(0rem, 1fr) [fill-end] var(--container-px) [bound-end];
        }

        @media screen('1000') {
            --container-menu-w: 15rem;
        }
    }
</style>
