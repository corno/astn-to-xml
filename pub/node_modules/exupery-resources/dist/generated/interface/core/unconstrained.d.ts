import * as _pt from 'exupery-core-types';
export type _T_Dictionary<M_Source, T_D> = _pt.Dictionary<T_D>;
export type _T_List<M_Source, T_L> = _pt.Array<T_L>;
export type _T_State_Group<M_Source, T_SG> = T_SG;
export type Dictionary<M_Source, T_D> = _T_Dictionary<M_Source, T_D>;
export type List<M_Source, T_L> = _T_List<M_Source, T_L>;
export type State_Group<M_Source, T_SG> = _T_State_Group<M_Source, T_SG>;
export declare namespace _T_Dictionary {
    type D<M_Source, T_D> = T_D;
}
export declare namespace _T_List {
    type L<M_Source, T_L> = T_L;
}
export declare namespace Dictionary {
    type D<M_Source, T_D> = T_D;
}
export declare namespace List {
    type L<M_Source, T_L> = T_L;
}
