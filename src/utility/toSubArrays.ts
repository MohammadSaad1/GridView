export const toSubArrays = <T>(array: T[], amount: number): T[][] => (
    array.reduce((accumulator: any[], __, index) => {
        if (!accumulator[index % amount]) {
            accumulator[index % amount] = []
        }

        accumulator[index % amount].push(array[index])

        return accumulator
    }, [])
)
