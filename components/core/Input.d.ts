import React from 'react';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Visual validation state */
  state?: 'default' | 'error' | 'success';
  helperText?: string;
  /** Overrides helperText and applies error styling */
  errorText?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  /** Inline prefix inside the input box (e.g. "$", "https://") */
  prefix?: React.ReactNode;
  /** Inline suffix inside the input box (e.g. unit label) */
  suffix?: React.ReactNode;
  id?: string;
  name?: string;
  autoComplete?: string;
  style?: React.CSSProperties;
}

export declare function Input(props: InputProps): JSX.Element;
