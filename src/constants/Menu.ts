import { ILinkProps } from './../interfaces/Link';

const linkBuilder = (...labels: string[]): ILinkProps[] => {
  return labels.reduce(
    (accumulator: ILinkProps[], currentValue: string): ILinkProps[] => {
      return [
        ...accumulator,
        {
          label: currentValue,
          href: '/'
        }
      ];
    },
    []
  );
};

export const TOPBAR_MENU: ILinkProps[] = linkBuilder(
  'Culture',
  'Work',
  'Clients',
  'Services',
  'Careers',
  'Contact'
);
export const FOOTER_MENU: ILinkProps[] = linkBuilder(
  'Privacy',
  'Sitemap',
  'Facebook',
  'LinkedIn',
  'Instagram',
  'Twitter'
);
