<script
    context="module"
    lang="ts"
>
    export type THeaderThemeToggleTheme = '' | 'light' | 'dark';
</script>

<!-- TODO: move to separate store -->
<script lang="ts">
    import { onMount, tick } from 'svelte';
    import { Button, ButtonGroup, ButtonGroupItem, ButtonIcon } from '$components';

    // -----------------------------------------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------------------------------------
    let theme: THeaderThemeToggleTheme = '';
    let isWatchingSystem = true;
    let isDefaultSet = false;

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
        const localTheme = (localStorage.getItem('theme') || '') as THeaderThemeToggleTheme;
        const hasLocalTheme = !!localStorage.theme;
        const systemThemeMatcher = window.matchMedia('(prefers-color-scheme: dark)');

        (async () => {
            /**
             * Tick is used to update the theme and isWatchingSystem variable after the initial state is set. If this is
             * not applied before setting the values, the state will update too fast and the buttons will not be updated
             * along the way.
             */
            await tick();

            if (hasLocalTheme) {
                theme = localTheme;
                isWatchingSystem = false;
            }

            isDefaultSet = true;
        })();

        systemThemeMatcher.addEventListener('change', onSystemThemeChange);

        return () => {
            systemThemeMatcher.removeEventListener('change', onSystemThemeChange);
        };
    });
</script>

<!-- TODO: size update on breakpoints -->
<ButtonGroup>
    <ButtonGroupItem selected={theme === '' && isWatchingSystem && isDefaultSet}>
        <Button
            form="square"
            on:click={onSystemClick}
            size="sm"
            variant="neutral"
            action={{ ariaLabel: 'Set dark or light mode based on your system preferences' }}
        >
            <ButtonIcon icon={{ name: 'HalfCircle' }} />
        </Button>
    </ButtonGroupItem>

    <ButtonGroupItem selected={theme === 'light' && !isWatchingSystem && isDefaultSet}>
        <Button
            form="square"
            on:click={onLightModeClick}
            size="sm"
            variant="neutral"
            action={{ ariaLabel: 'Set light mode' }}
        >
            <ButtonIcon icon={{ name: 'Sun' }} />
        </Button>
    </ButtonGroupItem>

    <ButtonGroupItem selected={theme === 'dark' && !isWatchingSystem && isDefaultSet}>
        <Button
            form="square"
            on:click={onDarkModeClick}
            size="sm"
            variant="neutral"
            action={{ ariaLabel: 'Set dark mode' }}
        >
            <ButtonIcon icon={{ name: 'Moon' }} />
        </Button>
    </ButtonGroupItem>
</ButtonGroup>
