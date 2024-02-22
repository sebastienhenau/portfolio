<script>
    import { Button, ButtonIcon, ButtonText, Card, Panel, Text, Picture } from '$components';
    import { ROUTES_ABOUT } from '$constants';
</script>

<Card>
    <Panel
        class="max-w-[7rem] w-full"
        slot="image"
    >
        <!-- TODO: create more responsive images -->
        <Picture image={{ src: '/images/profile.jpg', alt: 'Sébastien Henau' }} />
    </Panel>

    <svelte:fragment slot="content">
        <Text
            tag="h1"
            type="title-2"
        >
            Sébastien Henau
        </Text>

        <Text
            class="text-site-contrast-2"
            tag="p"
            type="text"
        >
            Front-end lead at Little Miss Robot
        </Text>

        <Text
            class="mt-3"
            tag="p"
            type="text"
        >
            I build digital, interactive and accessible products and work on improving the technical stack at Little
            Miss Robot.
        </Text>

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
