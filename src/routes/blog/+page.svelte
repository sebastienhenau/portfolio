<script>
    import {
        Button,
        ButtonIcon,
        ButtonText,
        Section,
        SectionContent,
        SectionHeader,
        SectionTitle,
        Text,
    } from '$components';
</script>

<Section number="1">
    <SectionHeader>
        <SectionTitle slot="left">Blog</SectionTitle>

        <Button
            size="sm"
            slot="right"
            variant="neutral"
        >
            <ButtonText>Filter</ButtonText>

            <ButtonIcon icon={{ name: 'Filter' }} />
        </Button>
    </SectionHeader>

    <SectionContent class="mt-7">
        <Text>Coming soon...</Text>
    </SectionContent>
</Section>
