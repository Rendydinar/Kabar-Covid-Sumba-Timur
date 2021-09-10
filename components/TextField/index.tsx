// React Dependencies
import React, { ReactElement } from 'react';
// Material UI Components - Lab
import { AutocompleteRenderInputParams } from '@material-ui/lab';
// Material UI Components - Core
import {
  FilledInput,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
// Material UI Components - Icons
// Redux Setup
// API Call
// Interface Call
// Custom Components
// Styles
import useStyles from './styles';
import { classNames } from '../../lib/classNames';
// Assets
// Local Storage
// Utils
// Others

interface IProps {
  label?: string;
  placeholder?: string;
  hintText?: string;
  maxLength?: number;
  name?: string;
  type?: 'text' | 'password';
  value?: any;
  required?: boolean;
  defaultValue?: any;
  error?: boolean;
  errorText?: string;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  autoCompleteParams?: AutocompleteRenderInputParams;
  variant?: 'filled' | 'outlined' | 'nofill';
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
  classNameInput?: string;
  classNameLabel?: string;
  classesMultiline?: string;
  inputRef?: any;
  inputProps?: any;
  rows?: any;
  autoFocus?: any;
  helperText?: any;
  multiline?: boolean;
  rowsMax?: number;
  classNameTextMaxLenght?: string;
  classNameLabelContainer?: string;
  classsNameFormcontrol?: string;
  isFullWidth?: boolean;
}

/**
 * Component {TextField} Type {Atom}
 * This component will use as Textfield element in app
 * @param {props} type {IProps}
 * @return {button} type {ReactElement}
 */
const TextField: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();

  return (
    <FormControl
      fullWidth={props.isFullWidth}
      required={props.required}
      className={props.classsNameFormcontrol}
    >
      {(props.label || props.maxLength) && (
        <div
          className={classNames(
            classes.labelContainer,
            props.classNameLabelContainer
          )}
        >
          {props.label && (
            <InputLabel
              shrink
              classes={{
                shrink: classNames(classes.inputLabel, props.classNameLabel),
              }}
            >
              {props.label}
            </InputLabel>
          )}
          {props.maxLength && (
            <span
              className={classNames(
                classes.charCounter,
                props.classNameTextMaxLenght,
                props.value.length === props.maxLength && classes.textRed
              )}
            >
              {props.value.length ?? 0}/{props.maxLength}
            </span>
          )}
        </div>
      )}
      {props.hintText && (
        <span className={classes.hintText}>{props.hintText}</span>
      )}
      {props.variant === 'filled' || props.variant === 'nofill' ? (
        <FilledInput
          autoComplete='off'
          innerRef={props.autoCompleteParams?.InputProps.ref}
          placeholder={props.placeholder ?? ''}
          value={props.value}
          defaultValue={props.defaultValue}
          autoFocus={props.autoFocus}
          name={props.name}
          error={props.error}
          classes={{
            root: classNames(
              props.className,
              classes.rootInput,
              props.variant === 'filled'
                ? classes.rootInputFilled
                : classes.rootInputNoFill,
              props.classesMultiline
            ),
            input: classNames(classes.input, props.classNameInput),
          }}
          inputProps={{
            maxLength: props.maxLength,
            ...props.autoCompleteParams?.inputProps,
          }}
          type={props.type ?? 'text'}
          disableUnderline
          endAdornment={props.endAdornment}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          inputRef={props.inputRef}
          rows={props.rows}
          {...props.autoCompleteParams?.InputProps}
          multiline={props.multiline}
          rowsMax={props.rowsMax}
          startAdornment={props.startAdornment}
          onFocus={props.onFocus}
          onClick={props.onClick}
        />
      ) : (
        <OutlinedInput
          autoComplete='off'
          innerRef={props.autoCompleteParams?.InputProps.ref}
          value={props.value}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder ?? ''}
          autoFocus={props.autoFocus}
          name={props.name}
          error={props.error}
          classes={{
            root: classNames(
              props.className,
              classes.rootInput,
              classes.rootInputOutlined,
              props.classesMultiline
            ),
            input: classNames(classes.input, props.classNameInput),
          }}
          inputProps={{
            maxLength: props.maxLength,
            ...props.autoCompleteParams?.inputProps,
          }}
          type={props.type ?? 'text'}
          endAdornment={props.endAdornment}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          inputRef={props.inputRef}
          rows={props.rows}
          {...props.autoCompleteParams?.InputProps}
          multiline={props.multiline}
          rowsMax={props.rowsMax}
          startAdornment={props.startAdornment}
          onFocus={props.onFocus}
          onClick={props.onClick}
        />
      )}
      {props.error && props.errorText && (
        <div className={classes.errorText}>{props.errorText}</div>
      )}
    </FormControl>
  );
};

TextField.defaultProps = {
  variant: 'outlined',
  isFullWidth: true,
};

export default TextField;
