<script lang="ts">
    import { Dialog, Navigation } from '$components';
    import { dialogs } from '$stores';

    // -----------------------------------------------------------------------------------------------------------------
    // Event listeners
    // -----------------------------------------------------------------------------------------------------------------
    const onClickNavigationItem = () => {
        console.log('click');
        dialogs.hideDialog('mobile-menu');
    };
</script>

<Dialog
    class="500:hidden"
    id="mobile-menu"
    title="Menu"
>
    <nav slot="content">
        <Navigation
            class="w-full"
            on:clickNavigationItem={onClickNavigationItem}
        />
    </nav>
</Dialog>
