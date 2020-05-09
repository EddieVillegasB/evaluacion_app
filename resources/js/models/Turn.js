class Turn {

    constructor({id = '', time = '', status = false}){
        this.id = id
        this.time = time
        this.path = 'turns'
        this.status = status
        this.fullPath = `${this.path}/${this.id}`
    }

    isComplete(){
        return !!this.time
    }

    static create(data = {}){
        return new Turn(data)
    }

}

export default Turn