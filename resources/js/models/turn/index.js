class Turn {

    constructor({id = '', time = '', status = false, isSelected = false}){
        this.id = id
        this.time = time
        this.path = 'turns'
        this.status = status
        this.isSelected = isSelected
        this.fullPath = `${this.path}/${this.id}`
    }

    isComplete(){
        const isComplete = !!this.time
        if(!isComplete) alert('existen algunos campos vacios')
        return isComplete
    }

    static create(data = {}){
        return new Turn(data)
    }

}

export default Turn