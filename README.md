# veui/docs

> VEUI 文档。

## 本地安装

`git clone` 到本地后，在项目根目录下运行：

```shell
npm i
npm run dev
```

后在浏览访问 `http://localhost:3000` 即可。

## 文档编写

开发相关文档位于 `one/docs/development` 下。文档目录结构与网站的目录结构一致，新建 `.md` 文件后需要在 `one/docs/nav.json` 中新建相应的条目，作为目录配置。添加 `sub: true` 将缩进一个层级。

### 组件文档结构

每个组件的文档请按如下顺序编写：

1. 示例
2. API

  1. 属性
  2. 插槽
  3. 作用域插槽
  4. 事件
  5. 方法

3. 全局配置

  1. `veui` 中的默认
  2. `veui-theme-dls` 中的默认配置

4. 图标名称

另外，如有关联组件请在最开始进行说明。比如：

```md
:::tip
`Select` 组件可以内联 [`Option`](./option) 或 [`OptionGroup`](./option-group) 组件使用。
:::
```

### 在文档中插入示例

使用 Markdown 的 shortcode 语法，如下：

```md
[[ demo src="../demo/button.vue"]]
```

路径为 demo 文件相对于当前文档文件的路径。Demo 文件是一个 Vue 单文件组件，最后会将代码展示到文档中。可以编写多个 `<style>` 块，如果带上自定义的 `docs` 属性，则会从文档的源码中去除，用来写一些不想输出到文档里的样式（建议文档里只展示和演示的用法相关的样式代码）。

可以为 demo 书写内嵌的说明，方法为在 demo 文件中增加 `<docs>` 自定义块，比如：

```html
<docs>
具体内容请参考项目 [repo](https://github.com/ecomfe/veui)。
</docs>
```

### 扩展 Markdown 语法

#### 自定义块

因为 Markdown 原生不支持对特定区块设定自定义的 `class`，直接书写 HTML 标签的话内部的内容就无法直接写 Markdown 了。故扩展了如下自定义块的语法：

```md
:::tip
这是一条小贴士。
:::
```

将会渲染为：

```html
<div class="tip custom-block">这是一条小贴士。</div>
```

目前支持的状态类型有 `tip`/`warning`/`alert`。

标注 `v-model` 及 `.sync` 的属性/事件请使用如下格式：

```md
:::badges
`v-model`
:::
```

#### 内联引用

Markdown 中书写表格比较麻烦，如果想在里面嵌入格式比较复杂的内容，原生语法 + GFM 扩展都是不够用的。这里提供了一个定义可被引用内容+将对应内容块内联到文档内任意位置的语法。

定义可被引用的内容：

```md
^^^ui
内容
^^^
```

引用方式和脚注的引用方式相同，只是会将内容直接嵌入当前位置：

```md
[^ui]
```

#### 可折叠区块

有时内容过长不利于阅读全文，故扩展了如下语法支持默认收起的区块，可点击展开。

```md
+++摘要内容
详细内容
+++
```

## 文案规范

参见[《中文文案排版指北》](https://github.com/sparanoid/chinese-copywriting-guidelines)。
