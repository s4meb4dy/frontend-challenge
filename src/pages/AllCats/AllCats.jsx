import { useState, useEffect } from 'react'
import { fetchCats } from "@/components/api/cats.js";

import CatCardGrid from '@/components/CatCardGrid';

const AllCats = () => {
    const [cats, setCats] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchCats(10)
            setCats(data)
            setIsLoading(false)
        }

        loadData()
    }, [])

    if (isLoading) return <div>Котики уже бегут...</div>

    return (
        <section>
            <CatCardGrid cats={cats}/>
        </section>
    )
}

export default AllCats