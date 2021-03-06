import * as React from 'react';
import Normalize from 'react-normalize';
import { I18nextProvider } from 'react-i18next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faBars, faEye } from '@fortawesome/free-solid-svg-icons';

import Menu from '../menu';
import Transition from '../transition';
import Background from '../background';
import SEO from '../seo';

import { MenuProvider } from '../../contexts/MenuContext';

import i18n from '../../i18n';

import './global.scss';
import './animations.scss';
import './layout.scss';

library.add(faEnvelope, faBars, faEye);

interface Props {
  readonly children: React.ReactNode;
  readonly location: Location;
}

const Layout = ({ children, location }: Props) => (
  <I18nextProvider i18n={i18n}>
    <MenuProvider>
      <SEO />

      <Normalize />

      <Menu />

      <Transition location={location}>{children}</Transition>

      <Background />
    </MenuProvider>
  </I18nextProvider>
);

export default Layout;
