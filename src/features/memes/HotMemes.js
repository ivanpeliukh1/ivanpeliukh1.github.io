import React, { useEffect, useState } from 'react';
import styles from './memes.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { dataAsyncHot, dataHotUpvote, dataHotDownvote, selectMemes } from './memSlice';
import Preloader from '../../components/Preloader';
import MemesList from './components/MemesList';

export function HotMemes() {
  const dispatch = useDispatch()
  const [memesList, setMemesList] = useState([])
  const [loaded, setLoaded] = useState(false)
  const memesData = useSelector(selectMemes)

  useEffect(() => {
    setMemesList(memesData)
    setTimeout(() => {
        setLoaded(memesList.length ? true : false)
    }, 500)
  }, [memesData, memesList.length])

  useEffect(() => {
    dispatch(dataAsyncHot())
  }, [dispatch])

  function upvote (id) {
    dispatch(dataHotUpvote(id))
    dispatch(dataAsyncHot())
  }

  function downvote (id) {
    dispatch(dataHotDownvote(id))
    dispatch(dataAsyncHot())
  }

  return (
    <div>
      {memesList.length && loaded ? 
        <MemesList
            styles={styles}
            upvote={upvote}
            downvote={downvote}
            memesList={memesList}
        />
       : <Preloader />}
    </div>
  );
}
