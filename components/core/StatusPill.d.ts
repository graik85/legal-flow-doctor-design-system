import React from 'react';

export interface StatusPillProps {
  /** Maps to a preset style and default label */
  status?: 'active' | 'pending' | 'review' | 'closed' | 'urgent' | 'drafting' | 'settled';
  /** Override the auto-label from status */
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export declare function StatusPill(props: StatusPillProps): JSX.Element;
