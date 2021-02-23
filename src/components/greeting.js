export function Greeting(props) {

    let prefix = () => {
        if (props.gender == "f") {
            return "Ms. " + props.name;
        }
        else {
            return "Mr. " + props.name;
        }
    }

    // function prefix() {
    //   return "Mr. " + props.name;
    // }

    return (
        <>
            <p>Hello {props.name}</p>
            <p>Hello {prefix()}</p>
            <h1>Hi</h1>
            <h2>There</h2>

        </>
    )
}