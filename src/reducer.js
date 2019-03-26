export default (count = 0, action) => {
  const {type, data} = action
  console.log(data)
  switch (type) {
    case 'INCREMENT': return count + 1;
    case 'DECREMENT': return count - 1;

    default: return count

  }
}
