import blogPosts from './posts/posts-content.js'


const BlogPost = ({ post }) => {
    return (
        <div className="row">
            Oi
        </div>
    )
    
}

const BlogPosts = () => {
    const rows = blogPosts.map((post, list_index) => {
        return (<BlogPost key={list_index} post={post} />)
    })

    return(<div> {rows}</div>)
}
  
  
const Blog = () => {
    return (
        <div className="row">
            <BlogPosts />
        </div>
    )
    
}

export default Blog