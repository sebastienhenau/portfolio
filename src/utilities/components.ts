import type { TBreakpointIdentifier, TBreakpointsOptions } from '$types';
import clsx from 'clsx';

/* TODO: typescript */
export const getComponentProp = <TBreakpoints, TValues>(
    value: TBreakpoints | TValues,
    callback: (breakpoint: TBreakpointIdentifier, value: TValues) => string
): string => {
    const config = (typeof value !== 'object' ? { DEFAULT: value } : value) as TBreakpointsOptions<TValues>;

    return Object.entries(config).reduce((result, [breakpoint, value]) => {
        const className = callback(breakpoint as TBreakpointIdentifier, value);

        return clsx(result, className);
    }, '');
};
