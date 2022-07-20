function fetchImg(name, page) {
    return fetch(`https://pixabay.com/api/?key=27638998-69eef40c5569256b773a36aea&q=${name}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`)
        .then(r => {
          if (r.ok) {
            return r.json()
          }
                
          return new Error('Nothing find')
        })
};

const api = { fetchImg };
export default api;