import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Drawer from '@material-ui/core/Drawer';
import LinkMUI from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import { CgMore } from 'react-icons/cg';
import { GiFamilyHouse, GiTripleNeedle } from 'react-icons/gi';
import { HiInformationCircle } from 'react-icons/hi';
import { MdContactPhone } from 'react-icons/md';
import { RiVirusFill } from 'react-icons/ri';
import { VscFeedback } from 'react-icons/vsc';
import { ImNewspaper } from 'react-icons/im';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { GiGiftOfKnowledge } from 'react-icons/gi';
import { LINK_FEEDBACK, MESSAGE_WHATSSAPP } from '../../constant';
import useStyles from './styles';
import Link from 'next/link';

interface IProps {}
interface IListMore {
  label: string;
  value: string;
  icon: JSX.Element;
}
const ListMore: IListMore[] = [
  {
    label: 'Kabar Edukasi',
    value: 'kabar-edukasi',
    icon: <GiGiftOfKnowledge size={26} />,
  },
  {
    label: 'Kontributor',
    value: 'kontributor',
    icon: <FaHandHoldingHeart size={26} />,
  },

  {
    label: 'Lapor Info Vaksin',
    value: 'lapor-info-vaksin',
    icon: <VscFeedback size={26} />,
  },
  {
    label: 'Umpan Balik',
    value: 'umpan-balik',
    icon: <MdContactPhone size={26} />,
  },
  {
    label: 'Tentang Kami',
    value: 'tentang-kami',
    icon: <HiInformationCircle size={26} />,
  },
];

const Footer: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = useState<string>('/');
  const [state, setState] = React.useState({
    right: false,
  });

  const changeNavigation = (event: any, newValue: any): void => {
    if (newValue !== 'lebih' && router.pathname !== `/${newValue}`) {
      if (newValue === 'lapor-info-vaksin') {
        window.open(
          `https://api.whatsapp.com/send?phone=6282217971133&text=${MESSAGE_WHATSSAPP}`,
          '_blank',
          'noopener noreferrer' // <- This is what makes it open in a new window.
        );
      } else if (newValue === 'umpan-balik') {
        window.open(
          LINK_FEEDBACK,
          '_blank',
          'noopener noreferrer' // <- This is what makes it open in a new window.
        );
      } else {
        setState({
          right: false,
        });
        setValue(newValue);
        if (newValue === '/') {
          router.push('/');
        } else {
          router.push(`/${newValue}`);
          setValue(newValue);
        }
      }
    }
  };

  const toggleDrawer =
    (anchor: 'right', open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = () => (
    <div className={classes.list} role='presentation'>
      <List className={classes.containerList}>
        {ListMore.map((list: IListMore, index: number) => (
          <Link href={`${list.value}`} key={index}>
            <ListItem
              button
              key={index}
              onClick={(e) => changeNavigation(e, list.value)}
            >
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <footer className={classes.footer}>
        {/* <div className='containerDonation'>
          <LinkMUI
            href='https://saweria.co/r3ndydinar'
            target='_blank'
            rel='noopener'
            className={classes.linkDonation}
          >
            <BiDonateHeart size={24} />
            <Typography>Donate Me</Typography>
          </LinkMUI>
        </div> */}
        <div>
          Website ini dikembangkan oleh{' '}
          <LinkMUI
            href='https://linktr.ee/Rendy_Dinar'
            target='_blank'
            rel='noopener'
            className={classes.linkDevelop}
          >
            RendyDinar{' '}
          </LinkMUI>
          &copy; {new Date().getFullYear()} Kabar Covid Sumba Timur. All Rights
          Reserved
        </div>
      </footer>
    </div>
  );

  useEffect(() => {
    if (router.pathname === '/') {
      setValue('/');
    } else {
      setValue(router.pathname.substr(1));
    }
  }, []);

  return (
    <div className={classes.root}>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        style={{ overflow: 'hidden' }}
      >
        {list()}
      </Drawer>
      <BottomNavigation
        value={value}
        onChange={changeNavigation}
        showLabels
        className={classes.containerBottomNavigationAction}
      >
        <BottomNavigationAction
          classes={{
            root: classes.rootBottomNavigationAction,
            label: classes.labelBottomNavigationAction,
            selected: classes.selectedNavigation,
          }}
          label='Kabar Covid'
          value='/'
          icon={<RiVirusFill size={26} />}
        />
        <BottomNavigationAction
          classes={{
            root: classes.rootBottomNavigationAction,
            label: classes.labelBottomNavigationAction,
            selected: classes.selectedNavigation,
          }}
          label='Kabar Vaksin'
          value='kabar-vaksin'
          icon={<GiTripleNeedle size={26} />}
        />
        <BottomNavigationAction
          classes={{
            root: classes.rootBottomNavigationAction,
            label: classes.labelBottomNavigationAction,
            selected: classes.selectedNavigation,
          }}
          label='Kabar Isolasi'
          value='kabar-isolasi'
          icon={<GiFamilyHouse size={26} />}
        />
        <BottomNavigationAction
          classes={{
            root: classes.rootBottomNavigationAction,
            label: classes.labelBottomNavigationAction,
            selected: classes.selectedNavigation,
          }}
          label='Kabar Berita'
          value='kabar-berita'
          icon={<ImNewspaper size={26} />}
        />
        <BottomNavigationAction
          label='Lebih'
          value='lebih'
          classes={{
            root: classes.rootBottomNavigationAction,
            label: classes.labelBottomNavigationAction,
            selected: classes.selectedNavigation,
          }}
          icon={<CgMore />}
          onClick={toggleDrawer('right', true)}
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
