function ArrayIndexAndLength() {
    let numberArray = [1, 2, 3, 4, 5];
    const length = numberArray.length;
    const index = numberArray.indexOf(3);
    return (
        <div>
            <h2>Array index and length</h2>
            length = {length}<br />
            index = {index}<br />
        </div>
    );
}
export default ArrayIndexAndLength;