import { Event } from '@ui5-webcomponents-react/base';
import UI5Link from '@ui5/webcomponents/dist/Link';
import React, { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { LinkType } from '../../lib/LinkType';

export interface LinkPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  href?: string; // @generated
  target?: string; // @generated
  type?: LinkType; // @generated
  wrap?: boolean; // @generated
  onPress?: (event: Event) => void; // @generated
  children?: string; // @generated
}

const Link: FC<LinkPropTypes> = withWebComponent<LinkPropTypes>(UI5Link);

Link.displayName = 'Link';

Link.defaultProps = {
  href: '', // @generated
  target: '', // @generated
  type: LinkType.Default // @generated
};

export { Link };
