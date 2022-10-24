export namespace util {
    export const transportFromISOStringToString = (ISOString: string) => {
        const date = new Date(ISOString);
        console.log(date);

        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    };
}
