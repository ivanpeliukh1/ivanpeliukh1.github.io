function MemesList (props) {
    return (
        <section className={props.styles.mem_container}>
          {props.memesList.map((item, index) => {
            return (<div key={index} className={props.styles.mem_card}>
              <div className={props.styles.mem_title}>
                {item.title}
              </div>
              <div className={props.styles.mem_img}>
                <div className={props.styles.backsides} style={{backgroundImage: `url(${item.img})`}}></div>
                <div className={props.styles.backdrop}></div>
                <div className={props.styles.main_img} style={{backgroundImage: `url(${item.img})`}}></div>
              </div>
              <div className={props.styles.mem_votes}>
                <div className={props.styles.mem_upvote} onClick={() => props.upvote(item.id)}>
                  <span>{item.upvotes}</span>
                </div>
                <div className={props.styles.mem_downvote} onClick={() => props.downvote(item.id)}>
                  <span>{item.downvotes}</span>
                </div>
              </div>
            </div>)
          })}
        </section>
    )
}

export default MemesList;