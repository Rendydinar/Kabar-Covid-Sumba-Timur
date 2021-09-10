// React Dependencies
import React, { Fragment, ReactElement, ReactNode } from 'react';
// Material UI Components - Lab
// Material UI Components - Core
import { CircularProgress, IconButton, SvgIcon } from '@material-ui/core';
// Material UI Components - Icons
// Redux Setup
// API Call
// Interface Call
// Custom Components
// Styles
import useStyles from './styles';
// Assets
// Local Storage
// Utills
import { classNames } from '../../lib/classNames';
// Other

interface IProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'grey'
    | 'white'
    | 'dangerOutlined';
  colorSvgIcon?:
    | 'action'
    | 'disabled'
    | 'error'
    | 'inherit'
    | 'primary'
    | 'secondary';
  edgeIcon?: 'start' | 'end';
  sizeIconButton?: 'small' | 'medium';
  textColor?: 'dark' | 'light' | 'danger';
  fontSize?: 'default' | 'inherit';
  fontSizeSvgIcon?: 'default' | 'inherit' | 'large' | 'small';
  disabled?: boolean;
  fullRounded?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  disableElevation?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: 'button' | 'submit';
  isLoading?: boolean;
  className?: string;
  onClick?: (e: any) => void;
  form?: string;
  onKeyDown?: (e: any) => void;
  id?: string;
  autoFocus?: boolean;
  classsNameLabel?: string;
  isOnlyIcon?: boolean;
  icon?: ReactNode;
  classNameIcon?: string;
  isHaveChildren?: boolean;
  ariaLabel?: string;
  ariaControls?: string;
  ariaHaspopup?:
    | 'grid'
    | 'listbox'
    | 'menu'
    | 'false'
    | 'true'
    | 'dialog'
    | 'tree';
  ref?: any;
  viewBoxIcon?: string;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  noPadding?: boolean;
  hideHoverEffect?: boolean;
}

/**
 * Component {Button} Type {Atom}
 * This component will use as Button element in app
 * @param {props} type {IProps}
 * @return {button} type {ReactElement}
 */
const Button: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();
  let colorStyle: string = '';
  let textColorStyle: string = '';

  if (props.color === 'primary') {
    colorStyle = classes.colorPrimary;
  } else if (props.color === 'secondary') {
    colorStyle = classes.colorSecondary;
  } else if (props.color === 'danger') {
    colorStyle = classes.colorDanger;
  } else if (props.color === 'grey') {
    colorStyle = classes.colorGrey;
  } else if (props.color === 'white') {
    colorStyle = classes.colorWhite;
  } else if (props.color === 'dangerOutlined') {
    colorStyle = classes.colorDangerOutlined;
  }

  if (props.textColor === 'dark') {
    textColorStyle = classes.textColorDark;
  } else if (props.textColor === 'light') {
    textColorStyle = classes.textColorLight;
  } else if (props.textColor === 'danger') {
    textColorStyle = classes.textColorDanger;
  }

  if (props.isOnlyIcon) {
    return (
      <IconButton
        className={classNames(
          classes.iconBtn,
          props.noPadding && 'noPadding',
          props.hideHoverEffect && 'hideHoverEffect',
          props.className
        )}
        onClick={(e) => {
          !props.isLoading && props.onClick && props.onClick(e);
        }}
        size={props.sizeIconButton}
        classes={{
          label: props.classsNameLabel,
        }}
        edge={props.edgeIcon}
        aria-label={props.ariaLabel}
        type={props.type}
        form={props.form}
        disabled={props.disabled}
        ref={props.ref}
      >
        {props.icon !== undefined && (
          <Fragment>
            <SvgIcon
              viewBox={props.viewBoxIcon}
              className={props.classNameIcon}
              color={props.colorSvgIcon}
              fontSize={props.fontSizeSvgIcon}
              aria-controls={
                props.ariaControls !== undefined ? props.ariaControls : ''
              }
              aria-haspopup={
                props.ariaHaspopup !== undefined ? props.ariaHaspopup : 'false'
              }
            >
              {props.icon}
            </SvgIcon>
            {props.isHaveChildren ? props.children : undefined}
          </Fragment>
        )}
      </IconButton>
    );
  } else {
    return (
      <button
        type={props.type ?? 'button'}
        className={classNames(
          classes.root,
          colorStyle,
          props.disabled ? classes.textColorDark : textColorStyle,
          props.disableElevation && classes.disableElevation,
          props.fullRounded && classes.fullRounded,
          props.fullWidth && classes.fullWidth,
          props.fullHeight && classes.fullHeight,
          props.hideHoverEffect && 'hideHoverEffect',
          props.className
        )}
        disabled={props.disabled}
        onClick={(e) => {
          !props.isLoading && props.onClick && props.onClick(e);
        }}
        form={props.form}
        autoFocus={props.autoFocus}
        onKeyDown={props.onKeyDown}
        id={props.id}
        ref={props.ref}
        style={props.style}
        onMouseLeave={props.onMouseLeave}
        onMouseEnter={props.onMouseEnter}
      >
        {props.isLoading ? (
          <CircularProgress
            size={24}
            className={classes.loadingSpinner}
            color='secondary'
          />
        ) : (
          <span
            className={classNames(
              classes.label,
              props.classsNameLabel,
              props.fontSize === 'inherit' && classes.fontSizeInherit
            )}
          >
            {props.startIcon && (
              <span className={classes.startIcon}>{props.startIcon}</span>
            )}
            {props.children}
            {props.endIcon && (
              <span className={classes.endIcon}>{props.endIcon}</span>
            )}
          </span>
        )}
      </button>
    );
  }
};

Button.defaultProps = {
  color: 'primary',
  sizeIconButton: 'medium',
  colorSvgIcon: 'inherit',
  fontSizeSvgIcon: 'default',
  textColor: 'dark',
  fontSize: 'default',
  disabled: false,
  fullRounded: false,
  fullWidth: false,
  disableElevation: false,
  autoFocus: false,
  isOnlyIcon: false,
  isHaveChildren: false,
  noPadding: false,
};

export default Button;
