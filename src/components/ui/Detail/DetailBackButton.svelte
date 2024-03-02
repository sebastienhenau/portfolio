<script
    lang="ts"
    context="module"
>
    import type { TActionHref } from '$components';

    export type TBackButtonHref = TActionHref;

    export interface TBackButtonProps {
        href: TActionHref;
    }
</script>

<script lang="ts">
    import { Button, ButtonIcon, ButtonText } from '$components';

    export let href: TBackButtonHref;
</script>

<Button
    action={{ href }}
    size="sm"
    variant="neutral"
>
    <ButtonIcon
        class="w-6"
        icon={{ name: 'ChevronLeft' }}
    />

    <ButtonText>
        <slot />
    </ButtonText>
</Button>
