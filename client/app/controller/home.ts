import { Controller } from 'egg';

export default class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.proxy.protoService.echoObj({
      name: 'gxcsoccer',
      group: 'A',
    });
    ctx.body = res;
  }
}
