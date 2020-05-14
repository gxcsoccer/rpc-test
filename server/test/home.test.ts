import mm from 'egg-mock';

describe('test/index.test.js', () => {
  let app;
  before(async function() {
    app = mm.app();
    await app.ready();
  });
  after(async function() {
    await app.close();
  });

  it('should invoke HelloService', done => {
    app.rpcRequest('ProtoService') // Error: not found service: ProtoService:1.0
      .invoke('echoObj')
      .send([{
        name: 'gxcsoccer',
        group: 'B',
      }])
      .expect({
        code: 200,
        message: 'hello gxcsoccer, you are in 1',
      }, done);
  });
});
