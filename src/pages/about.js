import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return(
        <div>
        <Layout>
        <Head />
        <h1>About Me</h1>
        <p>This is a simple blog webpage creation attempt to test out GatsbyJS</p>
        <p>Wanna contact the creator?? <Link to='/contact'>Contact Us</Link></p>
        </Layout>

        </div>
    )
}

export default AboutPage;