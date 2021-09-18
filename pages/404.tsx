import { useEffect } from "react"
import {useRouter} from 'next/router'

function Custom404() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            console.log('after 2 seconds');
            router.push('/')
        }, 2000)
    }, [])
    return (
        <div>
            <h1 className="title-not-found">404</h1>
            <p className="title-not-found">Page not found</p>
        </div>
    )
}

export default Custom404
