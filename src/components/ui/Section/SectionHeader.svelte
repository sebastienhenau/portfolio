<script
    context="module"
    lang="ts"
>
    export type TSectionHeaderNumber = string;

    export interface TSectionHeaderProps {
        number: TSectionHeaderNumber;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { Badge } from '$components';

    export let number: TSectionHeaderNumber;
</script>

<header class={clsx('flex items-center gap-4', $$props.class)}>
    <Badge>
        {number}
    </Badge>

    <div class="flex-1 flex justify-between items-center gap-4">
        <slot name="start" />

        <slot name="end" />
    </div>
</header>
