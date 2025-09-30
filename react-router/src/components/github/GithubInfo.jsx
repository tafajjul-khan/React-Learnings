import { useLoaderData } from 'react-router-dom'

export const githubInfoLoader = async () => {
    const data = useLoaderData()

    const response  = await fetch('curl https://api.github.com/users//tafajjul-khan')
    return response
}
