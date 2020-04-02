import { ILinkProps } from './Link';

export interface IMenuProps {
  items: ILinkProps[];
}

export interface IMenuContainer {
  logoHeight: number;
  items: ILinkProps[];
}
