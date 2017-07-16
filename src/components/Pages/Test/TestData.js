class TestData  {
    constructor() {
    }
    
    setTestData(data) {
        this.correct = data.correct;
        this.incorrect = data.incorrect;
        this.retry = data.retry;
    }
}

const dta = new TestData();

export default dta;