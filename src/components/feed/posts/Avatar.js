function Avatar({className, src, alt, height}) {
    return(
        <img
            className={className}
            src={src}
            alt={alt}
            height={height}
        ></img>
    )
}

export default Avatar;