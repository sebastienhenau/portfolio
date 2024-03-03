<script lang="ts">
    import '$styles/main.css';
    import { fly } from 'svelte/transition';
    import { Container, Header, Menu, Main, Announcement, Text, SkipLink } from '$components';
    import { HeadingsContext } from '$contexts';
    import type { TLayoutData } from './+layout';

    export let data: TLayoutData;
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

<SkipLink href="menu">Skip to menu</SkipLink>

<SkipLink href="main">Skip to main content</SkipLink>

<Container
    class="flex-1 grid grid-cols-1 grid-rows-[auto_1fr_auto] 500:grid-rows-[auto_auto_1fr] 900:grid-cols-[15rem_1fr] 900:grid-rows-[auto_1fr] gap-y-7 900:gap-x-9 900:gap-y-7 pt-5 900:py-7"
>
    <Header class="row-start-1 row-end-2 900:col-start-2 900:col-end-3" />

    <Menu class="row-start-3 row-end-4 500:row-start-2 500:row-end-3 900:row-start-2 900:row-end-3 900:self-start" />

    <Main
        class="900:col-start-2 900:col-end-3 row-start-2 row-end-3 500:row-start-3 500:row-end-4 900:row-start-2 900:row-end-3 max-900:pb-5"
    >
        <HeadingsContext>
            {#key data.url}
                <div
                    in:fly={{ y: -10, duration: 200, delay: 200 }}
                    out:fly={{ y: 10, duration: 200 }}
                >
                    <slot />
                </div>
            {/key}
        </HeadingsContext>
    </Main>
</Container>
