import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=Bd-y0LFdUtZfVQ2kAWP28VJF6rkWEl8foyQgBmhrzAg'
    const response = await axios.get(url, {
        params: {
            query: 'cars'
        }
    })

    console.log(term)
    console.log(response.data.results)
    
    return response.data.results
}

export default searchImage
