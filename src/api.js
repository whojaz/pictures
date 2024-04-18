import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=Bd-y0LFdUtZfVQ2kAWP28VJF6rkWEl8foyQgBmhrzAg'
    const response = await axios.get(url, {
        params: {
            query: 'cars'
        }
    })

    return response.data.results

    console.log(response)
}

export default searchImage