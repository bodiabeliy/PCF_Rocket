import {makeAutoObservable} from 'mobx'

class Counter {

    count = 0
    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count +1
        console.log('count', this.count);
        
    }

    dicrement() {
        this.count = this.count -1
        console.log('count', this.count);

    }

}

export default new Counter()