import { inject } from 'mobx-react';
import CustomHtml from '../../shared/components';

export default inject(({ stores: { settings: { theme } } }) => ({
  customHtml: theme.customHtml && theme.customHtml.pwa,
}))(CustomHtml);
