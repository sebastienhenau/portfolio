<script>
    import { Card, Image } from '$components';
</script>

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
        <h1 class="font-bold text-6">Hello there 👋</h1>

        <p class="mt-3">
            I'm a 30-year-old Belgian developer toggling my way into front-end architectures with my faithful cup of
            coffee next to me. Located in the heart of Belgium, I wear the hat as one of the lead developers at Little
            Miss Robot. Together with a great team, I am fortunate enough to contribute to making the internet a better
            place!
        </p>

        <p class="mt-3">
            When I am not losing myself in lines of code you'll likely catch me navigating running trails, attempting to
            conquer climbing walls (or just gracefully descend from them), playing some games on my trusty PlayStation
            or if I have some time left, read a book.
        </p>
    </svelte:fragment>
</Card>
