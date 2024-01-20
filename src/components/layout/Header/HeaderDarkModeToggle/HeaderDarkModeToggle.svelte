<script lang="ts">
    import clsx from 'clsx';
    import { onMount } from 'svelte';
    import { Button, ButtonGroup, ButtonIcon } from '$components';
    import type { THeaderDarkModeToggleTheme } from './HeaderDarkModeToggle.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------------------------------------
    let theme: THeaderDarkModeToggleTheme = '';
    let isWatchingSystem = true;

    // -----------------------------------------------------------------------------------------------------------------
    // Event methods
    // -----------------------------------------------------------------------------------------------------------------
    const onSystemClick = () => {
        theme = '';
        isWatchingSystem = true;

        localStorage.removeItem('theme');

        setSystemMode();
    };

    const onLightModeClick = () => {
        theme = 'light';
        isWatchingSystem = false;

        localStorage.setItem('theme', 'light');

        setLightModeOnDocument();
    };

    const onDarkModeClick = () => {
        theme = 'dark';
        isWatchingSystem = false;

        localStorage.setItem('theme', 'dark');

        setDarkModeOnDocument();
    };

    const onSystemThemeChange = () => {
        if (!isWatchingSystem) {
            return;
        }

        setSystemMode();
    };

    const setSystemMode = () => {
        const isSystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (isSystemDarkMode) {
            setDarkModeOnDocument();
        } else {
            setLightModeOnDocument();
        }
    };

    const setLightModeOnDocument = () => {
        document.documentElement.classList.remove('dark');
    };

    const setDarkModeOnDocument = () => {
        document.documentElement.classList.add('dark');
    };

    // -----------------------------------------------------------------------------------------------------------------
    // Life cycle
    // -----------------------------------------------------------------------------------------------------------------
    onMount(() => {
        const localTheme = localStorage.getItem('theme') || '';
        const hasLocalTheme = !!localStorage.theme;
        const systemThemeMatcher = window.matchMedia('(prefers-color-scheme: dark)');

        if (hasLocalTheme) {
            theme = localTheme;
            isWatchingSystem = false;
        }

        systemThemeMatcher.addEventListener('change', onSystemThemeChange);

        return () => {
            systemThemeMatcher.removeEventListener('change', onSystemThemeChange);
        };
    });
</script>

<svelte:head>
    <script>
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

<ButtonGroup>
    <Button
        class={clsx()}
        form="square"
        on:click={onSystemClick}
        size="sm"
        variant={theme === '' && isWatchingSystem ? 'default' : 'neutral'}
    >
        <ButtonIcon icon={{ name: 'HalfCircle' }} />
    </Button>

    <Button
        class={clsx()}
        form="square"
        on:click={onLightModeClick}
        size="sm"
        variant={theme === 'light' && !isWatchingSystem ? 'default' : 'neutral'}
    >
        <ButtonIcon icon={{ name: 'Sun' }} />
    </Button>

    <Button
        class={clsx()}
        form="square"
        on:click={onDarkModeClick}
        size="sm"
        variant={theme === 'dark' && !isWatchingSystem ? 'default' : 'neutral'}
    >
        <ButtonIcon icon={{ name: 'Moon' }} />
    </Button>
</ButtonGroup>
