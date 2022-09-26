import {NextApiRequest, NextApiResponse} from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default (_request:NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id:1, name: 'Eduardo'},
        {id:2, name: 'Mendes'},
        {id:3, name: 'Ronaldo'},
    ]

    return response.json(users)
}