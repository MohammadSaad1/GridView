export const toSizePerPage = <T>(array: T[], amount: number): T[][] => {
    const dividedArray: T[][] = [[]]

    array.forEach(item => {
        const currentArray = dividedArray[dividedArray.length - 1]

        if (currentArray.length === amount) {
             dividedArray.push([])
        }

        dividedArray[dividedArray.length - 1].push(item)
    })

    return dividedArray
}