import axios from 'axios';

const Base = (name: string) => {
  const fn: ClassDecorator = (target) => {
    target.prototype.name = name;
    target.prototype.fn = () => {
      console.log(333);
    };
  };
  return fn;
};

const Get = (url: string) => {
  const fn: MethodDecorator = (target, key, descriptor: PropertyDecorator) => {
    // console.log(target, key);
    axios.get(url).then((res) => {
      descriptor.value(res.data);
    });
  };
  return fn;
};

const Result = () => {
  const fn: ParameterDecorator = (target, key, index) => {
    console.log(target, key, index);
  };
  return fn;
};

@Base('ccc')
class Http {
  @Get('http://suggest.taobao.com/sug?code=utf-8&q=手机')
  getList(@Result() data: any) {
    console.log(data);
  }
}
const http = new Http() as any;
http.getList();
