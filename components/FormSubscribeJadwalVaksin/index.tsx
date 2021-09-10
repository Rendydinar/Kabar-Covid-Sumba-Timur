import React, { ReactElement, useState } from 'react';
// import TextField from '../TextField';
import { IconButton, TextField, Typography } from '@material-ui/core';
import { IndonesiaPhoneNumberRex } from '../../utils/reqex';
import { IFormSubscribe } from '../../interfaces';
import { subscribeJadwalVaksin } from '../../fetchData/subscribeJadwalVaksin';
import Button from '../Button';
import { classNames } from '../../lib/classNames';
import useStyles from './styles';
import { DATA_SUBSCRIBE_JADWAL_VAKSIN_COLLECTION } from '../../firebase/firestore/collection';
import Dialog from '../Dialog';
import CloseRoundedIcon from '../../icons/closeRounded.svg';
import SadIcon from '../../icons/sad-icon.svg';
import SmileIcon from '../../icons/smile-icon.svg';
import Image from 'next/image';
import { shimmer, toBase64 } from '../../utils';

interface IProps {}

const FormSubscribeJadwalVaksin: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  const [formSubscribe, setFormSubscribe] = useState<IFormSubscribe>({
    username: '',
    phoneNumber: '',
  });
  const [loadingSubscribe, setLoadingSubscribe] = useState<boolean>(false);
  const [openDialogSuccessAddPhoneNumber, setOpenDialogSuccessAddPhoneNumber] =
    useState<boolean>(false);
  const [openDialogFailedAddPhoneNumber, setOpenDialogFailedAddPhoneNumber] =
    useState<boolean>(false);

  const handleChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newValue: any = event.target.value;
    if (event.target.name === 'phoneNumber' && newValue[0] === '0') {
      newValue = +62;
    }
    setFormSubscribe({
      ...formSubscribe,
      [event.target.name]: newValue,
    });
  };

  const handleOpenDialogSuccessAddPhoneNumber = (): void => {
    setOpenDialogSuccessAddPhoneNumber(true);
  };

  const handleCloseDialogSuccessAddPhoneNumber = (): void => {
    setOpenDialogSuccessAddPhoneNumber(false);
  };

  const handleOpenDialogFailedAddPhoneNumber = (): void => {
    setOpenDialogFailedAddPhoneNumber(true);
  };

  const handleCloseDialogFailedAddPhoneNumber = (): void => {
    setOpenDialogFailedAddPhoneNumber(false);
  };

  const handleSubmitSubscribeJadwalVaksin = async (
    event: React.FormEvent<HTMLFormElement | HTMLElement>
  ) => {
    event.preventDefault();
    setLoadingSubscribe(true);
    try {
      // check is phone number already exist
      const listPhoneNumber =
        await DATA_SUBSCRIBE_JADWAL_VAKSIN_COLLECTION.where(
          'phoneNumber',
          '==',
          formSubscribe.phoneNumber
        ).get();
      if (!listPhoneNumber.empty) {
        // show dialog phone number already exist
        if (listPhoneNumber.docs[0].data().isSubscription !== false) {
          handleOpenDialogFailedAddPhoneNumber();
        } else {
          // update to active subscribe
          await DATA_SUBSCRIBE_JADWAL_VAKSIN_COLLECTION.doc(
            listPhoneNumber.docs[0].id ?? ''
          ).update({
            isSubscription: true,
          });
          // show dialog success subscribe
          handleOpenDialogSuccessAddPhoneNumber();
          setFormSubscribe({
            username: '',
            phoneNumber: '',
          });
        }
      } else {
        // add phone number
        await subscribeJadwalVaksin(formSubscribe);
        // show dialog success subscribe
        handleOpenDialogSuccessAddPhoneNumber();
        setFormSubscribe({
          username: '',
          phoneNumber: '',
        });
      }
    } catch (err) {
      // show dialog error subscribe
    }
    setLoadingSubscribe(false);
  };

  const checkValidateForm = (): boolean => {
    if (
      IndonesiaPhoneNumberRex.test(formSubscribe.phoneNumber) &&
      formSubscribe.username.length > 0 &&
      loadingSubscribe === false
    ) {
      return false;
    }
    return true;
  };

  return (
    <div
      className={classNames(
        classes.root,
        'radial-repeating',
        'border-card-custom'
      )}
    >
      <Image
        src='/images/user-add-contact.png'
        alt='add contact'
        width={80}
        height={80}
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 700))}`}
      />
      <form
        onSubmit={handleSubmitSubscribeJadwalVaksin}
        className={classes.form}
      >
        <TextField
          required
          label='Username'
          name='username'
          value={formSubscribe.username}
          onChange={handleChangeForm}
          // startAdornment={<PersonIcon />}
        />
        <TextField
          required
          label='Nomor Telfon'
          type='number'
          name='phoneNumber'
          value={formSubscribe.phoneNumber}
          onChange={handleChangeForm}
          // startAdornment={<WhatsAppIcon />}
        />

        <Button
          type='submit'
          onClick={handleSubmitSubscribeJadwalVaksin}
          disabled={checkValidateForm()}
        >
          Kirim
        </Button>
      </form>
      <Dialog
        onClose={handleCloseDialogSuccessAddPhoneNumber}
        openDialog={openDialogSuccessAddPhoneNumber}
        type='sadIcon'
        hideDefaultHeaderDialog={true}
        classNameDialogContent={classNames(classes.dialogContent, 'success')}
      >
        <div className={classes.containerDioalog}>
          <IconButton
            aria-label='close'
            className={classes.closeButton}
            onClick={handleCloseDialogSuccessAddPhoneNumber}
          >
            <CloseRoundedIcon fill='black' />
          </IconButton>
          <SmileIcon className={classes.iconDialogContent} />
          <Typography className={classNames(classes.textInfo, 'success')}>
            Berhasil
          </Typography>
          <Typography className={classNames(classes.textMessage, 'success')}>
            Nomor Whatsapp Kamu Berhasil Ditambahkan
          </Typography>
        </div>
      </Dialog>
      <Dialog
        onClose={handleCloseDialogFailedAddPhoneNumber}
        openDialog={openDialogFailedAddPhoneNumber}
        type='sadIcon'
        hideDefaultHeaderDialog={true}
        classNameDialogContent={classes.dialogContent}
      >
        <div className={classes.containerDioalog}>
          <IconButton
            aria-label='close'
            className={classes.closeButton}
            onClick={handleCloseDialogFailedAddPhoneNumber}
          >
            <CloseRoundedIcon fill='black' />
          </IconButton>
          <SadIcon className={classes.iconDialogContent} />
          <Typography className={classes.textInfo}>Gagal</Typography>
          <Typography className={classes.textMessage}>
            Nomor Whatsapp Kamu Sudah Terdaftar
          </Typography>
        </div>
      </Dialog>
    </div>
  );
};

export default FormSubscribeJadwalVaksin;
