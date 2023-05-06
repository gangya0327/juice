interface Point9 {
  x: number;
  y: number;
}

function printCoord9(pt: Point9) {}

printCoord9({ x: 100, y: 200 });

// 扩展接口
interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}

const bear: Bear = {
  name: 'Winnie',
  honey: true,
};

// 通过交叉点扩展类型
type Animal1 = {
  name: string;
};
type Bear1 = Animal1 & {
  honey: boolean;
};

const bear1: Bear1 = {
  name: 'pooh',
  honey: true,
};

// 向现有类型添加新字段
interface MyWindow {
  title: string;
}
interface MyWindow {
  count: number;
}

const w: MyWindow = {
  title: 'hello',
  count: 11,
};

// 报错，别名创建以后，不能再更改
type MyWindow1 = {
  title: string;
};

type MyWindow1 = {
  count: number;
};
