export const enumSize = ['atom', 'micro', 'mini', 'normal', 'large', 'extra'];

export type Size = (typeof enumSize)[number];

export const enumUsage = ['mute', 'normal', 'warning', 'danger'];

export type Usage = (typeof enumUsage)[number];
