import { getSdk } from 'balena-sdk';

const balena = getSdk();

balena.models.device.getAllByApplication(
  '123456',
  {
    $select: ['uuid', 'device_tag', 'device_environment_variable', 'created_at'],
    $expand: {
      device_tag: {
        $select: ['tag_key', 'value'],
      },
    },
  },
);
