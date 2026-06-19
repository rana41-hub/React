function Dynamism () {

  let number = 456;
  let fullName = () => {
    return 'I am Ultron.'
  }

  return <p>Number : {number} This is the future speaking. {fullName()}</p>
}

export default Dynamism;

//Using {} , we can import any JS expression inside JSX . This includes Functions , variables , function calls and more.