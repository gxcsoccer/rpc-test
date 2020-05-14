// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import 'egg-onerror';
import 'egg-session';
import 'egg-i18n';
import 'egg-watcher';
import 'egg-multipart';
import 'egg-security';
import 'egg-development';
import 'egg-logrotator';
import 'egg-schedule';
import 'egg-static';
import 'egg-jsonp';
import 'egg-view';
import 'egg-rpc-base';
import 'egg-sofa-rpc';
import 'egg-opentracing';
import 'egg-sofa-tracer';
import 'egg-healthy';
import { EggPluginItem } from 'egg';
declare module 'egg' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
    rpc?: EggPluginItem;
    sofaRpc?: EggPluginItem;
    sofaAntvip?: EggPluginItem;
    sofaDsr?: EggPluginItem;
    opentracing?: EggPluginItem;
    zipkin?: EggPluginItem;
    sofaTracer?: EggPluginItem;
    prometheus?: EggPluginItem;
    lookout?: EggPluginItem;
    healthy?: EggPluginItem;
  }
}