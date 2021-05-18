<template>
  <div class="article-page">

    <div class="banner">
        <div class="container">

        <h1>{{ article.title }}</h1>

        <article-meta :article="article" />

        </div>
    </div>

    <div class="container page">

        <div class="row article-content">
        <div class="col-md-12" v-html="article.body" />
        </div>

        <hr />

        <div class="article-actions">
            <article-meta :article="article" />
        </div>

        <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">
            <comment :article="article" />
        </div>

        </div>

    </div>

    </div>
</template>

<script>
import { getArticle } from '@/api/articles';
import MarkdownIt from 'markdown-it';
import ArticleMeta from './components/article-meta'
import Comment from './components/comment'

export default {
    name: 'ArticlePage',
    components: {
        ArticleMeta,
        Comment
    },
    head(){
        return {
            title: `${this.article.title} - RealWorld`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.article.description
                }
            ]
        }
    },
    async asyncData ({ params }) {
        const { data } = await getArticle(params.slug);
        const { article } = data;
        const md = new MarkdownIt();
        data.article.body = md.render(article.body);
        return {
            article
        }

    }
}
</script>

<style>

</style>