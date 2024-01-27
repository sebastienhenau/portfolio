<script lang="ts">
    import clsx from 'clsx';
    import { Button, ButtonIcon, ButtonText } from '$components';
    import { dialogs } from '$stores';

    // -----------------------------------------------------------------------------------------------------------------
    // Event Listeners
    // -----------------------------------------------------------------------------------------------------------------
    const onClick = () => {
        dialogs.showDialog('mobile-menu');
    };
</script>

<!-- TODO: fix interactive-content from button as hamburger icon -->
<Button
    class={clsx('500:hidden', $$props.class)}
    on:click={onClick}
    size="sm"
    variant="neutral"
>
    <ButtonText>Menu</ButtonText>

    <ButtonIcon icon={{ name: 'HamburgerMenu' }} />
</Button>
