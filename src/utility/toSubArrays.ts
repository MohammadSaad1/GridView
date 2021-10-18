export const toSubArrays = (array: any[], amount: number): any[][] => (
    array.reduce((accumulator, __, index) => {
        if (!accumulator[index % amount]) {
            accumulator[index % amount] = []
        }

        accumulator[index % amount].push(array[index])

        return accumulator
    }, [])
)
