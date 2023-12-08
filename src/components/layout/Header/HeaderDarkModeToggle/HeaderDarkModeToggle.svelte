<script lang="ts">
    import clsx from 'clsx';
    import { onMount } from 'svelte';
    import { Action, Icon } from '$components';

    // -------------------------------------------------------------------------
    // Variables
    // -------------------------------------------------------------------------
    let dark: boolean | undefined;
    let interacted: boolean = false;

    // -------------------------------------------------------------------------
    // Reactive statements
    // -------------------------------------------------------------------------
    $: isDarkDefined = dark !== undefined;

    // -------------------------------------------------------------------------
    // Event methods
    // -------------------------------------------------------------------------
    const onClick = () => {
        setMode();
    };

    const onSystemThemeChange = () => {
        setMode();
    };

    // -------------------------------------------------------------------------
    // Event methods
    // -------------------------------------------------------------------------
    const setMode = () => {
        if (!isDarkDefined) {
            return;
        }

        dark = !dark;
        interacted = true;

        if (dark) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    };

    // -------------------------------------------------------------------------
    // Life cycle
    // -------------------------------------------------------------------------
    onMount(() => {
        const hasDocumentAlreadyDarkMode = document.documentElement.classList.contains('dark');
        const systemThemeMatcher = window.matchMedia('(prefers-color-scheme: dark)');

        dark = hasDocumentAlreadyDarkMode;

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

<Action
    class={clsx(
        'relative flex items-stretch justify-between border border-border-alt rounded-lg h-[2.25rem] w-[4.5rem] overflow-hidden',
        {
            'cursor-not-allowed': !isDarkDefined,
        }
    )}
    on:click={onClick}
>
    <span
        class={clsx('absolute z-0 top-0 left-0 w-1/2 h-full bg-border-alt transition-opacity', {
            'translate-x-full': dark && isDarkDefined,
            'opacity-0': !isDarkDefined,
            'transition-transform': interacted,
        })}
    />

    <span
        class={clsx('z-10 flex items-center justify-center flex-1 transition-colors', {
            'text-site-background': !dark && isDarkDefined,
        })}
    >
        <Icon name="Sun" />
    </span>

    <span
        class={clsx('z-10 flex items-center justify-center flex-1 transition-colors', {
            'text-site-background': dark && isDarkDefined,
        })}
    >
        <Icon name="Moon" />
    </span>
</Action>
