export type TComponentBreakpoints =
    | 'DEFAULT'
    | 'max-300'
    | '300'
    | 'max-500'
    | '500'
    | 'max-600'
    | '600'
    | 'max-700'
    | '700'
    | 'max-900'
    | '900'
    | 'max-1000'
    | '1000'
    | 'max-1200'
    | '1200'
    | 'max-1500'
    | '1500';

export type TComponentBreakpointsProp<value> = {
    [key in TComponentBreakpoints]?: value;
};
