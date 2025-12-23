const Expression = () => {
    const title = 'Expression'
    const array = [1,2,3,4,5];
    const hello = (arg) =>  `Hello ${arg}`;
    const jsx = <h3>This is JSX</h3>;
    return (
        <div className = {title.toLowerCase()}>
            <h3>{title}</h3>
            <h3>{array}</h3>
            <h3>{hello('World')}</h3>
            {jsx}
        </div>
    )
}
//jsx JavaScriptの式を評価して出力している？
export default Expression;