// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// any file inside this folder is mapped to api/* and will be treated as an endpoint

import { GraphQLClient, gql } from "graphql";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function comments(req, res) {

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });
  const query = gql `
    mutation CreateComment($name: String!, $email: String!, $slug: String!, $comment: String!)
    CreateComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}){id}
  `

  const result = await graphQLClient.request(query, req.body)
  return res.status(200).send(result)
}
