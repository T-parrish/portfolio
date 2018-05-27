import React from 'react';
import {BlogItem} from '../components/BlogItem';

// needs to map over BlogItems 
export class BlogList extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const blogs = this.props.blogs.map((blog, id) => (
            <BlogItem key={id} content={blog} />
        ));

        return (
            <div>
                {blogs}
            </div>
        )
    }

}