<script lang="ts">
    import clsx from 'clsx';
    import { Text } from '$components';
    import HeaderLogo from './HeaderLogo.svelte';
    import HeaderThemeToggle from './HeaderThemeToggle.svelte';
</script>

<header class={clsx('flex justify-between items-center gap-6', $$props.class)}>
    <div class="flex items-center gap-5">
        <HeaderLogo />

        <Text
            type="title-2"
            variants={['flat']}
        >
            Sébastien Henau
        </Text>
    </div>

    <div class="flex items-center gap-5">
        <!-- TODO: add search button with feature -->
        <!--<Button
            size='sm'
            variant='neutral'
        >
            <ButtonText>Search</ButtonText>

            <ButtonIcon icon={{ name: 'Search' }} />
        </Button>-->

        <HeaderThemeToggle />
    </div>
</header>
