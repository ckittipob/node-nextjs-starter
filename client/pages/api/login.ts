import cookie from 'cookie'
import { API_URL } from '@/config/index'
import {Request, Response} from 'express';

const Login = async (req:Request, res: Response) => {
    if (req.method === 'POST') {
        const {email, password} = req.body;
        
        const nodeRes = await fetch(`${API_URL}/api/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await nodeRes.json();

        if(nodeRes.ok)  {
            //Set cookie
            res.setHeader('Set-Cookie', cookie.serialize('token', data.token, {
                httpOnly: false,
                secure: process.env.NODE_ENV !== 'development',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                sameSite: 'strict',
                path: '/'
            }));
            
            res.status(200).json({token: data.token})
        } else {
            res.status(nodeRes.status).json(data)
        }

    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({message: `Method ${req.method} not allowed`})
    }
}

export default Login