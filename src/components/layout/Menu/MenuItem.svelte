<script context="module" lang="ts">
    import type { TActionHref, TIconName } from "$components";

    export type TMenuItemHref = TActionHref;
    export type TMenuItemIcon = TIconName;

    export interface TMenuItem {
        button: TMenuItemHref;
        buttonIcon: TMenuItemIcon;
    }
</script>

<script lang="ts">
    import { Button, ButtonText, ButtonIcon, ButtonGroupItem } from "$components";
    import { page } from "$app/stores";

    export let href: TMenuItemHref;
    export let icon: TMenuItemIcon;

    $: isActive = $page.url.pathname === href;
</script>

<ButtonGroupItem selected={isActive}>
    <Button
        action={{ href }}
        horizontalAlign="center"
        horizontalAlignBreakpoints={{
            500: "left",
        }}
        variant="neutral"
    >
        <ButtonIcon class="max-500:hidden" icon={{ name: icon }} />

        <ButtonText>
            <slot />
        </ButtonText>
    </Button>
</ButtonGroupItem>
