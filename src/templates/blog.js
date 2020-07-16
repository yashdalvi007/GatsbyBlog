import React from 'react';
import {graphql} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Head from '../components/head';
import Layout from '../components/layout';

export const query = graphql`
query(
    $slug: String!
  ){
    contentfulBlogPost(slug: {eq: $slug}){
      title
      publishedDate(formatString: "MMMM  Do, YYYY")
      content{
        json
      }
    }
  }
`

const Blog = (props) =>{
  const options={
    renderNode: {
      "embedded-asset-block": (node) =>{
        const alt=node.data.target.fields.title['en-US']
        const url=node.data.target.fields.file['en-US'].url
        return <center><img alt={alt} src={url} /></center>
      }
    }
  }
    return(
        <Layout>
          <Head />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.content.json, options)}
        </Layout>
    )
};
export default Blog;