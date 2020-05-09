class Turn {

    constructor({id = '', time = '', status = false}){
        this.id = id
        this.time = time
        this.status = status
        this.path = `turns/${this.id}`
    }

    static create(data = {}){
        return new Turn(data)
    }

}

export default Turn