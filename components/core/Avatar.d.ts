import React from 'react';

export interface AvatarProps {
  /** Full name — used for initials generation and alt text */
  name?: string;
  /** Optional image URL; falls back to initials */
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'default' | 'outline';
  /** Presence indicator dot */
  status?: 'online' | 'away' | 'busy' | 'offline';
  style?: React.CSSProperties;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
