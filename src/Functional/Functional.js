// let props = {
//     name: 4
// }
// let { y } = props;
// console.log(y);
function Functional({ name, age }) {
    return (
        <div>
            {name}, {age}
        </div>
    )
}

export default Functional