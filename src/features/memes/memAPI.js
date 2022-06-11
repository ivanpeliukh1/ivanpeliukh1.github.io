let api_data = {
  data: [
    {id: 'xahsdeeq', title: 'Mem1', upvotes: 6, downvotes: 0, img: 'https://i.ytimg.com/vi/sSpDnIJxyXM/maxresdefault.jpg'},
    {id: 'kjfrwgac', title: 'Mem2', upvotes: 1, downvotes: 2, img: 'https://static.toiimg.com/photo/74674393.cms'},
    {id: 'oefavtda', title: 'Mem3', upvotes: 0, downvotes: 5, img: 'https://media.sproutsocial.com/uploads/meme-example.jpg'},
    {id: 'ifkgtabk', title: 'Mem4', upvotes: 10, downvotes: 3, img: 'https://www.tldevtech.com/wp-content/uploads/2020/12/backend_1.jpg'},
    {id: 'kjfrwgds', title: 'Mem5', upvotes: 8, downvotes: 2, img: 'https://static.toiimg.com/photo/74674393.cms'},
    {id: 'oeoqfazg', title: 'Mem6', upvotes: 12, downvotes: 1, img: 'https://media.sproutsocial.com/uploads/meme-example.jpg'},
    {id: 'oshmqnlq', title: 'Mem7', upvotes: 6, downvotes: 0, img: 'https://i.ytimg.com/vi/sSpDnIJxyXM/maxresdefault.jpg'},
    {id: 'opasdgwe', title: 'Mem8', upvotes: 6, downvotes: 0, img: 'https://static.toiimg.com/photo/74674393.cms'},
    {id: 'paftwqab', title: 'Mem9', upvotes: 6, downvotes: 0, img: 'https://media.sproutsocial.com/uploads/meme-example.jpg'},
    {id: 'ioqrtanf', title: 'Mem10', upvotes: 6, downvotes: 0, img: 'https://i.ytimg.com/vi/sSpDnIJxyXM/maxresdefault.jpg'},
    {id: 'galraqtv', title: 'Mem11', upvotes: 6, downvotes: 0, img: 'https://static.toiimg.com/photo/74674393.cms'},
    {id: 'oqgtncag', title: 'Mem12', upvotes: 6, downvotes: 0, img: 'https://media.sproutsocial.com/uploads/meme-example.jpg'},
    {id: 'ohfnarta', title: 'Mem13', upvotes: 6, downvotes: 0, img: 'https://i.ytimg.com/vi/sSpDnIJxyXM/maxresdefault.jpg'},
  ]
}

export function fetchMemes() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(api_data), 500)
  );
}

export function postUpvote(id) {
  return new Promise(res => setTimeout(() => {
    let new_api_data = {data: []}
    for (let item of api_data.data) {
      if (item.id === id) {
        item = {...item, upvotes: item.upvotes+1}
      }
      new_api_data.data.push(item)
    }
    api_data = new_api_data
    res(api_data)
  }, 300))
}

export function postDownvote(id) {
  return new Promise(res => setTimeout(() => {
    let new_api_data = {data: []}
    for (let item of api_data.data) {
      if (item.id === id) {
        item = {...item, downvotes: item.downvotes+1}
      }
      new_api_data.data.push(item)
    }
    api_data = new_api_data
    res(api_data)
  }, 300))
}

export function postHotUpvote(id) {
  return new Promise(res => setTimeout(() => {
    let new_api_data = {data: []}
    for (let item of api_data.data) {
      if (item.id === id) {
        item = {...item, upvotes: item.upvotes+1}
      }
      new_api_data.data.push(item)
    }
    api_data = new_api_data
    res({data: getHotMemes()})
  }, 300))
}

export function postHotDownvote(id) {
  return new Promise(res => setTimeout(() => {
    let new_api_data = {data: []}
    for (let item of api_data.data) {
      if (item.id === id) {
        item = {...item, downvotes: item.downvotes+1}
      }
      new_api_data.data.push(item)
    }
    api_data = new_api_data
    res({data: getHotMemes()})
  }, 300))
}

function getHotMemes () {
  return api_data.data.filter(item => (item.upvotes - item.downvotes) > 5)
}

export function fetchHotMemes() {
  return new Promise(res => {
    setTimeout(() => res({data: getHotMemes()}), 500)
  })
}

function makeid(length) {
  var result           = '';
  var characters       = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

export function addMem (data) {
  return new Promise(res => {
    setTimeout(() => {
      data = {...data, id: makeid(8), img: 'https://media.sproutsocial.com/uploads/meme-example.jpg'}
      api_data.data.push(data)
      res(api_data)
    }, 500)
  })
}

setInterval(() => {
  api_data = {data: 
    api_data.data.map((item) => {
      let random = Math.floor((Math.random() * 10))
      if (random > 6 ) {
        item = {...item, downvotes: item.downvotes + 1}
      } else if (random >= 3 ) {
        item = {...item, upvotes: item.upvotes + 1}
      }
      return item
    })
  }
}, 2000)
