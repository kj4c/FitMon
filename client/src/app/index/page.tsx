"use client";

import { useState, useEffect } from "react";
import PostList from "@/components/PostCardList";
import Countdown from "@/components/Countdown";
import Dashboard from "@/pages/Dashboard";
import posts from "../../../public/assets/posts";
import { Post } from "@/lib/types";
import { WiNightAltCloudyGusts } from "react-icons/wi";

// const fetchPosts = async (): Promise<Post[]> => {
// 	const res = await fetch("/assets/posts.json");
// 	const posts: Post[] = await res.json();
// 	return posts;
// };

const Home: React.FC = () => {
	const [userPosts, setUserPosts] = useState<Post[]>(posts);
	// const [dataLoaded, setDataLoaded] = useState<boolean>(false);

	// useEffect(() => {
	// 	const getPosts = async () => {
	// 		const fetchedPosts = await fetchPosts();
	// 		setPosts(fetchedPosts);
	// 		setDataLoaded(true);
	// 	};

	// 	getPosts();
	// }, []);

	return (
		<>
			<div className="h-[932px] mx-auto flex flex-col justify-start">
				<Countdown seconds={20000} />
				{/* <Dashboard></Dashboard> */}
				<PostList posts={userPosts} />
				{/* </div> */}
			</div>
		</>
	);
};

export default Home;
