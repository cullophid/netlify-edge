export default () => {
    let message= "Hello world"
    eval(`message= 'Hello Eval'`)
    return new Response(message)
}


