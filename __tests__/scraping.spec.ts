import { describe, it } from 'node:test'
import assert from 'node:assert'
import cheerioPlus from '../src/index'

describe('Test', () => {
    it('should work', () => {
        const expectedResult = 'hello world'

        assert.strictEqual(cheerioPlus(), expectedResult, `function return is not equal to ${expectedResult}`)
    })
})