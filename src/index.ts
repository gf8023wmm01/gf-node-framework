import type { indexType } from './config/config'
import sum from '@/config/fun'
const sayHello = (index: indexType): number => {
    console.log('hello')
    return sum(index)
}

export default sayHello