import { ReactNode } from 'react';

import { Color as AlertVariant } from '@material-ui/lab/Alert';

export interface NotificationPayload {
  message: string | ReactNode;
  severity: AlertVariant;
}
