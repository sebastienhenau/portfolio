import type { TBreakpointIdentifier } from '$types';
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
    const defaultClass = getComponentClassByDefaultValue<TValue>(config, defaultValue);

    const breakpointsClass = Object.entries(breakpoints).reduce((result, [breakpoint, breakpointValue]) => {
        const breakpointClass = getComponentClassByBreakpoint<TValue>(
            config,
            breakpointValue as TValue,
            breakpoint as TBreakpointIdentifier
        );

        return clsx(result, breakpointClass);
    }, '');

    return clsx(defaultClass, breakpointsClass);
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
