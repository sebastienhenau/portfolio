<script lang="ts">
    import '$styles/main.css';
    import { Container, Header, Menu, Main, Announcement, Text } from '$components';
</script>

<!-- TODO: remove once development is done -->
<Announcement>
    <Text
        type="text"
        variants={['fat']}
    >
        Under development, nothing should be taken seriously.
    </Text>
</Announcement>

<Container
    class="900:grid 900:grid-cols-[12rem_1fr] 900:grid-rows-[auto_1fr] max-900:space-y-7 900:gap-x-9 900:gap-y-7 py-7"
>
    <Header class="900:col-start-2 900:col-end-3" />

    <Menu class="900:row-start-2 900:row-end-3 900:self-start" />

    <Main class="900:col-start-2 900:col-end-3 900:row-start-2 900:row-end-3">
        <slot />
    </Main>
</Container>
