import React from 'react';
import {BlogItem} from '../components/BlogItem';

// BlogMain -> BlogItem -> BlogPage
// Need to request data from api with componentWillMount
// store that data in the state
// pass the data down

export class BlogMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs: [{
                title: 'Deez',
                description: 'testing testing'
            }, {
                title: 'Doeze',
                description: 'testing testing'
            }, {
                title: 'DaEZe',
                description: 'testing testing'
            }]
        }
    }

    render() {
        const blogs = this.state.blogs.map((blog, id) => (
            <BlogItem key={id} content={blog} />
        ));

        return (
            <div className="content-container">
                {blogs}
            </div>
        )
    }
}