import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useRouter } from 'next/router';
import React, { ReactElement, useState } from 'react';
import { CgMore } from 'react-icons/cg';
import { GiFamilyHouse, GiTripleNeedle } from 'react-icons/gi';
import { HiInformationCircle } from 'react-icons/hi';
import { RiVirusFill } from 'react-icons/ri';
import useStyles from './styles';

interface IProps {}
interface IListMore {
  label: string;
  value: string;
  icon: JSX.Element;
}
const ListMore: IListMore[] = [
  {
    label: 'Tentang',
    value: 'tentang',
    icon: <HiInformationCircle />,
  },
];

const Footer: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = useState<number>(0);
  const [state, setState] = React.useState({
    right: false,
  });

  const changeNavigation = (event: any, newValue: any): void => {
    if (newValue !== 'more') {
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

  const list = (anchor: 'right') => (
    <div className={classes.list} role='presentation'>
      <List>
        {ListMore.map((list: IListMore, index: number) => (
          <ListItem
            button
            key={index}
            onClick={(e) => changeNavigation(e, list.value)}
          >
            <ListItemIcon>{list.icon}</ListItemIcon>
            <ListItemText primary={list.label} />
          </ListItem>
        ))}
      </List>
      <footer className={classes.footer}>
        <div>
          Copyright &copy; {new Date().getFullYear()} Kabar Covid Sumba Timur.
          All Rights Reserved Designed and Powered By
          <Link
            href='https://linktr.ee/Rendy_Dinar'
            target='_blank'
            rel='noopener'
            className={classes.linkDevelop}
          >
            {' '}
            RendyDinar
          </Link>
        </div>
      </footer>
    </div>
  );

  return (
    <div className={classes.root}>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        style={{ overflow: 'hidden' }}
      >
        {list('right')}
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
          icon={<RiVirusFill />}
        />
        <BottomNavigationAction
          classes={{
            root: classes.rootBottomNavigationAction,
            label: classes.labelBottomNavigationAction,
            selected: classes.selectedNavigation,
          }}
          label='Kabar Vaksin'
          value='kabar-vaksin'
          icon={<GiTripleNeedle />}
        />
        <BottomNavigationAction
          classes={{
            root: classes.rootBottomNavigationAction,
            label: classes.labelBottomNavigationAction,
            selected: classes.selectedNavigation,
          }}
          label='Kabar Isolasi'
          value='kabar-isolasi'
          icon={<GiFamilyHouse />}
        />
        <BottomNavigationAction
          label='More'
          value='more'
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
