import React from 'react';

/**
 * @startingPoint section="Components" subtitle="Primary, secondary, ghost and destructive actions" viewport="700x120"
 */
export interface ButtonProps {
  /** Visual style of the button */
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'outline' | 'gold';
  /** Height/padding preset */
  size?: 'sm' | 'md' | 'lg';
  /** Disables interaction and applies muted opacity */
  disabled?: boolean;
  /** Shows spinner and prevents interaction */
  loading?: boolean;
  /** Icon element placed before label */
  iconLeft?: React.ReactNode;
  /** Icon element placed after label */
  iconRight?: React.ReactNode;
  /** Stretches button to fill its container */
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
