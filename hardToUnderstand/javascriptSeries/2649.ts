// 2649. Nested Array Generator

// Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.

// A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.

// inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.

/**
 * @argument { Input : arr = [[[6]],[1,3],[]] }
 * @returns { Output : [6,1,3] }
 */

type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(
    arr: MultidimensionalArray
): Generator<number, void, unknown> {
    function flattingArray(array: any, res: any[]): any {
        for (const v of array) {
            if (Array.isArray(v)) flattingArray(v, res)
            else res.push(v)
        }
        return res
    }

    const context = flattingArray(arr, [])

    while (context.length) {
        yield context.shift()
    }
}

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
