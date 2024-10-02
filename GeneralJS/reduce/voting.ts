/**
 * Use reduce to take an array of data and return how many people voted
 * You may assume the array will have at least one element
 */

export type Human = {
    name: string;
    voted: boolean;
}

export function voting(arr: Human[]): number {
    const votingHumans = arr.reduce((acc, curr) => {
        if(curr.voted == true){
            acc += 1
        }
        return acc
    }, 0)
    return votingHumans;
}
