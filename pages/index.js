import Head from "next/head";
// import Image from "next/image";
// import styles from "../sass/Home.module.css";
import Layout from "../components/Layout";
import Col from "../components/Col";
import Row from "../components/Row";
// import Logo from "../components/Logo";
import Header from "../components/Header";
import Menu from "../components/menu/Menu";
// import Author from "../components/Author";
// import Button from "../components/Button";
// import Checkbox from "../components/Checkbox";
import Footer from "../components/Footer";
import PostFeed from "../components/feed/PostFeed";
import Post from "../components/post/Post";
import Container from "../components/Container";
import Nav from "../components/Nav";

export default function Home() {
	const posts = [
		{
			postId: 0,
			postTitle: "Post Title",
			postContent:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos nemo illo maiores",
			bookTitle: "title",
			bookCover: "bookcover.jpg",
			bookSlug: "book1",
			author: "author1",
			authorProfile: "profile.jpg",
			comment: "comment text",
			commentAuthor: "commenter1",
		},
		{
			postId: 1,
			postTitle: "Post Title",
			postContent:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos nemo illo maiores",
			bookTitle: "title",
			bookCover: "bookcover.jpg",
			bookSlug: "book1",
			author: "author1",
			authorProfile: "profile.jpg",
			comment: "comment text",
			commentAuthor: "commenter1",
		},
		{
			postId: 2,
			postTitle: "Post Title",
			postContent:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos nemo illo maiores",
			bookTitle: "title",
			bookCover: "bookcover.jpg",
			bookSlug: "book1",
			author: "author1",
			authorProfile: "profile.jpg",
			comment: "comment text",
			commentAuthor: "commenter1",
		},
	];
	return (
		<Layout>
			<Head>
				<title>enRemembrance</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='description' content='summary of website' />
			</Head>
			<Header show />
			<Container marginTop>
				<Row nowrap mHeight>
					<Col ratio='1'>
						<Nav topSpace="50"/>
					</Col>
					<Col ratio='20' alignItems='center' allowScroll>
						<Container marginLeft>
							<div style={{ borderLeft: "1px solid #55545C" }}>
								<div
									style={{
										height: "1px",

										width: "100%",
										borderBottom: "1px solid #55545C",
										position: "fixed",
										top: "50px",
										boxShadow:
											"rgb(0, 0, 0) 0 2px 5px 0px",
									}}
								></div>
								<PostFeed posts={posts} />
							</div>
						</Container>
					</Col>
				</Row>
			</Container>
			<Footer />
		</Layout>
	);
}
