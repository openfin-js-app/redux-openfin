export default async function asyncForEach<T>(array:T[],cb:(one:T, index:number, arr:T[])=>Promise<void>){
    for (let index = 0; index < array.length; index++){
        await cb(array[index],index,array);
    }
}