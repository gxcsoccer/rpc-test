import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589431238677_6096';

  // add your egg config in here
  config.middleware = [];

  exports.sofaRpc = {
    registry: {
      address: '127.0.0.1:2181', // zk 地址指向本地 2181 端口
    },
    client: {
      responseTimeout: 3000
    }
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
