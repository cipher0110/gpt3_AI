import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="May 10, 2024" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="May 10, 2024" text="How chat GPT-3 writing tool works?" />
        <Article imgUrl={blog03} date="May 10, 2024" text="Why do we use reinforcement learning in language modeling?" />
        <Article imgUrl={blog04} date="May 10, 2024" text=" Chat GPT-4 now released. Let us explore how it is?" />
        <Article imgUrl={blog05} date="May 10, 2024" text="Difference between chat GPT-3 and GPT-4. Let us explore?" />
      </div>
    </div>
  </div>
);

export default Blog;