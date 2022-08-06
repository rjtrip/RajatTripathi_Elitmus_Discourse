import React from "react";
import { authenticationService } from "../services/authentication.service";
import { postService } from "../services/post.service";
import NewPost from "./newPost";
import PostItem from "./PostItem";
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }
    }
    componentDidMount(){
        postService.getPosts().then((posts)=>{
            this.setState({
                posts: posts
            })
        })
    }

    render(){
        return (
        <div className="container">
            <div className="btn-group mt-5" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary active">Latest</button>
            </div>
            {authenticationService.currentUserValue && (
                <NewPost />
            )}
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>Topics</th>
                        <th className="text-center">Replies</th>
                        <th>Published</th>
                    </tr>
                </thead>
                <tbody className="text-secondary">
                    {this.state.posts.map((val)=> <PostItem key={val.id} post={val} />)}             
                </tbody>
            </table>
        </div>
        )
    }
}