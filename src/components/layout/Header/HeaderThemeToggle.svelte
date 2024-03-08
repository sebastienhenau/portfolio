<script
    context="module"
    lang="ts"
>
</script>

<script lang="ts">
    import { theme } from '$stores';
    import { Button, ButtonGroup, ButtonGroupItem, ButtonIcon } from '$components';
    import { THEME_DARK, THEME_LIGHT } from '$constants';
    import { isBrowser } from '$utilities';

    const onSystemClick = () => {
        theme.watchSystem();
    };

    const onLightModeClick = () => {
        theme.updateLocalMode(THEME_LIGHT);
    };

    const onDarkModeClick = () => {
        theme.updateLocalMode(THEME_DARK);
    };
</script>

<!-- TODO: size update on breakpoints -->
<ButtonGroup>
    <ButtonGroupItem selected={isBrowser() && $theme.isWatchingSystem}>
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

    <ButtonGroupItem selected={isBrowser() && $theme.mode === 'light' && !$theme.isWatchingSystem}>
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

    <ButtonGroupItem selected={isBrowser() && $theme.mode === 'dark' && !$theme.isWatchingSystem}>
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
