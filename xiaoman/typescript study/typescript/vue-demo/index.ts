interface Options {
  el: string | HTMLElement;
}

interface VueClass {
  options: Options;
  init(): void;
}

interface VNode {
  tag: string;
  text?: string;
  children?: VNode[];
}

// 虚拟dom
class Dom {
  // 创建节点
  createElement(el: string) {
    return document.createElement(el);
  }
  // 填充文本
  setText(el: HTMLElement, text: string | null) {
    el.textContent = text;
  }
  // 渲染函数
  render(data: VNode) {
    let root = this.createElement(data.tag);
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach((item) => {
        let child = this.render(item);
        root.appendChild(child);
      });
    } else {
      this.setText(root, typeof data.text === 'string' ? data.text : null);
    }
    return root;
  }
}

class Vue extends Dom implements VueClass {
  options: Options;
  constructor(options: Options) {
    super();
    this.options = options;
    this.init();
  }
  init(): void {
    // 通过js渲染真实dom
    let data: VNode = {
      tag: 'div',
      children: [
        { tag: 'section', text: '我是一个子节点' },
        { tag: 'section', text: '我是一个子节点1' },
        { tag: 'section', text: '我是一个子节点2' },
      ],
    };
    let app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el;
    app?.appendChild(this.render(data));
  }
}

new Vue({ el: '#app' });
