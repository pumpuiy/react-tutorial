
export const PRINT_HELLO = 'print:hello';

export const printHelloWorld = () => {

    console.log("Hello action..");

    return {
        type : PRINT_HELLO,
        payload : { message : 'Hello World!' }
    };
}