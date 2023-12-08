<script lang="ts">
    import { Button, ButtonText } from '$components';
    import type { TCtaButton, TCtaText } from './Cta.types';

    // -------------------------------------------------------------------------
    // Props
    // -------------------------------------------------------------------------
    export let text: TCtaText;
    export let button: TCtaButton;
</script>

<div class="bg-gradient-striped flex justify-center items-center p-7 rounded-lg">
    <Button {...button}>
        <ButtonText>
            {text}
        </ButtonText>
    </Button>
</div>
