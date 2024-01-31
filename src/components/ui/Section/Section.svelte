<script
    context="module"
    lang="ts"
>
    export type TSectionNumber = string;

    export interface TSectionProps {
        number: TSectionNumber;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { Badge } from '$components';

    export let number: TSectionNumber;
</script>

<!-- TODO: link 1.25rem to badge or inherit badge -->
<section
    class={clsx(
        'grid grid-cols-[auto_1fr] 600:grid-cols-[1.25rem_1fr] grid-rows-3-auto gap-x-4 700:gap-x-6',
        $$props.class
    )}
>
    <div
        class="col-start-1 col-end-2 row-start-2 row-end-4 max-600:hidden w-border rounded-full bg-line self-stretch justify-self-center pointer-events-none"
    />

    <Badge class="col-start-1 col-end-2 row-start-1 row-end-2 self-center">
        {number}
    </Badge>

    <slot />
</section>
