export const toSizePerPage = <T>(array: T[], amount: number): T[][] => {
    const dividedArray: T[][] = [[]]

    array.forEach(item => {
        const currentArray = dividedArray[dividedArray.length - 1]
        let length = 1

        console.log(currentArray, 'in')

        if (currentArray.length === amount) {
             dividedArray.push([])
        }

        dividedArray[dividedArray.length - 1].push(item)
    })

    return dividedArray
}