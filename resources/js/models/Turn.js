class Turn {

    constructor({id = '', turn = '', status = false}){
        this.id = id
        this.time = turn
        this.status = status
        this.path = `movies/${this.id}`
    }

    static create(data = {}){
        return new Turn(data)
    }

}

export default Turn