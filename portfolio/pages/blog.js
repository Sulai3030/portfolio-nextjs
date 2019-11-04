
import Layout from './components/MyLayout';
import Link from 'next/link'



export default function About() {
  return (
    <div>
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <a href="/blog" className='card'>Hello World! </a><br></br>
          <a href="/blog" className='card'>Enter the Dragon</a> <br></br>
          <a href="/blog" className='card'>Star Wars</a> <br></br>
        </ul>
      </Layout>
    </div>
  );
}