import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { classNames } from '../lib/classNames';
import { DATA_SUBSCRIBE_JADWAL_VAKSIN_COLLECTION } from '../firebase/firestore/collection';

interface IProps {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
    media: {
      height: '140px',
    },
    card: {
      marginTop: '30px',
      width: '500px',
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
    },
    btnAction: {
      color: '#fff',
      backgroundColor: '#22C55E',
      '&.delete': {
        backgroundColor: '#EF4444',
      },
    },
    cardAction: {
      justifyContent: 'flex-end',
    },
    containerError: {
      width: '500px',
      marginTop: '40px',
      padding: '20px',
      borderRadius: '5px',
      borderTop: '11px',
      borderBottom: '5px solid',
      borderStyle: 'outset',
      borderColor: '#EF4444',
      [theme.breakpoints.down('sm')]: {
        padding: '10px',
        width: '90%',
      },
    },
  })
);

interface IUserData {
  username: string;
  id: string;
}
interface IError {
  isShow: boolean;
  message: string;
}

const UnsubscribeJadwalVaksin: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  const [userData, setUserData] = useState<IUserData>();
  const router = useRouter();
  const [isShowAction, setIsShowAction] = useState<boolean>(false);
  const [error, setError] = useState<IError>({
    isShow: false,
    message: '',
  });

  const goToMainApp = (): void => {
    router.replace('/');
  };

  const getDataUser = async (
    phoneNumber: string,
    token: string
  ): Promise<void> => {
    try {
      const dataUser = await DATA_SUBSCRIBE_JADWAL_VAKSIN_COLLECTION.where(
        'phoneNumber',
        '==',
        phoneNumber
      ).get();
      if (dataUser.empty) {
        setIsShowAction(false);
        setError({
          isShow: true,
          message: 'Nomor whatsapp tidak terdaftar',
        });
      } else {
        if (dataUser.docs[0].data().token !== token) {
          setIsShowAction(false);
          setError({
            isShow: true,
            message: 'Token sudah kadelwarsa',
          });
        } else if (dataUser.docs[0].data().isSubscription === false) {
          setIsShowAction(false);
          setError({
            isShow: true,
            message: 'Nomor sudah di batalkan langganan sebelumnya',
          });
        } else {
          setUserData({
            username: dataUser.docs[0].data().username,
            id: dataUser.docs[0].id,
          });
          setIsShowAction(true);
        }
      }
    } catch (err) {
      // handle error here
    }
  };

  const handleUnsubscribeJadwalVaksin = async (): Promise<void> => {
    try {
      await DATA_SUBSCRIBE_JADWAL_VAKSIN_COLLECTION.doc(
        userData?.id ?? ''
      ).update({
        isSubscription: false,
      });
      goToMainApp();
    } catch (err) {
      // handle error
      setError({
        isShow: true,
        message: 'Gagal batalkan langganan, silakan hubungi admin',
      });
    }
  };

  useEffect(() => {
    const { phone, token }: any = router.query;
    if (!phone && !token) {
      // goToMainApp();
      alert('goto main page');
    } else {
      getDataUser(phone, token);
    }
  }, []);

  return (
    <div className={classes.root}>
      {isShowAction && (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='/images/delete-account.png'
              title='Delete Account'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Batal Langganan Jadwal Kabar Vaksin
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Dengan berhenti langganan Anda tidak akan lagi menerima pesan
                Whatsapp terkait informasi Jadwal Vaksinasi yang dilaksanakan Di
                Sumba Timur.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardAction}>
            <Button
              size='small'
              className={classes.btnAction}
              onClick={goToMainApp}
            >
              Kembali
            </Button>
            <Button
              size='small'
              className={classNames(classes.btnAction, 'delete')}
              onClick={handleUnsubscribeJadwalVaksin}
            >
              Lanjut Batalkan
            </Button>
          </CardActions>
        </Card>
      )}
      {error.isShow && (
        <div className={classes.containerError}>
          <Typography variant='body1'>{error.message}</Typography>
        </div>
      )}
    </div>
  );
};

export default UnsubscribeJadwalVaksin;
