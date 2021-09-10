import DialogMUI from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import CloseIcon from '@material-ui/icons/Close';
import React, { Fragment, ReactNode } from 'react';
import { classNames } from '../../lib/classNames';
import useStyles from './styles';

interface IProps {
  title?: string;
  type?: string;
  openDialog: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  classNameDialogTitle?: string;
  classNameDialogContent?: string;
  classNameDialogAction?: string;
  hideCloseIcon?: boolean;
  closeAfterTransition?: boolean;
  isHaveDividers?: boolean;
  isShowLabelTitleDialog?: boolean;
  children: ReactNode;
  actions?: ReactNode;
  hideDefaultHeaderDialog?: boolean;
  onClose: () => void;
}

const Dialog: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <DialogMUI
      onClose={props.onClose}
      aria-labelledby='customized-dialog-title'
      open={props.openDialog}
      maxWidth={props.maxWidth}
      closeAfterTransition={props.closeAfterTransition}
      classes={{
        paper: classNames(
          classes.dialogPaper,
          props.type === 'custom' && 'custom',
          props.type === 'sentEmail' && 'sentEmail',
          props.type === 'sadIcon' && 'sadIcon'
        ),
      }}
      BackdropProps={{
        style: { backgroundColor: 'var(--color-black-2)', opacity: 0.9 },
      }}
    >
      {props.type ? (
        (props.type === 'custom' ||
          props.type === 'sentEmail' ||
          props.type === 'sadIcon') && (
          <Fragment>
            <MuiDialogContent
              className={classNames(
                classes.dialogContent,
                props.classNameDialogContent,
                'custom'
              )}
            >
              {props.children}
            </MuiDialogContent>
            {props.actions && (
              <MuiDialogActions
                className={classNames(
                  classes.dialogActions,
                  props.closeAfterTransition
                )}
              >
                {props.actions}
              </MuiDialogActions>
            )}
          </Fragment>
        )
      ) : (
        <Fragment>
          <MuiDialogTitle
            disableTypography
            className={classNames(
              classes.dialogTitle,
              props.classNameDialogTitle
            )}
          >
            <Typography className={classes.dialogTitle}>
              {props.title}
            </Typography>
            {/* <IconButton
              aria-label='close'
              className={classes.closeButton}
              onClick={props.onClose}
            >
              <CloseIcon />
            </IconButton> */}
          </MuiDialogTitle>
          <MuiDialogContent
            dividers
            className={classNames(
              classes.dialogContent,
              props.classNameDialogContent
            )}
          >
            {props.children}
          </MuiDialogContent>
          <MuiDialogActions
            className={classNames(
              classes.dialogActions,
              props.closeAfterTransition
            )}
          >
            {props.actions}
          </MuiDialogActions>
        </Fragment>
      )}
    </DialogMUI>
  );
};

Dialog.defaultProps = {
  maxWidth: 'xs',
  closeAfterTransition: true,
  hideDefaultHeaderDialog: false,
};

export default Dialog;
