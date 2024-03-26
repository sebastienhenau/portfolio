import { BREAKPOINTS } from "$constants";
import type {
    TBreakpoint,
    TBreakpointConfig,
    TBreakpointConfigMaxMediaQuery,
    TBreakpointConfigMinMediaQuery,
    TBreakpointIdentifier,
} from "$types";

export const isMaxBreakpointIdentifier = (identifier: TBreakpointIdentifier): boolean => {
    return identifier.includes("max");
};

export const getBreakpointByIdentifier = (identifier: TBreakpointIdentifier): TBreakpointConfig => {
    const key = isMaxBreakpointIdentifier(identifier)
        ? (identifier.split("-")[1] as TBreakpoint)
        : (identifier as TBreakpoint);

    return BREAKPOINTS[key];
};

export const getBreakpointMediaQuery = (
    identifier: TBreakpointIdentifier
): TBreakpointConfigMinMediaQuery | TBreakpointConfigMaxMediaQuery => {
    const { minMediaQuery, maxMediaQuery } = getBreakpointByIdentifier(identifier);

    return isMaxBreakpointIdentifier(identifier) ? maxMediaQuery : minMediaQuery;
};
