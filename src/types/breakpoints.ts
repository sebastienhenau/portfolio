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

export type TBetweenBreakpoint =
    | '300:max-500'
    | '300:max-600'
    | '300:max-700'
    | '300:max-900'
    | '300:max-1000'
    | '300:max-1200'
    | '300:max-1500'
    | '500:max-600'
    | '500:max-700'
    | '500:max-900'
    | '500:max-1000'
    | '500:max-1200'
    | '500:max-1500'
    | '600:max-700'
    | '600:max-900'
    | '600:max-1000'
    | '600:max-1200'
    | '600:max-1500'
    | '700:max-900'
    | '700:max-1000'
    | '700:max-1200'
    | '700:max-1500'
    | '900:max-1000'
    | '900:max-1200'
    | '900:max-1500'
    | '1000:max-1200'
    | '1000:max-1500'
    | '1200:max-1500';

export type TBreakpointIdentifier = TBreakpoint | TMaxBreakpoint | TBetweenBreakpoint;

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
    [key in TBreakpoint]?: TValue;
};
