<script lang="ts">
    import clsx from "clsx";
    import { Action, Text } from "$components";
    import HeaderLogo from "./HeaderLogo.svelte";
    import HeaderThemeToggle from "./HeaderThemeToggle.svelte";
    import { ROUTES_HOME } from "$constants";
</script>

<header class={clsx("container-header flex items-center justify-between gap-6", $$props.class)}>
    <Action class="flex items-center gap-5" href={ROUTES_HOME} ariaLabel="Go to the home page">
        <HeaderLogo />

        <Text type="title-2" tag="span" variants={["flat"]}>Sébastien Henau</Text>
    </Action>

    <div class="flex items-center gap-5">
        <!-- TODO: add search button with feature -->
        <!--<Button
            size='sm'
            variant='neutral'
        >
            <ButtonText>Search</ButtonText>

            <ButtonIcon icon={{ name: 'Search' }} />
        </Button>-->

        <HeaderThemeToggle />
    </div>
</header>

<style lang="postcss">
    .container-header {
        --container-header-col: theme("gridColumn.span-1");

        grid-row: header;
        grid-column: var(--container-header-col);

        @media screen("900") {
            --container-header-col: main;
        }
    }
</style>
