<script
    context="module"
    lang="ts"
>
    export type TDateValue = string;
    export type TDateFormat = 'DD/MM/YYYY' | 'YYYY';

    export interface TDateProps {
        value: TDateValue;
    }
</script>

<script lang="ts">
    import clsx from 'clsx';
    import { getDateFromDDMMYYYY, getFormattedDate } from '$utilities';

    export let value: TDateValue;
    export let format: TDateFormat = 'DD/MM/YYYY';

    const getDate = (): [string, string] => {
        if (format === 'YYYY') {
            return [value, value];
        } else {
            const date = getDateFromDDMMYYYY(value);
            const formattedDate = getFormattedDate(date);
            const datetime = `${date}`;

            return [formattedDate, datetime];
        }
    };

    const [date, datetime] = getDate();
</script>

<!-- TODO: datetime -->
<time
    class={clsx('inline-block fs-text fsv-flat', $$props.class)}
    {datetime}
>
    {date}
</time>
