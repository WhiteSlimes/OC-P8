import "../../sass/components/_tags.scss"

function Tags({ tags }){
    return(
        <div className="tags">
            {tags.map((tag, index) => (
                <p className="tags__tag" key={index}>{tag.trim()}</p>
            ))}
        </div>
    )
}

export default Tags