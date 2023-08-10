function Avatar({url ,className}) {
    return (
      <img 
      className={`h-10 rounded-full cursor-pointer transi duration-150 transform hover:scale-110 ${className}`}
      loading="lazy"
      src={url}
      alt="profile pic"
      />        
    )
  }
  
  export default Avatar
  
  //lazy loading means that even if the img doesnt load rest of the page can load
  