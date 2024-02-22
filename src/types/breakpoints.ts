export type TBreakpoint = '300' | '500' | '600' | '700' | '900' | '1000' | '1200' | '1500';

export type TMaxBreakpoint =
    | 'max-300'
    | 'max-500'
    | 'max-600'
    | 'max-700'
    | 'max-900'
    | 'max-1000'
    | 'max-1200'
    | 'max-1500';

export type TBreakpointIdentifier = TBreakpoint | TMaxBreakpoint;

export type TBreakpointConfigMinMediaQuery = string;
export type TBreakpointConfigMaxMediaQuery = string;

export type TBreakpointConfig = {
    minMediaQuery: TBreakpointConfigMinMediaQuery;
    maxMediaQuery: TBreakpointConfigMaxMediaQuery;
};

export type TBreakpointsConfig = {
    [key in TBreakpoint]: TBreakpointConfig;
};

export type TBreakpointsOptions<TValue> = {
    [key in TBreakpointIdentifier]?: TValue;
};
