<script lang="ts">
    import { Button, ButtonText } from '$components';
    import type { TCtaButton } from './Cta.types';

    // -----------------------------------------------------------------------------------------------------------------
    // Props
    // -----------------------------------------------------------------------------------------------------------------
    export let button: TCtaButton;
</script>

<div class="bg-gradient-striped flex justify-center items-center p-7 rounded">
    <Button {...button}>
        <ButtonText>
            <slot />
        </ButtonText>
    </Button>
</div>
