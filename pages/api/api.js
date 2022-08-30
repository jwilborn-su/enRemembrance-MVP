const posts = [
	{
		id: 0, //identifier for post
		title:"mybook", //title for post
		slug:"/mybook", //slug that directs to post-specific page
		body: "post content",
		date: "2022/1/31",
		bookId:0, //identifies the associated book
		authorId:0, //identifies the associated author
		commentId:0, //identifies the associated top-comment
	},
	{
		id: 1,
		title:"mybook2",
		slug:"/mybook2",
		bookId:1,
		authorId:1,
		commentId:1,
	},
	{
		id: 2,
		title:"mybook3",
		slug:"/mybook3",
		bookId:"2",
		authorId:2,
		commentId:2,
	}
]
const comments = [
	{
		id: 0, //unique identifier
		content: "comment content", //comment's body
		author:"commentor1", //will prevent having to retrieve entire author's data every time a single comment is pulled
		date: "2022/1/31", //date comment was created
		authorId: 0, //associated author ID (commentor)
		postId: 0 //associated post ID
	},

]

const getPosts = () =>{
	const data = posts;
	return data;
}; export {getPosts};

const getComments = () => {
	const data = comments;
	return data;
}; export {getComments}

/* 
const Post = () => {
	theoretically requires four different calls.
	need to retrieve cover from books, profile pic and name from author, general post details from post, comment information from comment
	
	post = getPost();
	author = getAuthor(post.authorId);
	book = getBook(post.bookId);
	comment = getComment(post.commentId);
	return (
		<div>
			bookcover: img src={`images/books/${book.slug}/cover.jpg`}
			title: heading level=2 post.title
			profileIcon: img src={images/authors/${author.slug}/profilePic.jpg}
			authorName: text author.name
			body: text post.body
			commentorName: comment.author
			commentText: comment.content
		</div>
	)
}
export default Post;


 */