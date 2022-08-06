import React from "react";
import moment from "moment";
import history from "../helpers/history";
export default class PostItem extends React.Component{

    constructor(props){
        super(props);
        let {post} = props;
        this.state = {
            id: post.id,
            title: post.title,
            count: post.count,
            published: moment(post.published_at).format("MMM Do YY") 
        }
        this.goToDetails = this.goToDetails.bind(this)
    }
    goToDetails(){
        history.push(`posts/${this.state.id}`);
    }
    render(){
        return (
            <tr className="border-bottom post-item" onClick={this.goToDetails}>
                <td>
                    <h5>{this.state.title}</h5>
                </td>
                <td className="text-center">{this.state.count}</td>
                <td>{this.state.published}</td>
            </tr>
        )
    }
}