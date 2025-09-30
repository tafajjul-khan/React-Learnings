import { githubInfoLoader } from "./GithubInfo"



function Github() {
    const data = githubInfoLoader()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('curl https://api.github.com/users//tafajjul-khan')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4'>Github folower: {data.followers}
    <img className='content-center' src={data.avatar_url} alt='Git picture' width={300} />
    </div>
  )
}

export default Github

