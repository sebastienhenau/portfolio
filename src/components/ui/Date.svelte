<script
    context="module"
    lang="ts"
>
    export type TDateValue = string;

    export interface TDateProps {
        value: TDateValue;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';

    export let value: TDateValue;
</script>

<!-- TODO: datetime -->
<time
    class={clsx('inline-block fs-text fsv-flat', $$props.class)}
    datetime=""
>
    {value}
</time>
