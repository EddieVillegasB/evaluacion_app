import moment from 'moment'
class Movie {

    constructor({id = '', name = '', published_at = '', image = '', status = true, turns = []}){
        this.id = id
        this.name = name
        this.turns = turns
        this.image = image
        this.path = 'movies'
        this.status = status
        this.published_at = moment(published_at).format('YYYY-MM-DD')
        this.fullPath = `${this.path}/${this.id}`
    }
    
    isComplete(){
        const isComplete = !!this.name && !!this.published_at
        if(!isComplete)
            alert('existen algunos campos vacios')
        return isComplete
    }

    static create(data = {}){
        return new Movie(data)
    }

    getData(){
        return {
            name: this.name,
            image: this.image,
            status:this.status,
            published_at: this.published_at
        }
    }

}

export default Movie