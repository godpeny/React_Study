import asyncComponent from 'lib/asyncComponent.js'

export const Home = asyncComponent(()=>import('./Home'));
export const About = asyncComponent(()=>import('./About'));
export const Posts = asyncComponent(()=>import('./Posts'));
export const Post = asyncComponent(()=>import('./Post'));
