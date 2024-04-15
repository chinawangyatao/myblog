---
sidebar_position: 7
sidebar_label: 7、红烧鲅鱼｜render props
---
# 7、红烧鲅鱼｜render props

这个东西现在被自定义 HOOKs 代替了，我没写过几个好用的自定义 hooks

render props是现在很流行的一种渲染方式，通过回调函数，渲染子组件，参数可为父组件的任意属性值（[官网也有相应的介绍](https://reactjs.org/docs/render-props.html "官网也有相应的介绍")）新版的contextApi也采用了这个模式。

很多种场景使用此方式的做法：

```javascript
// 权限控制组件，只需要封装一次connect，
// 通过render props向子组件传递权限
class AuthWidget extends Component {
    render() {
        return this.props.children(this.props.auth);
    }
}

const mapStateToProps = state => {
    const { auth } = state;
    return { auth: state.auth };
};
export default connect(mapStateToProps)(AuthWidget);

// 其他组件使用
<AuthWidget
    children={auth => auth.edit && <a>编辑</a>}
/>

// 使用antd的form时
const Test = ({ form, children }) => {
    return children(form);
};
const FormTest = Form.create()(Test);

class Demo extends Component {
    render() {
        return (
            <div>
                xxxxx
                <FormTest>
                    { form => {
                        this.form = form;
                        return (
                            <Form>
                                <Form.Item>
                                    {getFieldDecorator('field', xxx)(
                                        <Input placeholder="请输入链接地址" />
                                    )}
                                </Form.Item>
                            </Form>
                        )
                    }}
                </FormTest>
            </div>
        )
    }
}
```
