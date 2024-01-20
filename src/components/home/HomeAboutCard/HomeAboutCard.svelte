<script>
    import { Button, ButtonIcon, ButtonText, Card, Image } from '$components';
    import { ROUTES_ABOUT } from '$constants';
</script>

<!-- TODO: add link Little Miss Robot -->
<!-- TODO: link copy -->
<!-- TODO: set typo's -->
<Card>
    <Image
        alt="Sébastien Henau"
        border
        class="max-w-[7rem] w-full"
        slot="image"
        src="/images/profile.jpg"
    />

    <svelte:fragment slot="content">
        <h1 class="font-bold text-6">Sébastien Henau</h1>

        <p class="text-site-contrast-2">Front-end lead at Little Miss Robot</p>

        <p class="mt-3">
            I build digital, interactive and accessible products and work on improving the technical stack at Little
            Miss Robot.
        </p>

        <footer class="mt-7">
            <Button action={{ href: ROUTES_ABOUT }}>
                <ButtonText>More about me</ButtonText>

                <ButtonIcon
                    class="w-6"
                    icon={{ name: 'ChevronRight' }}
                />
            </Button>
        </footer>
    </svelte:fragment>
</Card>
