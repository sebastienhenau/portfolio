import type { TComponentBreakpoints, TComponentBreakpointsProp } from '$types';
import clsx from 'clsx';

/* TODO: typescript */
export const getComponentProp = <TBreakpoints, TValues>(
    value: TBreakpoints | TValues,
    callback: (breakpoint: TComponentBreakpoints, value: TValues) => string
): string => {
    const config = (typeof value !== 'object' ? { DEFAULT: value } : value) as TComponentBreakpointsProp<TValues>;

    return Object.entries(config).reduce((result, [breakpoint, value]) => {
        const className = callback(breakpoint as TComponentBreakpoints, value);

        return clsx(result, className);
    }, '');
};
