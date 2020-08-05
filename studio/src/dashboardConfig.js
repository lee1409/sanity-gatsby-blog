export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f29fb36515153150ece9960',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wvixbdc3',
                  apiId: 'b1bd581a-0777-4b5b-9641-438517650f0d'
                },
                {
                  buildHookId: '5f29fb36acfd1dfa439f18f7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6gvp3kbu',
                  apiId: '2178559a-d39e-43ce-8c3e-70c55df04c22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lee1409/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6gvp3kbu.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
