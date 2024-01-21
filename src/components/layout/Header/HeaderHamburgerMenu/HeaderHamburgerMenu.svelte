<script lang="ts">
    import clsx from 'clsx';
    import { Button, ButtonText } from '$components';
</script>

<!-- TODO: fix interactive-content from button as hamburger icon -->
<Button
    class={clsx('500:hidden', $$props.class)}
    size="sm"
    variant="neutral"
>
    <ButtonText>Menu</ButtonText>

    <svg
        class="interactive-content"
        height="16"
        viewBox="0 0 32 24"
        width="16"
    >
        <rect
            class="fill-site-contrast-1"
            height="4"
            width="32"
            x="0"
            y="0"
        />

        <rect
            class="fill-site-contrast-1"
            height="4"
            width="32"
            x="0"
            y="10"
        />

        <rect
            class="fill-site-contrast-1"
            height="4"
            width="32"
            x="0"
            y="20"
        />
    </svg>
</Button>
