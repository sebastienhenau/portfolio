<script lang="ts">
    import clsx from 'clsx';
</script>

<div
    class={clsx('flex justify-center items-center border rounded bg-site-base w-[1.25rem] h-[1.25rem]', $$props.class)}
>
    <p class="leading-none text-2 font-bold">
        <slot />
    </p>
</div>
