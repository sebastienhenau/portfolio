<script lang="ts">
    import '$styles/main.css';
    import { Container, Header, Menu, Main, Announcement, Text, SkipLink } from '$components';
    import type { TLayoutData } from './+layout';

    export let data: TLayoutData;
</script>

<svelte:head>
    <script lang="ts">
        const localTheme = localStorage.getItem('theme');
        const hasLocalTheme = !!localStorage.theme;
        const isLocalThemeDark = localTheme === 'dark';
        const systemThemeMatcher = window.matchMedia('(prefers-color-scheme: dark)');

        if (isLocalThemeDark || (!hasLocalTheme && systemThemeMatcher.matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    </script>
</svelte:head>

<!-- TODO: remove once development is done -->
<Announcement>
    <Text
        type="text"
        variants={['fat']}
    >
        Under development, nothing should be taken seriously.
    </Text>
</Announcement>

<SkipLink href="menu">Skip to menu</SkipLink>

<SkipLink href="main">Skip to main content</SkipLink>

<Container>
    <Header />

    <Menu />

    <Main url={data.url}>
        <slot />
    </Main>
</Container>
