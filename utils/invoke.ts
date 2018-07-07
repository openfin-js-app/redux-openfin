export default (methodName:string, ...args:any[]) => (obj:any = {}) => {
    if (!obj[methodName]){
        throw `Method name, '${methodName}' does not exist on this object`;
    }
    return obj[methodName](...args);
}