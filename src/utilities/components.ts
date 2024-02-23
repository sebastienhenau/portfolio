import type { TBreakpoint, TBreakpointIdentifier } from '$types';
import clsx from 'clsx';

type TGetComponentResponsiveClassConfig<TKeys extends string> = {
    [key in TKeys]?: {
        defaultValue?: string;
        breakpoints?: {
            [key in TBreakpointIdentifier]?: string;
        };
    };
};

export const getComponentResponsiveClass = <TValue extends string, TBreakpoints extends object>(
    defaultValue: TValue,
    breakpoints: TBreakpoints,
    config: TGetComponentResponsiveClassConfig<TValue>
): string => {
    const initialBreakpointsArray = Object.entries(breakpoints || {}) as [TBreakpoint, TValue][];
    const breakpointsLength = initialBreakpointsArray.length;

    if (breakpointsLength === 0) {
        return getComponentClassByDefaultValue<TValue>(config, defaultValue);
    }

    const breakpointsArrayWithStartingBreakpoint = [
        [initialBreakpointsArray[0][0], defaultValue],
        ...initialBreakpointsArray,
    ] as [TBreakpoint, TValue][];
    const breakpointsArrayWithStartingBreakpointLength = breakpointsArrayWithStartingBreakpoint.length;

    return breakpointsArrayWithStartingBreakpoint.reduce((result, [breakpoint, breakpointValue], index) => {
        const isFirstItem = index === 0;
        const isLastItem = index === breakpointsArrayWithStartingBreakpointLength - 1;

        let breakpointKey: TBreakpointIdentifier | undefined;

        if (isFirstItem) {
            breakpointKey = `max-${breakpoint}`;
        } else if (isLastItem) {
            breakpointKey = breakpoint;
        } else {
            const nextBreakpoint = breakpointsArrayWithStartingBreakpoint[index + 1][0];

            breakpointKey = nextBreakpoint
                ? (`${breakpoint}:max-${nextBreakpoint}` as TBreakpointIdentifier)
                : breakpoint;
        }

        const breakpointClass = getComponentClassByBreakpoint<TValue>(config, breakpointValue, breakpointKey);

        return clsx(result, breakpointClass);
    }, '');
};

export const getComponentClassByDefaultValue = <TKey extends string>(
    config: TGetComponentResponsiveClassConfig<TKey>,
    key: TKey
): string => {
    const { defaultValue = '' } = config[key] || {};

    return defaultValue;
};

export const getComponentClassByBreakpoint = <TKey extends string>(
    config: TGetComponentResponsiveClassConfig<TKey>,
    key: TKey,
    breakpoint: TBreakpointIdentifier
): string => {
    const { breakpoints = {} } = config[key] || {};

    return breakpoints[breakpoint] ?? '';
};
